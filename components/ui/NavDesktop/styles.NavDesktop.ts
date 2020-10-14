import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Row } from '../Row/Row';

export const NavContainerDesktop = styled(Row)`
  margin-bottom: 49px;

  @media ${props => props.theme.queries.laptopL} {
    display: none;
  }
`;

export const ButtonNavDesktop = styled(Button)`
  width: 172px;
  margin-right: 7.2px;
`;
