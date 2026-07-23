import type { FC, HTMLAttributes } from "react";

import { SvgIcon, type SvgIconName } from "../../components/svg-icon.tsx";
import { cn } from "../../lib/utils.ts";

type StackItem = { text: string; svgName: SvgIconName };

const STACK_ITEMS: Record<string, StackItem> = {
  bootstrap: { text: "Bootstrap", svgName: "bootstrap" },
  bootstrap_vue: { text: "BootstrapVue", svgName: "bootstrap-vue" },
  css3: { text: "CSS 3", svgName: "css3" },
  html5: { text: "HTML 5", svgName: "html5" },
  javascript: { text: "JavaScript", svgName: "javascript" },
  jquery: { text: "jQuery", svgName: "jquery" },
  pinia: { text: "Pinia", svgName: "pinia" },
  react: { text: "React", svgName: "react" },
  react_redux: { text: "React Redux", svgName: "react-redux" },
  react_router: { text: "React Router", svgName: "react-router" },
  scss: { text: "SCSS", svgName: "scss" },
  tailwind_css: { text: "Tailwind CSS", svgName: "tailwind-css" },
  typescript: { text: "TypeScript", svgName: "typescript" },
  vue: { text: "Vue", svgName: "vue" },
  vue_router: { text: "Vue Router", svgName: "vue" },
  vuetify: { text: "Vuetify", svgName: "vuetify" },
};
const TOOLS_AND_OTHER_ITEMS: Record<string, StackItem> = {
  git: { text: "Git", svgName: "git" },
  phpstorm: { text: "PhpStorm", svgName: "phpstorm" },
  vite: { text: "Vite", svgName: "vite" },
  webpack: { text: "Webpack", svgName: "webpack" },
};

const StackItem: FC<Pick<HTMLAttributes<HTMLElement>, "className"> & { item: StackItem }> = ({ className, item }) => {
  return (
    <li className={cn("stack-item", className)}>
      <SvgIcon className="stack-item__icon" name={item.svgName} />
      <span children={item.text} className="stack-item__text" />
    </li>
  );
};

export const Stack: FC = () => {
  return (
    <section className="stack">
      <h2 className="stack__title">Мой стек</h2>
      <ul className="stack__list">
        {Object.entries(STACK_ITEMS).map(([itemId, item]) => (
          <StackItem className="stack__item" item={item} key={itemId} />
        ))}
      </ul>
      <h3 className="stack__subtitle">Инструменты и прочее</h3>
      <ul className="stack__list">
        {Object.entries(TOOLS_AND_OTHER_ITEMS).map(([itemId, item]) => (
          <StackItem className="stack__item" item={item} key={itemId} />
        ))}
      </ul>
    </section>
  );
};
