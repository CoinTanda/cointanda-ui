import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const Input = styled(TextField)`
  width: 100%;

  input {
    font-size: 20px;
    font-family: ${props => props.theme.fonts.font1};
    padding: 11px 14px;
    padding-top: 8px;
  }
`;
