import { format, formatDistance } from "date-fns";
import { enUS, ru } from "date-fns/locale";
import { type FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { useTime } from "@/hooks";

type WorkPlace = {
  imgSrc: string;
  company: string;
  jobTitle: string;
  employmentForm: string;
  startDate: string;
  endDate?: string;
  responsibilities: string[];
};

const WORK_PLACES: WorkPlace[] = [
  {
    imgSrc: "/images/MIREA.png",
    company: "ФГБОУ ВО «МИРЭА — Российский технологический университет» (УНИИиСУ при Министерстве образования и науки РФ)",
    jobTitle: "Программист (Fullstack-разработчик)",
    employmentForm: "Полная занятость",
    startDate: "2020-02-01",
    responsibilities: [
      "Разрабатываю и сопровождаю веб-приложения, создаваемые по заказу Министерства образования и науки.",
      "На фронтенде: создание интерфейсов на React (TypeScript) и Vue.js (Vue 2/3, Pinia, Vue Router), вёрстка по макетам, работа с формами, таблицами, модальными окнами.",
      "Участвую в проектировании REST API и схем баз данных (MySQL).",
      "На бэкенде: реализую серверную логику на PHP (основной фреймворк — Yii2, также есть проект на Laravel).",
      "Пишу SQL-запросы (включая JOIN, подзапросы, агрегации), проектирую структуру таблиц.",
      "Работаю в Linux (Ubuntu): базовые навыки терминала (установка пакетов, навигация, запуск скриптов), ежедневно использую git.",
    ],
  },
];

const WorkPlace: FC<{ item: WorkPlace }> = ({ item }) => {
  const time = useTime();
  const { i18n } = useTranslation();

  const startAndEnd = useMemo(() => {
    const formatStr = "MMM yyyy";

    const f = (date: string) => {
      return format(new Date(date), formatStr, {
        locale: i18n.language === "ru" ? ru : i18n.language === "en" ? enUS : undefined,
      });
    };

    return f(item.startDate) + " - " + (item.endDate ? f(item.endDate) : "по настоящее время"/* "present" */);
  }, [i18n.language, item.endDate, item.startDate]);
  const period = useMemo(() => {
    const f = (laterDate: string, earlierDate?: string) => {
      return formatDistance(new Date(laterDate), earlierDate ? new Date(earlierDate) : time, {
        locale: i18n.language === "ru" ? ru : i18n.language === "en" ? enUS : undefined,
      });
    };

    return f(item.startDate, item.endDate);
  }, [i18n.language, item.endDate, item.startDate, time]);

  return (
    <div className="flex gap-2 md:gap-4" data-slot="work-place">
      <img
        alt={item.company}
        className="object-contain object-center shrink-0 size-12 md:size-20"
        data-slot="work-place-image"
        src={item.imgSrc}
      />
      <div className="flex-1" data-slot="work-place-container">
        <h3
          children={item.company}
          className="mb-1 text-sm font-bold text-balance md:mb-2 md:text-base lg:text-lg"
          data-slot="work-place-title"
        />
        <p
          children={`${item.jobTitle} · ${item.employmentForm}`}
          className="mb-1 text-xs md:mb-2 md:text-sm lg:text-base"
          data-slot="work-place-text"
        />
        <p
          children={`${startAndEnd} · ${period}`}
          className="mb-1 text-xs md:mb-2 md:text-sm lg:text-base"
          data-slot="work-place-text"
        />
        <ul
          className="pl-5 my-3 space-y-1 list-outside list-disc marker:text-primary md:my-6 md:space-y-2"
          data-slot="work-place-list"
        >
          {item.responsibilities.map(text => (
            <li
              className="text-sm text-justify text-pretty md:text-base lg:text-lg"
              data-slot="work-place-item"
              key={text}
            >
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Work: FC = () => {
  const { t } = useTranslation();

  return (
    <section data-slot="work" id="work">
      <h2
        children={t("work.heading", "Опыт работы")}
        className="mb-4 text-xl font-black text-center md:mb-8 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        data-slot="work-title"
      />
      <div className="space-y-2 md:space-y-4" date-slot="work-container">
        {WORK_PLACES.map((item, index) => (
          <WorkPlace item={item} key={index + 1} />
        ))}
      </div>
    </section>
  );
};
