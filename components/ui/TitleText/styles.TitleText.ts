import styled from 'styled-components';
import { PropsTitleText } from './TitleText';

export const TitleTextStyled = styled('div')<PropsTitleText>`
  letter-spacing: -0.014em;
  font-size: ${props => (props.small ? '19px' : props.medium ? '21.3px' : '32px')};
  font-weight: ${props => (props.small ? '400' : props.medium ? '600' : '700')};
  margin-bottom: ${props => (props.small ? '20px' : props.medium ? '20px' : '49px')};
  color: ${props => props.theme.colors.textMobileTitle};

  @media ${props => props.theme.queries.tabletXL} {
    font-size: ${props => (props.small ? '18px' : props.medium ? '21.3px' : '25px')};
  }
`;
