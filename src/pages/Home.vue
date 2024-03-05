<script setup lang="ts">
import {Content, Language} from "../interfaces.ts";
import {inject} from "vue";
import CertificatesSection from "../components/HomeComponents/CertificatesSection.vue";
import ProjectsSection from "../components/HomeComponents/ProjectsSection.vue";
import StackSection from "../components/HomeComponents/StackSection.vue";
import WorkSection from "../components/HomeComponents/WorkSection.vue";

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
    <WorkSection/>
    <StackSection/>
    <ProjectsSection/>
    <CertificatesSection/>
  </main>
</template>

<style scoped></style>
