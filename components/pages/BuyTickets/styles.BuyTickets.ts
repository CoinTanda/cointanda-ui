import styled from 'styled-components';
import { Row } from 'components/ui/Row/Row';
import { RowCentered } from 'components/ui/RowCentered/styles.RowCentered';
import { TextBlock } from 'components/ui/TextBlock/styles.TextBlock';
import { Button } from 'components/ui/Button/Button';
import { Column } from 'components/ui/Column/Column';

export const BuyTicketsContainer = styled('div')`
  padding: 33px 37px;
  border-radius: ${props => props.theme.borders.borderRadius1};
  border: ${props => props.theme.borders.border1};
  margin-bottom: 31px;
`;

export const Content = styled(Row)`
  align-items: center;
  max-width: 750px;

  @media ${props => props.theme.queries.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FormColumn = styled(Column)`
  width: 100%;
`;

export const FormRow = styled(RowCentered)`
  margin-bottom: 27px;
`;

export const LabelForm = styled(TextBlock)`
  white-space: nowrap;
  margin-right: 20px;
  margin-bottom: 0px;
  font-size: 23px;
  margin-bottom: 4px;

  @media ${props => props.theme.queries.tablet} {
    margin-bottom: 30px;
  }

  span {
    margin-left: 8px;
  }
`;

export const InputContainer = styled(Row)`
  align-items: center;

  @media ${props => props.theme.queries.mobileL} {
    flex-direction: column;
  }
`;

export const ButtonSave = styled(Button)`
  margin-left: 14px;

  .MuiButtonBase-root {
    padding: 0 48px;
  }

  @media ${props => props.theme.queries.mobileL} {
    margin-top: 20px;
  }
`;

export const ButtonBuy = styled(Button)``;
