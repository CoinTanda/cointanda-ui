import React, { FC } from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import { ColumnCentered } from '../ColumnCentered/styles.ColumnCentered';
import { Header } from '../Header/Header';
import { NavDesktop } from '../NavDesktop/NavDesktop';
import { WalletStatus } from '../WalletStatus/WalletStatus';
import { ButtonLanguage, NavAndContentContainer, LayoutContainer } from './styles.Layout';
// import { SupportedWalletIndicator } from '../SupportedWalletIndicator/SupportedWalletIndicator';

export const Layout: FC = ({ children }) => {
  return (
    <ColumnCentered>
      <LayoutContainer>
        {/* <SupportedWalletIndicator /> */}
        <Header>
          <WalletStatus />
          <ButtonLanguage disabled>EN</ButtonLanguage>
        </Header>
        <ColumnCentered>
          <NavAndContentContainer>
            <NavDesktop />
            <ToastContainer
              className="pool-toast"
              position="top-center"
              autoClose={6000}
              transition={Slide}
            />
            {children}
          </NavAndContentContainer>
        </ColumnCentered>
      </LayoutContainer>
    </ColumnCentered>
  );
};
