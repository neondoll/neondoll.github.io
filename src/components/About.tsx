import { cn } from "../lib/utils";
import { LanguageHeading2, LanguageParagraph, TextByLanguage } from "./Language";

interface Content {
  title: TextByLanguage;
  text: Record<string, TextByLanguage>;
}

const content: Content = {
  title: new TextByLanguage({ ru: "Обо мне", en: "About me" }),
  text: {
    me: new TextByLanguage({
      ru: "Привет! Я Александра — frontend-разработчик с опытом более 6 лет.",
      en: "Hi! I'm Aleksandra, a frontend developer with over 6 years of experience.",
    }),
    superpower: new TextByLanguage({
      ru: "Моя главная суперсила — умение работать на всём цикле создания интерфейса: от обсуждения требований с заказчиком до pixel-perfect вёрстки и интеграции с серверным API.",
      en: "My main superpower is my ability to work across the entire interface creation cycle: from discussing requirements with the client to pixel-perfect layout and integration with the server API.",
    }),
    interface: new TextByLanguage({
      ru: "Я специализируюсь на экосистеме React (с TypeScript) и Vue.js, а благодаря серьёзному бэкенд-опыту (PHP, Laravel, MySQL) быстро нахожу общий язык с серверной командой и проектирую фронтенд, который легко интегрируется.",
      en: "I specialize in the React (with TypeScript) and Vue.js ecosystem, and thanks to my strong backend experience (PHP, Laravel, MySQL), I quickly find common ground with the server team and design a frontend that is easy to integrate.",
    }),
  },
};

export default function About() {
  return (
    <section className="about">
      <LanguageHeading2 className="about__title" text={content.title} />
      <div className="about__container">
        {Object.entries(content.text).map(([textId, text]) => (
          <LanguageParagraph className={cn("about__text", `about__text--${textId}`)} key={textId} text={text} />
        ))}
      </div>
    </section>
  );
}
