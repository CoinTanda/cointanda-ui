import React, { FC } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { ContainerTandaBasicPreviewItem, NameCell, TandaIcon } from './styles.TandaBasicPreviewItem';
import tandaIconSilver from '../../../../assets/tanda_silver_40.png';
import tandaIconGold from '../../../../assets/tanda_gold_40.png';
import { useTandaInfo } from '../../../../hooks/useTandaInfo';
import { Link } from '../../Link/Link';
import { displayAmountInEther } from 'lib/utils/displayAmountInEther';

interface PropsTandaPreviewItem {
  address: string;
  iconColor?: 'silver' | 'gold';
  darkBackground?: boolean;
}

export const TandaBasicPreviewItem: FC<PropsTandaPreviewItem> = ({
  address,
  darkBackground,
  iconColor,
}) => {
  const {
    ticketName,
    prizeEstimate,
    tokenDecimals,
    tokenSymbol,
    sponsorshipName,
    prizePeriodRemainingSeconds,
  } = useTandaInfo(address);

  return (
    <ContainerTandaBasicPreviewItem darkBackground={darkBackground}>
      <TableCell align="center">
        <TandaIcon src={iconColor === 'gold' ? tandaIconGold : tandaIconSilver} />
      </TableCell>
      <NameCell component="th" scope="row">
        <Link href="/tandas/[prizePoolAddress]" as={`/tandas/${address}`}>
          {ticketName}
        </Link>
      </NameCell>
      <TableCell align="right">{sponsorshipName}</TableCell>
      <TableCell align="right">
        {displayAmountInEther(prizeEstimate, { precision: 2, decimals: tokenDecimals })} {tokenSymbol}
      </TableCell>
      <TableCell align="right">
        {prizePeriodRemainingSeconds != null ? prizePeriodRemainingSeconds.toString() : ''}
      </TableCell>
    </ContainerTandaBasicPreviewItem>
  );
};
