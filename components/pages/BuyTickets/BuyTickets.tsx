import React, { FC, useState } from 'react';
import { useTranslation } from 'i18n';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { Input } from 'components/ui/Input/styles.Input';
import { useTandaInfo } from 'hooks/useTandaInfo';
import { useRouter } from 'next/router';
import { Column } from 'components/ui/Column/Column';
import { TitleText } from 'components/ui/TitleText/TitleText';
import {
  ButtonBuy,
  ButtonSave,
  BuyTicketsContainer,
  Content,
  FormColumn,
  FormRow,
  InputContainer,
  LabelForm,
} from './styles.BuyTickets';
import { TitleLink } from 'components/ui/TitleLink/styles.TitleLink';
import { useTandaActions } from 'hooks/useTandaActions';
import { displayCurrentDatePlusSeconds } from 'lib/utils/displayAmountInEther';

export const BuyTickets: FC = () => {
  const [amount, setAmount] = useState('3');
  const { t } = useTranslation();
  const router = useRouter();
  const address = router.query['networkName'] as string;

  const tandaInfo = useTandaInfo(address);

  const { actionStatus, unlock, submit, complete } = useTandaActions(tandaInfo);
  const {
    loading,
    ticketName,
    isRngRequested,
    canCompleteAward,
    depositsUnlocked,
    tokenSymbol,
    pricePerTicket,
    prizePeriodRemainingSeconds
  } = tandaInfo;

  if (loading) {
    return <>{t('Loading...')}</>;
  }
  if (actionStatus.operationPending) {
    return <>{t('Waiting for transaction to be mined...')}</>;
  }
  if(actionStatus.sent) {
    return <>{router.push(`/tandas/${address}`)}</>;
  }

  return (
    <Column>
      <TitleText>
        {t('Buy Tickets for Tanda')} <TitleLink href={`/tandas/${address}`}>{ticketName}</TitleLink>
      </TitleText>
      <BuyTicketsContainer>
        {isRngRequested && !canCompleteAward && (
          <LabelForm>{t('Random number being calculated! Please wait')} ...</LabelForm>
        )}
        {isRngRequested && canCompleteAward && !actionStatus.operationPending && (
          <>
            <LabelForm>
              {t(
                'The Pool is currently being awarded and until awarding is complete can not accept deposits'
              )}
              .
            </LabelForm>
            {!actionStatus.operationPending && (
              <ButtonBuy onClick={complete}>{t('COMPLETE AWARD')}</ButtonBuy>
            )}
          </>
        )}
        {!isRngRequested && !depositsUnlocked && (
          <>
            <LabelForm>
              {`Unlock deposits by first approving the pool's ticket contract to have a ${tokenSymbol} allowance`}
              .
            </LabelForm>
            <ButtonBuy onClick={unlock}>{t('UNLOCK')}</ButtonBuy>
          </>
        )}
        {depositsUnlocked && !isRngRequested && (
          <>
            <Content>
              <FormColumn>
                <FormRow>
                  <LabelForm>{t('I want to buy')}</LabelForm>
                  <FormControl variant="outlined">
                    <Select value={amount} onChange={e => setAmount(e.target.value as string)}>
                      <MenuItem value={'1'}>1 tickets</MenuItem>
                      <MenuItem value={'2'}>2 tickets</MenuItem>
                      <MenuItem value={'3'}>3 tickets</MenuItem>
                      <MenuItem value={'4'}>4 tickets</MenuItem>
                      <MenuItem value={'5'}>5 tickets</MenuItem>
                      <MenuItem value={'10'}>10 tickets</MenuItem>
                      <MenuItem value={'15'}>15 tickets</MenuItem>
                      <MenuItem value={'20'}>20 tickets</MenuItem>
                      <MenuItem value={'50'}>50 tickets</MenuItem>
                      <MenuItem value={'100'}>100 tickets</MenuItem>
                    </Select>
                  </FormControl>
                </FormRow>
                <FormRow>
                  <LabelForm>
                    {t('Price per ticket')}:{' '}
                    <span>
                      {pricePerTicket} {tokenSymbol}
                    </span>
                  </LabelForm>
                </FormRow>
                <FormRow>
                  <LabelForm>
                    {t('Total price')}: <span>{Number(pricePerTicket||1) * parseInt(amount)} {tokenSymbol}</span>
                  </LabelForm>
                </FormRow>
              </FormColumn>
              <FormColumn>
                <FormRow>
                  <LabelForm>
                    {t('Next raffle')}: <span>
                      {displayCurrentDatePlusSeconds(prizePeriodRemainingSeconds)}
                    </span>
                  </LabelForm>
                </FormRow>
                <Column>
                  <LabelForm>{t('I want to be informed by email if I win')}</LabelForm>
                  <InputContainer>
                    <Input variant="outlined" placeholder={t('My email address')}></Input>
                    <ButtonSave>{t('SAVE')}</ButtonSave>
                  </InputContainer>
                </Column>
              </FormColumn>
            </Content>
            <ButtonBuy onClick={() => submit((Number(pricePerTicket||1) * parseInt(amount)).toString())}>{t('BUY NOW')}</ButtonBuy>
          </>
        )}
      </BuyTicketsContainer>
    </Column>
  );
};
