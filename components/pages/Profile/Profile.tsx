import React, { FC, useCallback, useState } from 'react';
import { Router, useTranslation } from 'i18n';
import { TitleText } from 'components/ui/TitleText/TitleText';
import {
  ButtonAddTanda,
  ButtonLeave,
  ButtonSave,
  FormColumn,
  FormContainer,
  InputContainer,
  ProfileContainer,
  TandasColumn,
  TextInformed,
} from './styles.Profile';
import { Input } from 'components/ui/Input/styles.Input';
import { useTandasList } from 'hooks/useTandasList';
import { TandaInProfile } from './TandaInProfile/TandaInProfile';

export const Profile: FC = () => {
  const tandas = useTandasList();
  const { t } = useTranslation();
  const [tandaListEmpty, setTandaListEmpty] = useState(true);

  const handleTandaInfo = useCallback((userHasFounds: boolean) => {
    if (userHasFounds) {
      setTandaListEmpty(false);
    }
  }, []);

  return (
    <ProfileContainer>
      <TitleText>{t('My Profile')}</TitleText>
      <FormContainer>
        <TandasColumn style={{ width: '100%' }}>
          <TitleText medium>{t('My Tandas')}</TitleText>
          {tandaListEmpty && <div>{t("You haven't joined a tanda yet")}</div>}
          {tandas.map(tandaInfo => (
            <TandaInProfile
              prizePoolAddress={tandaInfo.address}
              onTandaInfo={handleTandaInfo}
              key={tandaInfo.address}
            />
          ))}
        <ButtonAddTanda onClick={() => Router.push('/tandas')}>
          {t('ADD TANDA')}
        </ButtonAddTanda>
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
