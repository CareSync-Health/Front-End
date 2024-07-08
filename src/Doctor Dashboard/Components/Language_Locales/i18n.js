import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './Locales/en/translation.json';
import frTranslation from './Locales/fr/translation.json';

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if the selected language is not available
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
