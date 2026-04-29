import * as React from "react";

import { cn } from "@/lib/utils";

const cardSurfaceSizeClassNames = {
  default: "p-4 sm:p-5",
  compact: "p-3.5 sm:p-4",
  inline: "px-4 py-3",
  dense: "px-3.5 py-3",
} as const;

type CardSurfaceSize = keyof typeof cardSurfaceSizeClassNames;
type CardSurfaceOwnProps<T extends React.ElementType> = {
  as?: T;
  size?: CardSurfaceSize;
};
type CardSurfaceProps<T extends React.ElementType> = CardSurfaceOwnProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof CardSurfaceOwnProps<T>>;

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-4 rounded-none border-0 bg-background py-5 text-card-foreground shadow-none sm:rounded-xl sm:border sm:border-border",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-5",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-2xl leading-none font-semibold sm:text-3xl",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground sm:text-base", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-5", className)}
      {...props}
    />
  );
}

export function CardSurface<T extends React.ElementType = "div">({
  as,
  size = "default",
  className,
  ...props
}: CardSurfaceProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      data-slot="card-surface"
      className={cn(
        "rounded-xl border bg-card shadow-none",
        cardSurfaceSizeClassNames[size],
        className,
      )}
      {...props}
    />
  );
}
