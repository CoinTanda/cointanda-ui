import NextI18Next from 'next-i18next';
import path from 'path';

/**
 * To add a new language you need to add it here but also in the localeSubpaths const inside
 * next.config.js. Sharing the object in both files is not possible since they use different
 * module resolutions, so we need to update in both places.
 */
const availableLanguages: Record<string, string> = {
  en: 'en',
  es: 'es',
};

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  defaultNS: 'translations',
  localePath: path.resolve('./public/static/locales'),
  localeSubpaths: availableLanguages,
  ignoreRoutes: ['/_next/', '/assets/'],
  otherLanguages: ['es'],
  strictMode: false,
});

export const { appWithTranslation, useTranslation, i18n, Link, Router } = NextI18NextInstance;
export { availableLanguages };

export default NextI18NextInstance;
