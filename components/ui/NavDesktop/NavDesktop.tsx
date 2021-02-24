import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Router, useTranslation } from 'i18n';
import { ResponsiveContainer } from '../ResponsiveContainer/ResponsiveContainer';
import { ButtonNavDesktop, NavContainerDesktop } from './styles.NavDesktop';

export const NavDesktop: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const aboutPath = '/about'
  const tandasPath = '/tandas'
  const ourTokenPath = '/ourtoken'
  const faqPath = '/faq'
  const contactPath = '/contact'
  const profilePath = '/profile'

  const selected = (path: string) => {
    return Router.pathname.includes(path) ? 'selected' : ''
  }

  return (
    <ResponsiveContainer hideIn={theme.screenSizes.tabletXL}>
      <NavContainerDesktop>
        <ButtonNavDesktop variant="outlined" disableRipple={true} onClick={() => Router.push(aboutPath)}  className={selected(aboutPath)}>
          {t('About')}{' '}
        </ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined" disableRipple={true} onClick={() => Router.push(tandasPath)} className={selected(tandasPath)}>
          {t('Tandas')}
        </ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined" disableRipple={true} onClick={() => Router.push(ourTokenPath)} className={selected(ourTokenPath)}>
          {t('Our Token')}
        </ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined" disableRipple={true} onClick={() => Router.push(faqPath)} className={selected(faqPath)}>
          {t('FAQ')}
        </ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined" disableRipple={true} onClick={() => Router.push(contactPath)} className={selected(contactPath)}>
          {t('Contact us')}
        </ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined" disableRipple={true} onClick={() => Router.push(profilePath)} className={selected(profilePath)}>
          {t('My Profile')}
        </ButtonNavDesktop>
      </NavContainerDesktop>
    </ResponsiveContainer>
  );
};
