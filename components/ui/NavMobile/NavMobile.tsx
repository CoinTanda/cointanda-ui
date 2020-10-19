import React, { FC, useState } from 'react';
import {
  MenuContainer,
  BurgerButton,
  CloseButton,
  ButtonsContainer,
  TextButton,
  ButtonSection,
  IconItem,
} from './styles.NavMobile';
import burgerImage from '../../../assets/menu_icon.png';
import closeButtonImage from '../../../assets/close_button.png';
import { LanguageMenuStyled } from './styles.NavMobile';
import { useTranslation } from 'i18n';

export const NavMobile: FC = () => {
  const [enabled, setEnabled] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <BurgerButton src={burgerImage} onClick={() => setEnabled(!enabled)} />
      {enabled && (
        <MenuContainer>
          <CloseButton src={closeButtonImage} onClick={() => setEnabled(!enabled)} />
          <LanguageMenuStyled />
          <ButtonsContainer>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>{t('About')}</TextButton>
            </ButtonSection>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>{t('Tandas')}</TextButton>
            </ButtonSection>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>{t('Our Token')}</TextButton>
            </ButtonSection>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>{t('FAQ')}</TextButton>
            </ButtonSection>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>{t('Contact us')}</TextButton>
            </ButtonSection>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>{t('My Profile')}</TextButton>
            </ButtonSection>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>{t('Log out')}</TextButton>
            </ButtonSection>
          </ButtonsContainer>
        </MenuContainer>
      )}
    </>
  );
};
