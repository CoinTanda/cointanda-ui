import styled from 'styled-components';
import { Row } from 'components/ui/Row/Row';
import { Button } from '../../ui/Button/Button';
import { Column } from '../../ui/Column/Column';

export const WinMembersContainer = styled('div')`
  padding: 33px 37px;
  border-radius: ${props => props.theme.borders.borderRadius1};
  border: ${props => props.theme.borders.border1};
  margin-bottom: 31px;
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 850px;
`;

export const FormColumn = styled(Column)`
  width: 100%;
`;

export const InputContainer = styled(Row)`
  align-items: center;

  @media ${props => props.theme.queries.mobileL} {
    flex-direction: column;
  }
`;

export const ButtonCopy = styled(Button)`
  margin-left: 14px;

  .MuiButtonBase-root {
    padding: 0 48px;
  }

  @media ${props => props.theme.queries.mobileL} {
    margin-top: 20px;
  }
`;
