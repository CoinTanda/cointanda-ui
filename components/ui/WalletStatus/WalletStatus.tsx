import React, { useContext } from 'react';
import classnames from 'classnames';
import FeatherIcon from 'feather-icons-react';

import { WalletContext } from 'lib/components/WalletContextProvider';
import { networkColorClassname } from 'lib/utils/networkColorClassname';
import { chainIdToName } from 'lib/utils/chainIdToName';
import { shorten } from 'lib/utils/shorten';
import { ButtonWalletStatus } from './styles.WalletStatus';
import { useTranslation } from 'i18n';

export const WalletStatus = () => {
  const walletContext = useContext(WalletContext);
  const { _onboard } = walletContext || {};
  const currentState = _onboard.getState();
  const { t } = useTranslation();

  let address;
  let walletName;
  let chainId = 1;

  if (currentState) {
    address = currentState.address;
    walletName = currentState.wallet.name;
    chainId = currentState.appNetworkId;
  }

  let networkName = null;

  if (chainId && chainId !== 1) {
    networkName = (
      <span className={classnames(networkColorClassname(chainId), 'inline-block')}>
        {chainIdToName(chainId)}
      </span>
    );
  }

  const handleConnect = e => {
    e.preventDefault();

    walletContext.handleConnectWallet();
  };

  if (address && walletName) {
    return (
      <>
        <div className="leading-snug text-highlight-3 trans">
          <span className="text-highlight-3 hover:text-highlight-1 overflow-ellipsis block w-full no-underline">
            {shorten(address)}
          </span>

          <span className="block sm:inline-block rounded-lg text-default capitalize">
            {walletName} {networkName}
          </span>
        </div>

        <button
          onClick={() => _onboard.walletReset()}
          className={classnames(
            'text-lightPurple-500 hover:text-white trans ml-2 outline-none focus:outline-none',
            'block border rounded-full w-4 h-4 sm:w-5 sm:h-5 text-center text-lg',
            'border-purple-700 hover:bg-lightPurple-700',
            'trans'
          )}
        >
          <FeatherIcon icon="x" className={classnames('w-3 h-3 hover:text-white m-auto')} />
        </button>
      </>
    );
  } else {
    return <ButtonWalletStatus onClick={handleConnect}>{t('Sign in')}</ButtonWalletStatus>;
  }
};
