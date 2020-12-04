import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'i18n';
import { TitleText } from 'components/ui/TitleText/TitleText';
import {
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
        <TandasColumn style={{ width: tandaListEmpty ? 0 : '100%' }}>
          {!tandaListEmpty && <TitleText medium>{t('My Tandas')}</TitleText>}
          {tandas.map(tandaInfo => (
            <TandaInProfile
              prizePoolAddress={tandaInfo.address}
              onTandaInfo={handleTandaInfo}
              key={tandaInfo.address}
            />
          ))}
          {/* <ButtonAddTanda>{t('ADD TANDA')}</ButtonAddTanda> */}
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
