import SvgIcon from "./SvgIcon";
import type { AnchorHTMLAttributes } from "react";
import type { SvgIconName } from "./SvgIcon";

interface Contact extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  text: string;
  svgName: SvgIconName;
}

const contacts: Record<string, Contact> = {
  github: { text: "GitHub", svgName: "github", href: "https://github.com/neondoll" },
  telegram: { text: "Telegram", svgName: "telegram", href: "https://t.me/owlet_owl" },
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <address className="footer__contacts footer-contacts">
          <ul className="footer-contacts__list">
            {Object.entries(contacts).map(([contactId, contact]) => (
              <li className="footer-contacts__item" key={contactId}>
                <SvgIcon className="footer-contacts__icon" name={contact.svgName} />
                <a className="footer-contacts__link" href={contact.href}>{contact.text}</a>
              </li>
            ))}
          </ul>
        </address>
      </div>
    </footer>
  );
}
