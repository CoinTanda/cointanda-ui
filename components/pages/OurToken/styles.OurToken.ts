import styled from 'styled-components';
import { Row } from '../../ui/Row/Row';
import { Button } from '../../ui/Button/Button';

export const OurTokenContainer = styled('div')`
  max-width: 900px;
`;

export const FormContainer = styled('div')`
  max-width: 500px;
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

export const ButtonOk = styled(Button)`
  min-width: 150px;
`;
