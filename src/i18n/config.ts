import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Load translations using http backend
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Default language
    debug: import.meta.env.DEV, // Only debug in development
    
    // Define namespaces
    ns: ['common', 'home', 'services', 'masterPlan', 'development', 'investment', 'news', 'leadership'],
    defaultNS: 'common',
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    backend: {
      // Path to load translation files
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    
    // Preload common namespace for better UX
    preload: ['en', 'zh'],
    
    react: {
      useSuspense: true, // Enable Suspense for lazy loading
    },
    
    // Show key if translation is missing
    saveMissing: false,
    missingKeyHandler: (lng, ns, key) => {
      if (import.meta.env.DEV) {
        console.warn(`Missing translation key: ${ns}:${key} for language: ${lng}`);
      }
    },
  });

export default i18n;
