import Paths from "../paths";
import { LanguageHeading2, LanguageLink, TextByLanguage } from "./Language";
import type { LinkProps } from "react-router-dom";

interface Content {
  title: TextByLanguage;
  items: Certificate[];
}

interface Certificate extends Pick<LinkProps, "to"> {
  text: TextByLanguage;
}

const content: Content = {
  title: new TextByLanguage({ ru: "Сертификаты", en: "Certificates" }),
  items: [
    {
      text: new TextByLanguage({
        ru: "CCNA 7. Switching, Routing, and Wireless Essentials (SRWE) (Основы маршрутизации, коммутации и беспроводных сетей)",
        en: "CCNA 7. Switching, Routing, and Wireless Essentials (SRWE)",
      }),
      to: Paths.DOCUMENT("certificates/-OST-2-MIREA-IKBO-certificate.pdf"),
    },
    {
      text: new TextByLanguage({
        ru: "HTML-верстка: с нуля до первого макета",
        en: "HTML layout: from scratch to first layout",
      }),
      to: Paths.DOCUMENT("certificates/certificate-html-layout-from-scratch-to-first-layout.pdf"),
    },
    {
      text: new TextByLanguage({ ru: "Адаптивная и мобильная верстка", en: "Adaptive and mobile layout" }),
      to: Paths.DOCUMENT("certificates/certificate-adaptive-and-mobile-layout.pdf"),
    },
    {
      text: new TextByLanguage({ ru: "Основы программирования", en: "Basics of programming" }),
      to: Paths.DOCUMENT("certificates/certificate-basics-of-programming.pdf"),
    },
    {
      text: new TextByLanguage({ ru: "Git — система контроля версий", en: "Git — version control system" }),
      to: Paths.DOCUMENT("certificates/certificate-git-version-control-system.pdf"),
    },
    {
      text: new TextByLanguage({ ru: "Основы JavaScript", en: "Basics of JavaScript" }),
      to: Paths.DOCUMENT("certificates/certificate-basics-of-javascript.pdf"),
    },
    {
      text: new TextByLanguage({ ru: "Основы JavaScript в браузере", en: "Basics of JavaScript in the browser" }),
      to: Paths.DOCUMENT("certificates/certificate-basics-of-javascript-in-browser.pdf"),
    },
    {
      text: new TextByLanguage({
        ru: "Продвинутый JavaScript: современные возможности языка",
        en: "Advanced JavaScript: Modern Language Features",
      }),
      to: Paths.DOCUMENT("certificates/certificate-advanced-javascript-modern-language-features.pdf"),
    },
    {
      text: new TextByLanguage({ ru: "Продвинутый JavaScript в браузере", en: "Advanced JavaScript in the Browser" }),
      to: Paths.DOCUMENT("certificates/certificate-advanced-javascript-in-browser.pdf"),
    },
    {
      text: new TextByLanguage({
        ru: "React: Библиотека №1 в современной фронтенд-разработке",
        en: "React: The #1 Library in Modern Frontend Development",
      }),
      to: Paths.DOCUMENT("certificates/certificate-react-1-library-in-modern-frontend-development.pdf"),
    },
  ],
};

export default function Certificates() {
  return (
    <section className="certificates">
      <LanguageHeading2 className="certificates__title" text={content.title} />
      <ul className="certificates__list list-disc">
        {content.items.map((item, index) => (
          <li className="certificates__item" key={index + 1}>
            <LanguageLink className="certificates__link" target="_blank" text={item.text} to={item.to} />
          </li>
        ))}
      </ul>
    </section>
  );
}
