import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {},
    },
    ru: {
      translation: {},
    },
    tj: {
      translation: {},
    },
  },
  fallbackLng: 'ru',
  supportedLngs: ['en', 'ru', 'tj'],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
