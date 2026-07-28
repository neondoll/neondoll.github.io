import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { SvgIcon } from "@/components/svg-icon";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
// import { cn } from "@/lib/utils";

// type StackItem = { text: string; svgName: SvgIconName };

/* const STACK_ITEMS: Record<string, StackItem> = {
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
}; */

/* const StackItem: FC<Pick<HTMLAttributes<HTMLElement>, "className"> & { item: StackItem }> = ({ className, item }) => {
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
}; */

export const Stack: FC = () => {
  const { t } = useTranslation();

  const stackGroups = [
    {
      title: "Языки и основа",
      items: [
        { name: "JavaScript", svgName: "skill-icons:javascript", tooltip: "Основной язык разработки." },
        {
          name: "TypeScript",
          svgName: "skill-icons:typescript",
          tooltip: "Использую в новых проектах на React и Vue 3.",
        },
        { name: "HTML5", svgName: "devicon:html5", tooltip: "Семантическая вёрстка." },
        { name: "CSS3", svgName: "devicon:css3", tooltip: "Стилизация, адаптивность, анимации." },
        {
          name: "SCSS",
          svgName: "vscode-icons:file-type-scss",
          tooltip: "Препроцессор для более удобной работы со стилями.",
        },
      ],
    },
    {
      title: "Фреймворки и SPA",
      items: [
        {
          name: "React",
          svgName: "skill-icons:react",
          tooltip: "Один коммерческий проект и несколько пет-проектов. Развиваюсь в этом направлении.",
        },
        {
          name: "Vue.js",
          svgName: "skill-icons:vuejs",
          tooltip: "Основной фреймворк на работе (Vue 2/3, Composition API).",
        },
        {
          name: "React Router",
          svgName: "vscode-icons:file-type-reactrouter",
          tooltip: "Маршрутизация в React-приложениях.",
        },
        { name: "Tailwind CSS", svgName: "skill-icons:tailwindcss", tooltip: "Активно применяю в последних проектах." },
      ],
    },
    {
      title: "Управление состоянием",
      items: [
        { name: "Pinia", svgName: "skill-icons:pinia", tooltip: "Основное хранилище в проектах на Vue 3." },
        { name: "Vue Router", svgName: "skill-icons:vuejs", tooltip: "Навигация для SPA на Vue." },
        {
          name: "Redux",
          svgName: "skill-icons:redux",
          tooltip: "Глобальное состояние в React-приложении (проект «Премии Правительства РФ»).",
        },
      ],
    },
    {
      title: "UI-библиотеки",
      items: [
        {
          name: "shadcn/ui",
          svgName: "vscode-icons:file-type-shadcn",
          tooltip: "Набор компонентов на Radix + Tailwind. Использовала в проекте «Премии».",
        },
        { name: "Radix UI", svgName: "bxl:radix-ui", tooltip: "Headless-компоненты, основа для shadcn/ui." },
        { name: "Bootstrap", svgName: "skill-icons:bootstrap", tooltip: "Знакома, применяла в ранних проектах." },
      ],
    },
    {
      title: "Бэкенд и базы данных",
      items: [
        { name: "PHP", svgName: "skill-icons:php", tooltip: "Разрабатываю серверную логику." },
        { name: "Yii2", svgName: "devicon:yii", tooltip: "Основной фреймворк на работе (большинство проектов)." },
        { name: "Laravel", svgName: "skill-icons:laravel", tooltip: "Один проект, есть практический опыт." },
        { name: "MySQL", svgName: "skill-icons:mysql", tooltip: "Проектирую БД, пишу сложные запросы." },
        { name: "REST API", svgName: "dashicons:rest-api", tooltip: "Проектирую endpoints и интегрирую с фронтендом." },
      ],
    },
    {
      title: "Инструменты и окружение",
      items: [
        {
          name: "Git",
          svgName: "skill-icons:git",
          tooltip: "Ежедневная работа: ветки, pull requests, решение конфликтов.",
        },
        { name: "Ubuntu", svgName: "skill-icons:ubuntu", tooltip: "Рабочее окружение, базовые навыки терминала." },
        { name: "Vite", svgName: "skill-icons:vite", tooltip: "Сборщик для React-проектов, быстрая разработка." },
      ],
    },
    {
      title: "Дополнительно",
      items: [
        { name: "Java", svgName: "skill-icons:java", tooltip: "Читаю код, могу написать простые скрипты." },
        { name: "Python", svgName: "skill-icons:python", tooltip: "Читаю код, базовое понимание." },
        { name: "CCNA", svgName: "lineicons:cisco", tooltip: "Сертификат Cisco по основам сетей." },
      ],
    },
  ] as const;

  return (
    <section className="py-4 md:py-8" data-slot="stack" id="stack">
      <h2
        children={t("stack.heading", "Мой стек")}
        className="mb-4 text-xl font-black text-center md:mb-8 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        data-slot="stack-title"
      />
      <ol className="grid gap-y-3 sm:grid-cols-[auto_minmax(auto,1fr)] md:gap-y-6" data-slot="stack-group-list">
        {stackGroups.map(group => (
          <li
            className="grid grid-cols-subgrid col-span-full gap-2 items-center md:gap-4"
            data-slot="stack-group-list-item"
            key={group.title}
          >
            <h3
              children={group.title}
              className="text-lg font-bold md:text-xl lg:text-2xl"
              data-slot="stack-group-title"
            />
            <ul
              className="[--item-width:86px] grid grid-cols-[repeat(auto-fill,var(--item-width))] gap-2 justify-center items-stretch md:[--item-width:98px] md:gap-4 lg:[--item-width:110px]"
              data-slot="stack-list"
            >
              {group.items.map(tech => (
                <li data-slot="stack-list-item" key={tech.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-col gap-1 items-center text-center md:gap-2">
                        {tech.svgName && <SvgIcon className="shrink-0 size-1/2" name={tech.svgName} />}
                        <span className="text-sm whitespace-nowrap md:text-base lg:text-lg">{tech.name}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p children={tech.tooltip} />
                    </TooltipContent>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
};
