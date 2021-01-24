import { TextBlock } from 'components/ui/TextBlock/styles.TextBlock';
import { TitleText } from 'components/ui/TitleText/TitleText';
import { useTranslation } from 'i18n';
import React, { FC } from 'react';
import { Link } from '../../ui/Link/Link';
import {
  FaqContainer,
  FaqItem,
  LeftColumnContainer,
  IsolatedAreaContainer,
  RightColumnContainer,
} from './styles.Faq';

export const Faq: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <TitleText>{t('Frequently Asked Questions')}</TitleText>
      <FaqContainer>
        <LeftColumnContainer>
          <FaqItem id="1">
            <TitleText medium>{t('What is CoinTanda?')}</TitleText>
            <TextBlock>
              {t('CoinTanda is a')} <span>{t('social saving platform')}</span>.{' '}
              {t('By joining a group of people called a Tanda')}, {t('you can win money')}.
            </TextBlock>
          </FaqItem>
          <FaqItem id="2">
            <TitleText medium>{t('What do I need to participate?')}</TitleText>
            <TextBlock>
              {t('You need some')} <span>{t('cryptocoins')}</span>, {t('for this first version')}:{' '}
              <span>{t('DOC')}</span> ({t('Dollar on Chain')}). {t('You also need a')} <span>{t('DeFi wallet')}</span>{' '}
              {t('such as Nifty')}. {t('You will need this wallet')}, {t('Under')} <span>9</span>{' '}
              {t('and')} <span>10</span> {t('we will explain')}.
            </TextBlock>
          </FaqItem>
          <FaqItem id="3">
            <TitleText medium>{t('Do I have to entrust my money to you?')}</TitleText>
            <TextBlock>
              {t('No We never')} <span>{t('full control')}</span> {t('of them. CoinTanda is based on')},{' '}
              <span>{t('smart contracts')}</span> {t('and fully')} <span>{t('decentralized')}</span>.
            </TextBlock>
          </FaqItem>
          <FaqItem id="4">
            <TitleText medium>{t('What is a provably fair raffle?')}</TitleText>
            <TextBlock>
              {t('In traditional gambling')} <span>{t('blockchain-based raffle')}</span>{' '}
              {t('like CoinTanda, you are in control')} <span>{t('disclosed')}</span>, {t('and can be')}{' '}
              <span>{t('checked')}</span> {t('by everyone')}
            </TextBlock>
          </FaqItem>
          <FaqItem id="5">
            <TitleText medium>{t('Where does the interest come from?')}</TitleText>
            <TextBlock>{t('CoinTanda cooperates with decentralized')}</TextBlock>
          </FaqItem>
          <FaqItem id="6">
            <TitleText medium>{t('What are smart contracts?')}</TitleText>
            <TextBlock>
              {t('A smart contract is a piece')} <span>{t('vending machine')}</span>.{' '}
              {t('You insert the required')} <span>{t('automatically')}</span>{' '}
              {t('deliver what is defined')} <span>{t('rules')}</span> {t('and penalties between')}{' '}
              <span>{t('enforces')}</span> {t('them')}.
              <br />
              {t('In our case, the smart contract defines')}.
            </TextBlock>
          </FaqItem>
          <FaqItem id="7">
            <TitleText medium>{t('Are smart contracts safe?')}</TitleText>
            <TextBlock>
              {t('Smart contracts are definitely more')} <span>{t('trustworthy')}</span>{' '}
              {t('than human beings, as they cannot')} <span>{t('open source')}</span> {t('and')}{' '}
              <span>{t('audited')}</span>.
              <br />
              {t('Open source software can be')}
              .
              <br />
              {t('Furthermore, our smart contracts have been thoroughly')} <span>{t('audited')}</span>{' '}
              {t('by a neutral company which is specialized')}.
            </TextBlock>
          </FaqItem>
        </LeftColumnContainer>
        <RightColumnContainer>
          <FaqItem id="8">
            <TitleText medium>{t('What are RSK smart contracts?')}</TitleText>
            <TextBlock>
              {t('CoinTanda works with smart contracts by')} <span>{t('RSK')}</span>{' '}
              {t('which run on top of the')} <span>{t('Bitcoin')}</span> {t('blockchain')}.{' '}
              {t('As the Bitcoin blockchain')}
              .
              <br />
              {t('The only small downside')} <span>{t('Smart Bitcoins')}</span> {t('short RBTC')}.
            </TextBlock>
          </FaqItem>
          <FaqItem id="9">
            <TitleText medium>{t('How do I get a wallet?')}</TitleText>
            <TextBlock>
              {t('Currently there are')} <br />
              <IsolatedAreaContainer>
                <Link href="https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid">
                  {t('Download Nifty')}
                </Link>
                <br />
                <Link href="https://metamask.io/download.html">{t('Download Metamask')}</Link>
              </IsolatedAreaContainer>
              {t('Make sure to save your')} <span>{t('12 recovery words')}</span>{' '}
              {t('which you need to restore')}.
            </TextBlock>
          </FaqItem>
          <FaqItem id="10">
            <TitleText medium>{t('How do I set up my wallet?')}</TitleText>
            <TextBlock>
              {t('Before you can start')} <span>{t('RSK Mainnet')}</span>{' '}
              {t('as your preferred network')}.
              <br />
              {t('In Nifty, you click on')} <span>{t('Select Network')}</span> {t('and choose')}{' '}
              <span>{t('RSK Mainnet')}</span>.
              <br />
              {t('In Metamask, you click on')} <span>{t('Networks')}</span> {t('and select')}{' '}
              <span>{t('Custom RPC')}</span>.
              <br />
              {t('Here you need to fill')}
              :
              <br />
              <IsolatedAreaContainer>
                <ul>
                  <li>
                    {t('Network Name')}: <span>{t('RSK Mainnet')}</span>
                  </li>
                  <li>
                    {t('New RPC URL')}:{' '}
                    <Link href="https://public-node.rsk.co">https://public-node.rsk.co</Link>{' '}
                  </li>
                  <li>
                    {t('Chain ID')}: <span>30</span>
                  </li>
                  <li>
                    {t('Symbol')}: <span>{t('RBTC')}</span>
                  </li>
                  <li>
                    {t('Block Explorer URL')}:{' '}
                    <Link href="https://explorer.rsk.co">https://explorer.rsk.co</Link>{' '}
                  </li>
                </ul>
              </IsolatedAreaContainer>
              {t('From now on, you can simply select')} <span>{t('RSK Mainnet')}</span>{' '}
              {t('in the dropdown menu on top of the window')}.
            </TextBlock>
          </FaqItem>
          <FaqItem id="11">
            <TitleText medium>{t('How do I get')}</TitleText>
            <TextBlock>
              {t('To get Smart Bitcoins (RBTC)')} <span>{t('2-way peg')}</span>.
              <br />
              {t('However, this process may take')} <span>{t('up to 15 hours')}</span>{' '}
              {t('due to security reasons')} <span>{t('Bitfinex')}</span>, <span>{t('Coinbene')}</span>{' '}
              {t('or')} <span>{t('Kucoin')}</span>. {t('We recommend to use')}{' '}
              <span>{t('Coinswitch')}</span>, {t('as you do not need to register there')}
              .
              <br />
              {t('Remember, by using CoinTanda')}.
            </TextBlock>
          </FaqItem>
        </RightColumnContainer>
      </FaqContainer>
    </>
  );
};
