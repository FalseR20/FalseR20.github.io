import * as React from "react";

import { cn } from "@/lib/utils";

const stackGapClassNames = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4",
  xl: "gap-5",
  "2xl": "gap-6",
} as const;

type VStackSize = keyof typeof stackGapClassNames;
type PolymorphicProps<
  T extends React.ElementType,
  OwnProps extends object = object,
> = OwnProps & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof OwnProps | "as">;

type VStackProps<T extends React.ElementType> = PolymorphicProps<
  T,
  {
    size?: VStackSize;
  }
>;

export function VStack<T extends React.ElementType = "div">({
  as,
  size = "md",
  className,
  ...props
}: VStackProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      data-slot="stack"
      className={cn("flex flex-col", stackGapClassNames[size], className)}
      {...props}
    />
  );
}

export function SectionStack<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: PolymorphicProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      data-slot="section-stack"
      className={cn(
        "flex flex-col *:data-[slot=card]:rounded-none *:data-[slot=card]:border-x-0 *:data-[slot=card]:border-t *:data-[slot=card]:border-b-0 *:data-[slot=card]:border-foreground/12 sm:gap-4 sm:*:data-[slot=card]:rounded-xl sm:*:data-[slot=card]:border sm:*:data-[slot=card]:border-border",
        className,
      )}
      {...props}
    />
  );
}
