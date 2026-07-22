import { format, formatDistance } from "date-fns";
import { enUS, ru } from "date-fns/locale";
import { type FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { useTime } from "../hooks";

type Job = {
  imgSrc: string;
  title: string;
  company: string;
  employmentForm: string;
  startDate: string;
  endDate?: string;
  address: string;
  responsibilities: string[];
  technologyStack: Record<string, string>;
  tools: Record<string, string>;
};

const JOBS: Job[] = [
  {
    imgSrc: "/images/MIREA.png",
    title: "Fullstack-разработчик",
    company: "Учебно-научный институт информатики и систем управления при МИРЭА - Российском технологическом университете",
    employmentForm: "Полная занятость",
    startDate: "2020-02-01",
    address: "Москва, Россия",
    responsibilities: [
      "Разработка систем с нуля (от проектирования архитектуры и схемы базы данных и до реализации системы)",
      "Поддержка существующих систем",
      "Доработка существующих систем",
    ],
    technologyStack: {
      html5: "HTML 5",
      css3: "CSS 3",
      scss: "SCSS",
      jquery: "jQuery",
      javascript: "JavaScript",
      vue: "Vue",
      bootstrap: "Bootstrap",
      bootstrap_vue: "BootstrapVue",
      vuetify: "Vuetify",
      tailwind_css: "Tailwind CSS",
      php: "PHP",
      yii2: "Yii2",
      laravel: "Laravel",
      mysql: "MySQL",
    },
    tools: {
      webpack: "Webpack",
      vite: "Vite",
      phpstorm: "PhpStorm",
      datagrip: "DataGrip",
      git: "Git",
      gitlab: "GitLab",
    },
  },
];

const Job: FC<{ item: Job }> = ({ item }) => {
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
    <div className="job">
      <img alt={item.company} className="job__image" src={item.imgSrc} />
      <div className="job__container">
        <h3 children={item.title} className="job__title" />
        <p children={`${item.company} · ${item.employmentForm}`} className="job__text" />
        <p children={`${startAndEnd} · ${period}`} className="job__text" />
        <p children={item.address} className="job__text" />
        <ul className="job__list list-dash">
          {item.responsibilities.map((text, index) => (
            <li children={text} className="job__item" key={index + 1} />
          ))}
        </ul>
        <h4 className="job__list-title">Стек технологий:</h4>
        <ul className="job__list list-disc">
          {Object.entries(item.technologyStack).map(([textId, text]) => (
            <li children={text} className="job__item" key={textId} />
          ))}
        </ul>
        <h4 className="job__list-title">Инструменты:</h4>
        <ul className="job__list list-disc">
          {Object.entries(item.tools).map(([textId, text]) => (
            <li children={text} className="job__item" key={textId} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Work: FC = () => {
  return (
    <section className="work">
      <h2 className="work__title">Опыт работы</h2>
      <div className="work__container">
        {JOBS.map((item, index) => (
          <Job item={item} key={index + 1} />
        ))}
      </div>
    </section>
  );
};
