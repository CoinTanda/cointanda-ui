import React, { FC } from 'react';
import { useTranslation } from 'i18n';
import { TitleText } from 'components/ui/TitleText/TitleText';
import { Link } from 'components/ui/Link/styles.Link';
import {
  ButtonAddTanda,
  ButtonLeave,
  ButtonSave,
  FormColumn,
  FormContainer,
  IconTanda,
  InputContainer,
  Invite,
  ProfileContainer,
  Tanda,
  TandaData,
  TandaInfoText,
  TandasColumn,
  TextInformed,
} from './styles.Profile';
import tandaIconSilver from '../../../assets/Silver_Tanda_80.png';
import tandaIconGold from '../../../assets/Gold_Tanda_80.png';
import tandaIconBlack from '../../../assets/Black_Tanda_80.png';
import { IconTriangle } from 'components/ui/IconTriangle/IconTriangle';
import { Input } from 'components/ui/Input/styles.Input';

export const Profile: FC = () => {
  const { t } = useTranslation();
  const tandas = [
    {
      name: 'Alice',
      tickets: 120,
      icon: tandaIconSilver,
    },
    {
      name: 'Cindy',
      tickets: 7,
      icon: tandaIconGold,
    },
    {
      name: 'Daisy',
      tickets: 1,
      icon: tandaIconBlack,
    },
  ];

  return (
    <ProfileContainer>
      <TitleText>{t('My Profile')}</TitleText>
      <FormContainer>
        <TandasColumn>
          <TitleText medium>{t('My Tandas')}</TitleText>
          {tandas.map(tandaInfo => (
            <Tanda>
              <IconTanda src={tandaInfo.icon} />
              <TandaData>
                <Link>{tandaInfo.name}</Link>
                <TandaInfoText>
                  {t('I have')} {tandaInfo.tickets} {t('tickets')}
                </TandaInfoText>
              </TandaData>
              <Invite>
                <IconTriangle />
                <Link>{t('Invite Friends')}</Link>
              </Invite>
            </Tanda>
          ))}
          <ButtonAddTanda>{t('ADD TANDA')}</ButtonAddTanda>
        </TandasColumn>
        <FormColumn>
          <TitleText medium>{t('My E-Mail Address')}</TitleText>
          <InputContainer>
            <Input variant="outlined"></Input>
            <ButtonSave>{t('SAVE')}</ButtonSave>
          </InputContainer>
          <TextInformed>{t('I want to be informed')}</TextInformed>
        </FormColumn>
        <ButtonLeave>{t('LEAVE')}</ButtonLeave>
      </FormContainer>
    </ProfileContainer>
  );
};
