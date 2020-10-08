import { ButtonProps } from '@material-ui/core/Button';
import React, { FC } from 'react';
import { ButtonContainer, ButtonStyled } from './styles.Button';

export const Button: FC<ButtonProps> = props => {
  return (
    <ButtonContainer className={props.className}>
      <ButtonStyled variant="contained" {...props}>
        {props.children}
      </ButtonStyled>
    </ButtonContainer>
  );
};
