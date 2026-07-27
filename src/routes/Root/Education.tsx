import { FC } from "react";
import { useTranslation } from "react-i18next";

export const Education: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-4 md:py-8" data-slot="education" id="education">
      <h2
        children={t("education.title", "Образование")}
        className="mb-4 text-xl font-black text-center md:mb-8 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        data-slot="education-title"
      />
      <div className="flex gap-2 md:gap-4">
        <img
          alt="ФГБОУ ВО «МИРЭА — Российский технологический университет»"
          className="object-contain object-center shrink-0 size-12 md:size-20"
          src="/images/MIREA.png"
        />
        <div className="flex-1 self-center">
          <h3 className="text-sm font-bold text-balance md:text-base lg:text-lg">Бакалавр программной инженерии</h3>
          <p className="text-xs text-balance md:text-sm lg:text-base">
            ФГБОУ ВО «МИРЭА — Российский технологический университет»
          </p>
          <p className="text-xs text-pretty md:text-sm lg:text-base">
            Направление 09.03.04 «Программная инженерия» · 2018 — 2022
          </p>
        </div>
      </div>
    </section>
  );
};
