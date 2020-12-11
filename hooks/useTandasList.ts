import { getDemoPoolContractAddress } from 'lib/utils/getDemoPoolContractAddress';
import { useCurrentNetworkInfo } from './useCurrentNetworkInfo';

export function useTandasList(): TandaBasicInfo[] {
  const [demoNetworkName, demoPool] = useCurrentNetworkInfo();
  let networkDemoPools: TandaBasicInfo[] = [];

  const tandaTypes: Record<string, TandaType> = {
    // reference-app.pooltogether.com addresses:
    '0x4706856FA8Bb747D50b4EF8547FE51Ab5Edc4Ac2': TandaType.Black,
    '0xde5275536231eCa2Dd506B9ccD73C028e16a9a32': TandaType.Silver,
    '0xDCB24C5C96D3D0677add5B688DCD144601410244': TandaType.Gold,

    // localhost addresses:
    '0xB6d3dd2CBf90c9cB9aBC2CC7923Ec3EdDA238830': TandaType.Black,
    '0xc29DF1D3596198f7b9DD3112FFbe24059Ea8f7E7': TandaType.Silver,
    '0xCd36B1B0D81499f455C5DF6893d5030D284E22aD': TandaType.Gold,
  };

  const pricePerTicketType: Record<TandaType, number> = {
    [TandaType.Black]: 1,
    [TandaType.Gold]: 0.1,
    [TandaType.Silver]: 0.01,
  };

  demoPool?.assets.forEach(assetType => {
    const address: string = getDemoPoolContractAddress(demoNetworkName, assetType);
    const type: TandaType = tandaTypes[address];

    if (address) {
      networkDemoPools.push({
        assetType,
        address,
        type,
        pricePerTicket: pricePerTicketType[type],
        networkName: demoNetworkName,
      });
    }
  });

  return networkDemoPools;
}

export interface TandaBasicInfo {
  assetType: string;
  address: string;
  pricePerTicket: number;
  type: TandaType;
  networkName: string;
}

export enum TandaType {
  Black = 'Black',
  Silver = 'Silver',
  Gold = 'Gold',
}
