import { Slot } from "@radix-ui/react-slot";

import type { ButtonProps } from "./button.type";
import { buttonVariants } from "./button.variants";
import { cn } from "@/lib/utils";

export function Button({ asChild = false, className, size = "default", variant = "default", ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ className, size, variant }))}
      data-size={size}
      data-slot="button"
      data-variant={variant}
      {...props}
    />
  );
}
