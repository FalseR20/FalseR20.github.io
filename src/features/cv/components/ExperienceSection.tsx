import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExperienceItem } from "@/features/cv/components/ExperienceItem";
import type { ExperienceItem as ExperienceEntry } from "@/features/cv/data/cv";

type ExperienceSectionProps = {
  experience: ExperienceEntry[];
};

export function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
  return (
    <Card className="bg-background">
      <CardHeader className="gap-3">
        <CardTitle className="text-2xl sm:text-3xl">
          Professional Experience
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Employment history listed from most recent to earlier roles.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="relative space-y-5">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-6 bottom-6 left-2.5 w-px -translate-x-1/2 bg-border sm:left-52.5"
          />
          {experience.map((item, index) => (
            <ExperienceItem
              key={`${item.company}-${item.role}`}
              item={item}
              isFirst={index === 0}
              isLast={index === experience.length - 1}
            />
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
