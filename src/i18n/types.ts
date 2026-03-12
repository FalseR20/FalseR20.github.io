import type { CvData } from "@/features/cv/data/cv";

export const locales = ["en", "ru"] as const;

export type Locale = (typeof locales)[number];

export type TranslationResource = {
  meta: {
    title: string;
  };
  ui: {
    localeSwitcher: {
      label: string;
      english: string;
      russian: string;
    };
    themeSwitcher: {
      switchToLight: string;
      switchToDark: string;
      light: string;
      dark: string;
    };
    experience: {
      title: string;
      description: string;
      latest: string;
    };
    education: {
      title: string;
      institution: string;
    };
    languages: {
      title: string;
      label: string;
    };
    skills: {
      title: string;
      description: string;
      domain: string;
    };
  };
  cv: CvData;
};
