import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardHeader,
  CardSurface,
  CardTitle,
} from "@/components/ui/card";
import { VStack } from "@/components/ui/layout";
import type { LanguageItem } from "@/features/cv/data/cv";

type LanguagesSectionProps = {
  languages: LanguageItem[];
};

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle>{t("ui.languages.title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-3 sm:grid-cols-2">
          {languages.map((language) => (
            <CardSurface as="li" key={language.name} size="inline">
              <div className="flex items-start justify-between gap-4">
                <VStack size="sm">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                    {t("ui.languages.label")}
                  </p>
                  <p className="text-base font-medium sm:text-lg">
                    {language.name}
                  </p>
                </VStack>
                <span className="inline-flex items-center rounded-full border bg-secondary px-3 py-1 text-xs font-semibold tracking-[0.18em] text-secondary-foreground uppercase">
                  {language.level}
                </span>
              </div>
            </CardSurface>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
