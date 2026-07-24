import { ComponentProps } from "react";

export type CardProps = ComponentProps<"div"> & { asChild?: boolean; size?: "default" | "sm" };
export type CardActionProps = ComponentProps<"div">;
export type CardContentProps = ComponentProps<"div">;
export type CardDescriptionProps = ComponentProps<"div"> & { asChild?: boolean };
export type CardFooterProps = ComponentProps<"div">;
export type CardHeaderProps = ComponentProps<"div">;
export type CardTitleProps = ComponentProps<"div"> & { asChild?: boolean };
