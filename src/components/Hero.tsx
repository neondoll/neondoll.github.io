import { LanguageHeading2, LanguageParagraph, TextByLanguage } from "./Language";

interface Content {
  title: TextByLanguage;
  subtitle: TextByLanguage;
}

const content: Content = {
  title: new TextByLanguage({ ru: "Привет, я Александра!", en: "Hi, I'm Alexandra!" }),
  subtitle: new TextByLanguage({ ru: "Будем знакомы", en: "Nice to meet you" }),
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image" />
      <div className="hero__container">
        <LanguageHeading2 className="hero__title" text={content.title} />
        <LanguageParagraph className="hero__subtitle" text={content.subtitle} />
      </div>
    </section>
  );
}
