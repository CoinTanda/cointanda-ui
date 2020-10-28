import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Router, useTranslation } from 'i18n';
import { ResponsiveContainer } from '../ResponsiveContainer/ResponsiveContainer';
import { ButtonNavDesktop, NavContainerDesktop } from './styles.NavDesktop';

export const NavDesktop: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <ResponsiveContainer hideIn={theme.screenSizes.tabletXL}>
      <NavContainerDesktop>
        <ButtonNavDesktop variant="outlined" onClick={() => Router.push('/about')}>
          {t('About')}{' '}
        </ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined" onClick={() => Router.push('/tandas')}>
          {t('Tandas')}
        </ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined" onClick={() => Router.push('/ourtoken')}>
          {t('Our Token')}
        </ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined" onClick={() => Router.push('/faq')}>
          {t('FAQ')}
        </ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined" onClick={() => Router.push('/contact')}>
          {t('Contact us')}
        </ButtonNavDesktop>
      </NavContainerDesktop>
    </ResponsiveContainer>
  );
};
