import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardSurface,
  CardTitle,
} from "@/components/ui/card";
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
    <Card>
      <CardHeader className="gap-2">
        <CardTitle>{t("ui.skills.title")}</CardTitle>
        <CardDescription>{t("ui.skills.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <VStack size="lg">
          {skillGroups.map((group) => (
            <CardSurface
              key={group.title}
              size="compact"
              className="grid gap-3 md:grid-cols-[10rem_minmax(0,1fr)] md:items-center"
            >
              <VStack size="sm">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                  {t("ui.skills.domain")}
                </p>
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
      </CardContent>
    </Card>
  );
}
