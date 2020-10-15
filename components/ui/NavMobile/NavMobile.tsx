import React, { FC, useState } from 'react';
import {
  MenuContainer,
  BurgerButton,
  CloseButton,
  ButtonLanguageMobile,
  ButtonsContainer,
  TextButton,
  ButtonSection,
  IconItem,
} from './styles.NavMobile';
import burgerImage from '../../../assets/menu_icon.png';
import closeButtonImage from '../../../assets/close_button.png';

export const NavMobile: FC = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <BurgerButton src={burgerImage} onClick={() => setEnabled(!enabled)} />
      {enabled && (
        <MenuContainer>
          <CloseButton src={closeButtonImage} onClick={() => setEnabled(!enabled)} />
          <ButtonLanguageMobile disabled>EN</ButtonLanguageMobile>
          <ButtonsContainer>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>About</TextButton>
            </ButtonSection>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>Tandas</TextButton>
            </ButtonSection>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>Our Token</TextButton>
            </ButtonSection>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>FAQ</TextButton>
            </ButtonSection>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>Contact us</TextButton>
            </ButtonSection>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>My Profile</TextButton>
            </ButtonSection>
            <ButtonSection>
              <IconItem whiteVersion />
              <TextButton>Log out</TextButton>
            </ButtonSection>
          </ButtonsContainer>
        </MenuContainer>
      )}
    </>
  );
};
