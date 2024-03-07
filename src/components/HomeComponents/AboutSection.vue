<script setup lang="ts">
import {Language, TextByLanguage} from "../../interfaces.ts";
import {inject, ref, Ref} from "vue";

interface Content {
  title: TextByLanguage;
  text: Record<string, TextByLanguage>;
}

const content: Content = {
  title: {ru: 'Обо мне', en: 'About me'},
  text : {
    me       : {
      ru: 'Frontend-разработчик из Москвы, который ищет развития и профессионального роста',
      en: 'Frontend developer from Moscow who is looking for development and professional growth'
    },
    interface: {
      ru: 'Пришла во frontend-разработку, чтобы разрабатывать крутые интерфейсы и максимально улучшать пользовательский опыт',
      en: 'Came into frontend development to develop cool interfaces and improve the user experience as much as possible'
    }
  }
};
const language: Ref<Language> = inject<Ref<Language>>('language') || ref<Language>('ru');
</script>

<template>
  <section class="about">
    <h2 class="about__title">{{ content.title[language] }}</h2>
    <div class="about__container">
      <p v-for="(text, textId) in content.text" class="about__text" :class="`about__text--${textId}`"
         :key="`about_text_${textId}`">
        {{ text[language] }}
      </p>
    </div>
  </section>
</template>

<style scoped></style>