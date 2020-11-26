import { getDemoPoolContractAddress } from 'lib/utils/getDemoPoolContractAddress';
import { useCurrentNetworkInfo } from './useCurrentNetworkInfo';

export function useTandasBasicInfo(): TandaBasicInfo[] {
  const [demoNetworkName, demoPool] = useCurrentNetworkInfo();

  let networkDemoPools: TandaBasicInfo[] = [];

  demoPool?.assets.forEach(assetType => {
    const address: string = getDemoPoolContractAddress(demoNetworkName, assetType);

    if (address) {
      networkDemoPools.push({
        assetType,
        address: getDemoPoolContractAddress(demoNetworkName, assetType) as string,
        networkName: demoNetworkName,
      });
    }
  });

  return networkDemoPools;
}

export interface TandaBasicInfo {
  assetType: string;
  address: string;
  networkName: string;
}
