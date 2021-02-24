import { useTranslation } from 'i18n';
import { TitleText } from 'components/ui/TitleText/TitleText';
import React, { FC, useState } from 'react';
import {
  ButtonContainer,
  ButtonSend,
  ContactContainer,
  FormContainer,
  InputContainer,
} from './styles.Contact';
import { Input } from '../../ui/Input/styles.Input';
import { sendContactMail } from "../../networking/mail-api"

export const Contact: FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formButtonDisabled, setFormButtonDisabled] = useState(false)
  const [formButtonText, setFormButtonText] = useState(t('SEND'))

  const submitContactForm = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setFormButtonDisabled(true)
    setFormButtonText(t('Sending...'))
    const res = await sendContactMail(email, name, process.env.NEXT_JS_EMAIL_RECEIVE, `Name:${name} email:${email} sent you this message:\n${message}`, `New Contact in CoinTanda <${email}>`)
    if (res.status < 300) {
      setName('')
      setEmail('')
      setMessage('')
      setFormButtonText(t('Thank you'))
    } else {
      setFormButtonText(t('Oops, there has been an error'))
    }
  }

  return (
    <ContactContainer>
      <TitleText>{t('Contact us')}</TitleText>
      <FormContainer onSubmit={submitContactForm}>
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
        <InputContainer>
          <TitleText medium>{t('Your message')}</TitleText>
          <Input variant="outlined"
          multiline rows={10}
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required/>
        </InputContainer>
        <ButtonContainer>
          <ButtonSend
            type="submit"
            disabled={formButtonDisabled}>
              {formButtonText}
          </ButtonSend>
        </ButtonContainer>
      </FormContainer>
    </ContactContainer>
  );
};
