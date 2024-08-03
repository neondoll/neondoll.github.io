<script setup lang="ts">
import { useSettings } from '../../composables/useSettings';
import type { TextByLanguage } from '../../types/language';

interface Content { title: TextByLanguage; text: Record<string, TextByLanguage> }

const content: Content = {
  title: { ru: 'Обо мне', en: 'About me' },
  text: {
    me: {
      ru: 'Frontend-разработчик из Москвы, который ищет развития и профессионального роста',
      en: 'Frontend developer from Moscow who is looking for development and professional growth',
    },
    interface: {
      ru: 'Пришла во frontend-разработку, чтобы разрабатывать крутые интерфейсы и максимально улучшать пользовательский опыт',
      en: 'Came into frontend development to develop cool interfaces and improve the user experience as much as possible',
    },
  },
};
const { language } = useSettings();
</script>

<template>
  <section class="about">
    <h2
      class="about__title"
      v-text="content.title[language]"
    />
    <div class="about__container">
      <p
        v-for="(text, textId) in content.text"
        :key="`about-text-${textId}`"
        :class="`about__text about__text--${textId}`"
        v-text="text[language]"
      />
    </div>
  </section>
</template>
