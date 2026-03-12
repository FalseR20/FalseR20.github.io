import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { defaultNS, resources } from "@/i18n/resources";

if (!i18n.isInitialized) {
  void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      defaultNS,
      resources,
      fallbackLng: "en",
      supportedLngs: ["en", "ru"],
      load: "languageOnly",
      cleanCode: true,
      returnNull: false,
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        lookupLocalStorage: "cv-locale",
        caches: ["localStorage"],
      },
      react: {
        useSuspense: false,
      },
    });
}

export { i18n };
export default i18n;
