import { cn } from "@/lib/utils";
import { CardSurface } from "@/components/ui/card";
import { VStack } from "@/components/ui/layout";
import type {
  ExperienceDate,
  ExperienceItem as ExperienceEntry,
  ExperiencePeriod,
} from "@/features/cv/data/cv";

type ExperienceItemProps = {
  item: ExperienceEntry;
  isFirst: boolean;
  isLast: boolean;
};

function formatPeriodDate(date: ExperienceDate) {
  return `${date.month} ${date.year}`;
}

function getPeriodLabels(period: ExperiencePeriod) {
  return {
    top: period.end ? formatPeriodDate(period.end) : null,
    bottom: formatPeriodDate(period.start),
  };
}

export function ExperienceItem({ item, isFirst, isLast }: ExperienceItemProps) {
  const periodLabels = getPeriodLabels(item.period);
  const hasEnd = periodLabels.top !== null;
  const isEstimatedEnd = Boolean(item.period.end && item.period.endIsEstimated);
  const mobileBadgeClassName =
    "inline-flex shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium text-muted-foreground";

  return (
    <li className="grid grid-cols-1 gap-4 sm:grid-cols-[11rem_1.25rem_minmax(0,1fr)] sm:gap-6">
      <div
        className={cn(
          "hidden text-right sm:flex",
          hasEnd
            ? "sm:flex-col sm:justify-between sm:py-5"
            : "sm:items-end sm:justify-end sm:py-5",
        )}
      >
        {periodLabels.top ? (
          <div className="flex min-h-3 items-center justify-end">
            <span
              className={cn(
                "text-xs font-medium",
                isEstimatedEnd
                  ? "text-muted-foreground/70"
                  : "text-muted-foreground",
              )}
            >
              {periodLabels.top}
            </span>
          </div>
        ) : null}
        <div className="flex min-h-3 items-center justify-end">
          <span className="text-xs font-medium text-muted-foreground">
            {periodLabels.bottom}
          </span>
        </div>
      </div>

      <div
        className={cn(
          "relative hidden sm:flex sm:items-center",
          hasEnd
            ? "sm:flex-col sm:justify-between sm:py-5"
            : "sm:justify-end sm:py-5",
        )}
      >
        {isFirst && hasEnd ? (
          <span
            aria-hidden="true"
            className="absolute top-0 left-1/2 h-5 w-2 -translate-x-1/2 bg-background"
          />
        ) : null}
        {isLast ? (
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-5 w-2 -translate-x-1/2 bg-background"
          />
        ) : null}
        {hasEnd ? (
          <span
            aria-hidden="true"
            className={cn(
              "relative z-10 size-3 rounded-full ring-4 ring-background",
              isEstimatedEnd
                ? "border-2 border-primary bg-background"
                : "bg-primary",
            )}
          />
        ) : null}
        {hasEnd ? (
          <span
            aria-hidden="true"
            className={cn(
              "relative w-1 flex-1 overflow-hidden rounded-full",
              isEstimatedEnd
                ? "cv-timeline-segment-animated bg-primary/10"
                : "bg-primary/20",
            )}
          />
        ) : null}
        <span
          aria-hidden="true"
          className="relative z-10 size-3 rounded-full bg-primary ring-4 ring-background"
        />
      </div>

      <CardSurface size="default">
        <VStack size="lg">
          <div className="flex items-center gap-2 sm:hidden">
            <span className={cn(mobileBadgeClassName, "border-border/70")}>
              {periodLabels.bottom}
            </span>
            {periodLabels.top ? (
              <span
                aria-hidden="true"
                className={cn(
                  "relative h-px min-w-0 flex-1 overflow-hidden rounded-full bg-primary/20",
                  isEstimatedEnd && "cv-timeline-segment-animated-horizontal",
                )}
              />
            ) : null}
            {periodLabels.top ? (
              <span
                className={cn(
                  mobileBadgeClassName,
                  isEstimatedEnd
                    ? "border-dotted border-border/70 text-muted-foreground/70"
                    : "border-border/70",
                )}
              >
                {periodLabels.top}
              </span>
            ) : null}
          </div>

          <div className="flex flex-col gap-3 border-b border-border/70 pb-4 sm:flex-row sm:items-start sm:justify-between">
            <VStack size="xs" className="min-w-0">
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-foreground/85 sm:text-base">
                {item.company}
              </p>
            </VStack>
            <p className="text-xs font-medium text-muted-foreground sm:pt-1 sm:text-right sm:text-sm">
              {item.location}
            </p>
          </div>

          <ul className="space-y-2.5 pl-5 text-sm leading-6 text-muted-foreground marker:text-foreground/60 sm:text-base">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="list-disc">
                {bullet}
              </li>
            ))}
          </ul>
        </VStack>
      </CardSurface>
    </li>
  );
}
