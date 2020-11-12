import { TableCell } from '@material-ui/core';
import styled from 'styled-components';

export const ContainerTandaBasicPreview = styled('div')`
  position: relative;
  width: 100%;
  min-height: 198px;
  padding: 2px 11px;
  padding-bottom: 26px;
  border-radius: ${props => props.theme.borders.borderRadius1};
  border: ${props => props.theme.borders.border1};
  margin-bottom: 31px;

  .MuiTableCell-root {
    border: none;
    font-family: ${props => props.theme.fonts.font1};
    font-size: 16px;
    padding: 0px;
  }

  .MuiTableRow-root {
    height: 57px;
  }
`;

export const TableCellStyled = styled(TableCell)`
  &.MuiTableCell-root {
    font-weight: 800;
  }
`;
