import React, { FC } from 'react';
import { useTranslation } from 'i18n';
import { TandasListContainer, TitlesContainer } from './styles.TandasList';
import { Column } from '../../ui/Column/Column';
import { TitleText } from '../../ui/TitleText/TitleText';
import { TandaBasicPreview } from 'components/ui/TandaBasicPreview/TandaBasicPreview';
import { TandaBasicPreviewItem } from '../../ui/TandaBasicPreview/TandaBasicPreviewItem/TandaBasicPreviewItem';
import { useTandasBasicInfo } from 'hooks/useTandasBasicInfo';

export const TandasList: FC = () => {
  const { t } = useTranslation();
  const tandas = useTandasBasicInfo();

  return (
    <TandasListContainer>
      <Column>
        <TitlesContainer>
          <TitleText>{t('Welcome to CoinTanda!')}</TitleText>
          <TitleText small>{t('You may join any of these Tandas')}</TitleText>
        </TitlesContainer>
        <TandaBasicPreview>
          {tandas.map((tanda, i) => (
            <TandaBasicPreviewItem
              address={tanda.address}
              darkBackground={i % 2 === 0}
              iconColor={tanda.type}
              key={tanda.address}
            />
          ))}
        </TandaBasicPreview>
      </Column>
    </TandasListContainer>
  );
};
