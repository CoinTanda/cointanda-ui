import { batch, contract } from '@pooltogether/etherplex'
import { ethers } from 'ethers'

import ERC20Abi from 'ERC20Abi'
import CTokenAbi from '@pooltogether/pooltogether-contracts/abis/CTokenInterface'
import PrizePoolAbi from '@pooltogether/pooltogether-contracts/abis/PrizePool'
import CompoundPrizePoolAbi from '@pooltogether/pooltogether-contracts/abis/CompoundPrizePool'
import SingleRandomWinnerAbi from '@pooltogether/pooltogether-contracts/abis/SingleRandomWinner'
import { ITokenAbi } from 'lib/abis/ITokenAbi';
import { SovrynPrizePoolAbi } from 'lib/abis/SovrynPrizePoolAbi';
import { PRIZE_POOL_TYPE, contractAddresses } from 'lib/constants';
import loadFirebase  from '../../firebase.config';

import { readProvider } from 'lib/utils/getReadProvider'

export const fetchTandas = async (chainId) => {
  const fire = await loadFirebase()
  const snapshot = await fire.database().ref(`${chainId ?? '31'}/tandas`).once("value")
  return snapshot.toJSON()
}

export const fetchTanda = async (chainId, poolAddress) => {
  const fire = await loadFirebase()
  const snapshot = await fire.database().ref(`${chainId ?? '31'}/tandas/${poolAddress.toLowerCase()}`).once("value")
  return snapshot.toJSON()
}

export const fetchPoolAddresses = async (
  provider,
  poolAddresses,
  setPoolAddresses,
  tanda,
) => {
  const {
    prizePool,
    ticket
  } = poolAddresses

  //let prizePoolType;
  // for (const ticker in contractAddresses[provider.network.chainId]) {
  //   if (contractAddresses[provider.network.chainId][ticker].prizePool === prizePool) {
  //     prizePoolType = contractAddresses[provider.network.chainId][ticker].prizePoolType
  //     break;
  //   }
  // }
  if (prizePool && !ticket) {
    try {
      if(tanda.poolType === PRIZE_POOL_TYPE.compound) {
        // Query Prize Pool
        // const etherplexPrizePoolContract = contract(
        //   'prizePool',
        //   CompoundPrizePoolAbi,
        //   prizePool
        // )
        // const poolValues = await batch(
        //   provider,
        //   etherplexPrizePoolContract
        //     .token()
        //     .cToken()
        //     .prizeStrategy()
        // )
        // const {
        //   token,
        //   cToken,
        //   prizeStrategy,
        // } = poolValues.prizePool


        // // Query Prize Strategy
        // const etherplexPrizeStrategyContract = contract(
        //   'prizeStrategy',
        //   SingleRandomWinnerAbi,
        //   prizeStrategy[0]
        // )
        // const strategyValues = await batch(
        //   provider,
        //   etherplexPrizeStrategyContract
        //     // .governor()
        //     .rng()
        //     .sponsorship()
        //     .ticket()
        // )
        // const {
        //   // governor,
        //   rng,
        //   sponsorship,
        //   ticket,
        // } = strategyValues.prizeStrategy


        // console.log('token[0]',token[0], 'cToken[0]', cToken[0], 'prizeStrategy[0]', prizeStrategy[0],
        //   'rng[0]', rng[0], 'sponsorship[0]', sponsorship[0], 'ticket[0]', ticket[0], 'prizePoolType', prizePoolType)
        // Update State
        setPoolAddresses(existingValues => ({
          ...existingValues,
          token: tanda.token.address, //token[0],
          cToken: tanda.cToken.address, //cToken[0],
          governor: tanda.govertnor, //governor[0],
          prizeStrategy: tanda.prizeStrategyAddress, //prizeStrategy[0],
          rng: tanda.rngAddress, //rng[0],
          sponsorship: tanda.sponsorship.address, //sponsorship[0],
          ticket: tanda.ticket.address, //ticket[0],
          prizePoolType: tanda.poolType,
        }))
      }

      if(tanda.poolType === PRIZE_POOL_TYPE.sovryn) {
        // Query Prize Pool
        // const etherplexPrizePoolContract = contract(
        //   'prizePool',
        //   SovrynPrizePoolAbi,
        //   prizePool
        // )
        // const poolValues = await batch(
        //   provider,
        //   etherplexPrizePoolContract
        //     .token()
        //     .iToken()
        //     .prizeStrategy()
        // )
        // const {
        //   token,
        //   iToken,
        //   prizeStrategy,
        // } = poolValues.prizePool


        // // Query Prize Strategy
        // const etherplexPrizeStrategyContract = contract(
        //   'prizeStrategy',
        //   SingleRandomWinnerAbi,
        //   prizeStrategy[0]
        // )
        // const strategyValues = await batch(
        //   provider,
        //   etherplexPrizeStrategyContract
        //     // .governor()
        //     .rng()
        //     .sponsorship()
        //     .ticket()
        // )
        // const {
        //   // governor,
        //   rng,
        //   sponsorship,
        //   ticket,
        // } = strategyValues.prizeStrategy

        // Update State
        setPoolAddresses(existingValues => ({
          ...existingValues,
          token: tanda.token.address, //token[0],
          iToken: tanda.iToken.address, //cToken[0],
          governor: tanda.govertnor, //governor[0],
          prizeStrategy: tanda.prizeStrategyAddress, //prizeStrategy[0],
          rng: tanda.rngAddress, //rng[0],
          sponsorship: tanda.sponsorship.address, //sponsorship[0],
          ticket: tanda.ticket.address, //ticket[0],
          prizePoolType: tanda.poolType,
        }))
      }

    } catch (e) {
      console.error(e)

      setPoolAddresses({
        error: true,
        errorMessage: e.message,
      })

      return
    }
  }
}

export const fetchGenericChainValues = async (
  provider,
  poolAddresses,
  setGenericChainValues,
  tanda,
) => {
  const {
    prizeStrategy,
    ticket,
    sponsorship,
    token,
    cToken,
    iToken,
    prizePool,
    prizePoolType,
  } = poolAddresses

  if (
    provider &&
    prizeStrategy &&
    ticket &&
    sponsorship &&
    prizePool
  ) {
    try {
      const etherplexPrizeStrategyContract = contract(
        'singleRandomWinner',
        SingleRandomWinnerAbi,
        prizeStrategy
      )
      const etherplexTicketContract = contract(
        'ticket',
        ERC20Abi,
        ticket
      )
      const etherplexSponsorshipContract = contract(
        'sponsorship',
        ERC20Abi,
        sponsorship
      )
      const etherplexTokenContract = contract(
        'token',
        ERC20Abi,
        token
      )
      const etherplexPrizePoolContract = contract(
        'prizePool',
        PrizePoolAbi,
        prizePool
      )
      if(prizePoolType === PRIZE_POOL_TYPE.compound) {
        const etherplexCTokenContract = contract(
          'cToken',
          CTokenAbi,
          cToken
        )

        const values = await batch(
          provider,
          etherplexPrizeStrategyContract
            .isRngRequested() // used to determine if the pool is locked
            .canStartAward()
            .canCompleteAward()
            .prizePeriodRemainingSeconds(),
          etherplexTicketContract
            // .name()
            // .symbol()
            .totalSupply(),
            //.decimals(),
           etherplexSponsorshipContract
          //   .name()
          //   .symbol()
             .totalSupply(),
          // etherplexTokenContract
          //   .name()
          //   .decimals()
          //   .symbol(),
          etherplexPrizePoolContract
            .captureAwardBalance()
            .creditPlanOf(ticket)
            .maxExitFeeMantissa(),
          etherplexCTokenContract
            .supplyRatePerBlock()
        )

        const poolTotalSupply = ethers.utils.bigNumberify(values.ticket.totalSupply[0])
          .add(values.sponsorship.totalSupply[0])

        let decimals = tanda.token.decimals
        // default to 18 if the ERC20 contract returns 0 for decimals
        decimals = decimals === 0 ? 18 : decimals

        setGenericChainValues(existingValues => ({
          ...existingValues,
          canStartAward: values.singleRandomWinner.canStartAward[0],
          canCompleteAward: values.singleRandomWinner.canCompleteAward[0],
          supplyRatePerBlock: values.cToken.supplyRatePerBlock[0],
          isRngRequested: values.singleRandomWinner.isRngRequested[0],
          prizePeriodRemainingSeconds: values.singleRandomWinner.prizePeriodRemainingSeconds[0],
          sponsorshipName: tanda.sponsorship.name,
          sponsorshipSymbol: tanda.sponsorship.symbol,
          sponsorshipTotalSupply: values.sponsorship.totalSupply[0],
          ticketName: tanda.ticket.name,
          ticketSymbol: tanda.ticket.symbol,
          ticketDecimals: tanda.ticket.decimals,
          ticketTotalSupply: values.ticket.totalSupply[0],
          awardBalance: values.prizePool.captureAwardBalance[0],
          ticketCreditRateMantissa: values.prizePool.creditPlanOf.creditRateMantissa,
          ticketCreditLimitMantissa: values.prizePool.creditPlanOf.creditLimitMantissa,
          maxExitFeeMantissa: values.prizePool.maxExitFeeMantissa[0],
          poolTotalSupply: poolTotalSupply,
          tokenDecimals: decimals,
          tokenSymbol: tanda.token.symbol,
          tokenName: tanda.token.name,
          loading: false,
        }))
      }
      if(prizePoolType === PRIZE_POOL_TYPE.sovryn) {
        const etherplexITokenContract = contract(
          'iToken',
          ITokenAbi,
          iToken
        )

        const values = await batch(
          provider,
          etherplexPrizeStrategyContract
            .isRngRequested() // used to determine if the pool is locked
            .canStartAward()
            .canCompleteAward()
            .prizePeriodRemainingSeconds(),
          etherplexTicketContract
            // .name()
            // .symbol()
            .totalSupply(),
            //.decimals(),
          etherplexSponsorshipContract
            // .name()
            // .symbol()
            .totalSupply(),
          // etherplexTokenContract
          //   .name()
          //   .decimals()
          //   .symbol(),
          etherplexPrizePoolContract
            .captureAwardBalance()
            .creditPlanOf(ticket)
            .maxExitFeeMantissa(),
          etherplexITokenContract
            .supplyInterestRate()
        )

        const poolTotalSupply = ethers.utils.bigNumberify(values.ticket.totalSupply[0])
          .add(values.sponsorship.totalSupply[0])

        let decimals = tanda.token.decimals
        // default to 18 if the ERC20 contract returns 0 for decimals
        decimals = decimals === 0 ? 18 : decimals

        setGenericChainValues(existingValues => ({
          ...existingValues,
          canStartAward: values.singleRandomWinner.canStartAward[0],
          canCompleteAward: values.singleRandomWinner.canCompleteAward[0],
          supplyRatePerBlock: (values.iToken.supplyInterestRate[0] / 1051200).toFixed(0), // amount of blocks per year ,
          isRngRequested: values.singleRandomWinner.isRngRequested[0],
          prizePeriodRemainingSeconds: values.singleRandomWinner.prizePeriodRemainingSeconds[0],
          sponsorshipName: tanda.sponsorship.name,
          sponsorshipSymbol: tanda.sponsorship.symbol,
          sponsorshipTotalSupply: values.sponsorship.totalSupply[0],
          ticketName: tanda.ticket.name,
          ticketSymbol: tanda.ticket.symbol,
          ticketDecimals: tanda.ticket.decimals,
          ticketTotalSupply: values.ticket.totalSupply[0],
          awardBalance: values.prizePool.captureAwardBalance[0],
          ticketCreditRateMantissa: values.prizePool.creditPlanOf.creditRateMantissa,
          ticketCreditLimitMantissa: values.prizePool.creditPlanOf.creditLimitMantissa,
          maxExitFeeMantissa: values.prizePool.maxExitFeeMantissa[0],
          poolTotalSupply: poolTotalSupply,
          tokenDecimals: decimals,
          tokenSymbol: tanda.token.symbol,
          tokenName: tanda.token.name,
          loading: false,
        }))
      }
    } catch (e) {

      setGenericChainValues({
        error: true,
        errorMessage: e.message,
      })

      console.warn(e.message)
    }

  }
}

export const fetchUsersChainValues = async (
  provider,
  usersAddress,
  poolAddresses,
  setUsersChainValues,
) => {
  const {
    token,
    prizePool,
    ticket,
  } = poolAddresses

  if (
    token &&
    prizePool &&
    ticket
  ) {
    try {
      const etherplexPrizePoolContract = contract(
        'prizePool',
        CompoundPrizePoolAbi,
        prizePool
      )
      const etherplexTicketContract = contract(
        'ticket',
        ERC20Abi,
        ticket
      )
      const etherplexTokenContract = contract(
        'token',
        ERC20Abi,
        token
      )

      const values = await batch(
        provider,
        etherplexPrizePoolContract
          .timelockBalanceOf(usersAddress)
          .timelockBalanceAvailableAt(usersAddress),
        etherplexTicketContract
          .balanceOf(usersAddress),
        etherplexTokenContract
          .balanceOf(usersAddress)
          .allowance(usersAddress, prizePool)
      )

      setUsersChainValues(existingValues => ({
        ...existingValues,
        usersTicketBalance: values.ticket.balanceOf[0],
        usersTokenAllowance: values.token.allowance[0],
        usersTokenBalance: values.token.balanceOf[0],
        usersTimelockBalanceAvailableAt: values.prizePool.timelockBalanceAvailableAt[0],
        usersTimelockBalance: values.prizePool.timelockBalanceOf[0],
        loading: false,
      }))
    } catch (e) {
      setUsersChainValues({
        error: true,
        errorMessage: e.message,
      })

      console.warn(e.message)
    }

  }
}

export const fetchChainData = async (
  networkName,
  usersAddress,
  poolAddresses,
  setPoolAddresses,
  setGenericChainValues,
  setUsersChainValues,
) => {
  const provider = await readProvider(networkName)
  const tanda = await fetchTanda(provider.network.chainId, poolAddresses.prizePool) ?? {};

  await fetchPoolAddresses(provider, poolAddresses, setPoolAddresses, tanda)
  await fetchGenericChainValues(provider, poolAddresses, setGenericChainValues, tanda)

  if (usersAddress) {
    await fetchUsersChainValues(provider, usersAddress, poolAddresses, setUsersChainValues)
  }
}
