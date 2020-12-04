import { useContext, useEffect, useState } from 'react';
import { fetchChainData } from 'lib/utils/fetchChainData';
import { ethers } from 'ethers';
import { WalletContext } from 'lib/components/WalletContextProvider';
import { calculateEstimatedPoolPrize } from 'lib/utils/calculateEstimatedPoolPrize';
import { DEFAULT_TOKEN_PRECISION } from 'lib/constants';
import { useInterval } from 'lib/hooks/useInterval';
import { useCurrentNetworkInfo } from './useCurrentNetworkInfo';
import { Web3Provider } from 'ethers/providers';
import { poolToast } from 'lib/utils/poolToast';
import { BigNumber } from 'ethers/utils';
import { TandaType, useTandasList } from './useTandasList';

export function useTandaInfo(prizePoolAddress: string): Partial<TandaInfo> {
  const walletContext = useContext(WalletContext);
  const usersAddress = walletContext._onboard.getState().address;
  const provider = walletContext.state.provider as Web3Provider;
  const [demoNetworkName] = useCurrentNetworkInfo();
  const { assetType, type, pricePerTicket, networkName } =
    useTandasList().find(t => t.address === prizePoolAddress) ?? {};

  const [poolAddresses, setPoolAddresses] = useState<RequestStatus & { prizePool: string }>({
    prizePool: prizePoolAddress,
  });

  const [genericChainValues, setGenericChainValues] = useState<Partial<TandaInfo>>({
    loading: true,
    tokenSymbol: 'TOKEN',
    poolTotalSupply: '1234',
  });

  const [usersChainValues, setUsersChainValues] = useState<UsersChainValues>({
    loading: true,
    usersTicketBalance: ethers.utils.bigNumberify(0),
    usersTokenAllowance: ethers.utils.bigNumberify(0),
    usersTokenBalance: ethers.utils.bigNumberify(0),
  });

  useEffect(() => {
    if (!genericChainValues.loading) {
      return;
    }

    fetchChainData(
      demoNetworkName,
      usersAddress,
      poolAddresses,
      setPoolAddresses,
      setGenericChainValues,
      setUsersChainValues
    );
  }, [walletContext, poolAddresses, provider]);

  let {
    awardBalance,
    prizePeriodRemainingSeconds,
    canCompleteAward,
    poolTotalSupply,
    supplyRatePerBlock,
    ticketTotalSupply,
    ticketName,
    ticketSymbol,
    ticketCreditRateMantissa,
    ticketCreditLimitMantissa,
    sponsorshipName,
    sponsorshipSymbol,
    maxExitFeeMantissa,
    tokenDecimals,
    tokenSymbol,
    isRngRequested,
  } = (genericChainValues as unknown) as Partial<TandaInfo>;

  tokenDecimals = tokenDecimals || DEFAULT_TOKEN_PRECISION;
  tokenSymbol = genericChainValues.tokenSymbol || 'TOKEN';

  const [mountedAt, setMountedAt] = useState(0);
  const [secondsToPrizeAtMount, setSecondsToPrizeAtMount] = useState(0);
  const [secondsRemainingNow, setSecondsRemainingNow] = useState('--');
  const [prizeEstimate, setPrizeEstimate] = useState<BigNumber>();

  useEffect(() => {
    const set = () => {
      if (prizePeriodRemainingSeconds == null) {
        return;
      }
      setSecondsToPrizeAtMount(parseInt(prizePeriodRemainingSeconds.toString(), 10));
      setMountedAt(parseInt(String(Date.now() / 1000), 10));
    };
    set();
  }, [canCompleteAward]);

  useEffect(() => {
    const estimatedPoolPrize = calculateEstimatedPoolPrize({
      tokenDecimals,
      awardBalance,
      poolTotalSupply,
      supplyRatePerBlock,
      prizePeriodRemainingSeconds,
    });

    setPrizeEstimate(estimatedPoolPrize);
  }, [poolTotalSupply, supplyRatePerBlock, prizePeriodRemainingSeconds, awardBalance]);

  /*
  useInterval(() => {
    const diffInSeconds = parseInt(String(Date.now() / 1000), 10) - mountedAt;
    const remaining = secondsToPrizeAtMount - diffInSeconds;
    setSecondsRemainingNow(String(remaining <= 0 ? 0 : remaining));
  }, 1000);
*/

  let soldTickets = '--';

  if (prizeEstimate?.gt(0)) {
    soldTickets = (ticketTotalSupply?.div(prizeEstimate) ?? '--').toString();
  }

  const renderErrorMessage = (address: string, type: string, message?: string) => {
    const errorMsg = `Error fetching ${type} for prize pool with address: ${address}: ${message}. (maybe wrong Ethereum network?)`;

    console.error(errorMsg);
    poolToast.error(errorMsg);
  };

  if (poolAddresses.error || genericChainValues.error || usersChainValues.error) {
    if (poolAddresses.error) {
      renderErrorMessage(prizePoolAddress, 'pool addresses', poolAddresses.errorMessage);
    }

    if (genericChainValues.error) {
      renderErrorMessage(prizePoolAddress, 'generic chain values', genericChainValues.errorMessage);
    }

    if (usersChainValues.error) {
      renderErrorMessage(prizePoolAddress, `user's chain values`, usersChainValues.errorMessage);
    }

    // router.push(
    //   `/`,
    //   `/`,
    //   {
    //     shallow: true
    //   }
    // )

    return {
      loading: true,
    };
  }

  const depositsUnlocked: boolean = usersChainValues?.usersTokenAllowance?.gt(0) ?? false;
  const userHasFunds: boolean | undefined =
    usersChainValues?.usersTicketBalance && usersChainValues.usersTicketBalance.gt(0);
  const userHasTimelockedFunds: boolean | undefined =
    usersChainValues?.usersTimelockBalance && usersChainValues.usersTimelockBalance.gt(0);

  return ({
    loading: genericChainValues.loading || usersChainValues.loading,
    awardBalance,
    prizePeriodRemainingSeconds,
    canCompleteAward,
    poolTotalSupply,
    supplyRatePerBlock,
    ticketTotalSupply,
    ticketName,
    ticketSymbol,
    ticketCreditRateMantissa,
    ticketCreditLimitMantissa,
    sponsorshipName,
    sponsorshipSymbol,
    maxExitFeeMantissa,
    tokenDecimals,
    soldTickets,
    tokenSymbol,
    prizeEstimate,
    usersChainValues,
    poolAddresses,
    depositsUnlocked,
    isRngRequested,
    assetType,
    type,
    pricePerTicket,
    networkName,
    userHasFunds,
    userHasTimelockedFunds,
  } as unknown) as TandaInfo;
}

export interface TandaInfo extends RequestStatus {
  loading: boolean;
  awardBalance: string;
  prizePeriodRemainingSeconds: number;
  canCompleteAward: boolean;
  poolTotalSupply: string;
  supplyRatePerBlock: number;
  ticketTotalSupply: BigNumber;
  ticketName: string[];
  ticketSymbol: string;
  ticketCreditRateMantissa: number;
  ticketCreditLimitMantissa: number;
  sponsorshipName: string;
  sponsorshipSymbol: string;
  maxExitFeeMantissa: number;
  tokenDecimals: number;
  soldTickets: string;
  tokenSymbol: string;
  prizeEstimate: BigNumber;
  usersChainValues: UsersChainValues;
  isRngRequested: boolean;
  depositsUnlocked: boolean;
  poolAddresses: any;
  assetType: string;
  pricePerTicket: number;
  type: TandaType;
  networkName: string;
  userHasFunds?: boolean;
  userHasTimelockedFunds?: boolean;
}

export interface UsersChainValues extends RequestStatus {
  usersTicketBalance?: BigNumber;
  usersTokenAllowance?: BigNumber;
  usersTokenBalance?: BigNumber;
  usersTimelockBalance?: BigNumber;
  usersTimelockBalanceAvailableAt?: BigNumber;
}

export interface RequestStatus {
  error?: string;
  errorMessage?: string;
  loading?: boolean;
}
