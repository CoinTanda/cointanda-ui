export function useSupportedNetworksList(): DemoTandas {
  return {
    ropsten: { chainId: 3, assets: ['dai', 'usdc', 'usdt'] },
    rinkeby: { chainId: 4, assets: ['dai', 'usdc', 'usdt'] },
    kovan: { chainId: 42, assets: ['dai', 'usdc', 'usdt'] },
  };
}

export interface DemoTandas {
  ropsten: DemoTanda;
  rinkeby: DemoTanda;
  kovan: DemoTanda;
}

export interface DemoTanda {
  chainId: number;
  assets: string[];
}
