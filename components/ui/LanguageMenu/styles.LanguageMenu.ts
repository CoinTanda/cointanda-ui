import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Column } from '../Column/Column';

export const LanguageMenuContainer = styled('div')`
  position: relative;
`;

export const OtherLanguagesContainer = styled(Column)`
  position: absolute;
`;

export const CurrentLanguageButton = styled(Button)`
  height: 31px;
  width: 40px;
  border-radius: 0px;
  opacity: 0.8;

  &.MuiButton-root {
    border-radius: 0px;
    padding: 0 16px;
  }
`;

export const OtherLanguageButton = styled(Button)`
  height: 31px;
  width: 40px;
  border-radius: 0px;

  &.MuiButton-root {
    border-radius: 0px;
    padding: 0 16px;
  }
`;
