import React, { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'i18n';
import { find, findKey, map, upperFirst } from 'lodash';
import { TandasContainer, TitlesContainer } from './styles.Tandas';
import { Column } from '../../ui/Column/Column';
import { TitleText } from '../../ui/TitleText/TitleText';
import { TandaPreviewDesktop } from 'components/ui/TandaPreviewDesktop/TandaPreviewDesktop';
import { TandaPreviewMobile } from 'components/ui/TandaPreviewMobile/TandaPreviewMobile';
import { TandaPreviewItemMobile } from '../../ui/TandaPreviewMobile/TandaPreviewItemMobile/TandaPreviewItemMobile';
import { ResponsiveContainer } from 'components/ui/ResponsiveContainer/ResponsiveContainer';
import { useTheme } from 'styled-components';
import { WalletContext } from 'lib/components/WalletContextProvider';
import { getDemoPoolContractAddress } from 'lib/utils/getDemoPoolContractAddress';

const demoPools = {
  ropsten: { chainId: 3, assets: ['dai', 'usdc', 'usdt'] },
  rinkeby: { chainId: 4, assets: ['dai', 'usdc', 'usdt'] },
  kovan: { chainId: 42, assets: ['dai', 'usdc', 'usdt'] },
};

export const Tandas: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  //////////////////////////////////////////////////
  //////////////// TEMP ///////////////////////////
  //////////////////////////////////////////////////

  // TODO: Implementar el error handling de PoolUI

  const walletContext = useContext(WalletContext);
  const walletNetwork = walletContext._onboard.getState().network;

  const demoNetworkName = findKey(demoPools, { chainId: walletNetwork });
  const demoPool = find(demoPools, { chainId: walletNetwork });

  let networkDemoPools = [];

  demoPool?.assets.forEach(assetType => {
    const address = getDemoPoolContractAddress(demoNetworkName, assetType);

    if (address) {
      networkDemoPools.push({
        assetType,
        address: getDemoPoolContractAddress(demoNetworkName, assetType),
      });
    }
  });

  //////////////////////////////////////////////////
  /////////////////////////////////////////////////
  //////////////////////////////////////////////////

  return (
    <TandasContainer>
      <Column>
        <TitlesContainer>
          <TitleText>{t('Welcome to CoinTanda!')}</TitleText>
          <TitleText small>{t('You may join any of these Tandas')}</TitleText>
        </TitlesContainer>
        <ResponsiveContainer hideIn={theme.screenSizes.tabletXL}>
          {networkDemoPools.map(n => (
            <TandaPreviewDesktop
              prizePool={n.address}
              demoNetworkName={demoNetworkName}
              key={n.address}
            />
          ))}
        </ResponsiveContainer>
        <ResponsiveContainer showIn={theme.screenSizes.tabletXL}>
          <TandaPreviewMobile>
            <TandaPreviewItemMobile darkBackground={true} />
            <TandaPreviewItemMobile darkBackground={false} />
            <TandaPreviewItemMobile darkBackground={true} iconColor={'gold'} />
          </TandaPreviewMobile>
        </ResponsiveContainer>
      </Column>
    </TandasContainer>
  );
};
