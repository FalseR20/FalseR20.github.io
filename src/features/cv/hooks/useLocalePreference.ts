import { useTranslation } from "react-i18next";

import { locales, resolveLocale, type Locale } from "@/i18n/resources";

export function useLocalePreference() {
  const { i18n } = useTranslation();
  const locale = resolveLocale(i18n.resolvedLanguage ?? i18n.language);

  const setLocale = (nextLocale: Locale) => {
    void i18n.changeLanguage(nextLocale);
  };

  return {
    locale,
    locales,
    setLocale,
  };
}
