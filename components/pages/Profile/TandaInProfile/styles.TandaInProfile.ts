import { Column } from 'components/ui/Column/Column';
import { Row } from 'components/ui/Row/Row';
import styled from 'styled-components';

export const Tanda = styled(Row)`
  flex-wrap: wrap;
  align-items: center;
  min-width: 260px;
  margin-bottom: 20px;
`;

export const TandaData = styled(Column)`
  width: 180px;
`;

export const IconTanda = styled('img')`
  height: 43px;
  margin-right: 15px;
`;

export const TandaInfoText = styled(Column)`
  font-weight: 600;
  font-size: 17px;
  color: ${props => props.theme.colors.text3};
`;

export const Invite = styled('div')`
  height: 100%;
`;
