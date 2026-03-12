import { EducationSection } from "@/features/cv/components/EducationSection";
import { ExperienceSection } from "@/features/cv/components/ExperienceSection";
import { LanguagesSection } from "@/features/cv/components/LanguagesSection";
import { ProfileSection } from "@/features/cv/components/ProfileSection";
import { SkillsSection } from "@/features/cv/components/SkillsSection";
import { cvData } from "@/features/cv/data/cv";
import { useThemePreference } from "@/features/cv/hooks/useThemePreference";

export function CvPage() {
  const { theme, toggleTheme } = useThemePreference();
  const { contacts, education, experience, languages, profile, skillGroups } =
    cvData;

  return (
    <div className="mx-auto w-full max-w-7xl p-6">
      <ProfileSection
        contacts={contacts}
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
