import styled from 'styled-components';
import { Column } from '../../ui/Column/Column';
import { Row } from '../../ui/Row/Row';
import { Button } from '../../ui/Button/Button';

export const ProfileContainer = styled('div')``;

export const FormContainer = styled('div')`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 33px 37px;
  border-radius: ${props => props.theme.borders.borderRadius1};
  border: ${props => props.theme.borders.border1};
  margin-bottom: 31px;

  @media ${props => props.theme.queries.tabletXL} {
    flex-direction: column;
    padding-bottom: 170px;
  }
`;

export const TandasColumn = styled(Column)`
  width: 100%;

  @media ${props => props.theme.queries.tabletXL} {
    margin-bottom: 50px;
  }
`;
export const FormColumn = styled(Column)`
  width: 100%;
`;

export const Tanda = styled(Row)`
  flex-wrap: wrap;
  align-items: center;
  min-width: 260px;
  margin-bottom: 20px;
`;

export const TandaData = styled(Column)`
  width: 180px;
`;

export const TandaInfoText = styled(Column)`
  font-weight: 600;
  font-size: 17px;
  color: ${props => props.theme.colors.text3};
`;

export const Invite = styled('div')`
  height: 100%;
`;

export const IconTanda = styled('img')`
  height: 43px;
  margin-right: 15px;
`;

export const ButtonAddTanda = styled(Button)`
  margin-top: 25px;

  .MuiButton-label {
    font-size: 18px !important;
  }
  .MuiButtonBase-root {
    padding: 0 12px;
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

export const TextInformed = styled('div')`
  margin-top: 15px;
  font-weight: 600;
  font-size: 17px;
  color: ${props => props.theme.colors.text3};

  @media ${props => props.theme.queries.mobileL} {
    text-align: center;
  }
`;

export const ButtonLeave = styled(Button)`
  position: absolute;
  bottom: 16px;
  right: 17px;
  margin-left: 14px;

  .MuiButton-label {
    font-size: 18px !important;
  }

  .MuiButtonBase-root {
    padding: 0 48px;
    background-color: ${props => props.theme.colors.buttonBackground6};
  }

  @media ${props => props.theme.queries.tabletXL} {
    bottom: 16px;
  }
`;
