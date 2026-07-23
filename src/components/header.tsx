import type { FC } from "react";

import { LanguageToggle } from "./language-toggle.tsx";
import { ModeToggle } from "./mode-toggle";

export const Header: FC = () => {
  return (
    <header className="py-4" data-slot="header">
      <div className="flex gap-4 justify-end items-center px-4 mx-auto container" data-slot="header-container">
        <ModeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
};
