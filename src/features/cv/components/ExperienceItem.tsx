import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import type { ExperienceItem as ExperienceEntry } from "@/features/cv/data/cv";

type ExperienceItemProps = {
  item: ExperienceEntry;
  isFirst: boolean;
  isLast: boolean;
};

export function ExperienceItem({ item, isFirst, isLast }: ExperienceItemProps) {
  const { t } = useTranslation();

  return (
    <li className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-4 sm:grid-cols-[11rem_1.25rem_minmax(0,1fr)] sm:gap-6">
      <div className="hidden flex-col items-end gap-2 pt-5 text-right sm:flex">
        <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          {item.period}
        </span>
        <span className="text-sm text-muted-foreground">{item.location}</span>
      </div>

      <div className="relative flex justify-center">
        {isFirst ? (
          <span
            aria-hidden="true"
            className="absolute top-0 left-1/2 h-6.5 w-2 -translate-x-1/2 bg-background"
          />
        ) : null}
        {isLast ? (
          <span
            aria-hidden="true"
            className="absolute top-6.5 bottom-0 left-1/2 w-2 -translate-x-1/2 bg-background"
          />
        ) : null}
        <span
          aria-hidden="true"
          className={cn(
            "absolute top-5 left-1/2 size-3 -translate-x-1/2 rounded-full ring-4 ring-background",
            isFirst ? "bg-primary" : "border-2 border-primary bg-background",
          )}
        />
      </div>

      <article className="rounded-xl border bg-card p-5 shadow-none sm:p-6">
        <div className="flex flex-wrap gap-2 sm:hidden">
          <span className="inline-flex rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {item.period}
          </span>
          <span className="inline-flex rounded-full border border-dashed px-3 py-1 text-xs font-medium text-muted-foreground">
            {item.location}
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-4 border-b border-border/70 pb-4 sm:mt-0 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {item.role}
            </h3>
            <p className="mt-1.5 text-sm font-medium text-foreground/85 sm:text-base">
              {item.company}
            </p>
          </div>

          {isFirst ? (
            <span className="inline-flex w-fit items-center rounded-full border bg-secondary px-3 py-1 text-xs font-semibold tracking-[0.18em] text-secondary-foreground uppercase">
              {t("ui.experience.latest")}
            </span>
          ) : null}
        </div>

        <ul className="mt-4 space-y-2.5 pl-5 text-sm leading-6 text-muted-foreground marker:text-foreground/60 sm:text-base">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="list-disc">
              {bullet}
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}
