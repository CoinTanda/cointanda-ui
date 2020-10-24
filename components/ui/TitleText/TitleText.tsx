import React, { FC } from 'react';
import { TitleTextStyled } from './styles.TitleText';
import {
  PropsResponsiveContainer,
  ResponsiveContainer,
} from '../ResponsiveContainer/ResponsiveContainer';

export interface PropsTitleText extends PropsResponsiveContainer {
  small?: boolean;
  medium?: boolean;
}

export const TitleText: FC<PropsTitleText> = props => {
  return (
    <ResponsiveContainer {...props}>
      <TitleTextStyled small={props.small} medium={props.medium}>
        {props.children}
      </TitleTextStyled>
    </ResponsiveContainer>
  );
};
