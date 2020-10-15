import styled from 'styled-components';

export const TitleMobile = styled('div')`
  font-size: 27px;
  font-weight: 700;
  letter-spacing: -0.05em;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.textMobileTitle};
  display: none;

  @media ${props => props.theme.queries.tabletXL} {
    display: flex;
  }
`;
