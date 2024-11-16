import imageMirea from "../assets/MIREA.png";
import { enGB, ru } from "date-fns/locale";
import { format, formatDistance } from "date-fns";
import {
  LanguageHeading2, LanguageHeading3, LanguageHeading4, LanguageImage, LanguageLi, LanguageParagraph, LanguageText,
  TextByLanguage,
} from "./Language";

type Content = {
  title: TextByLanguage;
  items: Job[];
  technologyStackTitle: TextByLanguage;
  toolsTitle: TextByLanguage;
};
type Job = {
  imgSrc: string;
  title: TextByLanguage;
  company: TextByLanguage;
  employmentForm: TextByLanguage;
  startDate: string;
  endDate?: string;
  address: TextByLanguage;
  responsibilities: TextByLanguage[];
  technologyStack: Record<string, string>;
  tools: Record<string, string>;
};

const content: Content = {
  title: new TextByLanguage({ ru: "Опыт работы", en: "Work experience" }),
  items: [
    {
      imgSrc: imageMirea,
      title: new TextByLanguage({ ru: "Fullstack-разработчик", en: "Fullstack developer" }),
      company: new TextByLanguage({
        ru: "Учебно-научный институт информатики и систем управления при МИРЭА - Российском технологическом университете",
        en: "Educational and Scientific Institute of Informatics and Control Systems at MIREA - Russian Technological University",
      }),
      employmentForm: new TextByLanguage({ ru: "Полная занятость", en: "Full-time" }),
      startDate: "2020-02-01",
      address: new TextByLanguage({ ru: "Москва, Россия", en: "Moscow, Russia" }),
      responsibilities: [
        new TextByLanguage({
          ru: "Разработка систем с нуля (от проектирования архитектуры и схемы базы данных и до реализации системы)",
          en: "Development of systems from scratch (from designing the architecture and database schema to system implementation)",
        }),
        new TextByLanguage({ ru: "Поддержка существующих систем", en: "Support for existing systems" }),
        new TextByLanguage({ ru: "Доработка существующих систем", en: "Refinement of existing systems" }),
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
  ],
  technologyStackTitle: new TextByLanguage({ ru: "Стек технологий:", en: "Technologies Stack:" }),
  toolsTitle: new TextByLanguage({ ru: "Инструменты:", en: "Tools:" }),
};

function startAndEndOfJob({ startDate, endDate }: Pick<Job, "startDate" | "endDate">) {
  const formatStr = "MMM yyyy";

  const formatEn = (date: string) => format(new Date(date), formatStr, { locale: enGB });
  const formatRu = (date: string) => format(new Date(date), formatStr, { locale: ru });

  return new TextByLanguage({
    ru: `${formatRu(startDate)} - ${endDate ? formatRu(endDate) : "по настоящее время"}`,
    en: `${formatEn(startDate)} - ${endDate ? formatEn(endDate) : "present"}`,
  });
}

function periodOfJob({ startDate, endDate }: Pick<Job, "startDate" | "endDate">) {
  const formatDistanceEn = (laterDate: string, earlierDate?: string) => {
    return formatDistance(new Date(laterDate), earlierDate ? new Date(earlierDate) : Date.now(), { locale: enGB });
  };
  const formatDistanceRu = (laterDate: string, earlierDate?: string) => {
    return formatDistance(new Date(laterDate), earlierDate ? new Date(earlierDate) : Date.now(), { locale: ru });
  };

  return new TextByLanguage({
    ru: formatDistanceRu(startDate, endDate),
    en: formatDistanceEn(startDate, endDate),
  });
}

function Job({ item }: { item: Job }) {
  return (
    <div className="job">
      <LanguageImage alt={item.company} className="job__image" src={item.imgSrc} />
      <div className="job__container">
        <LanguageHeading3 className="job__title" text={item.title} />
        <p className="job__text">
          <LanguageText text={item.company} />
          {" · "}
          <LanguageText text={item.employmentForm} />
        </p>
        <p className="job__text">
          <LanguageText text={startAndEndOfJob(item)} />
          {" · "}
          <LanguageText text={periodOfJob(item)} />
        </p>
        <LanguageParagraph className="job__text" text={item.address} />
        <ul className="job__list list-dash">
          {item.responsibilities.map((text, index) => (
            <LanguageLi className="job__item" key={index + 1} text={text} />
          ))}
        </ul>
        <LanguageHeading4 className="job__list-title" text={content.technologyStackTitle} />
        <ul className="job__list list-disc">
          {Object.entries(item.technologyStack).map(([textId, text]) => (
            <li className="job__item" key={textId}>{text}</li>
          ))}
        </ul>
        <LanguageHeading4 className="job__list-title" text={content.toolsTitle} />
        <ul className="job__list list-disc">
          {Object.entries(item.tools).map(([textId, text]) => (
            <li className="job__item" key={textId}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section className="work">
      <LanguageHeading2 className="work__title" text={content.title} />
      <div className="work__container">
        {content.items.map((item, index) => (
          <Job item={item} key={index + 1} />
        ))}
      </div>
    </section>
  );
}
