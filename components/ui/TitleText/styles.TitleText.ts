import styled from 'styled-components';
import { PropsTitleText } from './TitleText';

export const TitleTextStyled = styled('div')<PropsTitleText>`
  font-size: ${props => (props.small ? '19px' : '32px')};
  font-weight: ${props => (props.small ? '400' : '700')};
  letter-spacing: -0.014em;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.textMobileTitle};

  @media ${props => props.theme.queries.tabletXL} {
    font-size: ${props => (props.small ? '18px' : '25px')};
  }
`;
