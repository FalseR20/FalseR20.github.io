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
  education: EducationItem[];
};

export function EducationSection({ education }: EducationSectionProps) {
  const { t } = useTranslation();

  return (
    <CvSection
      title={t("ui.education.title")}
      contentClassName="cv-print-education-grid grid gap-4 lg:grid-cols-2"
    >
      {education.map((item) => (
        <CardSurface key={`${item.institution}-${item.degree}`} size="default">
          <VStack size="md">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border/70 pb-3">
              <VStack size="sm">
                <CvLabel>{t("ui.education.institution")}</CvLabel>
                <p className="text-base font-medium sm:text-lg">
                  {item.institution}
                </p>
              </VStack>
              <CvBadge>{item.period}</CvBadge>
            </div>
            <p className="text-sm leading-7 text-foreground/85 sm:text-base">
              {item.degree}
            </p>
          </VStack>
        </CardSurface>
      ))}
    </CvSection>
  );
}
