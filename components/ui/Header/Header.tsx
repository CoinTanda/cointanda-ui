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

export const Header: FC = ({ children }) => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <BrandingContainer>
      <a href="contact"><Logo /></a>
        <HeaderContentContainer>
          <TextBusinessDescription>{t('Risk-free Crypto Raffles')}</TextBusinessDescription>
        </HeaderContentContainer>
      </BrandingContainer>
      <HeaderChildrenContainerDesktop>{children}</HeaderChildrenContainerDesktop>
    </HeaderContainer>
  );
};
