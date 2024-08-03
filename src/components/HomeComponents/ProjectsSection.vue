<script setup lang="ts">
import CardProject from './ProjectCard.vue';
import { useSettings } from '../../composables/useSettings';
import type { Project } from '../../types/project';
import type { TextByLanguage } from '../../types/language';

interface Content { title: TextByLanguage; items: Project[]; links: { live: TextByLanguage } }

const content: Content = {
  title: { ru: 'Проекты', en: 'Projects' },
  items: [
    {
      imgSrc: 'https://xn--80aejmawrcgd.xn--p1ai/images/main-image.png',
      title: {
        ru: 'ПРЕМИИ ПРАВИТЕЛЬСТВА РОССИЙСКОЙ ФЕДЕРАЦИИ',
        en: 'PRIZES OF THE GOVERNMENT OF THE RUSSIAN FEDERATION',
      },
      description: {
        ru: 'Сайт премий Правительства Российской Федерации',
        en: 'Website of the Government of the Russian Federation awards',
      },
      links: { live: 'https://xn--80aejmawrcgd.xn--p1ai/' },
    },
  ],
  links: { live: { ru: 'Посмотреть вживую', en: 'Watch live' } },
};
const { language } = useSettings();
</script>

<template>
  <section class="projects">
    <h2
      class="projects__title"
      v-text="content.title[language]"
    />
    <div class="projects__cards">
      <CardProject
        v-for="(item, index) in content.items"
        :key="`project_${index + 1}`"
        class="projects__card"
        :item="item"
      >
        <template #link-live-text>
          {{ content.links.live[language] }}
        </template>
      </CardProject>
    </div>
  </section>
</template>
