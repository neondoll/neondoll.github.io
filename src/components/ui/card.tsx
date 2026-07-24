import { Slot } from "@radix-ui/react-slot";

import {
  CardActionProps, CardContentProps, CardDescriptionProps, CardFooterProps, CardHeaderProps, CardProps, CardTitleProps,
} from "./card.type";
import { cn } from "@/lib/utils";

export function Card({ asChild = false, className, size = "default", ...props }: CardProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn([
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm",
        "text-card-foreground shadow-xs ring-1 ring-foreground/10 [--card-spacing:--spacing(6)]",
        "has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] *:[img:first-child]:rounded-t-xl",
        "*:[img:last-child]:rounded-b-xl",
      ], className)}
      data-size={size}
      data-slot="card"
      {...props}
    />
  );
}

export function CardAction({ className, ...props }: CardActionProps) {
  return (
    <div
      className={cn(["col-start-2 row-span-2 row-start-1 self-start justify-self-end"], className)}
      data-slot="card-action"
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      className={cn(["px-(--card-spacing)"], className)}
      data-slot="card-content"
      {...props}
    />
  );
}

export function CardDescription({ asChild = false, className, ...props }: CardDescriptionProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(["text-sm text-muted-foreground"], className)}
      data-slot="card-description"
      {...props}
    />
  );
}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn(["flex items-center rounded-b-xl px-(--card-spacing) [.border-t]:pt-(--card-spacing)"], className)}
      data-slot="card-footer"
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn([
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl",
        "px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        "has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
      ], className)}
      data-slot="card-header"
      {...props}
    />
  );
}

export function CardTitle({ asChild = false, className, ...props }: CardTitleProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(["font-heading text-base leading-normal font-medium group-data-[size=sm]/card:text-sm"], className)}
      data-slot="card-title"
      {...props}
    />
  );
}
