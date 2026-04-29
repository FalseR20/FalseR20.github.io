import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { EducationSection } from "@/features/cv/components/EducationSection";
import { ExperienceSection } from "@/features/cv/components/ExperienceSection";
import { LanguagesSection } from "@/features/cv/components/LanguagesSection";
import { ProfileSection } from "@/features/cv/components/ProfileSection";
import { SkillsSection } from "@/features/cv/components/SkillsSection";
import { SectionStack } from "@/components/ui/layout";
import { getCvData } from "@/i18n/resources";
import { useLocalePreference } from "@/features/cv/hooks/useLocalePreference";
import { useThemePreference } from "@/features/cv/hooks/useThemePreference";

export function CvPage() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useThemePreference();
  const { locale, locales, setLocale } = useLocalePreference();
  const cvData = getCvData(locale);
  const { contacts, education, experience, languages, profile, skillGroups } =
    cvData;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t("meta.title");
  }, [locale, t]);

  return (
    <div className="mx-auto w-full max-w-7xl p-0 sm:p-4">
      <SectionStack as="main">
        <ProfileSection
          contacts={contacts}
          locale={locale}
          locales={locales}
          onChangeLocale={setLocale}
          profile={profile}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <ExperienceSection experience={experience} />
        <div className="cv-print-education-languages-grid grid gap-4 lg:grid-cols-[5fr_2fr]">
          <EducationSection className="h-full" education={education} />
          <LanguagesSection className="h-full" languages={languages} />
        </div>
        <SkillsSection skillGroups={skillGroups} />
      </SectionStack>
    </div>
  );
}
