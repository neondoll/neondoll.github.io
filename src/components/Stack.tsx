import SvgIcon from "./SvgIcon";
import { cn } from "../lib/utils";
import { LanguageHeading2, LanguageHeading3, TextByLanguage } from "./Language";
import type { HTMLAttributes } from "react";
import type { SvgIconName } from "./SvgIcon";

interface Content {
  stack: { title: TextByLanguage; items: Record<string, StackItem> };
  toolsAndOther: { title: TextByLanguage; items: Record<string, StackItem> };
}

interface StackItem {
  text: string;
  svgName: SvgIconName;
}

interface StackItemProps extends Pick<HTMLAttributes<HTMLElement>, "className"> {
  item: StackItem;
}

const content: Content = {
  stack: {
    title: new TextByLanguage({ ru: "Мой стек", en: "My stack" }),
    items: {
      html5: { text: "HTML 5", svgName: "html5" },
      css3: { text: "CSS 3", svgName: "css3" },
      scss: { text: "SCSS", svgName: "scss" },
      jquery: { text: "jQuery", svgName: "jquery" },
      javascript: { text: "JavaScript", svgName: "javascript" },
      typescript: { text: "TypeScript", svgName: "typescript" },
      vue: { text: "Vue", svgName: "vue" },
      bootstrap: { text: "Bootstrap", svgName: "bootstrap" },
      bootstrap_vue: { text: "BootstrapVue", svgName: "bootstrap-vue" },
      vuetify: { text: "Vuetify", svgName: "vuetify" },
      tailwind_css: { text: "Tailwind CSS", svgName: "tailwind-css" },
    },
  },
  toolsAndOther: {
    title: new TextByLanguage({ ru: "Инструменты и прочее", en: "Tools and other" }),
    items: {
      webpack: { text: "Webpack", svgName: "webpack" },
      vite: { text: "Vite", svgName: "vite" },
      phpstorm: { text: "PhpStorm", svgName: "phpstorm" },
      git: { text: "Git", svgName: "git" },
    },
  },
};

function StackItem({ className, item }: StackItemProps) {
  return (
    <li className={cn("stack-item", className)}>
      <SvgIcon className="stack-item__icon" name={item.svgName} />
      <span className="stack-item__text">{item.text}</span>
    </li>
  );
}

export default function Stack() {
  return (
    <section className="stack">
      <LanguageHeading2 className="stack__title" text={content.stack.title} />
      <ul className="stack__list">
        {Object.entries(content.stack.items).map(([itemId, item]) => (
          <StackItem className="stack__item" item={item} key={itemId} />
        ))}
      </ul>
      <LanguageHeading3 className="stack__subtitle" text={content.toolsAndOther.title} />
      <ul className="stack__list">
        {Object.entries(content.toolsAndOther.items).map(([itemId, item]) => (
          <StackItem className="stack__item" item={item} key={itemId} />
        ))}
      </ul>
    </section>
  );
}
