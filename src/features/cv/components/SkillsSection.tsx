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
              className="grid gap-3 md:grid-cols-[10rem_minmax(0,1fr)] md:items-start"
            >
              <VStack size="sm">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                  {t("ui.skills.domain")}
                </p>
                <h3 className="text-sm font-medium tracking-[0.18em] text-foreground uppercase">
                  {group.title}
                </h3>
              </VStack>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-foreground/85 sm:text-sm"
                  >
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
