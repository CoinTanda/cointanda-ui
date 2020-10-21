import React, { FC } from 'react';
import { useTranslation } from 'i18n';
import { TandasContainer, TitlesContainer } from './styles.Tandas';
import { Column } from '../../ui/Column/Column';
import { TitleText } from '../../ui/TitleText/TitleText';
import { TandaPreviewDesktop } from 'components/ui/TandaPreviewDesktop/TandaPreviewDesktop';
import { TandaPreviewMobile } from 'components/ui/TandaPreviewMobile/TandaPreviewMobile';
import { TandaPreviewItemMobile } from '../../ui/TandaPreviewMobile/TandaPreviewItemMobile/TandaPreviewItemMobile';
import { ResponsiveContainer } from 'components/ui/ResponsiveContainer/ResponsiveContainer';
import { useTheme } from 'styled-components';

export const Tandas: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <TandasContainer>
      <Column>
        <TitlesContainer>
          <TitleText>{t('Welcome to CoinTanda!')}</TitleText>
          <TitleText small>{t('You may join any of these Tandas')}</TitleText>
        </TitlesContainer>
        <ResponsiveContainer hideIn={theme.screenSizes.tabletXL}>
          <TandaPreviewDesktop />
          <TandaPreviewDesktop />
          <TandaPreviewDesktop />
        </ResponsiveContainer>
        <ResponsiveContainer showIn={theme.screenSizes.tabletXL}>
          <TandaPreviewMobile>
            <TandaPreviewItemMobile darkBackground={true} />
            <TandaPreviewItemMobile darkBackground={false} />
            <TandaPreviewItemMobile darkBackground={true} iconColor={'gold'} />
          </TandaPreviewMobile>
        </ResponsiveContainer>
      </Column>
    </TandasContainer>
  );
};
