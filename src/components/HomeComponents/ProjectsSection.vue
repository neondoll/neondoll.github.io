<script setup lang="ts">
import { Language, Project, TextByLanguage } from '../../interfaces.ts';
import { inject, ref, Ref } from 'vue';
import CardProject from './ProjectCard.vue';

interface Content {
  title: TextByLanguage;
  items: Project[];
  links: { live: TextByLanguage };
}

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
    {
      imgSrc: 'https://i.postimg.cc/gkfksgDy/Screenshot-from-2022-08-09-17-55-43.png',
      title: {
        ru: 'Retro Game',
        en: 'Retro Game',
      },
      description: {
        ru: 'Дипломное задание к курсу «Продвинутый JavaScript»',
        en: 'Diploma assignment for the course «Advanced JavaScript»',
      },
      links: { live: 'https://neondoll.github.io/js-advanced-diploma' },
    },
  ],
  links: { live: { ru: 'Посмотреть вживую', en: 'Watch live' } },
};
const language: Ref<Language> = inject<Ref<Language>>('language') || ref<Language>('ru');
</script>

<template>
  <section class="projects">
    <h2 class="projects__title">
      {{ content.title[language] }}
    </h2>
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

<style scoped></style>
