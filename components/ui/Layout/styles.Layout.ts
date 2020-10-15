import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Column } from '../Column/Column';
import { Row } from '../Row/Row';

export const LayoutContainer = styled('div')`
  width: 100vw;
  max-width: 1600px;
  padding: 26px 17px;
  padding-right: 45px;

  @media ${props => props.theme.queries.mobileL} {
    padding: 26px 7px;
  }
`;

export const NavAndContentContainer = styled(Column)`
  padding-left: 45px;
  width: 100%;

  @media ${props => props.theme.queries.mobileL} {
    padding-left: 0;
  }
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
