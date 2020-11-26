import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation, Router } from 'i18n';
import {
  BottomButtonsContainer,
  ButtonTanda,
  DataContainer,
  DataRowContainer,
  DepositedButtonsContainer,
  SectionRightColumn,
  SectionLeftColumn,
  TandaContainer,
  TandaTitle,
  TextKey,
  TextValue,
  ThumbImage,
  WinDataRowContainer,
  WonButtonsContainer,
  WonContainer,
  ResponsiveContainer,
} from './styles.Tanda';
import tandaThumbSilver from 'assets/Silver_Tanda_200.png';
import tandaThumbGold from 'assets/Gold_Tanda_200.png';
import tandaThumbBlack from 'assets/Black_Tanda_200.png';
import { displayAmountInEther } from 'lib/utils/displayAmountInEther';
import { Row } from 'components/ui/Row/Row';
import { useTandaInfo } from 'hooks/useTandaInfo';
import { DepositedContainer } from './styles.Tanda';
import { Link } from '../../ui/Link/Link';
import { Column } from 'components/ui/Column/Column';
import { ButtonRed } from 'components/ui/ButtonRed/styles.ButtonRed';
import { Button } from 'components/ui/Button/Button';
import { TitleText } from 'components/ui/TitleText/TitleText';
import { TextBlock } from 'components/ui/TextBlock/styles.TextBlock';
import { TandaType } from 'hooks/useTandasBasicInfo';

enum Mode {
  Normal,
  Joined,
  Won,
}

export const Tanda: FC = () => {
  const { t } = useTranslation();
  let [uiMode, setUiMode] = useState(Mode.Normal);
  const router = useRouter();
  const address = router.query['networkName'] as string;
  const {
    loading,
    prizePeriodRemainingSeconds,
    ticketTotalSupply,
    ticketName,
    sponsorshipName,
    tokenDecimals,
    tokenSymbol,
    prizeEstimate,
    soldTickets,
    usersChainValues,
    pricePerTicket,
    type,
  } = useTandaInfo(address);

  const { usersTimelockBalance, usersTimelockBalanceAvailableAt, usersTicketBalance } =
    usersChainValues || {};
  const userHasFunds = usersTicketBalance && usersTicketBalance.gt(0);
  const userHasTimelockedFunds = usersTimelockBalance && usersTimelockBalance.gt(0);

  // This is temporary until the logic is implemented:

  const handleSetMode = () => {
    if (uiMode === Mode.Normal) {
      setUiMode(Mode.Joined);
      return;
    }
    if (uiMode === Mode.Joined) {
      setUiMode(Mode.Won);
      return;
    }
    if (uiMode === Mode.Won) {
      setUiMode(Mode.Normal);
      return;
    }
  };

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <TandaContainer>
      <TandaTitle>{ticketName}</TandaTitle>
      {!userHasFunds && (
        <ButtonTanda onClick={() => Router.push(`/tandas/${address}/buy-tickets`)}>
          {t('Join!')}
        </ButtonTanda>
      )}
      <ResponsiveContainer>
        <SectionLeftColumn>
          <Row>
            <ThumbImage
              src={
                type === TandaType.Black
                  ? tandaThumbBlack
                  : type === TandaType.Gold
                  ? tandaThumbGold
                  : tandaThumbSilver
              }
            />
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
                <TextValue>
                  {pricePerTicket} {tokenSymbol}
                </TextValue>
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
                  {displayAmountInEther(prizeEstimate, { precision: 2, decimals: tokenDecimals })}{' '}
                  {tokenSymbol}
                </TextValue>
              </DataRowContainer>
            </DataContainer>
          </Row>
          <BottomButtonsContainer>
            <ButtonRed
              /*onClick={() => Router.push(`/tandas/${address}/withdraw`)}*/ onClick={handleSetMode}
            >
              {t('LEAVE')}
            </ButtonRed>
            <Button onClick={() => Router.push(`/win-members`)}>{t('INVITE')}</Button>
          </BottomButtonsContainer>
        </SectionLeftColumn>
        {userHasFunds && (
          <SectionRightColumn>
            <DepositedContainer>
              <DataRowContainer>
                <TextKey>{t('My deposit')}:</TextKey>
                <TextValue>
                  {displayAmountInEther(usersTicketBalance, { decimals: tokenDecimals })} {tokenSymbol}
                </TextValue>
              </DataRowContainer>
              <DataRowContainer>
                <TextKey>{t('Chance of winning')}:</TextKey>
                <TextValue>
                  {usersTicketBalance &&
                    ticketTotalSupply &&
                    usersTicketBalance?.div(ticketTotalSupply).mul('100').toString()}
                  {'% '}
                </TextValue>
              </DataRowContainer>
              <DataRowContainer>
                <Column>
                  <TextKey>{t('Rice your chances to win by')}</TextKey>
                  <Link href={`/tandas/${address}/buy-tickets`}>{t('Buying more tickets!')}</Link>
                </Column>
              </DataRowContainer>
              <DataRowContainer>
                <Column>
                  <TextKey>{t('Gain Tanda Tokens by')}</TextKey>
                  <Link href={`/win-members`}>{t('winning new members!')}</Link>
                </Column>
              </DataRowContainer>
              <DepositedButtonsContainer>
                <ButtonRed onClick={() => Router.push(`/tandas/${address}/withdraw`)}>
                  {t('WITHDRAW')}
                </ButtonRed>
                <Button onClick={() => Router.push(`/tandas/${address}/buy-tickets`)}>
                  {t('BUY TICKETS')}
                </Button>
              </DepositedButtonsContainer>
            </DepositedContainer>
          </SectionRightColumn>
        )}
        {uiMode === Mode.Won && (
          <SectionRightColumn>
            <WonContainer>
              <TitleText>{t('CONGRATULATIONS!')}</TitleText>
              <TextBlock>{t('You are this week‘s winner!')}</TextBlock>
              <WinDataRowContainer>
                <TextBlock>{t('Your prize money is')}</TextBlock>
                <span>
                  <TextValue>0.0399 {tokenSymbol}</TextValue>
                </span>
              </WinDataRowContainer>
              <TextBlock>
                {t(
                  'If you want to keep the prize money in the Tanda and get more tickets for it, you don’t have to do anything'
                )}
                .
              </TextBlock>
              <TextBlock>{t('You may also withdraw your prize money (or a part of it)')}.</TextBlock>
              <WonButtonsContainer>
                <ButtonRed onClick={() => Router.push(`/tandas/${address}/withdraw`)}>
                  {t('WITHDRAW')}
                </ButtonRed>
              </WonButtonsContainer>
            </WonContainer>
          </SectionRightColumn>
        )}
      </ResponsiveContainer>
    </TandaContainer>
  );
};
