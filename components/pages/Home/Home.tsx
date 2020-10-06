import React, { FC } from 'react';
import { HomeContainer } from './styles.Home';
import Button from '@material-ui/core/Button';

export const Home: FC = () => {
  return (
    <HomeContainer>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      Home
    </HomeContainer>
  );
};
