import React, { FC, useState } from 'react';
import { useTranslation } from 'i18n';
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
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { Input } from 'components/ui/Input/styles.Input';

export const BuyTickets: FC = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(3);

  return (
    <Column>
      <TitleText>
        {t('Buy Tickets for Tanda')} <TitleLink href={''}>Alice</TitleLink>
      </TitleText>
      <BuyTicketsContainer>
        <Content>
          <FormColumn>
            <FormRow>
              <LabelForm>{t('I want to buy')}</LabelForm>
              <FormControl variant="outlined">
                <Select value={amount} onChange={e => setAmount(e.target.value as number)}>
                  <MenuItem value={1}>1 tickets</MenuItem>
                  <MenuItem value={2}>2 tickets</MenuItem>
                  <MenuItem value={3}>3 tickets</MenuItem>
                  <MenuItem value={4}>4 tickets</MenuItem>
                  <MenuItem value={5}>5 tickets</MenuItem>
                  <MenuItem value={10}>10 tickets</MenuItem>
                  <MenuItem value={15}>15 tickets</MenuItem>
                  <MenuItem value={20}>20 tickets</MenuItem>
                  <MenuItem value={50}>50 tickets</MenuItem>
                  <MenuItem value={100}>100 tickets</MenuItem>
                </Select>
              </FormControl>
            </FormRow>
            <FormRow>
              <LabelForm>
                {t('Price per ticket')}: <span>0.01 BTC</span>
              </LabelForm>
            </FormRow>
            <FormRow>
              <LabelForm>
                {t('Total price')}: <span>0.03 BTC</span>
              </LabelForm>
            </FormRow>
          </FormColumn>
          <FormColumn>
            <FormRow>
              <LabelForm>
                {t('Next raffle')}: <span>13 Nov 2020</span>
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
        <ButtonBuy>{t('BUY NOW')}</ButtonBuy>
      </BuyTicketsContainer>
    </Column>
  );
};
