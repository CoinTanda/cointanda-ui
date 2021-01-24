import styled from 'styled-components';

export const LogoContainer = styled('div')`
  height: 87px;
  min-width: 250px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media ${props => props.theme.queries.tabletXL} {
    width: 39vw;
    height: 7vw;
    min-height: 60px;
  }
`;

export const LogoImg = styled('img')`
  height: 100%;
`;

export const Logotype = styled('img')`
  height: 65%;
  margin-left: 12px;
`;
