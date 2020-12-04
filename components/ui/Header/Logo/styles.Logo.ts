import styled from 'styled-components';

export const LogoContainer = styled('div')`
  position: relative;
  width: 476px;
  height: 87px;
  min-width: 250px;
  cursor: pointer;

  @media ${props => props.theme.queries.tabletXL} {
    width: 39vw;
    height: 7vw;
    min-height: 60px;
  }
`;

export const LogoImg = styled('img')`
  position: absolute;
  user-drag: none;
  width: 100%;
`;
