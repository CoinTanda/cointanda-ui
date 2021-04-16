import { useTranslation } from '../../../i18n';
import React, { FC } from 'react';
import { Logo } from './Logo/Logo';
import {
  BrandingContainer,
  HeaderChildrenContainerDesktop,
  HeaderContainer,
  HeaderContentContainer,
  TextBusinessDescription,
} from './styles.Header';
import { useRouter } from 'next/router'



export const Header: FC = ({ children }) => {
  const router = useRouter()

  const { t } = useTranslation();

  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    router.push("/contact")
  }
  return (
    <HeaderContainer>
      <BrandingContainer>
        <a href={"#"} onClick={handleClick} >
          <Logo />
        </a>
        <HeaderContentContainer>
          <TextBusinessDescription>{t('Risk-free Crypto Raffles')}</TextBusinessDescription>
        </HeaderContentContainer>
      </BrandingContainer>
      <HeaderChildrenContainerDesktop>{children}</HeaderChildrenContainerDesktop>
    </HeaderContainer>
  );
};
