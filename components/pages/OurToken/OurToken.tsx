import { TextBlock } from 'components/ui/TextBlock/styles.TextBlock';
import { TitleText } from 'components/ui/TitleText/TitleText';
import { useTranslation } from 'i18n';
import React, { FC, useState } from 'react';
import {
  ButtonContainer,
  FormContainer,
  InputContainer,
  OurTokenContainer,
  ButtonOk,
} from './styles.OurToken';
import { Input } from '../../ui/Input/styles.Input';
import { sendContactMail } from "../../networking/mail-api"

export const OurToken: FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [formButtonDisabled, setFormButtonDisabled] = useState(false)
  const [formButtonText, setFormButtonText] = useState(t('OK'))

  const submitContactForm = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setFormButtonDisabled(true)
    setFormButtonText(t('Sending...'))
    const res = await sendContactMail(email, name, process.env.NEXT_JS_EMAIL_RECEIVE, `Name:${name} email:${email} wants information about the pre sale of the Tanto Token`, `Information about Tanto Token wanted by <${email}>`)
    if (res.status < 300) {
      setName('')
      setEmail('')
      setFormButtonText(t('Thank you'))
    } else {
      setFormButtonText(t('Oops, there has been an error'))
    }
  }

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
          <Input variant="outlined"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required/>
        </InputContainer>
        <InputContainer>
          <TitleText medium>{t('Your e-mail')}</TitleText>
          <Input variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required/>
        </InputContainer>
        <ButtonContainer>
          <ButtonOk
            type="submit"
            onClick={submitContactForm}
            disabled={formButtonDisabled}>
              {formButtonText}
          </ButtonOk>
        </ButtonContainer>
      </FormContainer>
    </OurTokenContainer>
  );
};
