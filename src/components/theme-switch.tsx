import type { ChangeEvent, FC } from "react";

import { SvgIcon } from "./svg-icon";
import { useStoreDispatch, useStoreSelector } from "../hooks";
import { cn } from "../lib/utils";
import { selectThemeValue, setTheme } from "../slices/theme";

export const ThemeSwitch: FC = () => {
  const dispatch = useStoreDispatch();
  const themeValue = useStoreSelector(selectThemeValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTheme(event.target.checked ? "dark" : "light"));
  };

  return (
    <div className="group/theme-switch" data-slot="theme-switch">
      <input
        checked={themeValue === "dark"}
        className="absolute appearance-none"
        data-slot="theme-switch-input"
        id="theme-switch-input"
        onChange={handleChange}
        type="checkbox"
      />
      <label
        className={cn([
          "flex relative justify-between items-center p-1.25 w-17.5 h-8 bg-[#e5e5e5] rounded-full cursor-pointer",
          "[&_svg]:shrink-0 [&_svg]:pointer-events-none",
        ])}
        data-slot="theme-switch-label"
        htmlFor="theme-switch-input"
      >
        <SvgIcon className="size-6" data-slot="theme-switch-icon" name="moon" />
        <span
          className={cn([
            "absolute inset-y-0.5 left-0.5 size-7 bg-violet-500 rounded-full transition-transform",
            "group-has-checked/theme-switch:translate-x-9.5 dark:bg-white",
          ])}
          data-slot="theme-switch-ball"
        />
        <SvgIcon className="size-6" data-slot="theme-switch-icon" name="sun" />
      </label>
    </div>
  );
};
