import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CvSectionProps = React.ComponentProps<typeof Card> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  headerClassName?: string;
  contentClassName?: string;
};

export function CvSection({
  title,
  description,
  headerClassName,
  contentClassName,
  className,
  children,
  ...props
}: CvSectionProps) {
  return (
    <Card className={className} {...props}>
      {title || description ? (
        <CardHeader className={cn("gap-2", headerClassName)}>
          {title ? <CardTitle>{title}</CardTitle> : null}
          {description ? (
            <CardDescription>{description}</CardDescription>
          ) : null}
        </CardHeader>
      ) : null}
      <CardContent className={contentClassName}>{children}</CardContent>
    </Card>
  );
}

export function CvLabel({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase",
        className,
      )}
      {...props}
    />
  );
}

export function CvBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border bg-secondary px-3 py-1 text-xs font-semibold tracking-[0.18em] text-secondary-foreground uppercase",
        className,
      )}
      {...props}
    />
  );
}
