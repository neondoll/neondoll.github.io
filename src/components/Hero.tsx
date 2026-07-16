import { LanguageHeading2, LanguageParagraph, TextByLanguage } from "./Language";

interface Content {
  title: TextByLanguage;
  subtitle: TextByLanguage;
}

const content: Content = {
  title: new TextByLanguage({
    ru: "Александра Михайлова — Frontend-разработчик",
    en: "Aleksandra Mikhaylova — Frontend Developer",
  }),
  subtitle: new TextByLanguage({
    ru: "Создаю быстрые, доступные и удобные интерфейсы на React, TypeScript и Vue.js. Превращаю сложную логику в простой пользовательский опыт.",
    en: "I create fast, accessible, and user-friendly interfaces using React, TypeScript, and Vue.js. I transform complex logic into a simple user experience.",
  }),
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
