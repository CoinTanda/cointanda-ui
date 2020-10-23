import React, { FC, useContext, useState } from 'react';
import { I18nContext } from 'next-i18next';
import {
  CurrentLanguageButton,
  LanguageMenuContainer,
  OtherLanguageButton,
  OtherLanguagesContainer,
} from './styles.LanguageMenu';
import { availableLanguages, i18n } from '../../../i18n';

interface PropsLanguageMenu {
  className?: string;
}

export const LanguageMenu: FC<PropsLanguageMenu> = ({ className }) => {
  const [toggled, setToggled] = useState(false);

  const {
    i18n: { language },
  } = useContext(I18nContext);

  const handleOtherLanguageClick = (newLanguage: string) => {
    setToggled(false);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <LanguageMenuContainer className={className}>
      <CurrentLanguageButton onClick={() => setToggled(!toggled)}>
        {language.toUpperCase()}
      </CurrentLanguageButton>
      {toggled && (
        <OtherLanguagesContainer>
          {Object.values(availableLanguages).map(
            l =>
              l !== language && (
                <OtherLanguageButton onClick={() => handleOtherLanguageClick(l)} key={l}>
                  {l.toUpperCase()}
                </OtherLanguageButton>
              )
          )}
        </OtherLanguagesContainer>
      )}
    </LanguageMenuContainer>
  );
};
