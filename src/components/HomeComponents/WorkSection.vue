<script setup lang="ts">
import ItemJob from './JobItem.vue';
import { computed } from 'vue';
import { useSettings } from '../../composables/useSettings';
import type { Job } from '../../types/job';
import type { TextByLanguage } from '../../types/language';

interface Content {
  title: TextByLanguage;
  items: Job[];
  technologyStackTitle: TextByLanguage;
  toolsTitle: TextByLanguage;
}

const content: Content = {
  title: { ru: 'Опыт работы', en: 'Work experience' },
  items: [
    {
      imgSrc: 'https://neondoll.github.io/project-sources/neondoll-github-io/images/MIREA.png',
      title: { ru: 'Fullstack-разработчик', en: 'Fullstack developer' },
      company: {
        ru: 'Учебно-научный институт информатики и систем управления при МИРЭА - Российском технологическом университете',
        en: 'Educational and Scientific Institute of Informatics and Control Systems at MIREA - Russian Technological University',
      },
      employmentForm: { ru: 'Полная занятость', en: 'Full-time' },
      startDate: '2020-02-01',
      address: { ru: 'Москва, Россия', en: 'Moscow, Russia' },
      responsibilities: [
        {
          ru: 'Разработка систем с нуля (от проектирования архитектуры и схемы базы данных и до реализации системы)',
          en: 'Development of systems from scratch (from designing the architecture and database schema to system implementation)',
        },
        { ru: 'Поддержка существующих систем', en: 'Support for existing systems' },
        { ru: 'Доработка существующих систем', en: 'Refinement of existing systems' },
      ],
      technologyStack: {
        html5: 'HTML 5',
        css3: 'CSS 3',
        scss: 'SCSS',
        jquery: 'jQuery',
        javascript: 'JavaScript',
        vue: 'Vue',
        bootstrap: 'Bootstrap',
        bootstrap_vue: 'BootstrapVue',
        vuetify: 'Vuetify',
        tailwind_css: 'Tailwind CSS',
        php: 'PHP',
        yii2: 'Yii2',
        laravel: 'Laravel',
        mysql: 'MySQL',
      },
      tools: {
        webpack: 'Webpack',
        vite: 'Vite',
        phpstorm: 'PhpStorm',
        datagrip: 'DataGrip',
        git: 'Git',
        gitlab: 'GitLab',
      },
    },
  ],
  technologyStackTitle: { ru: 'Стек технологий:', en: 'Technologies Stack:' },
  toolsTitle: { ru: 'Инструменты:', en: 'Tools:' },
};
const { language } = useSettings();

const itemKey = computed<(index: number) => string>(() => (index: number): string => `job_${index + 1}`);
</script>

<template>
  <section class="work">
    <h2
      class="work__title"
      v-text="content.title[language]"
    />
    <div class="work__container">
      <ItemJob
        v-for="(item, index) in content.items"
        :key="itemKey(index)"
        :item="item"
        :item-key="itemKey(index)"
      >
        <template #technology-stack-title>
          {{ content.technologyStackTitle[language] }}
        </template>
        <template #tools-title>
          {{ content.toolsTitle[language] }}
        </template>
      </ItemJob>
    </div>
  </section>
</template>
