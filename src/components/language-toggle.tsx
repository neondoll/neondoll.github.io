import { ChevronDownIcon } from "lucide-react";
import { type FC, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { SvgIcon } from "./svg-icon";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const LANGUAGES = [
  { code: "ru", label: "RU", flagName: "russian" },
  { code: "en", label: "EN", flagName: "english" },
] as const;

export const LanguageToggle: FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback((lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);

    if (lng === "en") {
      // toast
    }
  }, [i18n]);

  const currentLanguage = useMemo(() => {
    return LANGUAGES.find(lang => lang.code === i18n.language)!;
  }, [i18n.language]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Toggle Language"
          className="group/language-dropdown-trigger"
          data-slot="language-dropdown-trigger"
          variant="outline"
        >
          <SvgIcon className="size-7" name={currentLanguage.flagName} />
          <span children={currentLanguage.label} />
          <ChevronDownIcon
            className="transition-transform group-data-[state=open]/language-dropdown-trigger:rotate-180"
            data-slot="language-dropdown-trigger-icon"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="min-w-(--radix-dropdown-menu-trigger-width) max-w-(--radix-dropdown-menu-content-available-width)"
        data-slot="language-dropdown-content"
      >
        {LANGUAGES.map(lang => (
          <DropdownMenuItem
            className="transition-colors cursor-pointer"
            data-slot="language-dropdown-item"
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
          >
            <SvgIcon className="size-7" name={lang.flagName} />
            <span children={lang.label} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
