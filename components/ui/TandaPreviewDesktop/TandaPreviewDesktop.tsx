import React, { FC } from 'react';
import { useTranslation } from 'i18n';
import { Row } from '../Row/Row';
import {
  ButtonTanda,
  DataContainer,
  DataRowContainer,
  TandaPreviewContainerDesktop,
  TandaTitle,
  TextKey,
  TextValue,
  ThumbImage,
} from './styles.TandaPreviewDesktop';
import tandaThumb from '../../../assets/tanda_big_green.png';

export const TandaPreviewDesktop: FC = () => {
  const { t } = useTranslation();

  return (
    <TandaPreviewContainerDesktop>
      <TandaTitle>Alice</TandaTitle>
      <ButtonTanda>{t('Join!')}</ButtonTanda>
      <Row>
        <ThumbImage src={tandaThumb} />
        <DataContainer>
          <DataRowContainer>
            <TextKey>{t('Next raffle')}</TextKey>
            <TextValue>13 Nov 2020</TextValue>
          </DataRowContainer>
          <DataRowContainer>
            <TextKey>{t('Cryptocoin')}</TextKey>
            <TextValue>Bitcoin</TextValue>
          </DataRowContainer>
          <DataRowContainer>
            <TextKey>{t('Deposit per ticket')}</TextKey>
            <TextValue>0.01 BTC</TextValue>
          </DataRowContainer>
          <DataRowContainer>
            <TextKey>{t('Sold tickets')}</TextKey>
            <TextValue>831</TextValue>
          </DataRowContainer>
          <DataRowContainer>
            <TextKey>{t('Total deposit')}</TextKey>
            <TextValue>8.31 BTC</TextValue>
          </DataRowContainer>
          <DataRowContainer>
            <TextKey>{t('Prize last week')}</TextKey>
            <TextValue>0.00319</TextValue>
          </DataRowContainer>
          <DataRowContainer>
            <TextKey>{t('Estimated prize')}</TextKey>
            <TextValue>0.00399</TextValue>
          </DataRowContainer>
        </DataContainer>
      </Row>
    </TandaPreviewContainerDesktop>
  );
};
