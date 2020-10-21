import React, { FC } from 'react';
import { useTranslation } from 'i18n';
import { ContainerTandaPreviewMobile, TableCellStyled } from './styles.TandaPreviewMobile';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const TandaPreviewMobile: FC = ({ children }) => {
  const { t } = useTranslation();

  return (
    <ContainerTandaPreviewMobile>
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
    </ContainerTandaPreviewMobile>
  );
};
