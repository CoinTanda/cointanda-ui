import React, { FC } from 'react';
import { ButtonNav, NavContainer } from './styles.Nav';

export const Nav: FC = () => {
  return (
    <NavContainer>
      <ButtonNav variant="outlined">About</ButtonNav>
      <ButtonNav variant="outlined">Tandas</ButtonNav>
      <ButtonNav variant="outlined">Out Token</ButtonNav>
      <ButtonNav variant="outlined">FAQ</ButtonNav>
      <ButtonNav variant="outlined">Contact us</ButtonNav>
    </NavContainer>
  );
};
