import { getDemoPoolContractAddress } from 'lib/utils/getDemoPoolContractAddress';
import { useCurrentNetworkInfo } from './useCurrentNetworkInfo';
import loadFirebase  from '../firebase.config';
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

const getKeyValue = (obj: Record<string, any>) => (key: string) => obj[key];

export function useTandasList(): TandaBasicInfo[] {

  const [networkName ] = useCurrentNetworkInfo();
  const [tandasList, setTandasList] = useState<Object|null>();
  useEffect(() => {
    const fetchTandas = async () => {
      try {
        const fire = await loadFirebase()
        const snapshot = await fire.database().ref(`31/tandas`).once("value")
        console.log(snapshot)
        return snapshot.toJSON()
      } catch(err) {
        console.log(err)
      }
    }
    fetchTandas().then(setTandasList)
  }, [networkName]);

  let networkDemoPools: TandaBasicInfo[] = [];

  for (const address in tandasList) {
    if (address) {
      const tanda = getKeyValue(tandasList)(address);
      networkDemoPools.push({
        assetType: tanda.underlying.symbol,
        address,
        type: tanda.tandaType,
        pricePerTicket: pricePerTicketType[<TandaType>tanda.tandaType],
        networkName: networkName,
      });
    }
  };

  return networkDemoPools;
}
