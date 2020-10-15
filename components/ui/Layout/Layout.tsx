import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Slide, ToastContainer } from 'react-toastify';
import { ColumnCentered } from '../ColumnCentered/styles.ColumnCentered';
import { Header } from '../Header/Header';
import { NavDesktop } from '../NavDesktop/NavDesktop';
import { NavMobile } from '../NavMobile/NavMobile';
import { ResponsiveContainer } from '../ResponsiveContainer/ResponsiveContainer';
import { WalletStatus } from '../WalletStatus/WalletStatus';
import { ButtonLanguage, NavAndContentContainer, LayoutContainer } from './styles.Layout';
import { Row } from '../Row/Row';
// import { SupportedWalletIndicator } from '../SupportedWalletIndicator/SupportedWalletIndicator';

export const Layout: FC = ({ children }) => {
  const theme = useTheme();

  return (
    <ColumnCentered>
      <LayoutContainer>
        {/* <SupportedWalletIndicator /> */}
        <Header>
          <ResponsiveContainer hideIn={theme.screenSizes.tabletXL}>
            <Row>
              <WalletStatus />
              <ButtonLanguage disabled>EN</ButtonLanguage>
            </Row>
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
