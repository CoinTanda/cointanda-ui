import styled from 'styled-components';

export const IconStarStyled = styled('img')`
  height: 21px;

  @media ${props => props.theme.queries.tabletXL} {
    height: 19px;
  }
`;
