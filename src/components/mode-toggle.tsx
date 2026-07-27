import { useTranslation } from "react-i18next";

import { useTheme } from "./theme-provider.hook";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { MoonIcon, SunIcon } from "./ui/icon";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span children={t("theme.trigger", "Toggle theme")} className="sr-only" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem children={t("theme.light", "Light")} onClick={() => setTheme("light")} />
        <DropdownMenuItem children={t("theme.dark", "Dark")} onClick={() => setTheme("dark")} />
        <DropdownMenuItem children={t("theme.system", "System")} onClick={() => setTheme("system")} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
