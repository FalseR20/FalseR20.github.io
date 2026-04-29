import { useTranslation } from "react-i18next";

import { CardSurface } from "@/components/ui/card";
import {
  CvBadge,
  CvLabel,
  CvSection,
} from "@/features/cv/components/CvPrimitives";
import { VStack } from "@/components/ui/layout";
import type { LanguageItem } from "@/features/cv/data/cv";

type LanguagesSectionProps = {
  className?: string;
  languages: LanguageItem[];
};

export function LanguagesSection({
  className,
  languages,
}: LanguagesSectionProps) {
  const { t } = useTranslation();

  return (
    <CvSection className={className} title={t("ui.languages.title")}>
      <ul className="grid gap-2">
        {languages.map((language) => (
          <CardSurface as="li" key={language.name} size="inline">
            <div className="flex items-start justify-between gap-3">
              <VStack size="sm">
                <CvLabel>{t("ui.languages.label")}</CvLabel>
                <p className="text-base font-medium sm:text-lg">
                  {language.name}
                </p>
              </VStack>
              <CvBadge>{language.level}</CvBadge>
            </div>
          </CardSurface>
        ))}
      </ul>
    </CvSection>
  );
}
