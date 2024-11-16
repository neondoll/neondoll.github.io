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
      ru: "Frontend-разработчик из Москвы, который ищет развития и профессионального роста",
      en: "Frontend developer from Moscow who is looking for development and professional growth",
    }),
    interface: new TextByLanguage({
      ru: "Пришла во frontend-разработку, чтобы разрабатывать крутые интерфейсы и максимально улучшать пользовательский опыт",
      en: "Came into frontend development to develop cool interfaces and improve the user experience as much as possible",
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
