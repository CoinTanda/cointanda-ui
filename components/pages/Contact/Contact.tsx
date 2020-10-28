import { useTranslation } from 'i18n';
import { TitleText } from 'components/ui/TitleText/TitleText';
import React, { FC } from 'react';
import {
  ButtonContainer,
  ButtonSend,
  ContactContainer,
  FormContainer,
  InputContainer,
} from './styles.Contact';
import { Input } from '../../ui/Input/styles.Input';

export const Contact: FC = () => {
  const { t } = useTranslation();

  return (
    <ContactContainer>
      <TitleText>{t('Contact us')}</TitleText>
      <FormContainer>
        <InputContainer>
          <TitleText medium>{t('Your name')}</TitleText>
          <Input variant="outlined"></Input>
        </InputContainer>
        <InputContainer>
          <TitleText medium>{t('Your e-mail')}</TitleText>
          <Input variant="outlined"></Input>
        </InputContainer>
        <InputContainer>
          <TitleText medium>{t('Your message')}</TitleText>
          <Input variant="outlined" multiline rows={10}></Input>
        </InputContainer>
        <ButtonContainer>
          <ButtonSend>{t('SEND')}</ButtonSend>
        </ButtonContainer>
      </FormContainer>
    </ContactContainer>
  );
};
