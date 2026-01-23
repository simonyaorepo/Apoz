import { useTranslation } from 'react-i18next';

/**
 * Custom hook for page-specific translations with namespace support
 * @param namespace - Namespace to use (e.g., 'home', 'services', 'masterPlan', 'development')
 */
export const usePageTranslation = (namespace?: string) => {
  // Load the specific namespace if provided, otherwise default to 'common'
  const { t, i18n } = useTranslation(namespace || 'common');
  
  // Also load common namespace for shared translations
  const { t: tCommon } = useTranslation('common');

  /**
   * Get translated text from the current namespace
   * @param key - Translation key within the namespace
   * @param defaultValue - Optional fallback value if translation is missing
   */
  const pt = (key: string, defaultValue?: string) => {
    const translated = t(key);
    
    // If translation returns the key itself, it means it's missing
    if (translated === key && defaultValue) {
      return defaultValue;
    }
    
    return translated;
  };

  /**
   * Get common translation (from 'common' namespace)
   */
  const tc = (key: string) => tCommon(key);

  /**
   * Get navigation translation (from 'common' namespace, 'nav' key)
   */
  const tn = (key: string) => tCommon(`nav.${key}`);

  return {
    t,           // Translation function for current namespace
    pt,          // Page-specific translation
    tc,          // Common translation
    tn,          // Navigation translation
    i18n,        // i18n instance
    language: i18n.language,
    changeLanguage: i18n.changeLanguage,
  };
};
