import styled from 'styled-components';

export const LinkedTextStyled = styled('div')`
  font-size: 20px;
  margin-left: 5px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  color: ${props => props.theme.colors.buttonText2};
`;
