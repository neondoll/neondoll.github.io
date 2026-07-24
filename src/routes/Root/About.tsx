import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const About: FC = () => {
  const { t } = useTranslation();

  return (
    <section data-slot="about" id="about">
      <h2
        children={t("about.heading", "Обо мне")}
        className="mb-4 text-xl font-black text-center md:mb-8 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        data-slot="about-title"
      />
      <div className="space-y-2 md:space-y-4" date-slot="about-container">
        <p
          children={t("about.p1", "Привет! Меня зовут Александра, я frontend-разработчик с опытом более 6 лет. Начинала с вёрстки и постепенно перешла к созданию сложных интерфейсов на JavaScript, Vue.js и React.")}
          className="text-sm text-justify text-pretty md:text-base lg:text-lg"
          data-slot="about-text"
        />
        <p
          children={t("about.p2", "Последние несколько лет работаю в организации при Министерстве образования и науки, где разрабатываю и сопровождаю веб-приложения по государственным контрактам. Это помогает мне понимать полный цикл разработки: я работаю и с фронтендом, и с бэкендом.")}
          className="text-sm text-justify text-pretty md:text-base lg:text-lg"
          data-slot="about-text"
        />
        <p
          children={t("about.p3", "На бэкенде использую PHP, основной фреймворк — Yii2, был один проект на Laravel. Самостоятельно пишу REST API и работаю с базой данных MySQL (проектирую структуру, пишу запросы любой сложности).")}
          className="text-sm text-justify text-pretty md:text-base lg:text-lg"
          data-slot="about-text"
        />
        <p
          children={t("about.p4", "Сейчас фокусируюсь на React и TypeScript, также использую Vue.js. Уделяю внимание чистоте кода, адаптивности и доступности интерфейсов.")}
          className="text-sm text-justify text-pretty md:text-base lg:text-lg"
          data-slot="about-text"
        />
        <ul
          className="pl-5 space-y-1 text-sm list-outside list-disc text-justify text-pretty whitespace-pre-line marker:text-primary md:space-y-2 md:text-base lg:text-lg"
          data-slot="about-list"
        >
          <li
            dangerouslySetInnerHTML={{ __html: t("about.languages", "<strong>Языки:</strong> Русский — родной, английский — Pre-Intermediate. \nЧитаю техническую документацию (при необходимости с переводчиком), пишу код на английском. \nРазговорный английский — базовый.") }}
            data-slot="about-list-item"
          />
          <li
            dangerouslySetInnerHTML={{ __html: t("about.employment", "<strong>Занятость:</strong> открыта к предложениям (офис / гибрид / удалённо).") }}
            data-slot="about-list-item"
          />
        </ul>
      </div>
    </section>
  );
};
