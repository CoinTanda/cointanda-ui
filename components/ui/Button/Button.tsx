import { ButtonProps } from '@material-ui/core/Button';
import React, { FC } from 'react';
import { ButtonContainer, ButtonStyled } from './styles.Button';

export interface PropsButton extends ButtonProps {
  highlighted?: boolean;
}

export const Button: FC<PropsButton> = props => {
  return (
    <ButtonContainer className={props.className}>
      <ButtonStyled variant="contained" {...props}>
        {props.children}
      </ButtonStyled>
    </ButtonContainer>
  );
};
