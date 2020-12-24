import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Router, useTranslation } from 'i18n';
import { ResponsiveContainer } from '../ResponsiveContainer/ResponsiveContainer';
import { ButtonNavDesktop, NavContainerDesktop } from './styles.NavDesktop';

export const NavDesktop: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const route = Router.pathname.split('/')[1];

  return (
    <ResponsiveContainer hideIn={theme.screenSizes.tabletXL}>
      <NavContainerDesktop>
        <ButtonNavDesktop
          variant="outlined"
          highlighted={route === 'about'}
          onClick={() => Router.push('/about')}
        >
          {t('About')}{' '}
        </ButtonNavDesktop>
        <ButtonNavDesktop
          variant="outlined"
          highlighted={route === 'tandas'}
          onClick={() => Router.push('/tandas')}
        >
          {t('Tandas')}
        </ButtonNavDesktop>
        <ButtonNavDesktop
          variant="outlined"
          highlighted={route === 'ourtoken'}
          onClick={() => Router.push('/ourtoken')}
        >
          {t('Our Token')}
        </ButtonNavDesktop>
        <ButtonNavDesktop
          variant="outlined"
          highlighted={route === 'faq'}
          onClick={() => Router.push('/faq')}
        >
          {t('FAQ')}
        </ButtonNavDesktop>
        <ButtonNavDesktop
          variant="outlined"
          highlighted={route === 'contact'}
          onClick={() => Router.push('/contact')}
        >
          {t('Contact us')}
        </ButtonNavDesktop>
        <ButtonNavDesktop
          variant="outlined"
          highlighted={route === 'profile'}
          onClick={() => Router.push('/profile')}
        >
          {t('My Profile')}
        </ButtonNavDesktop>
      </NavContainerDesktop>
    </ResponsiveContainer>
  );
};
