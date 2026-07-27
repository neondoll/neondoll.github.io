import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ComponentProps } from "react";

export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root>;
export type TooltipContentProps = ComponentProps<typeof TooltipPrimitive.Content>;
export type TooltipProviderProps = ComponentProps<typeof TooltipPrimitive.Provider>;
export type TooltipTriggerProps = ComponentProps<typeof TooltipPrimitive.Trigger>;
