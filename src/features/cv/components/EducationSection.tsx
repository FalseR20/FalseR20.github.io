import { useTranslation } from "react-i18next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { EducationItem } from "@/features/cv/data/cv";

type EducationSectionProps = {
  education: EducationItem[];
};

export function EducationSection({ education }: EducationSectionProps) {
  const { t } = useTranslation();

  return (
    <Card className="bg-background">
      <CardHeader className="gap-2">
        <CardTitle className="text-2xl sm:text-3xl">
          {t("ui.education.title")}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 lg:grid-cols-2">
        {education.map((item) => (
          <div
            key={`${item.institution}-${item.degree}`}
            className="rounded-xl border bg-card p-5 shadow-none"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border/70 pb-3">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                  {t("ui.education.institution")}
                </p>
                <p className="mt-2 text-base font-medium sm:text-lg">
                  {item.institution}
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border bg-secondary px-3 py-1 text-xs font-semibold tracking-[0.18em] text-secondary-foreground uppercase">
                {item.period}
              </span>
            </div>
            <p className="pt-3 text-sm leading-7 text-foreground/85 sm:text-base">
              {item.degree}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
