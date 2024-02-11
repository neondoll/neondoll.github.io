<script setup lang="ts">
import {Certificates, Content, Jobs, Language, Projects, StackList} from '../interfaces.ts';
import {inject} from 'vue';

const certificates: Certificates = {
  certificate_1: {
    text: {
      ru: 'CCNA 7. Switching, Routing, and Wireless Essentials (SRWE) (Основы маршрутизации, коммутации и беспроводных сетей)',
      en: 'CCNA 7. Switching, Routing, and Wireless Essentials (SRWE)'
    },
    to  : {name: 'document', params: {documentName: 'certificates/-OST-2-MIREA-IKBO-certificate.pdf'}}
  },
  certificate_2: {
    text: {ru: 'HTML-верстка: с нуля до первого макета', en: 'HTML layout: from scratch to first layout'},
    to  : {
      name  : 'document',
      params: {documentName: 'certificates/certificate-html-layout-from-scratch-to-first-layout.pdf'}
    }
  },
  certificate_3: {
    text: {ru: 'Адаптивная и мобильная верстка', en: 'Adaptive and mobile layout'},
    to  : {name: 'document', params: {documentName: 'certificates/certificate-adaptive-and-mobile-layout.pdf'}}
  },
  certificate_4: {
    text: {ru: 'Основы программирования', en: 'Basics of programming'},
    to  : {name: 'document', params: {documentName: 'certificates/certificate-basics-of-programming.pdf'}}
  },
  certificate_5: {
    text: {ru: 'Git — система контроля версий', en: 'Git - version control system'},
    to  : {name: 'document', params: {documentName: 'certificates/certificate-git-version-control-system.pdf'}}
  },
  certificate_6: {
    text: {ru: 'Основы JavaScript', en: 'Basics of JavaScript'},
    to  : {name: 'document', params: {documentName: 'certificates/certificate-basics-of-javascript.pdf'}}
  }
};
const content: Content = {
  hero_image          : {ru: 'Моя фотография', en: 'My photo'},
  hero_title          : {ru: 'Привет, я Александра!', en: "Hi, I'm Alexandra!"},
  hero_subtitle       : {ru: 'Будем знакомы', en: 'Nice to meet you'},
  about_title         : {ru: 'Обо мне', en: 'About me'},
  about_text_me       : {
    ru: 'Frontend-разработчик из Москвы, который ищет развития и профессионального роста',
    en: 'Frontend developer from Moscow who is looking for development and professional growth'
  },
  about_text_interface: {
    ru: 'Пришла во frontend-разработку, чтобы разрабатывать крутые интерфейсы и максимально улучшать пользовательский опыт',
    en: 'Came into frontend development to develop cool interfaces and improve the user experience as much as possible'
  },
  work_title          : {ru: 'Опыт работы', en: 'Work experience'},
  stack_title         : {ru: 'Мой стек', en: 'My stack'},
  stack_subtitle      : {ru: 'Инструменты и прочее:', en: 'Tools and other:'},
  projects_title      : {ru: 'Проекты', en: 'Projects'},
  project_link_live   : {ru: 'Посмотреть вживую', en: 'Watch live'},
  certificates_title  : {ru: 'Сертификаты', en: 'Certificates'}
};
const language: Language = inject('language') || 'ru';
const myStackList: StackList = {
  html5        : {svgUse: '<use xlink:href="#svg-html5"/>', text: 'HTML 5'},
  css3         : {svgUse: '<use xlink:href="#svg-css3"/>', text: 'CSS 3'},
  scss         : {svgUse: '<use xlink:href="#svg-scss"/>', text: 'SCSS'},
  jquery       : {svgUse: '<use xlink:href="#svg-jquery"/>', text: 'jQuery'},
  javascript   : {svgUse: '<use xlink:href="#svg-javascript"/>', text: 'JavaScript'},
  typescript   : {svgUse: '<use xlink:href="#svg-typescript"/>', text: 'TypeScript'},
  vue          : {svgUse: '<use xlink:href="#svg-vue"/>', text: 'Vue'},
  bootstrap    : {svgUse: '<use xlink:href="#svg-bootstrap"/>', text: 'Bootstrap'},
  bootstrap_vue: {svgUse: '<use xlink:href="#svg-bootstrap-vue"/>', text: 'BootstrapVue'},
  vuetify      : {svgUse: '<use xlink:href="#svg-vuetify"/>', text: 'Vuetify'},
  tailwind_css : {svgUse: '<use xlink:href="#svg-tailwind-css"/>', text: 'Tailwind CSS'}
};
const jobs: Jobs = {
  job_1: {
    content         : {
      title                 : {ru: 'Fullstack-разработчик', en: 'Fullstack developer'},
      company               : {
        ru: 'Учебно-научный институт информатики и систем управления при МИРЭА - Российском технологическом университете',
        en: 'Educational and Scientific Institute of Informatics and Control Systems at MIREA - Russian Technological University'
      },
      employment_form       : {ru: 'Полная занятость', en: 'Full-time'},
      start_and_end         : {
        ru: 'Фев 2020 - по настоящее время · 3 года 11 месяцев',
        en: 'Feb 2020 - present · 3 years 11 months'
      },
      address               : {ru: 'Москва, Россия', en: 'Moscow, Russia'},
      technology_stack_title: {ru: 'Стек технологий:', en: 'Technologies Stack:'},
      tools_title           : {ru: 'Инструменты:', en: 'Tools:'}
    },
    imgSrc          : 'https://neondoll.github.io/project-sources/neondoll-github-io/images/MIREA.png',
    responsibilities: {
      responsibility_1: {
        ru: 'Разработка систем с нуля (от проектирования архитектуры и схемы базы данных и до реализации системы)',
        en: 'Development of systems from scratch (from designing the architecture and database schema to system implementation)'
      },
      responsibility_2: {ru: 'Поддержка существующих систем', en: 'Support for existing systems'},
      responsibility_3: {ru: 'Доработка существующих систем', en: 'Refinement of existing systems'}
    },
    technologyStack : {
      html5        : 'HTML 5',
      css3         : 'CSS 3',
      scss         : 'SCSS',
      jquery       : 'jQuery',
      javascript   : 'JavaScript',
      vue          : 'Vue',
      bootstrap    : 'Bootstrap',
      bootstrap_vue: 'BootstrapVue',
      vuetify      : 'Vuetify',
      tailwind_css : 'Tailwind CSS',
      php          : 'PHP',
      yii2         : 'Yii2',
      laravel      : 'Laravel',
      mysql        : 'MySQL'
    },
    tools           : {
      webpack : 'Webpack',
      vite    : 'Vite',
      phpstorm: 'PhpStorm',
      datagrip: 'DataGrip',
      git     : 'Git',
      gitlab  : 'GitLab'
    }
  }
};
const projects: Projects = {
  project_1: {
    imgSrc     : 'https://xn--80aejmawrcgd.xn--p1ai/images/main-image.png',
    title      : {
      ru: 'ПРЕМИИ ПРАВИТЕЛЬСТВА РОССИЙСКОЙ ФЕДЕРАЦИИ',
      en: 'PRIZES OF THE GOVERNMENT OF THE RUSSIAN FEDERATION'
    },
    description: {
      ru: 'Сайт премий Правительства Российской Федерации',
      en: 'Website of the Government of the Russian Federation awards'
    },
    links      : {live: 'https://xn--80aejmawrcgd.xn--p1ai/'}
  }
};
const toolsAndOther: StackList = {
  webpack : {svgUse: '<use xlink:href="#svg-webpack"/>', text: "Webpack"},
  vite    : {imgSrc: 'https://neondoll.github.io/project-sources/neondoll-github-io/icons/vite.svg', text: 'Vite'},
  phpstorm: {
    imgSrc: 'https://neondoll.github.io/project-sources/neondoll-github-io/icons/phpstorm.svg',
    text  : 'PhpStorm'
  },
  git     : {svgUse: '<use xlink:href="#svg-git"/>', text: 'Git'}
};
</script>

<template>
  <main class="main container">
    <section class="hero">
      <div class="hero__image"/>
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
          <img class="job__image" :src="job.imgSrc" :alt="job.content.company[language]">
          <div class="job__container">
            <h3 v-text="job.content.title[language]" class="job__title" :data-localization-key="`${jobId}_title`"/>
            <p v-text="`${job.content.company[language]} · ${job.content.employment_form[language]}`"
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
              <li v-for="(stackItem, stackItemId) in job.technologyStack"
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
            class="stack__item item-stack"
            :key="`stack_${stackItemId}`">
          <svg v-if="stackItem.svgUse" v-html="stackItem.svgUse" class="item-stack__icon"/>
          <img v-else-if="stackItem.imgSrc" class="item-stack__image" :src="stackItem.imgSrc" :alt="stackItem.text">
          <span v-text="stackItem.text" class="item-stack__text"/>
        </li>
      </ul>
      <h3 v-text="content.stack_subtitle[language]" class="stack__subtitle" data-localization-key="stack_subtitle"/>
      <ul class="stack__list">
        <li v-for="(tool, toolId) in toolsAndOther" class="stack__item item-stack" :key="`tool_${toolId}`">
          <svg v-if="tool.svgUse" v-html="tool.svgUse" class="item-stack__icon"/>
          <img v-else-if="tool.imgSrc" class="item-stack__image" :src="tool.imgSrc" :alt="tool.text">
          <span v-text="tool.text" class="item-stack__text"/>
        </li>
      </ul>
    </section>
    <section class="projects">
      <h2 v-text="content.projects_title[language]" class="projects__title" data-localization-key="projects_title"/>
      <div class="projects__cards">
        <article v-for="(project, projectId) in projects" class="projects__card card-project" :key="projectId">
          <figure class="card-project__image-container">
            <img class="card-project__image" :src="project.imgSrc" :alt="project.title[language]">
          </figure>
          <div class="card-project__info">
            <h3 v-text="project.title[language]" class="card-project__title"/>
            <p v-text="project.description[language]" class="card-project__description"/>
            <div v-if="project.links" class="card-project__links">
              <a v-if="project.links.live" class="card-project__link" :href="project.links.live" target="_blank">
                <svg class="card-project__link-icon">
                  <use xlink:href="#svg-external"/>
                </svg>
                <span v-text="content.project_link_live[language]"
                      class="card-project__link-caption"
                      data-localization-key="live"/>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
    <section class="certificates">
      <h2 v-text="content.certificates_title[language]"
          class="certificates__title"
          data-localization-key="certificates_title"/>
      <ul class="certificates__list list-inside list-disc">
        <li v-for="(certificate, certificateId) in certificates" class="certificates__item" :key="certificateId">
          <RouterLink v-text="certificate.text[language]"
                      class="certificates__link"
                      :data-localization-key="`${certificateId}_text`"
                      :to="certificate.to"
                      target="_blank"/>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped></style>
