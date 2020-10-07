import React, { useContext } from 'react';

import { SUPPORTED_NETWORKS } from 'lib/constants';
import { WalletContext } from 'lib/components/WalletContextProvider';
import { chainIdToName } from 'lib/utils/chainIdToName';

export const SupportedWalletIndicator = ({}) => {
  let chainId;
  const walletContext = useContext(WalletContext);
  const { _onboard } = walletContext || {};

  if (!_onboard.getState().wallet.name) {
    return null;
  }

  chainId = _onboard.getState().appNetworkId;
  const networkName = chainIdToName(chainId);

  const networkSupported = SUPPORTED_NETWORKS.includes(chainId);

  let networkWords = 'mainnet (or unknown network) 🥵';
  if (networkSupported) {
    networkWords = `the ${networkName} testnet 👍`;
  }

  return (
    <div>
      <div>Your wallet is currently set to {networkWords}</div>
    </div>
  );
};
