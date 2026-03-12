import type { CvData } from "@/features/cv/data/cv";
import { enTranslation } from "@/i18n/locales/en";
import { ruTranslation } from "@/i18n/locales/ru";
import { locales, type Locale, type TranslationResource } from "@/i18n/types";

export const defaultNS = "translation";

export const resources = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
} satisfies Record<Locale, { translation: TranslationResource }>;

export { locales };
export type { Locale, TranslationResource };

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function resolveLocale(value?: string | null): Locale {
  const normalizedValue = value?.split("-")[0];
  return normalizedValue && isLocale(normalizedValue) ? normalizedValue : "en";
}

export function getTranslationResource(locale: Locale): TranslationResource {
  return resources[locale].translation;
}

export function getCvData(locale: Locale): CvData {
  return getTranslationResource(locale).cv;
}
