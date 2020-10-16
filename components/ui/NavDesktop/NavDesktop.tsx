import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { useTranslation } from 'i18n';
import { ResponsiveContainer } from '../ResponsiveContainer/ResponsiveContainer';
import { ButtonNavDesktop, NavContainerDesktop } from './styles.NavDesktop';

export const NavDesktop: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <ResponsiveContainer hideIn={theme.screenSizes.tabletXL}>
      <NavContainerDesktop>
        <ButtonNavDesktop variant="outlined">{t('About')} </ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined">{t('Tandas')}</ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined">{t('Our Token')}</ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined">{t('FAQ')}</ButtonNavDesktop>
        <ButtonNavDesktop variant="outlined">{t('Contact us')}</ButtonNavDesktop>
      </NavContainerDesktop>
    </ResponsiveContainer>
  );
};
