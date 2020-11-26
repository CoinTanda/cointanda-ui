import styled from 'styled-components';
import { Row } from 'components/ui/Row/Row';
import { Button } from 'components/ui/Button/Button';
import { TextBlock } from '../../ui/TextBlock/styles.TextBlock';

export const WithdrawContainer = styled('div')`
  padding: 33px 37px;
  border-radius: ${props => props.theme.borders.borderRadius1};
  border: ${props => props.theme.borders.border1};
  margin-bottom: 31px;
`;

export const TextBlockWithdraw = styled(TextBlock)`
  min-width: 210px;
  margin-bottom: 0px;
  font-size: 23px;
  margin-bottom: 4px;

  @media ${props => props.theme.queries.tablet} {
    margin-bottom: 30px;
  }
`;

export const TextBlockCoin = styled(TextBlock)`
  min-width: 61px;
  margin-bottom: 0px;
  font-size: 23px;
  margin-bottom: 4px;
  margin-left: 32px;

  @media ${props => props.theme.queries.tablet} {
    min-width: 32px;
    margin-left: 15px;
  }
`;

export const Content = styled(Row)`
  align-items: center;
  max-width: 750px;

  @media ${props => props.theme.queries.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ButtonOk = styled(Button)`
  margin-left: 14px;

  .MuiButtonBase-root {
    padding: 0 48px;
  }

  @media ${props => props.theme.queries.tablet} {
    margin-top: 20px;
    margin-left: 0;
  }
`;
