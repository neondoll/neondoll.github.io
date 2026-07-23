import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const About: FC = () => {
  const { t } = useTranslation();

  return (
    <section data-slot="about">
      <h2
        children={t("about.heading", "Обо мне")}
        className="mb-4 text-xl font-black text-center md:mb-8 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        data-slot="about-title"
      />
      <div className="space-y-2 md:space-y-4" date-slot="about-container">
        <p
          children={t("about.p1", "Привет! Я Александра — frontend-разработчик с более чем 6-летним опытом. Моя специализация — создание сложных веб-интерфейсов и SPA на React и Vue.js с использованием TypeScript.")}
          className="text-sm text-justify text-pretty md:text-base lg:text-lg"
          data-slot="about-text"
        />
        <p
          children={t("about.p2", "Я прошла путь от вёрстки до проектирования архитектуры фронтенда. Благодаря серьёзному бэкенд-опыту (PHP, Laravel, MySQL) я хорошо понимаю, как фронтенд взаимодействует с сервером, и могу эффективно работать в fullstack-команде.")}
          className="text-sm text-justify text-pretty md:text-base lg:text-lg"
          data-slot="about-text"
        />
        <p
          children={t("about.p3", "В последних проектах активно использую React, TypeScript и Tailwind CSS, разрабатываю переиспользуемые компоненты и уделяю большое внимание доступности интерфейсов (a11y).")}
          className="text-sm text-justify text-pretty md:text-base lg:text-lg"
          data-slot="about-text"
        />
        <p
          className="text-sm text-justify text-pretty md:text-base lg:text-lg"
          dangerouslySetInnerHTML={{ __html: t("about.languages", "Языки: русский — родной, английский — Pre-Intermediate (читаю техническую документацию, свободно пишу код, разговорный — базовый).") }}
          data-slot="about-text"
        />
      </div>
    </section>
  );
};
