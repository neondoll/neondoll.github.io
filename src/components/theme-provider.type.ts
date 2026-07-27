import type { ReactNode } from "react";

export type Theme = "dark" | "light" | "system";
export type ThemeProviderProps = { children: ReactNode; defaultTheme?: Theme; storageKey?: string };
export type ThemeProviderState = {
  currentTheme: Exclude<Theme, "system">;
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
