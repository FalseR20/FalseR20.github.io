import { useTranslation } from "react-i18next";

import { CardSurface } from "@/components/ui/card";
import {
  CvBadge,
  CvLabel,
  CvSection,
} from "@/features/cv/components/CvPrimitives";
import { VStack } from "@/components/ui/layout";
import type { EducationItem } from "@/features/cv/data/cv";

type EducationSectionProps = {
  className?: string;
  education: EducationItem[];
};

export function EducationSection({
  className,
  education,
}: EducationSectionProps) {
  const { t } = useTranslation();
  const educationLabels = {
    education: t("ui.education.labels.education"),
    certification: t("ui.education.labels.certification"),
  } satisfies Record<EducationItem["type"], string>;

  return (
    <CvSection className={className} title={t("ui.education.title")}>
      <ul className="grid gap-2">
        {education.map((item) => (
          <CardSurface
            as="li"
            key={`${item.institution}-${item.degree}`}
            size="inline"
          >
            <div className="flex items-start justify-between gap-3">
              <VStack className="min-w-0" size="xs">
                <CvLabel>{educationLabels[item.type]}</CvLabel>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <p className="text-base font-medium sm:text-lg">
                    {item.institution}
                  </p>
                  <p className="text-sm leading-5 text-foreground/80">
                    {item.degree}
                  </p>
                </div>
              </VStack>
              <CvBadge className="shrink-0">{item.period}</CvBadge>
            </div>
          </CardSurface>
        ))}
      </ul>
    </CvSection>
  );
}
