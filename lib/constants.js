export const SUPPORTED_NETWORKS = [31, 31337, 1234]

export const SECONDS_PER_BLOCK = 30

export const DEFAULT_TOKEN_PRECISION = 18

export const PRIZE_POOL_TYPE = Object.freeze({
    compound: 'compound',
    sovryn: 'sovryn',
    stake: 'stake'
})

export const contractAddresses = {
    31: {
        dai: {
            prizePool: "0x05612fa804ce9a4345e76a46b339b6209da806e4",
            prizeStrategy: "0x1145b18D021e768876AB98a2651A2AcE4F7EFc2a",
            prizePoolType: PRIZE_POOL_TYPE.compound
        },
        doc: {
            prizePool: "0x3095e12fe9e51b32943362d8f8ff6b1ff3028de8",
            prizeStrategy: "0xa84351fAe6D3C1b4A459D157563F370Ee5c938c2",
            prizePoolType: PRIZE_POOL_TYPE.sovryn
        },
    }
}