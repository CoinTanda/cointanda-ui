import React, { FC } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { ContainerTandaItemMobile, NameCell, TandaIcon } from './styles.TandaPreviewItemMobile';
import tandaIconSilver from '../../../../assets/tanda_silver_40.png';
import tandaIconGold from '../../../../assets/tanda_gold_40.png';

interface PropsTandaPreviewItem {
  iconColor?: 'silver' | 'gold';
  darkBackground?: boolean;
}

export const TandaPreviewItemMobile: FC<PropsTandaPreviewItem> = ({ darkBackground, iconColor }) => {
  return (
    <ContainerTandaItemMobile darkBackground={darkBackground}>
      <TableCell align="center">
        <TandaIcon src={iconColor === 'gold' ? tandaIconGold : tandaIconSilver} />
      </TableCell>
      <NameCell component="th" scope="row">
        Alice
      </NameCell>
      <TableCell align="right">BTC</TableCell>
      <TableCell align="right">0.00233</TableCell>
      <TableCell align="right">12 July</TableCell>
    </ContainerTandaItemMobile>
  );
};
