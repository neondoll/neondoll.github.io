import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { LanguageToggle } from "./language-toggle";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu.variants";

export const Header: FC = () => {
  const { t } = useTranslation();

  const navItems = useMemo(() => {
    return [
      { text: t("nav.list.about", "Обо мне"), link: "#about" },
      { text: t("nav.list.work", "Опыт"), link: "#work" },
      { text: t("nav.list.stack", "Стек"), link: "#stack" },
      { text: t("nav.list.projects", "Проекты"), link: "#projects" },
      { text: t("nav.list.education", "Образование"), link: "#education" },
      { text: t("nav.list.certificates", "Сертификаты"), link: "#certificates" },
      { text: t("nav.list.contact", "Контакты"), link: "#contact" },
    ];
  }, [t]);

  return (
    <header className="py-4" data-slot="header">
      <div className="flex gap-4 justify-start items-center px-4 mx-auto container" data-slot="header-container">
        <NavigationMenu className="mr-auto">
          <Button asChild>
            <a children={t("nav.title", "Александра Михайлова")} href="#hero" />
          </Button>
          <NavigationMenuList className="max-lg:hidden">
            {navItems.map(item => (
              <NavigationMenuItem key={item.link}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a children={item.text} href={item.link} />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
};
