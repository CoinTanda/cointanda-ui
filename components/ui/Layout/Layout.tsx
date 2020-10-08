import React, { FC } from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import { WalletStatus } from '../WalletStatus/WalletStatus';
import { ButtonLanguage, NavAndContentContainer, LayoutContainer } from './styles.Layout';
// import { SupportedWalletIndicator } from '../SupportedWalletIndicator/SupportedWalletIndicator';

export const Layout: FC = ({ children }) => {
  return (
    <LayoutContainer>
      {/* <SupportedWalletIndicator /> */}
      <Header>
        <WalletStatus />
        <ButtonLanguage disabled>EN</ButtonLanguage>
      </Header>
      <NavAndContentContainer>
        <Nav />
        <ToastContainer
          className="pool-toast"
          position="top-center"
          autoClose={6000}
          transition={Slide}
        />
        {children}
      </NavAndContentContainer>
    </LayoutContainer>
  );
};
