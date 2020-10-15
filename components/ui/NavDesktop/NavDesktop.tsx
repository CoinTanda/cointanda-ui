import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { ResponsiveContainer } from '../ResponsiveContainer/ResponsiveContainer';
import { ButtonNavDesktop, NavContainerDesktop } from './styles.NavDesktop';

export const NavDesktop: FC = () => {
  const theme = useTheme();

  return (
    <ResponsiveContainer hideIn={theme.screenSizes.tabletXL}>
      <NavContainerDesktop>
        <ButtonNavDesktop variant="outlined">About</ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined">Tandas</ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined">Our Token</ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined">FAQ</ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined">Contact us</ButtonNavDesktop>
      </NavContainerDesktop>
    </ResponsiveContainer>
  );
};
