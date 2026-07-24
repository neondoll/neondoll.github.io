import type { FC, HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

import { SvgIcon, type SvgIconName } from "../../components/svg-icon";
import { cn } from "@/lib/utils";

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
    <li className={cn("flex flex-col gap-1 items-center text-center md:gap-2", className)} data-slot="stack-item">
      <SvgIcon className="shrink-0 size-12" data-slot="stack-item-icon" name={item.svgName} />
      <span
        children={item.text}
        className="text-sm whitespace-nowrap md:text-base lg:text-lg"
        data-slot="stack-item-text"
      />
    </li>
  );
};

export const Stack: FC = () => {
  const { t } = useTranslation();

  return (
    <section data-slot="stack">
      <h2
        children={t("stack.heading", "Мой стек")}
        className="mb-4 text-xl font-black text-center md:mb-8 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        data-slot="stack-title"
      />
      <ul
        className="[--min-width:88px] grid grid-cols-[repeat(auto-fill,minmax(var(--min-width),1fr))] gap-2 my-2 md:[--min-width:100px] md:gap-4 md:my-4 lg:[--min-width:112px]"
        data-slot="stack-list"
      >
        {Object.entries(STACK_ITEMS).map(([itemId, item]) => (
          <StackItem item={item} key={itemId} />
        ))}
      </ul>
      <h3
        children={t("stack.subheading", "Инструменты и прочее")}
        className="my-3 text-lg md:my-6 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
        data-slot="stack-subtitle"
      />
      <ul
        className="[--min-width:88px] grid grid-cols-[repeat(auto-fill,minmax(var(--min-width),1fr))] gap-2 my-2 md:[--min-width:100px] md:gap-4 md:my-4 lg:[--min-width:112px]"
        data-slot="stack-list"
      >
        {Object.entries(TOOLS_AND_OTHER_ITEMS).map(([itemId, item]) => (
          <StackItem item={item} key={itemId} />
        ))}
      </ul>
    </section>
  );
};
