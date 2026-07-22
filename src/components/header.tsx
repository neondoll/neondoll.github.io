import type { FC } from "react";

import { LanguageDropdown } from "./language-dropdown";
import { ThemeSwitch } from "./theme-switch";

export const Header: FC = () => {
  return (
    <header className="py-4" data-slot="header">
      <div className="flex gap-4 justify-end items-center px-4 mx-auto container" data-slot="header-container">
        <ThemeSwitch />
        <LanguageDropdown />
      </div>
    </header>
  );
};
