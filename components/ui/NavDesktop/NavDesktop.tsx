import React, { FC } from 'react';
import { ButtonNavDesktop, NavContainerDesktop } from './styles.NavDesktop';

export const NavDesktop: FC = () => {
  return (
    <NavContainerDesktop>
      <ButtonNavDesktop variant="outlined">About</ButtonNavDesktop>
      <ButtonNavDesktop variant="outlined">Tandas</ButtonNavDesktop>
      <ButtonNavDesktop variant="outlined">Our Token</ButtonNavDesktop>
      <ButtonNavDesktop variant="outlined">FAQ</ButtonNavDesktop>
      <ButtonNavDesktop variant="outlined">Contact us</ButtonNavDesktop>
    </NavContainerDesktop>
  );
};
