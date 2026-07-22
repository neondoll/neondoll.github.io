import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { cn } from "../lib/utils";

export const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="max-sm:relative sm:flex sm:flex-row-reverse sm:gap-6 sm:justify-between sm:items-center"
      data-slot="hero"
    >
      <div
        className={cn([
          "bg-[url(/images/NxcQR6VIBiA.jpg)] bg-no-repeat shadow-[0_0_0.5rem_0.5rem_var(--color-background)_inset]",
          // max-sm
          [
            "max-sm:absolute max-sm:left-1/2 max-sm:w-[calc(100%+var(--spacing)*8)] max-sm:h-full",
            "max-sm:bg-position-[center_25%] max-sm:bg-cover max-sm:-translate-x-1/2",
            // after
            "max-sm:after:absolute max-sm:after:inset-0 max-sm:after:z-1 max-sm:after:bg-background/60",
          ],
          // sm
          "sm:[--width:--spacing(87.5)] sm:shrink-0 sm:w-(--width) sm:h-[calc(var(--width)*2160/1440)] sm:bg-center sm:bg-contain",
          // lg
          "lg:[--width:--spacing(100)]",
          // xl
          "xl:[--width:--spacing(150)]",
        ])}
        data-slot="hero-image"
      />
      <div className="space-y-4 max-sm:relative max-sm:z-2 max-sm:py-16 sm:flex-auto" data-slot="hero-container">
        <h2 children={t("hero.title")} className="text-[clamp(2rem,4vw,4rem)] font-black" data-slot="hero-title" />
        <p
          children={t("hero.subtitle")}
          className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold"
          data-slot="hero-subtitle"
        />
        <div className="flex gap-4 justify-evenly items-center" data-slot="hero-button-group">
          <button
            children={t("hero.cta_projects")}
            className="flex justify-center p-2 w-full text-center text-white bg-primary rounded-sm"
            data-slot="hero-button"
            type="button"
          />
          <button
            children={t("hero.cta_contact")}
            className="flex justify-center p-2 w-full text-center text-white bg-primary rounded-sm"
            data-slot="hero-button"
            type="button"
          />
        </div>
      </div>
    </section>
  );
};
