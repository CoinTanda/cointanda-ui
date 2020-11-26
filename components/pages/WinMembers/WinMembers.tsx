import React, { FC, useContext } from 'react';
import { useTranslation } from 'i18n';
import copy from 'copy-to-clipboard';
import { TitleText } from 'components/ui/TitleText/TitleText';
import { ButtonCopy, InputContainer, WinMembersContainer, Content } from './styles.WinMembers';
import { Column } from 'components/ui/Column/Column';
import { TextBlock } from 'components/ui/TextBlock/styles.TextBlock';
import { Input } from 'components/ui/Input/styles.Input';
import { Link } from '../../ui/Link/Link';
import { WalletContext } from 'lib/components/WalletContextProvider';

export const WinMembers: FC = () => {
  const { t } = useTranslation();
  const walletContext = useContext(WalletContext);
  const usersAddress = walletContext._onboard.getState().address;
  const finalUrl = `${window.location.origin}/${usersAddress}`;

  if (!usersAddress) {
    return <TextBlock>Login to see this page</TextBlock>;
  }

  return (
    <Column>
      <TitleText>{t('Win New Members for Tanda')}</TitleText>
      <WinMembersContainer>
        <Content>
          <TextBlock>
            {t('Get rewarded by winning')} <span>{t('new members!')}</span>
          </TextBlock>
          <TextBlock>
            {t('For each new member who signs')} <Link href={'/ourtoken'}>{t('Tanda Token')}</Link>,{' '}
            {t('our governance token')}.
          </TextBlock>
          <TextBlock>
            {t('Just use this')} <span>{t('invitation link')}</span>{' '}
            {t('and send it to your friends by email or')}
          </TextBlock>
          <InputContainer>
            <Input variant="outlined" value={finalUrl} contentEditable={false} />
            <ButtonCopy onClick={() => copy(finalUrl)}>{t('COPY')}</ButtonCopy>
          </InputContainer>
        </Content>
      </WinMembersContainer>
    </Column>
  );
};
