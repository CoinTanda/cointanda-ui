import React, { FC } from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import { WalletStatus } from '../WalletStatus/WalletStatus';
// import { SupportedWalletIndicator } from '../SupportedWalletIndicator/SupportedWalletIndicator';

export const Layout: FC = ({ children }) => {
  return (
    <>
      {/* <SupportedWalletIndicator /> */}
      <WalletStatus />
      <ToastContainer className="pool-toast" position="top-center" autoClose={6000} transition={Slide} />
      {children}
    </>
  );
};
