import { createContext } from "react";

import type { ThemeProviderState } from "./theme-provider.type";

const initialState: ThemeProviderState = { currentTheme: "light", theme: "system", setTheme: () => null };

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);
