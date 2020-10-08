import styled from 'styled-components';
import { Row } from '../Row/Row';

export const HeaderContainer = styled(Row)`
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 7px;
  margin-bottom: 24px;
`;

export const BrandingContainer = styled(Row)`
  align-items: center;
`;

export const HeaderContentContainer = styled(Row)`
  align-items: baseline;
  padding-top: 6px;
`;

export const HeaderChildrenContainer = styled(Row)`
  padding-bottom: 15px;
  align-items: center;
`;

export const LogoIconImg = styled('img')`
  height: 95px;
`;

export const LogoTextImg = styled('img')`
  height: 64px;
  margin-left: 10px;
`;

export const TextBusinessDescription = styled('div')`
  margin-left: 26px;
  font-style: italic;
  font-size: 37px;
  letter-spacing: -0.028em;
  word-spacing: 0.1em;
  color: ${props => props.theme.colors.text2};
`;
