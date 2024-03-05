<script setup lang="ts">
import {Language, Project, TextByLanguage} from "../../interfaces.ts";
import {inject} from "vue";
import CardProject from "./ProjectCard.vue";

interface Content {
  title: TextByLanguage;
  items: Project[];
  links: { live: TextByLanguage; }
}

const content: Content = {
  title: {ru: 'Проекты', en: 'Projects'},
  items: [
    {
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
  ],
  links: {live: {ru: 'Посмотреть вживую', en: 'Watch live'}}
};
const language: Language = inject<Language>('language') || 'ru';
</script>

<template>
  <section class="projects">
    <h2 class="projects__title">{{ content.title[language] }}</h2>
    <div class="projects__cards">
      <CardProject v-for="(item, index) in content.items" class="projects__card" :item="item"
                   :key="`project_${index + 1}`">
        <template #link-live-text>{{ content.links.live[language] }}</template>
      </CardProject>
    </div>
  </section>
</template>

<style scoped></style>