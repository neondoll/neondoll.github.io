<script setup lang="ts">
import { Language, TextByLanguage } from '../../interfaces.ts';
import { inject, ref, Ref } from 'vue';

interface Content {
  title: TextByLanguage;
  subtitle: TextByLanguage;
}

const content: Content = {
  title: { ru: 'Привет, я Александра!', en: 'Hi, I\'m Alexandra!' },
  subtitle: { ru: 'Будем знакомы', en: 'Nice to meet you' },
};
const language: Ref<Language> = inject<Ref<Language>>('language') || ref<Language>('ru');
</script>

<template>
  <section class="hero">
    <div class="hero__image" />
    <div class="hero__container">
      <h2
        class="hero__title"
        v-text="content.title[language]"
      />
      <p
        class="hero__subtitle"
        v-text="content.subtitle[language]"
      />
    </div>
  </section>
</template>
