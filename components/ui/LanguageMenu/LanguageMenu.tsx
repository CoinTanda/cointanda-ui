import React, { FC, useContext } from 'react';
import { I18nContext } from 'next-i18next';
import { LanguageMenuStyled } from './styles.LanguageMenu';
import { availableLanguages } from 'i18n';

interface PropsLanguageMenu {
  className?: string;
}

export const LanguageMenu: FC<PropsLanguageMenu> = ({ className }) => {
  const {
    i18n: { language },
  } = useContext(I18nContext);
  console.log(availableLanguages);

  return <LanguageMenuStyled className={className}>{language.toUpperCase()}</LanguageMenuStyled>;
};
