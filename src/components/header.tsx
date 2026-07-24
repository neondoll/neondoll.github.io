import type { FC } from "react";

import { LanguageToggle } from "./language-toggle.tsx";
import { ModeToggle } from "./mode-toggle";

export const Header: FC = () => {
  return (
    <header className="py-4" data-slot="header">
      <div className="flex gap-4 justify-end items-center px-4 mx-auto container" data-slot="header-container">
        <nav>
          <a href="#hero">Александра Михайлова</a>
          <ul>
            <li><a href="#about">Обо мне</a></li>
            <li><a href="#work">Опыт</a></li>
            <li><a href="#stack">Стек</a></li>
            <li><a href="#projects">Проекты</a></li>
            <li><a href="#education">Образование</a></li>
            <li><a href="#certificates">Сертификаты</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </nav>
        <ModeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
};
