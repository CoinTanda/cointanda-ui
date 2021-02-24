import { WalletContext } from 'lib/components/WalletContextProvider';
import { useContext } from 'react';
import { findKey } from 'lodash';
import { useSupportedNetworksList } from './useSupportedNetworksList';


export function useCurrentNetworkInfo(): [networkName: string, chainId: string] {
  const walletContext = useContext(WalletContext);
  const walletNetwork = walletContext._onboard.getState().network;
  const demoTandas = useSupportedNetworksList();
  const networkName = findKey(demoTandas, { chainId: walletNetwork }) as string;

  return [networkName, walletNetwork];
}
