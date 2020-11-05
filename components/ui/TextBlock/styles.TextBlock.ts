import styled from 'styled-components';

export const TextBlock = styled('div')`
  font-size: 21px;
  letter-spacing: -0.014em;
  line-height: 27px;
  margin-bottom: 22px;
  color: ${props => props.theme.colors.text5};

  span {
    color: ${props => props.theme.colors.text4};
    font-weight: 600;
  }

  @media ${props => props.theme.queries.tabletXL} {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
`;
