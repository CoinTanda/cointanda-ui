import { useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useDebounce } from 'lib/hooks/useDebounce';
import { fetchExitFee } from 'lib/utils/fetchExitFee';
import { TandaInfo } from './useTandaInfo';
import { WalletContext } from 'lib/components/WalletContextProvider';
import { useCurrentNetworkInfo } from './useCurrentNetworkInfo';
import { BigNumber } from 'ethers/utils';

export function useMaxExitFee(withdrawAmount: string, tandaInfo: Partial<TandaInfo>): MaxExitFee {
  const [exitFees, setExitFees] = useState<ExitFee | null>({});
  const [demoNetworkName] = useCurrentNetworkInfo();
  const walletContext = useContext(WalletContext);
  const usersAddress = walletContext._onboard.getState().address;
  const debouncedWithdrawAmount = useDebounce(withdrawAmount, 300);

  useEffect(() => {
    const t = async () => {
      if (debouncedWithdrawAmount && tandaInfo.poolAddresses.ticket) {
        const result = await fetchExitFee(
          demoNetworkName,
          usersAddress,
          tandaInfo.poolAddresses.prizePool,
          tandaInfo.poolAddresses.ticket,
          ethers.utils.parseUnits(debouncedWithdrawAmount, tandaInfo.tokenDecimals)
        );
        setExitFees(result);
      } else {
        setExitFees(null);
      }
    };

    t();
  }, [debouncedWithdrawAmount, tandaInfo.poolAddresses.ticket]);

  return { exitFees };
}

export interface MaxExitFee {
  exitFees?: ExitFee | null;
}

export interface ExitFee {
  credit?: BigNumber;
  earlyExitFee?: BigNumber;
  burnedCredit?: BigNumber;
  exitFee?: BigNumber;
  timelockDurationSeconds?: BigNumber;
}
