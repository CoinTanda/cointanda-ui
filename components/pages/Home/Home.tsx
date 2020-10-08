import React, { FC } from 'react';
import {
  ButtonConnectWallet,
  HomeContainer,
  MoreInfoContainer,
  TextInfoItem,
  VideoContainer,
} from './styles.Home';
import videoMock from '../../../assets/video_mock.png';
import { Row } from 'components/ui/Row/Row';
import { IconStar } from 'components/ui/IconStar/IconStar';
import { Column } from 'components/ui/Column/Column';
import { Button } from 'components/ui/Button/Button';
import { IconTriangle } from 'components/ui/IconTriangle/IconTriangle';
import { LinkedText } from 'components/ui/LinkedText/LinkedText';

export const Home: FC = () => {
  return (
    <HomeContainer>
      <Row>
        <VideoContainer>
          <img src={videoMock}></img>
        </VideoContainer>
        <Column>
          <Row>
            <IconStar />
            <TextInfoItem>
              CoinTanda is a risk-free way to multiply your cryptocoins by forming groups called{' '}
              <span>Tandas</span>.
            </TextInfoItem>
          </Row>
          <Row>
            <IconStar />
            <TextInfoItem>
              Members deposit cryptocoins which <span>gain interest</span>.
            </TextInfoItem>
          </Row>
          <Row>
            <IconStar />
            <TextInfoItem>
              Every week you may win the cumulated interest of all Tanda members in a{' '}
              <span>provably fair raffle</span>.
            </TextInfoItem>
          </Row>
          <Row>
            <IconStar />
            <TextInfoItem>
              Win new coins <span>without risking anything</span> - you get your coins back whenever you
              want.
            </TextInfoItem>
          </Row>
          <MoreInfoContainer>
            <IconTriangle />
            <LinkedText>More info</LinkedText>
          </MoreInfoContainer>
          <ButtonConnectWallet>Connect wallet</ButtonConnectWallet>
        </Column>
      </Row>
    </HomeContainer>
  );
};
