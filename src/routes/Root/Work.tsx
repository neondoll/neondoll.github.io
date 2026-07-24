import { format, formatDistance } from "date-fns";
import { enUS, ru } from "date-fns/locale";
import { type FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Badge } from "@/components/ui/badge";
import { useTime } from "@/hooks";

type WorkPlace = {
  imgSrc: string;
  company: string;
  jobTitle: string;
  employmentForm: string;
  startDate: string;
  endDate?: string;
  address: string;
  responsibilities: string[];
  technologyStack: string[];
  tools: string[];
};

const WORK_PLACES: WorkPlace[] = [
  {
    imgSrc: "/images/MIREA.png",
    company: "ФГБОУ ВО «МИРЭА — Российский технологический университет» (УНИИСУ при Министерстве образования и науки РФ)",
    jobTitle: "Программист (Fullstack-разработчик)",
    employmentForm: "Полная занятость",
    startDate: "2020-02-01",
    address: "Москва, Россия",
    responsibilities: [
      "<b>Разработка SPA на Vue:</b> Разработка и поддержка внутренних веб-систем университета: интерфейсы на Vue 2/3 + TypeScript + Pinia/Vuex, создание SPA с использованием Vue Router.",
      "<b>Разработка SPA на React:</b> Разработка и поддержка внутренних веб-систем университета: интерфейсы на React + TypeScript + React Redux, создание SPA с использованием React Router.",
      "<b>Вёрстка и доступность:</b> Вёрстка адаптивных, семантических интерфейсов с заботой о доступности (accessibility / WCAG) и кроссбраузерности.",
      "<b>Разработка API и серверной логики:</b> Проектирование и реализация серверных модулей на Node.js и PHP (Yii2, Laravel) под задачи фронтенда, оптимизация SQL-запросов (MySQL/MariaDB) для ускорения отрисовки интерфейсов.",
      "<b>Окружение и CI/CD:</b> Оптимизация производительности интерфейсов, рефакторинг кода, работа с Git в Linux-окружении.",
    ],
    technologyStack: [
      "Bootstrap", "BootstrapVue", "CSS 3", "HTML 5", "JavaScript", "jQuery", "Laravel", "MySQL", "PHP", "SCSS",
      "Tailwind CSS", "Vue", "Vuetify", "Yii2",
    ],
    tools: ["DataGrip", "Git", "GitLab", "PhpStorm", "Vite", "Webpack"],
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
        <p
          children={item.address}
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
        <h4
          className="mb-2 text-base underline decoration-primary decoration-solid decoration-2 underline-offset-6 md:mb-4 md:text-lg md:underline-offset-12 lg:text-xl"
          data-slot="work-place-list-title"
        >
          Стек технологий:
        </h4>
        <ul className="flex flex-wrap gap-1 items-center mb-3 md:gap-2 md:mb-6" data-slot="work-place-list">
          {item.technologyStack.map(text => (
            <li data-slot="work-place-item" key={text}>
              <Badge
                children={text}
                className="px-2.5 py-0.75 h-6 text-sm rounded-full md:px-3 md:py-1 md:h-7 md:text-base lg:px-3.5 lg:py-1.25 lg:h-8 lg:text-lg"
              />
            </li>
          ))}
        </ul>
        <h4
          className="mb-2 text-base underline decoration-primary decoration-solid decoration-2 underline-offset-6 md:mb-4 md:text-lg md:underline-offset-12 lg:text-xl"
          data-slot="work-place-list-title"
        >
          Инструменты:
        </h4>
        <ul className="flex flex-wrap gap-1 items-center mb-3 md:gap-2 md:mb-6" data-slot="work-place-list">
          {item.tools.map(text => (
            <li data-slot="work-place-item" key={text}>
              <Badge
                children={text}
                className="px-2.5 py-0.75 h-6 text-sm rounded-full md:px-3 md:py-1 md:h-7 md:text-base lg:px-3.5 lg:py-1.25 lg:h-8 lg:text-lg"
              />
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
    <section data-slot="work">
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
