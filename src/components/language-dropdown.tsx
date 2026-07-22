import { ChevronDownIcon } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import { type FC, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { SvgIcon } from "./svg-icon";
import { cn } from "../lib/utils";

const LANGUAGES = [
  { code: "ru", label: "RU", flagName: "russian" },
  { code: "en", label: "EN", flagName: "english" },
] as const;

export const LanguageDropdown: FC = () => {
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
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label=""
          className={cn([
            "inline-flex gap-1.25 justify-between items-center p-2.5 text-base/none outline-hidden cursor-pointer",
            "group/language-dropdown-trigger [&_svg]:shrink-0 [&_svg]:pointer-events-none",
          ])}
          data-slot="language-dropdown-trigger"
          type="button"
        >
          <SvgIcon className="size-8" name={currentLanguage.flagName} />
          <span children={currentLanguage.label} />
          <ChevronDownIcon
            className={cn([
              "size-4 transition-transform duration-200 group-data-[state=open]/language-dropdown-trigger:rotate-180",
            ])}
            data-slot="language-dropdown-trigger-icon"
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn([
            "overflow-hidden p-1.25 w-full min-w-(--radix-dropdown-menu-trigger-width)",
            "max-w-(--radix-dropdown-menu-content-available-width) text-[#202020] bg-white rounded-lg",
          ])}
          data-slot="language-dropdown-content"
        >
          {LANGUAGES.map(lang => (
            <DropdownMenu.Item
              className={cn([
                "flex gap-2.5 items-center p-1.25 text-base/none rounded-sm outline-hidden transition-colors",
                "duration-200 cursor-pointer hover:text-white hover:bg-violet-500 [&_svg]:shrink-0",
                "[&_svg]:pointer-events-none",
                currentLanguage.code === lang.code && "bg-violet-500/50",
              ])}
              data-slot="language-dropdown-item"
              key={lang.code}
              onSelect={() => changeLanguage(lang.code)}
            >
              <SvgIcon className="size-8" name={lang.flagName} />
              <span children={lang.label} />
            </DropdownMenu.Item>
          ))}

          <DropdownMenu.Arrow className="fill-white" data-slot="language-dropdown-arrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
