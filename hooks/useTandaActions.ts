import { ethers } from 'ethers';
import { sendTx } from 'lib/utils/sendTx';
// @ts-ignore
import CompoundPrizePoolAbi from '@pooltogether/pooltogether-contracts/abis/CompoundPrizePool';
// @ts-ignore
import SingleRandomWinnerAbi from '@pooltogether/pooltogether-contracts/abis/SingleRandomWinner';
// @ts-ignore
import IERC20Abi from '@pooltogether/pooltogether-contracts/abis/IERC20';
import { TandaInfo } from 'hooks/useTandaInfo';
import { WalletContext } from 'lib/components/WalletContextProvider';
import { Web3Provider } from 'ethers/providers';
import { useContext, useState } from 'react';
import { ExitFee } from './useMaxExitFee';
import { BigNumber } from 'ethers/utils';

export function useTandaActions(tandaInfo: Partial<TandaInfo>): TandaActions {
  const { tokenDecimals, poolAddresses } = tandaInfo;

  const walletContext = useContext(WalletContext);
  const provider = walletContext.state.provider as Web3Provider;
  const usersAddress: string = walletContext._onboard.getState().address;
  const [tx, setTx] = useState<TandaActionResponse>({});

  // @ts-ignore
  const txInFlight: boolean = tx.inWallet && tx.sent && !tx.completed;

  const unlock = () => {
    tokenDecimals != null &&
      handleUnlockSubmit(setTx, provider, poolAddresses.token, poolAddresses.prizePool, tokenDecimals);
  };

  const submit = async (amount: string) => {
    handleDepositSubmit(
      amount,
      setTx,
      provider,
      usersAddress,
      poolAddresses.prizePool,
      poolAddresses.ticket,
      tokenDecimals ?? 0
    );
  };

  const complete = () => {
    handleCompleteAwardSubmit(setTx, provider, poolAddresses.prizeStrategy);
  };

  const withdraw = (
    amount: string,
    maxExitFee?: ExitFee | null,
    type: 'scheduled' | 'instant' = 'instant'
  ) => {
    handleWithdrawSubmit(
      setTx,
      provider,
      poolAddresses.prizePool,
      poolAddresses.ticket,
      usersAddress,
      amount,
      type,
      maxExitFee?.exitFee ?? null,
      tokenDecimals ?? 0
    );
  };

  return { actionStatus: { ...tx, operationPending: txInFlight }, unlock, submit, complete, withdraw };
}

export interface TandaActions {
  actionStatus: TandaActionResponse;
  unlock: () => void;
  submit: (amount: string) => void;
  complete: () => void;
  withdraw: (amount: string, maxExitFee?: ExitFee | null, type?: 'scheduled' | 'instant') => void;
}

export interface TandaActionResponse {
  operationPending?: boolean;
  inWallet?: boolean;
  hash?: string;
  sent?: boolean;
  completed?: boolean;
}

/**
 * Helper functions
 */
const handleCompleteAwardSubmit = async (
  setTx: ({}) => void,
  provider: ethers.providers.Web3Provider,
  contractAddress: string
) => {
  const params = [
    {
      gasLimit: 500000,
    },
  ];

  await sendTx(
    setTx,
    provider,
    contractAddress,
    SingleRandomWinnerAbi,
    'completeAward',
    params,
    'Complete Award'
  );
};

const handleUnlockSubmit = async (
  setTx: ({}) => void,
  provider: ethers.providers.Web3Provider,
  contractAddress: string,
  prizePoolAddress: string,
  decimals: number
) => {
  const params = [
    prizePoolAddress,
    ethers.utils.parseUnits('1000000000', decimals),
    {
      gasLimit: 200000,
    },
  ];

  await sendTx(setTx, provider, contractAddress, IERC20Abi, 'approve', params, 'Unlock Deposits');
};

const handleDepositSubmit = async (
  depositAmount: string,
  setTx: ({}) => void,
  provider: ethers.providers.Web3Provider,
  usersAddress: string,
  contractAddress: string,
  ticketAddress: string,
  decimals: number
) => {
  const referrer = ethers.constants.AddressZero; // TODO
  const params = [
    usersAddress,
    ethers.utils.parseUnits(depositAmount, decimals),
    ticketAddress,
    referrer,
    {
      gasLimit: 600000,
    },
  ];

  await sendTx(setTx, provider, contractAddress, CompoundPrizePoolAbi, 'depositTo', params, 'Deposit');
};

const handleWithdrawSubmit = async (
  setTx: ({}) => void,
  provider: ethers.providers.Web3Provider,
  contractAddress: string,
  ticketAddress: string,
  usersAddress: string,
  withdrawAmount: string,
  withdrawType: 'scheduled' | 'instant',
  maxExitFee: BigNumber | null,
  decimals: string | number
) => {
  const params: (string | ethers.utils.BigNumber | { gasLimit: number } | null)[] = [
    usersAddress,
    ethers.utils.parseUnits(withdrawAmount, decimals),
    ticketAddress,
  ];

  let method = 'withdrawWithTimelockFrom';
  if (withdrawType === 'instant') {
    method = 'withdrawInstantlyFrom';
    params.push(maxExitFee);
  }

  // TX overrides
  params.push({ gasLimit: 400000 });

  await sendTx(setTx, provider, contractAddress, CompoundPrizePoolAbi, method, params, 'Withdraw');
};
