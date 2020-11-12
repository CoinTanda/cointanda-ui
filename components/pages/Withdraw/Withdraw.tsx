import React, { FC } from 'react';
import { useTranslation } from 'i18n';
import { TitleText } from 'components/ui/TitleText/TitleText';
import { Column } from 'components/ui/Column/Column';
import { Input } from 'components/ui/Input/styles.Input';
import {
  ButtonOk,
  Content,
  TextBlockCoin,
  TextBlockWithdraw,
  WithdrawContainer,
} from './styles.Withdraw';
import { TitleLink } from 'components/ui/TitleLink/styles.TitleLink';
import { RowCentered } from 'components/ui/RowCentered/styles.RowCentered';

export const Withdraw: FC = () => {
  const { t } = useTranslation();

  return (
    <Column>
      <TitleText>
        {t('Withdraw Money from Tanda')} <TitleLink href={''}>Alice</TitleLink>
      </TitleText>
      <WithdrawContainer>
        <Content>
          <TextBlockWithdraw>{t('I want to withdraw')}</TextBlockWithdraw>{' '}
          <RowCentered>
            <Input variant="outlined" /> <TextBlockCoin>BTC</TextBlockCoin>{' '}
          </RowCentered>{' '}
          <ButtonOk>{t('OK')}</ButtonOk>
        </Content>
      </WithdrawContainer>
    </Column>
  );
};
