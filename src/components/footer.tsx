import type { FC } from "react";

import { SvgIcon } from "./svg-icon";
import { cn } from "../lib/utils";

const CONTACTS = [
  { value: "github", label: "GitHub", href: "https://github.com/neondoll" },
  { value: "telegram", label: "Telegram", href: "https://t.me/owlet_owl" },
] as const;

export const Footer: FC = () => {
  return (
    <footer className="py-6" data-slot="footer">
      <div className="px-4 mx-auto container" data-slot="footer-container">
        <p>&copy; 2026 Александра Михайлова</p>
        <p>Сайт создан на React + TypeScript. Английская версия — демонстрация интернационализации, не отражает уровень разговорного английского.</p>
        <address className="" data-slot="footer-contacts">
          <ul
            className="flex gap-6 justify-center max-sm:flex-col max-sm:items-center"
            data-slot="footer-contacts-list"
          >
            {CONTACTS.map(contact => (
              <li
                className={cn([
                  "inline-flex relative z-0 gap-4 items-center p-2 text-primary rounded-sm pointer-events-none",
                  "has-hover:text-white has-focus-visible:text-white",
                ])}
                data-slot="footer-contacts-item"
                key={contact.value}
              >
                <SvgIcon className="size-6" data-slot="footer-contacts-icon" name={contact.value} />
                <a
                  children={contact.label}
                  className={cn([
                    "text-base/none outline-hidden pointer-events-auto",
                    // before
                    "before:absolute before:inset-0 before:-z-1",
                    // after
                    "after:absolute after:bottom-0 after:left-0 after:-z-1 after:w-full after:h-0.5",
                    "after:bg-primary after:transition-all hover:after:h-full focus-visible:after:h-full",
                  ])}
                  data-slot="footer-contacts-link"
                  href={contact.href}
                />
              </li>
            ))}
          </ul>
        </address>
        <p><a href="https://github.com/neondoll/neondoll.github.io">Исходный код этого сайта</a></p>
      </div>
    </footer>
  );
};
