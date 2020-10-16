import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Slide, ToastContainer } from 'react-toastify';
import { ColumnCentered } from '../ColumnCentered/styles.ColumnCentered';
import { Header } from '../Header/Header';
import { NavDesktop } from '../NavDesktop/NavDesktop';
import { NavMobile } from '../NavMobile/NavMobile';
import { ResponsiveContainer } from '../ResponsiveContainer/ResponsiveContainer';
import { WalletStatus } from '../WalletStatus/WalletStatus';
import { NavAndContentContainer, LayoutContainer, DesktopButtonsContainer } from './styles.Layout';
// import { SupportedWalletIndicator } from '../SupportedWalletIndicator/SupportedWalletIndicator';
import { LanguageMenu } from '../LanguageMenu/LanguageMenu';

export const Layout: FC = ({ children }) => {
  const theme = useTheme();

  return (
    <ColumnCentered>
      <LayoutContainer>
        {/* <SupportedWalletIndicator /> */}
        <Header>
          <ResponsiveContainer hideIn={theme.screenSizes.tabletXL}>
            <DesktopButtonsContainer>
              <WalletStatus />
              <LanguageMenu />
            </DesktopButtonsContainer>
          </ResponsiveContainer>
          <ResponsiveContainer showIn={theme.screenSizes.tabletXL}>
            <NavMobile />
          </ResponsiveContainer>
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
