import React, { FC } from 'react';
import { ResponsiveContainerStyled } from './styles.ResponsiveContainer';

interface PropsResponsiveContainer {
  hideIn?: number;
  showIn?: number;
}

export const ResponsiveContainer: FC<PropsResponsiveContainer> = props => {
  return <ResponsiveContainerStyled {...props}>{props.children}</ResponsiveContainerStyled>;
};
