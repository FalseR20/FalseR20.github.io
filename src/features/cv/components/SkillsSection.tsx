import { useTranslation } from "react-i18next";

import { CardSurface } from "@/components/ui/card";
import { CvLabel, CvSection } from "@/features/cv/components/CvPrimitives";
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
      <VStack size="lg">
        {skillGroups.map((group) => (
          <CardSurface
            key={group.title}
            size="compact"
            className="cv-print-skill-card grid gap-3 md:grid-cols-[12rem_minmax(0,1fr)] md:items-center"
          >
            <VStack size="sm">
              <CvLabel>{t("ui.skills.domain")}</CvLabel>
              <h3 className="text-sm font-medium tracking-[0.18em] text-foreground uppercase">
                {group.title}
              </h3>
            </VStack>
            <div className="flex flex-wrap items-center gap-2 md:self-center">
              {group.items.map((skill) => (
                <span key={skill} className={skillBadgeClassName}>
                  {skill}
                </span>
              ))}
            </div>
          </CardSurface>
        ))}
      </VStack>
    </CvSection>
  );
}
