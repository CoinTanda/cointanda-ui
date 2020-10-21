import styled from 'styled-components';
import { Column } from '../Column/Column';
import { Row } from '../Row/Row';

export const LayoutContainer = styled('div')`
  width: 100vw;
  max-width: 1300px;
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

export const DesktopButtonsContainer = styled(Row)`
  align-items: center;
`;
