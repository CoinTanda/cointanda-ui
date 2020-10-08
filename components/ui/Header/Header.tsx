import React, { FC } from 'react';
import LogoIcon from 'assets/CT_icon_hi.png';
import LogoText from 'assets/CT_logotype.png';
import {
  BrandingContainer,
  HeaderChildrenContainer,
  HeaderContainer,
  HeaderContentContainer,
  LogoIconImg,
  LogoTextImg,
  TextBusinessDescription,
} from './styles.Header';

export const Header: FC = ({ children }) => {
  return (
    <HeaderContainer>
      <BrandingContainer>
        <LogoIconImg src={LogoIcon} />
        <HeaderContentContainer>
          <LogoTextImg src={LogoText} />
          <TextBusinessDescription>Risk-free Crypto Raffles</TextBusinessDescription>
        </HeaderContentContainer>
      </BrandingContainer>
      <HeaderChildrenContainer>{children}</HeaderChildrenContainer>
    </HeaderContainer>
  );
};
