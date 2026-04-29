import { useTranslation } from "react-i18next";

import { CvSection } from "@/features/cv/components/CvPrimitives";
import { VStack } from "@/components/ui/layout";
import type { SkillGroup } from "@/features/cv/data/cv";

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  const { t } = useTranslation();
  const skillBadgeClassName =
    "inline-flex min-w-0 max-w-full items-center rounded-full border bg-secondary px-3 py-1 text-xs leading-5 font-semibold text-secondary-foreground";

  return (
    <CvSection
      title={t("ui.skills.title")}
      description={t("ui.skills.description")}
    >
      <VStack size="md">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="cv-print-skill-card grid gap-2 border-b border-border/70 pb-3 last:border-b-0 last:pb-0 md:grid-cols-[12rem_minmax(0,1fr)] md:items-start"
          >
            <h3 className="pt-1 text-sm font-medium tracking-[0.18em] text-foreground uppercase">
              {group.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {group.items.map((skill) => (
                <span key={skill} className={skillBadgeClassName}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </VStack>
    </CvSection>
  );
}
