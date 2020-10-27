import { TextBlock } from 'components/ui/TextBlock/styles.TextBlock';
import { TitleText } from 'components/ui/TitleText/TitleText';
import { useTranslation } from 'i18n';
import React, { FC } from 'react';
import {
  ButtonContainer,
  FormContainer,
  InputContainer,
  OurTokenContainer,
  ButtonOk,
} from './styles.OurToken';
import { Input } from '../../ui/Input/styles.Input';

export const OurToken: FC = () => {
  const { t } = useTranslation();

  return (
    <OurTokenContainer>
      <TitleText>{t('The Tanda Token (Tanto)')}</TitleText>
      <TextBlock>
        {t('In the near future, we will sell our')} <span>{t('Tanda Token')}</span>, {t('short')}:{' '}
        <span>{t('Tanto')}</span>. {t('It is an')} <span>{t('ERC 20 governance token')}</span>{' '}
        {t('which will give you voting rights on the future development of CoinTanda')}.
      </TextBlock>
      <TextBlock>
        {t('Currently you can only gain this token if you are already a member and successfully')}{' '}
        <span>{t('invite new members')}</span> {t('to join')}.{' '}
        {t('As an early owner of our token you can benefit from its future growth in value')}.
      </TextBlock>
      <TextBlock>
        {t(
          'If you want to be informed about our Token Sale, please leave your name and email here. We will not use this for spam or advertising'
        )}
        .
      </TextBlock>
      <FormContainer>
        <InputContainer>
          <TitleText medium>{t('Your name')}</TitleText>
          <Input variant="outlined"></Input>
        </InputContainer>
        <InputContainer>
          <TitleText medium>{t('Your e-mail')}</TitleText>
          <Input variant="outlined"></Input>
        </InputContainer>
        <ButtonContainer>
          <ButtonOk>{t('OK')}</ButtonOk>
        </ButtonContainer>
      </FormContainer>
    </OurTokenContainer>
  );
};
