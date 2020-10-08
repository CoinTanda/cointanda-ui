import styled from 'styled-components';
import { Button } from '../Button/Button';

export const LayoutContainer = styled('div')`
  padding-left: 45px;
`;

export const ButtonLanguage = styled(Button)`
  &.MuiButton-root {
    border-radius: 0px;
    padding: 0 16px;
  }

  height: 31px;
  width: 40px;
  border-radius: 0px;
`;
