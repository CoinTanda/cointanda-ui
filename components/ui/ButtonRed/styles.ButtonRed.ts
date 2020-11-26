import styled from 'styled-components';
import { Button } from 'components/ui/Button/Button';

export const ButtonRed = styled(Button)`
  .MuiButtonBase-root {
    background-color: ${props => props.theme.colors.buttonBackground6};
  }
`;
