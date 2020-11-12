import React, { FC } from 'react';
import { useTranslation } from 'i18n';
import { ContainerTandaBasicPreview, TableCellStyled } from './styles.TandaBasicPreview';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const TandaBasicPreview: FC = ({ children }) => {
  const { t } = useTranslation();

  return (
    <ContainerTandaBasicPreview>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCellStyled>{t('Name')}</TableCellStyled>
            <TableCellStyled align="right">{t('Coin')}</TableCellStyled>
            <TableCellStyled align="right">{t('Prize')}</TableCellStyled>
            <TableCellStyled align="right">{t('Next Raffle')}</TableCellStyled>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </ContainerTandaBasicPreview>
  );
};
