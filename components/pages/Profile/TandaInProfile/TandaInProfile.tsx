import { IconTriangle } from 'components/ui/IconTriangle/IconTriangle';
import { Link } from 'components/ui/Link/Link';
import { useTranslation } from 'i18n';
import React, { FC } from 'react';
import { IconTanda, Invite, Tanda, TandaData, TandaInfoText } from './styles.TandaInProfile';
import tandaIconSilver from '../../../../assets/Silver_Tanda_80.png';
import tandaIconGold from '../../../../assets/Gold_Tanda_80.png';
import tandaIconBlack from '../../../../assets/Black_Tanda_80.png';
import { useTandaInfo } from '../../../../hooks/useTandaInfo';
import { TandaType } from '../../../../hooks/useTandasList';
import { displayAmountInEther } from 'lib/utils/displayAmountInEther';
import { useEffect } from 'react';

interface PropsTandaInProfile {
  prizePoolAddress: string;
  onTandaInfo: (userHasFounds: boolean) => void;
}

export const TandaInProfile: FC<PropsTandaInProfile> = ({ prizePoolAddress, onTandaInfo }) => {
  const { t } = useTranslation();
  const tandaInfo = useTandaInfo(prizePoolAddress);
  const {
    loading,
    type,
    ticketName,
    usersChainValues,
    tokenDecimals,
    tokenSymbol,
    userHasFunds,
  } = tandaInfo;

  useEffect(() => {
    if (userHasFunds != null) {
      onTandaInfo(userHasFunds);
    }
  }, [userHasFunds]);

  if (loading || !userHasFunds) {
    return null;
  }

  return (
    <Tanda>
      <IconTanda
        src={
          type === TandaType.Gold
            ? tandaIconGold
            : type === TandaType.Black
            ? tandaIconBlack
            : tandaIconSilver
        }
      />
      <TandaData>
        <Link href="/tandas/[prizePoolAddress]" as={`/tandas/${prizePoolAddress}`}>
          {ticketName}
        </Link>
        <TandaInfoText>
          {t('I have')}{' '}
          {usersChainValues?.usersTicketBalance &&
            displayAmountInEther(usersChainValues.usersTicketBalance, {
              decimals: tokenDecimals,
            })}{' '}
          {tokenSymbol}
        </TandaInfoText>
      </TandaData>
      <Invite>
        <IconTriangle />
        <Link href={'/win-members'}>{t('Invite Friends')}</Link>
      </Invite>
    </Tanda>
  );
};
