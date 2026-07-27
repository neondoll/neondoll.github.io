import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "../../components/ui/button";
import { cn } from "@/lib/utils";

export const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-4 max-sm:relative sm:flex sm:flex-row-reverse sm:gap-6 sm:justify-between sm:items-center md:py-8"
      data-slot="hero"
      id="hero"
    >
      <div
        className={cn([
          "bg-[url(/images/NxcQR6VIBiA.jpg)] bg-no-repeat shadow-[0_0_0.5rem_0.5rem_var(--color-background)_inset]",
          "pointer-events-none",
          // max-sm
          [
            "max-sm:absolute max-sm:inset-y-0 max-sm:left-1/2 max-sm:w-[calc(100%+var(--spacing)*8)] max-sm:h-full",
            "max-sm:bg-position-[center_25%] max-sm:bg-cover max-sm:-translate-x-1/2",
            // after
            "max-sm:after:absolute max-sm:after:inset-0 max-sm:after:z-1 max-sm:after:bg-background/60",
          ],
          // sm
          "sm:aspect-1440/2160 sm:flex-2 sm:max-w-150 sm:bg-center sm:bg-contain",
        ])}
        data-slot="hero-image"
      />
      <div className="space-y-4 max-sm:relative max-sm:z-2 max-sm:py-8 sm:flex-3" data-slot="hero-container">
        <h1
          children={t("hero.title", "Александра Михайлова")}
          className="text-2xl font-black text-balance max-sm:text-center md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          data-slot="hero-title"
        />
        <p
          children={t("hero.profession", "Frontend-разработчик (React, TypeScript, Vue.js)")}
          className="text-xl font-black text-balance max-sm:text-center md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
          data-slot="hero-profession"
        />
        <p
          children={t("hero.desc", "Создаю удобные, доступные интерфейсы и веб-приложения с вниманием к деталям.")}
          className="text-lg font-bold text-balance max-sm:text-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
          data-slot="hero-desc"
        />
        <div className="grid grid-cols-2 gap-4 justify-evenly items-center" data-slot="hero-button-group">
          <Button asChild data-slot="hero-button" size="lg">
            <a children={t("hero.cta_projects", "Смотреть проекты")} href="#projects" />
          </Button>
          <Button asChild data-slot="hero-button" size="lg">
            <a children={t("hero.cta_contact", "Связаться со мной")} href="#contact" />
          </Button>
        </div>
      </div>
    </section>
  );
};
