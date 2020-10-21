import styled from 'styled-components';
import { Row } from '../Row/Row';

export const HeaderContainer = styled(Row)`
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 34px;
`;

export const BrandingContainer = styled(Row)`
  align-items: flex-end;
`;

export const HeaderContentContainer = styled(Row)`
  align-items: baseline;
  padding-top: 6px;

  @media ${props => props.theme.queries.tabletXL} {
    padding-top: 0;
  }
`;

export const HeaderChildrenContainerDesktop = styled(Row)`
  padding-bottom: 15px;
  align-items: center;
`;

export const LogoImg = styled('img')`
  width: 100%;

  @media ${props => props.theme.queries.tabletXL} {
    width: 77%;
  }
`;

export const LogoTextImg = styled('img')`
  height: 64px;
  margin-left: 10px;
`;

export const TextBusinessDescription = styled('div')`
  margin: 12px 26px;
  font-style: italic;
  font-size: 37px;
  letter-spacing: -0.028em;
  word-spacing: 0.1em;
  white-space: nowrap;
  color: ${props => props.theme.colors.text2};

  @media ${props => props.theme.queries.tabletXL} {
    display: none;
  }
`;
