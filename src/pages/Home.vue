<script setup lang="ts">
import {Certificates, Content, Jobs, LanguageType} from "../data/interfaces.ts";
import {inject} from "vue";

const certificates: Certificates = {
  certificate_1: {
    text: {
      ru: "CCNA 7. Switching, Routing, and Wireless Essentials (SRWE) (Основы маршрутизации, коммутации и беспроводных сетей)",
      en: "CCNA 7. Switching, Routing, and Wireless Essentials (SRWE)"
    },
    href: "/documents/-OST-2-MIREA-IKBO-certificate.pdf"
  },
  certificate_2: {
    text: {ru: "HTML-верстка: с нуля до первого макета", en: "HTML layout: from scratch to first layout"},
    href: "/documents/certificate-html-layout-from-scratch-to-first-layout.pdf"
  },
  certificate_3: {
    text: {ru: "Адаптивная и мобильная верстка", en: "Adaptive and mobile layout"},
    href: "/documents/certificate-adaptive-and-mobile-layout.pdf"
  },
  certificate_4: {
    text: {ru: "Основы программирования", en: "Basics of programming"},
    href: "/documents/certificate-basics-of-programming.pdf"
  },
  certificate_5: {
    text: {ru: "Git — система контроля версий", en: "Git - version control system"},
    href: "/documents/certificate-git-version-control-system.pdf"
  }
};
const content: Content = {
  hero_title          : {ru: "Привет, я Александра!", en: "Hi, I'm Alexandra!"},
  hero_subtitle       : {ru: "Будем знакомы", en: "Nice to meet you"},
  about_title         : {ru: "Обо мне", en: "About me"},
  about_text_me       : {
    ru: "Frontend-разработчик из Москвы, который ищет развития и профессионального роста",
    en: "Frontend developer from Moscow who is looking for development and professional growth"
  },
  about_text_interface: {
    ru: "Пришла во frontend-разработку, чтобы разрабатывать крутые интерфейсы и максимально улучшать пользовательский опыт",
    en: "Came into frontend development to develop cool interfaces and improve the user experience as much as possible"
  },
  work_title          : {ru: "Опыт работы", en: "Work experience"},
  stack_title         : {ru: "Мой стек", en: "My stack"},
  stack_subtitle      : {ru: "Инструменты и прочее:", en: "Tools and other:"},
  projects_title      : {ru: "Проекты", en: "Projects"},
  certificates_title  : {ru: "Сертификаты", en: "Certificates"}
};
const language: LanguageType = inject("language") || "ru";
const myStackList: Record<string, string> = {
  html5        : "HTML 5",
  css3         : "CSS 3",
  scss         : "SCSS",
  jquery       : "jQuery",
  javascript   : "JavaScript",
  typescript   : "TypeScript",
  vue          : "Vue",
  bootstrap    : "Bootstrap",
  bootstrap_vue: "BootstrapVue",
  vuetify      : "Vuetify",
  tailwind_css : "Tailwind CSS"
};
const jobs: Jobs = {
  job_1: {
    image           : {src: "/assets/images/MIREA.png", alt: "МИРЭА Герб"},
    content         : {
      title                      : {ru: "Fullstack-разработчик", en: "Fullstack developer"},
      company_and_employment_form: {
        ru: "Учебно-научный институт информатики и систем управления · Полная занятость",
        en: "Educational and Scientific Institute of Informatics and Control Systems · Full-time"
      },
      start_and_end              : {
        ru: "Фев 2020 - по настоящее время · 3 года 11 месяцев",
        en: "Feb 2020 - present · 3 years 11 months"
      },
      address                    : {ru: "Москва, Россия", en: "Moscow, Russia"},
      technology_stack_title     : {ru: "Стек технологий:", en: "Technologies Stack:"},
      tools_title                : {ru: "Инструменты:", en: "Tools:"}
    },
    responsibilities: {
      responsibility_1: {
        ru: "Разработка систем с нуля (от проектирования архитектуры и схемы базы данных и до реализации системы)",
        en: "Development of systems from scratch (from designing the architecture and database schema to system implementation)"
      },
      responsibility_2: {ru: "Поддержка существующих систем", en: "Support for existing systems"},
      responsibility_3: {ru: "Доработка существующих систем", en: "Refinement of existing systems"}
    },
    technology_stack: {
      html5        : "HTML 5",
      css3         : "CSS 3",
      scss         : "SCSS",
      jquery       : "jQuery",
      javascript   : "JavaScript",
      vue          : "Vue",
      bootstrap    : "Bootstrap",
      bootstrap_vue: "BootstrapVue",
      vuetify      : "Vuetify",
      tailwind_css : "Tailwind CSS",
      php          : "PHP",
      yii2         : "Yii2",
      laravel      : "Laravel"
    },
    tools           : {webpack: "Webpack", vite: "Vite", phpstorm: "PhpStorm", datagrip: "DataGrip"}
  }
};
const toolsAndOther: Record<string, string> = {phpstorm: "PhpStorm"};
</script>

<template>
  <main class="main container">
    <section class="hero">
      <div class="hero__image"></div>
      <div class="hero__container">
        <h2 v-text="content.hero_title[language]" class="hero__title" data-localization-key="hero_title"/>
        <p v-text="content.hero_subtitle[language]" class="hero__subtitle" data-localization-key="hero_subtitle"/>
      </div>
    </section>
    <section class="about">
      <h2 v-text="content.about_title[language]" class="about__title" data-localization-key="about_title"/>
      <div class="about__container">
        <p v-text="content.about_text_me[language]"
           class="about__text about__text--me"
           data-localization-key="about_text_me"/>
        <p v-text="content.about_text_interface[language]"
           class="about__text about__text--interface"
           data-localization-key="about_text_interface"/>
      </div>
    </section>
    <section class="work">
      <h2 v-text="content.work_title[language]" class="work__title" data-localization-key="work_title"/>
      <div class="work__container">
        <div v-for="(job, jobId) in jobs" class="job" :key="jobId">
          <img class="job__image" :src="job.image.src" :alt="job.image.alt">
          <div class="job__container">
            <h3 v-text="job.content.title[language]" class="job__title" :data-localization-key="`${jobId}_title`"/>
            <p v-text="job.content.company_and_employment_form[language]"
               class="job__text"
               :data-localization-key="`${jobId}_company_and_employment_form`"/>
            <p v-text="job.content.start_and_end[language]"
               class="job__text"
               :data-localization-key="`${jobId}_start_and_end`"/>
            <p v-text="job.content.address[language]" class="job__text" :data-localization-key="`${jobId}_address`"/>
            <ul class="job__list list-inside list-dash">
              <li v-for="(responsibility, responsibilityId) in job.responsibilities"
                  v-text="responsibility[language]"
                  class="job__item"
                  :data-localization-key="`${jobId}_${responsibilityId}`"
                  :key="`${jobId}_${responsibilityId}`"/>
            </ul>
            <h4 v-text="job.content.technology_stack_title[language]"
                class="job__list-title"
                :data-localization-key="`${jobId}_technology_stack_title`"/>
            <ul class="job__list list-inside list-disc">
              <li v-for="(stackItem, stackItemId) in job.technology_stack"
                  v-text="stackItem"
                  class="job__item"
                  :key="`${jobId}_technology_stack_${stackItemId}`"/>
            </ul>
            <h4 v-text="job.content.tools_title[language]"
                class="job__list-title"
                :data-localization-key="`${jobId}_tools_title`"/>
            <ul class="job__list list-inside list-disc">
              <li v-for="(tool, toolId) in job.tools"
                  v-text="tool"
                  class="job__item"
                  :key="`${jobId}_tools_${toolId}`"/>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="stack">
      <h2 v-text="content.stack_title[language]" class="stack__title" data-localization-key="stack_title"/>
      <ul class="stack__list">
        <li v-for="(stackItem, stackItemId) in myStackList"
            v-text="stackItem"
            :class="`stack__item icon--${stackItemId.replace('_', '-')}`"
            :key="`stack_${stackItemId}`"/>
      </ul>
      <h3 v-text="content.stack_subtitle[language]" class="stack__subtitle" data-localization-key="stack_subtitle"/>
      <ul class="stack__list">
        <li v-for="(tool, toolId) in toolsAndOther"
            v-text="tool"
            :class="`stack__item icon--${toolId.replace('_', '-')}`"
            :key="`tool_${toolId}`"/>
      </ul>
    </section>
    <!--<section class="projects">
      <h2 v-text="content.projects_title[language]" class="projects__title" data-localization-key="projects_title"/>
    </section>-->
    <section class="certificates">
      <h2 v-text="content.certificates_title[language]"
          class="certificates__title"
          data-localization-key="certificates_title"/>
      <ul class="certificates__list list-inside list-disc">
        <li v-for="(certificate, certificateId) in certificates" class="certificates__item" :key="certificateId">
          <a v-text="certificate.text[language]"
             class="certificates__link"
             :data-localization-key="`${certificateId}_text`"
             :href="certificate.href"
             target="_blank"/>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped></style>