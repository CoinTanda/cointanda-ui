import styled from 'styled-components';

export const Link = styled('a')`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  color: ${props => props.theme.colors.buttonText2};
  &:hover {
    color: ${props => props.theme.colors.buttonBackground3};
  }
`;
