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
        {t('which will give you voting')}.
      </TextBlock>
      <TextBlock>
        {t('Currently you can only gain')} <span>{t('invite new members')}</span> {t('to join')}.{' '}
        {t('As an early owner')}.
      </TextBlock>
      <TextBlock>{t('If you want to be informed')}.</TextBlock>
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
