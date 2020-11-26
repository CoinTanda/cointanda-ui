import { WalletContext } from 'lib/components/WalletContextProvider';
import { useContext } from 'react';
import { findKey, find } from 'lodash';
import { DemoTanda, useSupportedNetworksList } from './useSupportedNetworksList';

export function useCurrentNetworkInfo(): [networkName: string, demoPool: DemoTanda] {
  const walletContext = useContext(WalletContext);
  const walletNetwork = walletContext._onboard.getState().network;
  const demoTandas = useSupportedNetworksList();
  const networkName = findKey(demoTandas, { chainId: walletNetwork }) as string;
  const demoPool = find(demoTandas, { chainId: walletNetwork }) as DemoTanda;

  return [networkName, demoPool];
}
