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
    duration: period.duration ?? null,
    bottom: formatPeriodDate(period.start),
  };
}

export function ExperienceItem({ item, isFirst, isLast }: ExperienceItemProps) {
  const periodLabels = getPeriodLabels(item.period);
  const hasEnd = periodLabels.top !== null;
  const isEstimatedEnd = Boolean(item.period.end && item.period.endIsEstimated);
  const mobileBadgeClassName =
    "inline-flex shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium text-muted-foreground";
  const timelineDotClassName =
    "relative z-10 size-3 rounded-full ring-[3px] ring-background";
  const timelineDefaultDotClassName =
    "border border-muted-foreground bg-muted-foreground";
  const timelineEstimatedDotClassName = "border-2 border-ring bg-background";

  return (
    <li className="grid grid-cols-1 gap-4 sm:grid-cols-[var(--timeline-date-column)_var(--timeline-line-column)_minmax(0,1fr)] sm:gap-(--timeline-gap)">
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
        {hasEnd && periodLabels.duration ? (
          <span className="pointer-events-none absolute top-1/2 left-1/2 z-20 block translate-x-[calc(-50%-11px)] -translate-y-1/2 -rotate-90 text-[11px] leading-none font-medium whitespace-nowrap text-muted-foreground/55">
            {periodLabels.duration}
          </span>
        ) : null}
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
              timelineDotClassName,
              isEstimatedEnd
                ? timelineEstimatedDotClassName
                : timelineDefaultDotClassName,
            )}
          />
        ) : null}
        {hasEnd ? (
          <span
            aria-hidden="true"
            className={cn(
              "relative w-1 flex-1 overflow-hidden rounded-full",
              isEstimatedEnd
                ? "cv-timeline-segment-animated bg-primary/5"
                : "bg-primary/10",
            )}
          />
        ) : null}
        <span
          aria-hidden="true"
          className={cn(timelineDotClassName, timelineDefaultDotClassName)}
        />
      </div>

      <CardSurface size="default">
        <VStack size="lg">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-1.5 gap-y-1 sm:hidden">
            {periodLabels.top && periodLabels.duration ? (
              <p className="col-start-2 row-start-1 justify-self-center text-[11px] leading-none font-medium text-muted-foreground/55">
                {periodLabels.duration}
              </p>
            ) : null}
            <span
              className={cn(
                mobileBadgeClassName,
                "col-start-1 row-start-2 border-border/70",
              )}
            >
              {periodLabels.bottom}
            </span>
            {periodLabels.top ? (
              <span
                aria-hidden="true"
                className={cn(
                  "relative col-start-2 row-start-2 h-px min-w-0 overflow-hidden rounded-full bg-primary/10",
                  isEstimatedEnd && "cv-timeline-segment-animated-horizontal",
                )}
              />
            ) : null}
            {periodLabels.top ? (
              <span
                className={cn(
                  mobileBadgeClassName,
                  "col-start-3 row-start-2",
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
