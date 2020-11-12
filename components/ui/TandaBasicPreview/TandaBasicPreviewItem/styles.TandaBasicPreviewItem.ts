import styled from 'styled-components';
import TableRow from '@material-ui/core/TableRow';
import { TableCell } from '@material-ui/core';

export const ContainerTandaBasicPreviewItem = styled(TableRow).withConfig({
  shouldForwardProp: prop => !['darkBackground'].includes(prop),
})<{ darkBackground?: boolean }>`
  .MuiTableCell-root {
    border: none;
    font-family: ${props => props.theme.fonts.font1};
    padding: 0px;
    ${props => (props.darkBackground ? `background-color: ${props.theme.colors.background2}` : '')};
    font-weight: 600;
  }
`;

export const NameCell = styled(TableCell)`
  &.MuiTableCell-body {
    color: ${props => props.theme.colors.text6};
  }
`;

export const TandaIcon = styled('img')`
  height: 16px;
  margin: 0px 2px;
  margin-top: 5px;
`;
