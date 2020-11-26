import React, { FC, useState } from 'react';
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
import { useTandaInfo } from 'hooks/useTandaInfo';
import { useRouter } from 'next/router';
import { useTandaActions } from 'hooks/useTandaActions';
import { useMaxExitFee } from 'hooks/useMaxExitFee';

export const Withdraw: FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const address = router.query['networkName'] as string;
  const [amount, setAmount] = useState('1');

  const tandaInfo = useTandaInfo(address);
  const { actionStatus, withdraw } = useTandaActions(tandaInfo);
  const { loading, ticketName } = tandaInfo;
  const { exitFees } = useMaxExitFee(amount, tandaInfo);

  if (loading || actionStatus.operationPending) {
    return <>{t('Loading...')}</>;
  }

  return (
    <Column>
      <TitleText>
        {t('Withdraw Money from Tanda')} <TitleLink href={`/tandas/${address}`}>{ticketName}</TitleLink>
      </TitleText>
      <WithdrawContainer>
        <Content>
          <TextBlockWithdraw>{t('I want to withdraw')}</TextBlockWithdraw>{' '}
          <RowCentered>
            <Input variant="outlined" value={amount} onChange={e => setAmount(e.target.value)} />{' '}
            <TextBlockCoin>BTC</TextBlockCoin>{' '}
          </RowCentered>{' '}
          <ButtonOk onClick={() => withdraw(amount, exitFees, 'instant')}>{t('OK')}</ButtonOk>
        </Content>
      </WithdrawContainer>
    </Column>
  );
};
