//import { contractAddresses } from '@pooltogether/current-pool-data'

import { nameToChainId } from './nameToChainId'

const contractAddresses = {
  31: {
    dai: {prizePool: "0x05612fa804ce9a4345e76a46b339b6209da806e4", prizeStrategy: "0x1145b18D021e768876AB98a2651A2AcE4F7EFc2a"},
  }
}
export const getDemoPoolContractAddress = (networkName, ticker) => {
  let chainId = nameToChainId(networkName)
  try {
    return contractAddresses[chainId]?.[`${ticker.toLowerCase()}`]?.prizePool
  } catch (e) {
    console.warn('could not get pool address (no chainId?)')
    console.warn(e.message)
  }
}
