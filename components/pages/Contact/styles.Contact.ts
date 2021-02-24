import { Row } from 'components/ui/Row/Row';
import styled from 'styled-components';
import { Button } from '../../ui/Button/Button';

export const ContactContainer = styled('div')`
  max-width: 470px;
`;

export const FormContainer = styled('form')`
  margin-bottom: 50px;
`;

export const InputContainer = styled('div')`
  margin-bottom: 20px;
`;

export const ButtonContainer = styled(Row)`
  margin-top: 40px;
  width: 100%;
  justify-content: flex-end;
`;

export const ButtonSend = styled(Button)`
  min-width: 150px;
`;
