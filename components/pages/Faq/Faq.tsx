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
              {t('What is CoinTanda faq')}
            </TextBlock>
          </FaqItem>
          <FaqItem id="2">
            <TitleText medium>{t('What do I need to participate?')}</TitleText>
            <TextBlock>
              {t('What do I need to participate faq')}
            </TextBlock>
          </FaqItem>
          <FaqItem id="3">
            <TitleText medium>{t('Do I have to entrust my money to you?')}</TitleText>
            <TextBlock>
              {t('Do I have to entrust my money to you faq')}
            </TextBlock>
          </FaqItem>
          <FaqItem id="4">
            <TitleText medium>{t('What is a provably fair raffle?')}</TitleText>
            <TextBlock>
              {t('What is a provably fair raffle faq')}
            </TextBlock>
          </FaqItem>
          <FaqItem id="5">
            <TitleText medium>{t('Where does the interest come from?')}</TitleText>
            <TextBlock>
              {t('Where does the interest come from faq1')}
              <br/>
              <br/>
              {t('Where does the interest come from faq2')}
            </TextBlock>
          </FaqItem>
          <FaqItem id="6">
            <TitleText medium>{t('What are smart contracts?')}</TitleText>
            <TextBlock>
              {t('What are smart contracts faq1')}
              <br/>
              <br/>
              {t('What are smart contracts faq2')}.
            </TextBlock>
          </FaqItem>
          <FaqItem id="7">
            <TitleText medium>{t('Are smart contracts safe?')}</TitleText>
            <TextBlock>
              {t('Are smart contracts safe faq1')}
              <br />
              <br/>
              {t('Are smart contracts safe faq2')}
              <br/>
              <br />
              {t('Are smart contracts safe faq3')}
            </TextBlock>
          </FaqItem>
          <FaqItem id="8">
            <TitleText medium>{t('What are RSK smart contracts?')}</TitleText>
            <TextBlock>
              {t('What are RSK smart contracts faq1')}
              <br/>
              <br />
              {t('What are RSK smart contracts faq2')}
            </TextBlock>
          </FaqItem>
        </LeftColumnContainer>
        <RightColumnContainer>
          <FaqItem id="9">
            <TitleText medium>{t('How do I get a wallet?')}</TitleText>
            <TextBlock>
              {t('Currently there are')} <br />
              <IsolatedAreaContainer>
                <Link href="https://developers.rsk.co/wallet/use/nifty/">
                  {t('Download Nifty')}
                </Link>
                <br />
                <Link href="https://developers.rsk.co/wallet/use/metamask/">{t('Download Metamask')}</Link>
              </IsolatedAreaContainer>
              {t('Make sure to save your')}
            </TextBlock>
          </FaqItem>
          <FaqItem id="10">
            <TitleText medium>{t('How do I set up my wallet?')}</TitleText>
            <TextBlock>
              {t('Before you can start')}. {t('For testing CoinTanda, select')}
              <br />
              <br/>
              <span>{t('Set up Nifty')}:</span>
              <br/>
              {t('In Nifty, you click on')} {t('Select Network')} <span>{t('RSK Testnet')}</span> {t('or')}{' '}
              <span>{t('RSK Mainnet')}</span>.
              <br />
              <br />
              <span>{t('Set up Metamask')}:</span>
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
                    {t('Network Name')}: <span>{t('RSK Testnet')}</span>
                  </li>
                  <li>
                    {t('New RPC URL')}:{' '}
                    <Link href="https://public-node.testnet.rsk.co">https://public-node.testnet.rsk.co</Link>{' '}
                  </li>
                  <li>
                    {t('Chain ID')}: <span>31</span>
                  </li>
                  <li>
                    {t('Symbol')}: <span>T-{t('RBTC')}</span>
                  </li>
                  <li>
                    {t('Block Explorer URL')}:{' '}
                    <Link href="https://explorer.testnet.rsk.co/">https://explorer.testnet.rsk.co/</Link>{' '}
                  </li>
                </ul>
              </IsolatedAreaContainer>
              <br />
              {t('The same procedure will work for')} <span>{t('RSK Mainnet')}</span> {t('after Betatest and audit')}
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
              {t('From now on, you can simply select')} <span>{t('RSK Testnet')}</span> {t('or')} <span>{t('RSK Mainnet')}</span>{' '}
              {t('in the dropdown menu on top of the window')}.
              <br />
              <br/>
              {t('To add Dollar-on-Chain')}
              <br/>
              {t('In the field')} <span>Token Contract Address</span> {t('you fill in')}:
              <br/>
              {t('For')} <span>{t('RSK Testnet')}</span>: 0xCb46C0DdC60d18eFEB0e586c17AF6Ea36452DaE0
              <br/>
              {t('For')} <span>{t('RSK Mainnet')}</span>: 0xe700691da7b9851f2f35f8b8182c69c53ccad9db
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
          <FaqItem id="12">
            <TitleText medium>{t('What is Dollar-on-Chain')}</TitleText>
            <TextBlock>
              {t('Dollar-on-Chain (DOC) is a')}
            </TextBlock>
          </FaqItem>
          <FaqItem id="13">
            <TitleText medium>{t('How can I get some Dollar-on-Chain')}</TitleText>
            <TextBlock>
              {t('For the Betatest of CoinTanda, you will get DOCs on Testnet for free. Please fill in this form if you want to participate')}
               <Link href="https://bit.ly/cointanda">https://bit.ly/cointanda</Link>.
              <br/>
              {t('You can receive free DOCs for testing here')}: 
              <Link href="https://faucet.cointanda.com">https://faucet.cointanda.com</Link>
              <br/>
              {t('If you need more, you can get Smart Bitcoins here')}: <Link href="https://faucet.rsk.co ">https://faucet.rsk.co </Link>
               {t('and mint new DOCs here')} <Link href="https://moc-testnet.moneyonchain.com">https://moc-testnet.moneyonchain.com</Link>
            </TextBlock>
          </FaqItem>
        </RightColumnContainer>
      </FaqContainer>
    </>
  );
};
