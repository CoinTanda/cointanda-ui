import { TextBlock } from 'components/ui/TextBlock/styles.TextBlock';
import { TitleText } from 'components/ui/TitleText/TitleText';
import { useTranslation } from 'i18n';
import React, { FC } from 'react';
import { FaqContainer, FaqItem, LeftColumnContainer, RightColumnContainer } from './styles.Faq';

export const Faq: FC = () => {
  const { t } = useTranslation();

  // TODO: Improve styling to take 100% of available space for both columns
  // TODO: Build the translations key values

  return (
    <>
      <TitleText>{t('Frequently Asked Questions')}</TitleText>
      <FaqContainer>
        <LeftColumnContainer>
          <FaqItem>
            <TitleText medium>{t('What is CoinTanda?')}</TitleText>
            <TextBlock>
              {t('CoinTanda is a')} <span>{t('social saving platform')}</span>.{' '}
              {t('By joining a group of people called a Tanda')},
              {t('you can win money by investing cryptocoins which generate interest')}.
            </TextBlock>
          </FaqItem>
          <FaqItem>
            <TitleText medium>{t('What do I need to participate?')}</TitleText>
            <TextBlock>
              {t('You need some')} <span>{t('cryptocoins')}</span>, {t('for this first version')}:{' '}
              <span>{t('Bitcoins')}</span>.{t('You also need a')} <span>{t('DeFi wallet')}</span>
              {t('such as Nifty or Metamask in which your coins are stored')}.
              {t('You also need this wallet to register for CoinTanda')}, {t('Under')} <span>9</span>{' '}
              {t('and')} <span>10</span>. {t('we will explain how to download and set up your wallet')}.
            </TextBlock>
          </FaqItem>
          <FaqItem>
            <TitleText medium>{t('Do I have to entrust my money to you?')}</TitleText>
            <TextBlock>
              {t('No. We never hold the private keys to your coins, you are always in')}{' '}
              <span>{t('full control')}</span>. {t('of them. CoinTanda is based on')},
              <span>{t('smart contracts')}</span>. {t('and fully')} <span>{t('decentralized')}</span>
            </TextBlock>
          </FaqItem>
          <FaqItem>
            <TitleText medium>{t('What is a provably fair raffle?')}</TitleText>
            <TextBlock>
              {t(
                'In traditional gambling, the bank would always win. It was impossible to check if it was cheating or not. In a'
              )}{' '}
              <span>{t('blockchain-based raffle')}</span>{' '}
              {t(
                'like CoinTanda, you are in control. The algorithm by which the winner gets selected is'
              )}{' '}
              <span>{t('disclosed')}</span>,{t('and can be')} <span>{t('checked')}</span>{' '}
              {t(
                'by everyone. You can therefore be sure that the raffle operator will not cheat you and that every participant has a fair chance to win.'
              )}
            </TextBlock>
          </FaqItem>
          <FaqItem>
            <TitleText medium>{t('Where does the interest come from?')}</TitleText>
            <TextBlock>
              {t(
                'CoinTanda cooperates with decentralized lending platforms which provide traders with the money they need to operate their business. Traders can make more profits if they work with higher amounts, so they borrow money (called a leverage) for which they pay an interest. In the world of decentralized finance (DeFi) all these operations between traders, lenders and lending platforms are managed by smart contracts. No humans or companies act as custodians who control other people’s money.'
              )}
            </TextBlock>
          </FaqItem>
          <FaqItem>
            <TitleText medium>{t('What are smart contracts?')}</TitleText>
            <TextBlock>
              {t('A smart contract is a piece of software that works a bit like a')}{' '}
              <span>{t('vending machine')}</span>.{' '}
              {t('You insert the required amount of cryptocoins, and the smart contract will')}{' '}
              <span>{t('automatically')}</span>
              {t('deliver what is defined by its software code. A smart contract contains all the')}
              <span>{t('rules')}</span>
              {t('and penalties between the contract parties, and it also')}
              <span>{t('enforces')}</span>
              {t('them')}.
              <br />
              {t(
                'In our case, the smart contract defines the relations between you, the lending platform that generates the interest and CoinTanda. Your coins will not be managed by a human, but by the smart contract'
              )}
              .
            </TextBlock>
          </FaqItem>
          <FaqItem>
            <TitleText medium>{t('Are smart contracts safe?')}</TitleText>
            <TextBlock>
              {t('Smart contracts are definitely more')} <span>{t('trustworthy')}</span>{' '}
              {t(
                'than human beings, as they cannot cheat you or run away with your money. Theoretically every piece of software can be hacked, but smart contracts are'
              )}{' '}
              <span>{t('open source')}</span> {t('and')} <span>{t('audited')}</span>.
              <br />
              {t(
                'Open source software can be checked and corrected by anyone who has the right skills, which makes it much more secure than proprietary software, which can only be checked by the company that produces it'
              )}
              .
              <br />
              {t('Furthermore, our smart contracts have been thoroughly')} <span>{t('audited')}</span>{' '}
              {t(
                'by a neutral company which is specialized on this. We can therefore assure you that investing your money in CoinTanda is as safe as it can be'
              )}
              .
            </TextBlock>
          </FaqItem>
        </LeftColumnContainer>
        <RightColumnContainer>
          <FaqItem>
            <TitleText medium>{t('What are RSK smart contracts?')}</TitleText>
            <TextBlock>
              {t('CoinTanda works with smart contracts by')} <span>{t('RSK')}</span>{' '}
              {t('which run on top of the')} <span>{t('Bitcoin')}</span> {t('blockchain')}.
              {t(
                'As the Bitcoin blockchain has far more computing power than any other, it makes RSK smart contracts much more secure than any other. RSK smart contracts also have much lower transaction fees than e.g. Ethereum'
              )}
              .
              <br />
              {t(
                'The only small downside is that you cannot put Bitcoins in a smart contract directly, you have to convert them into so called'
              )}{' '}
              <span>{t('Smart Bitcoins')}</span>
              {t(
                '(short: RBTC). You can always exchange your Smart Bitcoins back into Bitcoin, and as both are linked 1 to 1 (1 RBTC = 1 BTC), you don‘t need to fear to miss a Bitcoin bull run'
              )}
              .
            </TextBlock>
          </FaqItem>
          <FaqItem>
            <TitleText medium>{t('How do I get a wallet?')}</TitleText>
            <TextBlock>
              {t('Currently there are two DeFi wallets that work with CoinTanda: Nifty and Metamask')}{' '}
              <br />
              {/** //TODO: Implement links */}
              <a>{t('Download Nifty')}</a>
              <br />
              <a>{t('Download Metamask')}</a>
              <br />
              {t('Make sure to save your')} <span>{t('12 recovery words')}</span>{' '}
              {t(
                'which you need to restore your wallet in case your computer crashes. Both wallets can be protected using Hardware wallets like Ledger or Trezor'
              )}
              .
            </TextBlock>
          </FaqItem>
          <FaqItem>
            <TitleText medium>{t('How do I set up my wallet?')}</TitleText>
            <TextBlock>
              {t('Before you can start to use your wallet, you need to select')}{' '}
              <span>{t('RSK Mainnet')}</span>. {t('as your preferred network')}.
              <br />
              {t('In Nifty, you click on')} <span>{t('Select Network')}</span> {t('and choose')}{' '}
              <span>{t('RSK Mainnet')}</span>.
              <br />
              {t('In Metamask, you click on')} <span>{t('Networks')}</span> {t('and select')}{' '}
              <span>{t('Custom RPC')}</span>.
              <br />
              {t(
                'Here you need to fill in these fields, but don’t worry, you only need to do this once'
              )}
              :
              <br />
              {/** //TODO: Implement list */}
              {t('Network Name: RSK Mainnet')}
              {t('New RPC URL: https://public-node.rsk.co')}
              {t('Symbol: RBTC')}
              {t('Block Explorer URL: https://explorer.rsk.co')}
              {t('From now on, you can simply select')} <span>{t('RSK Mainnet')}</span>{' '}
              {t('in the dropdown menu on top of the window')}.
            </TextBlock>
          </FaqItem>
          <FaqItem>
            <TitleText medium>{t('How do I get Smart Bitcoins?')}</TitleText>
            <TextBlock>
              {t(
                'To get Smart Bitcoins (RBTC), one way is to send Bitcoins to a special address. Your Bitcoins will then be locked and you receive the same amount of Smart Bitcoins. You can also invert this process and lock your RBTC in order to unlock your Bitcoins. This is called a'
              )}{' '}
              <span>{t('2-way peg')}</span>.
              <br />
              {t('However, this process may take')} <span>{t('up to 15 hours')}</span>{' '}
              {t(
                'due to security reasons. It is much faster to change your Bitcoins into Smart Bitcoins on an exchange. There are several exchanges where you can convert Bitcoins into Smart Bitcoins and vice versa, e.g.'
              )}{' '}
              <span>{t('Bitfinex')}</span>, <span>{t('Coinbene')}</span> {t('or')}{' '}
              <span>{t('Kucoin')}</span>. {t('We recommend to use')} <span>{t('Coinswitch')}</span>,{' '}
              {t(
                'as you do not need to register there. You choose the pair BTC / RBTC, fill in the address of your wallet and change as many Bitcoins as you like'
              )}
              .
              <br />
              {t(
                'Remember, by using CoinTanda, your Bitcoins will not get lost. You can get them back at any time'
              )}
              .
            </TextBlock>
          </FaqItem>
        </RightColumnContainer>
      </FaqContainer>
    </>
  );
};
