import { Slot } from "@radix-ui/react-slot";

import type { BadgeProps } from "./badge.type";
import { badgeVariants } from "./badge.variants";
import { cn } from "@/lib/utils";

export function Badge({ asChild = false, className, variant = "default", ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={cn(badgeVariants({ variant }), className)}
      data-slot="badge"
      data-variant={variant}
      {...props}
    />
  );
}
