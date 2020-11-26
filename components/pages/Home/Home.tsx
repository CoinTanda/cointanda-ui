import React, { FC, useContext } from 'react';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/router';
import { useTranslation } from '../../../i18n';
import { WalletContext } from 'lib/components/WalletContextProvider';
import {
  ButtonConnectWallet,
  HomeContainer,
  MoreInfoContainer,
  TextInfoItem,
  VideoContainer,
  VideoResponsiveWrapper,
} from './styles.Home';
import { Row } from 'components/ui/Row/Row';
import { IconStar } from 'components/ui/IconStar/IconStar';
import { Column } from 'components/ui/Column/Column';
import { IconTriangle } from 'components/ui/IconTriangle/IconTriangle';
import { TitleText } from 'components/ui/TitleText/TitleText';
import { Link } from '../../ui/Link/Link';

export const Home: FC = () => {
  const walletContext = useContext(WalletContext);
  const { t } = useTranslation();
  const theme = useTheme();
  const router = useRouter();
  const referralId = router.query['referralId'] as string;
  // referralId is here to be used in a backend server in the future
  console.log(referralId);

  return (
    <HomeContainer>
      <TitleText showIn={theme.screenSizes.tabletXL}>{t('What is CoinTanda?')}</TitleText>
      <VideoContainer>
        <VideoResponsiveWrapper>
          <iframe
            src="https://player.vimeo.com/video/482209941"
            width="100%"
            height="100%"
            // @ts-ignore
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </VideoResponsiveWrapper>
      </VideoContainer>
      <Column>
        <Row>
          <IconStar />
          <TextInfoItem>
            {t('CoinTanda Description')} <span>{t('Tandas')}</span>.
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
            {t('Every week you may win')} <span>{t('provably fair raffle')}</span>.
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
          <Link href={''}>{t('More info')}</Link>
        </MoreInfoContainer>
        <ButtonConnectWallet onClick={() => walletContext.handleConnectWallet()}>
          {t('Connect wallet')}
        </ButtonConnectWallet>
      </Column>
    </HomeContainer>
  );
};
