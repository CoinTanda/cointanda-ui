import React, { FC } from 'react';
import { HomeContainer } from './styles.Home';
import videoMock from '../../../assets/video_mock.png';

export const Home: FC = () => {
  return (
    <HomeContainer>
      <img src={videoMock}></img>
      Home
    </HomeContainer>
  );
};
