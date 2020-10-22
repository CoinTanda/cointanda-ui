import React, { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'i18n';
import { Row } from '../Row/Row';
import {
  ButtonTanda,
  DataContainer,
  DataRowContainer,
  TandaPreviewContainerDesktop,
  TandaTitle,
  TextKey,
  TextValue,
  ThumbImage,
} from './styles.TandaPreviewDesktop';
import tandaThumb from '../../../assets/tanda_big_green.png';
import { fetchChainData } from 'lib/utils/fetchChainData';
import { ethers } from 'ethers';
import { WalletContext } from 'lib/components/WalletContextProvider';
import { calculateEstimatedPoolPrize } from 'lib/utils/calculateEstimatedPoolPrize';
import { DEFAULT_TOKEN_PRECISION } from 'lib/constants';
import { useInterval } from 'lib/hooks/useInterval';
import { displayAmountInEther } from 'lib/utils/displayAmountInEther';

interface PropsTandaPreviewDesktop {
  demoNetworkName?: string;
  prizePool: string;
}

export const TandaPreviewDesktop: FC<PropsTandaPreviewDesktop> = ({ prizePool, demoNetworkName }) => {
  const { t } = useTranslation();

  const walletContext = useContext(WalletContext);
  const usersAddress = walletContext._onboard.getState().address;

  const [poolAddresses, setPoolAddresses] = useState({
    prizePool,
  });

  const [genericChainValues, setGenericChainValues] = useState({
    loading: true,
    tokenSymbol: 'TOKEN',
    poolTotalSupply: '1234',
  });

  const [usersChainValues, setUsersChainValues] = useState({
    loading: true,
    usersTicketBalance: ethers.utils.bigNumberify(0),
    usersTokenAllowance: ethers.utils.bigNumberify(0),
    usersTokenBalance: ethers.utils.bigNumberify(0),
  });

  useEffect(() => {
    fetchChainData(
      demoNetworkName,
      usersAddress,
      poolAddresses,
      setPoolAddresses,
      setGenericChainValues,
      setUsersChainValues
    );
  }, [walletContext]);

  const {
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
  } = genericChainValues;

  const tokenDecimals = genericChainValues.tokenDecimals || DEFAULT_TOKEN_PRECISION;
  const tokenSymbol = genericChainValues.tokenSymbol || 'TOKEN';

  const [mountedAt, setMountedAt] = useState(0);
  const [secondsToPrizeAtMount, setSecondsToPrizeAtMount] = useState(0);
  const [secondsRemainingNow, setSecondsRemainingNow] = useState('--');
  const [prizeEstimate, setPrizeEstimate] = useState(0);

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

  useInterval(() => {
    const diffInSeconds = parseInt(String(Date.now() / 1000), 10) - mountedAt;
    const remaining = secondsToPrizeAtMount - diffInSeconds;
    setSecondsRemainingNow(String(remaining <= 0 ? 0 : remaining));
  }, 1000);

  let soldTickets = Math.ceil(ticketTotalSupply / prizeEstimate);
  if (Number.isNaN(soldTickets)) {
    soldTickets = 0;
  }

  return (
    <TandaPreviewContainerDesktop>
      <TandaTitle>{ticketName}</TandaTitle>
      <ButtonTanda>{t('Join!')}</ButtonTanda>
      <Row>
        <ThumbImage src={tandaThumb} />
        <DataContainer>
          <DataRowContainer>
            <TextKey>{t('Next raffle')}:</TextKey>
            <TextValue>
              {prizePeriodRemainingSeconds != null ? prizePeriodRemainingSeconds.toString() : ''}
            </TextValue>
          </DataRowContainer>
          <DataRowContainer>
            <TextKey>{t('Cryptocoin')}:</TextKey>
            <TextValue>{sponsorshipName}</TextValue>
          </DataRowContainer>
          <DataRowContainer>
            <TextKey>{t('Deposit per ticket')}:</TextKey>
            <TextValue>0.01 BTC</TextValue>
          </DataRowContainer>
          <DataRowContainer>
            <TextKey>{t('Sold tickets')}:</TextKey>
            <TextValue>{soldTickets}</TextValue>
          </DataRowContainer>
          <DataRowContainer>
            <TextKey>{t('Total deposit')}:</TextKey>
            <TextValue>
              {displayAmountInEther(ticketTotalSupply, {
                precision: 2,
                decimals: tokenDecimals,
              })}{' '}
              {tokenSymbol}
            </TextValue>
          </DataRowContainer>
          <DataRowContainer>
            <TextKey>{t('Prize last week')}:</TextKey>
            <TextValue>--</TextValue>
          </DataRowContainer>
          <DataRowContainer>
            <TextKey>{t('Estimated prize')}:</TextKey>
            <TextValue>
              {' '}
              {displayAmountInEther(prizeEstimate, { precision: 2, decimals: tokenDecimals })}{' '}
              {tokenSymbol}
            </TextValue>
          </DataRowContainer>
        </DataContainer>
      </Row>
    </TandaPreviewContainerDesktop>
  );
};
