import { useCurrentNetworkInfo } from './useCurrentNetworkInfo';
import { fetchTanda, fetchTandas } from 'lib/utils/fetchChainData';
import { useEffect, useState } from 'react';

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

export const pricePerTicketType: Record<TandaType, number> = {
  [TandaType.Black]: 1000,
  [TandaType.Gold]: 100,
  [TandaType.Silver]: 10,
};

// export const getKeyValue = (obj: Record<string, any>) => (key: string) => obj[key];



export function useTanda(networkName: string, chainId : string, poolAddress: string): TandaBasicInfo | undefined {
  const [tanda, setTanda] = useState<Record<string, any> | null | undefined>();
  useEffect(() => {
    fetchTanda(chainId, poolAddress)?.then(setTanda);
  }, [chainId, poolAddress]);

  let tandaInfo: TandaBasicInfo|undefined;
  if(tanda) {
    tandaInfo = {
      assetType: tanda.token.symbol,
      address: poolAddress,
      type: tanda.tandaType,
      pricePerTicket: pricePerTicketType[<TandaType>tanda.tandaType],
      networkName: networkName,
    }
  }
  return tandaInfo;
}

export function useTandasList(): TandaBasicInfo[] {
  const [networkName, chainId] = useCurrentNetworkInfo();
  const [tandasList, setTandasList] = useState<Record<string, any> | null | undefined>();
  useEffect(() => {
    fetchTandas(chainId)?.then(setTandasList);
  }, [chainId]);

  let networkDemoPools: TandaBasicInfo[] = [];

  for (const address in tandasList) {
    if (address) {
      const tanda = tandasList[address];
      networkDemoPools.push({
        assetType: tanda.token.symbol,
        address,
        type: tanda.tandaType,
        pricePerTicket: pricePerTicketType[<TandaType>tanda.tandaType],
        networkName: networkName,
      });
    }
  };

  return networkDemoPools;
}
