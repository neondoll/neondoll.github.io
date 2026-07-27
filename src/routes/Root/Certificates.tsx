import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link, type LinkProps } from "react-router-dom";

import Paths from "../../paths";

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
  const { t } = useTranslation();

  return (
    <section className="py-4 md:py-8" data-slot="certificates" id="certificates">
      <h2
        children={t("certificates.heading", "Сертификаты")}
        className="mb-4 text-xl font-black text-center md:mb-8 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        data-slot="certificates-title"
      />
      <ul className="space-y-1 list-inside list-disc marker:text-primary md:space-y-2" data-slot="certificates-list">
        {CERTIFICATES.map((item, index) => (
          <li data-slot="certificates-item" key={index + 1}>
            <Link
              children={item.text}
              className="text-sm outline-hidden transition-colors hover:text-primary focus-visible:text-primary md:text-base lg:text-lg"
              data-slot="certificates-link"
              target="_blank"
              to={item.to}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
