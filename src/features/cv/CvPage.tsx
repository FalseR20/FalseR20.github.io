import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { EducationSection } from "@/features/cv/components/EducationSection";
import { ExperienceSection } from "@/features/cv/components/ExperienceSection";
import { LanguagesSection } from "@/features/cv/components/LanguagesSection";
import { ProfileSection } from "@/features/cv/components/ProfileSection";
import { SkillsSection } from "@/features/cv/components/SkillsSection";
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
    <div className="mx-auto w-full max-w-7xl p-6">
      <ProfileSection
        contacts={contacts}
        locale={locale}
        locales={locales}
        onChangeLocale={setLocale}
        profile={profile}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="mt-6 space-y-6">
        <ExperienceSection experience={experience} />
        <EducationSection education={education} />
        <LanguagesSection languages={languages} />
        <SkillsSection skillGroups={skillGroups} />
      </main>
    </div>
  );
}
