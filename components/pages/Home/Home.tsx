import React, { FC, useContext } from 'react';
import { useTranslation } from '../../../i18n';
import { WalletContext } from 'lib/components/WalletContextProvider';
import {
  ButtonConnectWallet,
  HomeContainer,
  MoreInfoContainer,
  TextInfoItem,
  VideoContainer,
  VideoImg,
} from './styles.Home';
import videoMock from '../../../assets/video_mock.png';
import { Row } from 'components/ui/Row/Row';
import { IconStar } from 'components/ui/IconStar/IconStar';
import { Column } from 'components/ui/Column/Column';
import { IconTriangle } from 'components/ui/IconTriangle/IconTriangle';
import { LinkedText } from 'components/ui/LinkedText/LinkedText';

import { TitleMobile } from 'components/ui/TitleMobile/styles.TitleMobile';

export const Home: FC = () => {
  const walletContext = useContext(WalletContext);
  const { t } = useTranslation();

  return (
    <HomeContainer>
      <TitleMobile>{t('What is CoinTanda?')}</TitleMobile>
      <VideoContainer>
        <VideoImg src={videoMock} />
      </VideoContainer>
      <Column>
        <Row>
          <IconStar />
          <TextInfoItem>
            {t('CoinTanda Description')}{' '}
            <span>{t('Tandas')}</span>.
          </TextInfoItem>
        </Row>
        <Row>
          <IconStar />
          <TextInfoItem>
            {t('Members deposit cryptocoins which')} <span>{t('gain interest')}</span>.
          </TextInfoItem>
        </Row>
        <Row>
          <IconStar />
          <TextInfoItem>
            {t('Every week you may win the cumulated interest of all Tanda members in a')}{' '}
            <span>{t('provably fair raffle')}</span>.
          </TextInfoItem>
        </Row>
        <Row>
          <IconStar />
          <TextInfoItem>
            {t('Win new coins')} <span>{t('without risking anything')}</span> -{' '}
            {t('you get your coins back whenever you want')}.
          </TextInfoItem>
        </Row>
        <MoreInfoContainer>
          <IconTriangle />
          <LinkedText>{t('More info')}</LinkedText>
        </MoreInfoContainer>
        <ButtonConnectWallet onClick={() => walletContext.handleConnectWallet()}>
          {t('Connect wallet')}
        </ButtonConnectWallet>
      </Column>
    </HomeContainer>
  );
};
