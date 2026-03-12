import { useTranslation } from "react-i18next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LanguageItem } from "@/features/cv/data/cv";

type LanguagesSectionProps = {
  languages: LanguageItem[];
};

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  const { t } = useTranslation();

  return (
    <Card className="bg-background">
      <CardHeader className="gap-2">
        <CardTitle className="text-2xl sm:text-3xl">
          {t("ui.languages.title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-3 sm:grid-cols-2">
          {languages.map((language) => (
            <li
              key={language.name}
              className="rounded-xl border bg-card px-4 py-4 shadow-none sm:px-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                    {t("ui.languages.label")}
                  </p>
                  <p className="mt-2 text-base font-medium sm:text-lg">
                    {language.name}
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full border bg-secondary px-3 py-1 text-xs font-semibold tracking-[0.18em] text-secondary-foreground uppercase">
                  {language.level}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
