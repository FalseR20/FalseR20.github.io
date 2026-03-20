import { useTranslation } from "react-i18next";

import { VStack } from "@/components/ui/layout";
import { CvSection } from "@/features/cv/components/CvPrimitives";
import { ExperienceItem } from "@/features/cv/components/ExperienceItem";
import type { ExperienceItem as ExperienceEntry } from "@/features/cv/data/cv";

type ExperienceSectionProps = {
  experience: ExperienceEntry[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const { t } = useTranslation();

  return (
    <CvSection
      title={t("ui.experience.title")}
      description={t("ui.experience.description")}
      headerClassName="gap-3"
    >
      <VStack
        as="ol"
        size="xl"
        className="relative [--timeline-date-column:6.875rem] [--timeline-gap:1rem] [--timeline-line-column:1.25rem]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-5 bottom-5 hidden w-px -translate-x-1/2 bg-border sm:left-[calc(var(--timeline-date-column)+var(--timeline-gap)+(var(--timeline-line-column)/2))] sm:block"
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
    </CvSection>
  );
}
