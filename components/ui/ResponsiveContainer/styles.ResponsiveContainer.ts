import styled from 'styled-components';
import { QueriedContainer } from './QueriedContainer/QueriedContainer';

export const ResponsiveContainerStyled = styled(QueriedContainer)`
  ${props => props.showIn && `display: none`};
  ${props => props.showIn && `@media (max-width: ${props.showIn}px){ display: block; } `};
  ${props => props.hideIn && `@media (max-width: ${props.hideIn}px){ display: none; } `};
`;
