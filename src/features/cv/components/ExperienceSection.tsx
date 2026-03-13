import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VStack } from "@/components/ui/layout";
import { ExperienceItem } from "@/features/cv/components/ExperienceItem";
import type { ExperienceItem as ExperienceEntry } from "@/features/cv/data/cv";

type ExperienceSectionProps = {
  experience: ExperienceEntry[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader className="gap-3">
        <CardTitle>{t("ui.experience.title")}</CardTitle>
        <CardDescription>{t("ui.experience.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <VStack as="ol" size="xl" className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-5 bottom-5 hidden w-px -translate-x-1/2 bg-border sm:left-52.5 sm:block"
          />
          {experience.map((item, index) => (
            <ExperienceItem
              key={`${item.company}-${item.role}`}
              item={item}
              isFirst={index === 0}
              isLast={index === experience.length - 1}
            />
          ))}
        </VStack>
      </CardContent>
    </Card>
  );
}
