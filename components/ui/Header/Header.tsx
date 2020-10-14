import React, { FC } from 'react';
import Logo from 'assets/full_logo.png';
import {
  BrandingContainer,
  HeaderChildrenContainerDesktop,
  HeaderContainer,
  HeaderContentContainer,
  LogoImg,
  TextBusinessDescription,
} from './styles.Header';

export const Header: FC = ({ children }) => {
  return (
    <HeaderContainer>
      <BrandingContainer>
        <LogoImg src={Logo} />
        <HeaderContentContainer>
          <TextBusinessDescription>Risk-free Crypto Raffles</TextBusinessDescription>
        </HeaderContentContainer>
      </BrandingContainer>
      <HeaderChildrenContainerDesktop>{children}</HeaderChildrenContainerDesktop>
    </HeaderContainer>
  );
};
