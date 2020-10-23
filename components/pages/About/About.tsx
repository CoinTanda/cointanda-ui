import React, { FC, useContext } from 'react';
import { TitleText } from '../../ui/TitleText/TitleText';
import {
  AboutContainer,
  ButtonConnectWallet,
  IconTanda,
  Opacity,
  ProjectDescriptionContainer,
  TandaType,
  TandaTypesContainer,
  TextBlock,
} from './styles.About';
import { useTranslation } from 'i18n';
import { WalletContext } from 'lib/components/WalletContextProvider';
import tandaIconSilver from '../../../assets/Silver_Tanda_80.png';
import tandaIconGold from '../../../assets/Gold_Tanda_80.png';
import tandaIconBlack from '../../../assets/Black_Tanda_80.png';

export const About: FC = () => {
  const { t } = useTranslation();
  const walletContext = useContext(WalletContext);

  return (
    <AboutContainer>
      <ProjectDescriptionContainer>
        <TitleText>{t('About CoinTanda')}</TitleText>
        <TextBlock>
          <span>{t('Tandas')}</span> {t('are a traditional form of social saving in Latin America')}.{' '}
          <span>{t('CoinTanda')}</span> {t('brings this popular concept to the world of cryptocoins')}.
        </TextBlock>
        <TextBlock>
          {t('A Tanda is a group people who')} <span>{t('jointly deposit')}</span>{' '}
          {t('their cryptocoins. They are lent to')}
          {t('traders who use them for leveraged')} <span>{t('interest')}</span> {t('for that')}.
        </TextBlock>
        <TextBlock>
          {t('This is done in a totally decentralized way using')} <span>{t('smart contracts')}</span>.{' '}
          {t('CoinTanda never holds your coins, you always')} <span>{t('keep full control')}</span>{' '}
          {t('over your private keys')}.
        </TextBlock>
        <TextBlock>
          {t('In a')} <span>{t('provably fair raffle')}</span>, {t('you may win the cumulated yield')}.
        </TextBlock>
        <TextBlock>
          {t('If you don’t win')}, {t('you will still')} <span>{t('keep the money')}</span>{' '}
          {t('you invested')}. {t('And you can withdraw it')} <span>{t('at any time')}</span>.
        </TextBlock>
        <TextBlock>
          {t('You can buy as many')} <span>{t('tickets')}</span> {t('as you like per Tanda')}
          <span>{t('chances')}</span> {t('to win the raffle')}.
        </TextBlock>
        <ButtonConnectWallet onClick={() => walletContext.handleConnectWallet()}>
          {t('Connect wallet')}
        </ButtonConnectWallet>
      </ProjectDescriptionContainer>
      <TandaTypesContainer>
        <TitleText>{t('Tanda Types')}</TitleText>
        <TandaType>
          <IconTanda src={tandaIconSilver} />
          <TextBlock>
            <span>{t('Silver')}:</span> {t('each ticket is')} <span>0.01 {t('Bitcoin')}</span>
          </TextBlock>
        </TandaType>
        <Opacity>
          <TandaType>
            <IconTanda src={tandaIconGold} />
            <TextBlock>
              <span>{t('Gold')}:</span> {t('each ticket is')} <span>0.1 {t('Bitcoin')}</span>
            </TextBlock>
          </TandaType>
          <TandaType>
            <IconTanda src={tandaIconBlack} />
            <TextBlock>
              <span>{t('Black')}:</span> {t('each ticket is')} <span>1 {t('Bitcoin')}</span>
            </TextBlock>
          </TandaType>
        </Opacity>
        <TextBlock>{t('The bigger the Tanda')}</TextBlock>
        <TextBlock>{t('For each new member you get one Tanda Token')}.</TextBlock>
      </TandaTypesContainer>
    </AboutContainer>
  );
};
