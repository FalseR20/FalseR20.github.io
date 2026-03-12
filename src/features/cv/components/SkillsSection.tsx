import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SkillGroup } from "@/features/cv/data/cv";

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <Card className="bg-background">
      <CardHeader className="gap-2">
        <CardTitle className="text-2xl sm:text-3xl">
          Technical Skills
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Tools and technologies used across backend, frontend, mobile, and
          delivery work.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-3 rounded-xl border bg-card p-4 shadow-none sm:p-5 md:grid-cols-[10rem_minmax(0,1fr)] md:items-start"
          >
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                Domain
              </p>
              <h3 className="mt-2 text-sm font-medium tracking-[0.18em] text-foreground uppercase">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-foreground/85 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
