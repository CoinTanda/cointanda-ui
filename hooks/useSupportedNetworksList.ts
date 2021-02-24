export function useSupportedNetworksList(): DemoTandas {
  return {
    rsktestnet: { chainId: 31, assets: ['doc', 'usdt'] },
    //rskmainnet: { chainId: 30, assets: ['dai', 'usdc', 'usdt'] }
  };
}

export interface DemoTandas {
  rsktestnet: DemoTanda;
  // rskmainnet: DemoTanda;
}

export interface DemoTanda {
  chainId: number;
  assets: string[];
}
