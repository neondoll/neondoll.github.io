import type { FC } from "react";
import { Link, type LinkProps } from "react-router-dom";

import Paths from "../paths";

interface Certificate extends Pick<LinkProps, "to"> {
  text: string;
}

const CERTIFICATES: Certificate[] = [
  {
    text: "CCNA 7. Switching, Routing, and Wireless Essentials (SRWE) (Основы маршрутизации, коммутации и беспроводных сетей)",
    to: Paths.DOCUMENT("certificates/-OST-2-MIREA-IKBO-certificate.pdf"),
  },
  {
    text: "HTML-верстка: с нуля до первого макета",
    to: Paths.DOCUMENT("certificates/certificate-html-layout-from-scratch-to-first-layout.pdf"),
  },
  {
    text: "Адаптивная и мобильная верстка",
    to: Paths.DOCUMENT("certificates/certificate-adaptive-and-mobile-layout.pdf"),
  },
  { text: "Основы программирования", to: Paths.DOCUMENT("certificates/certificate-basics-of-programming.pdf") },
  {
    text: "Git — система контроля версий",
    to: Paths.DOCUMENT("certificates/certificate-git-version-control-system.pdf"),
  },
  { text: "Основы JavaScript", to: Paths.DOCUMENT("certificates/certificate-basics-of-javascript.pdf") },
  {
    text: "Основы JavaScript в браузере",
    to: Paths.DOCUMENT("certificates/certificate-basics-of-javascript-in-browser.pdf"),
  },
  {
    text: "Продвинутый JavaScript: современные возможности языка",
    to: Paths.DOCUMENT("certificates/certificate-advanced-javascript-modern-language-features.pdf"),
  },
  {
    text: "Продвинутый JavaScript в браузере",
    to: Paths.DOCUMENT("certificates/certificate-advanced-javascript-in-browser.pdf"),
  },
  {
    text: "React: Библиотека №1 в современной фронтенд-разработке",
    to: Paths.DOCUMENT("certificates/certificate-react-1-library-in-modern-frontend-development.pdf"),
  },
  {
    text: "Frontend-разработчик с нуля до middle",
    to: Paths.DOCUMENT("certificates/certificate-frontend-developer-from-zero-to-middle.pdf"),
  },
];

export const Certificates: FC = () => {
  return (
    <section className="certificates">
      <h2 className="certificates__title">Сертификаты</h2>
      <ul className="certificates__list list-disc">
        {CERTIFICATES.map((item, index) => (
          <li className="certificates__item" key={index + 1}>
            <Link children={item.text} className="certificates__link" target="_blank" to={item.to} />
          </li>
        ))}
      </ul>
    </section>
  );
};
