<script setup lang="ts">
import {Certificate, Language, TextByLanguage} from "../../interfaces.ts";
import {inject} from "vue";

interface Content {
  title: TextByLanguage;
  items: Certificate[];
}

const content: Content = {
  title: {ru: 'Сертификаты', en: 'Certificates'},
  items: [
    {
      text: {
        ru: 'CCNA 7. Switching, Routing, and Wireless Essentials (SRWE) (Основы маршрутизации, коммутации и беспроводных сетей)',
        en: 'CCNA 7. Switching, Routing, and Wireless Essentials (SRWE)'
      },
      to  : {name: 'document', params: {documentName: 'certificates/-OST-2-MIREA-IKBO-certificate.pdf'}}
    },
    {
      text: {ru: 'HTML-верстка: с нуля до первого макета', en: 'HTML layout: from scratch to first layout'},
      to  : {
        name  : 'document',
        params: {documentName: 'certificates/certificate-html-layout-from-scratch-to-first-layout.pdf'}
      }
    },
    {
      text: {ru: 'Адаптивная и мобильная верстка', en: 'Adaptive and mobile layout'},
      to  : {name: 'document', params: {documentName: 'certificates/certificate-adaptive-and-mobile-layout.pdf'}}
    },
    {
      text: {ru: 'Основы программирования', en: 'Basics of programming'},
      to  : {name: 'document', params: {documentName: 'certificates/certificate-basics-of-programming.pdf'}}
    },
    {
      text: {ru: 'Git — система контроля версий', en: 'Git - version control system'},
      to  : {name: 'document', params: {documentName: 'certificates/certificate-git-version-control-system.pdf'}}
    },
    {
      text: {ru: 'Основы JavaScript', en: 'Basics of JavaScript'},
      to  : {name: 'document', params: {documentName: 'certificates/certificate-basics-of-javascript.pdf'}}
    },
    {
      text: {ru: 'Основы JavaScript в браузере', en: 'Basics of JavaScript in the browser'},
      to  : {name: 'document', params: {documentName: 'certificates/certificate-basics-of-javascript-in-browser.pdf'}}
    }
  ]
};
const language: Language = inject<Language>('language') || 'ru';
</script>

<template>
  <section class="certificates">
    <h2 class="certificates__title">{{ content.title[language] }}</h2>
    <ul class="certificates__list list-inside list-disc">
      <li v-for="(item, index) in content.items" class="certificates__item">
        <RouterLink class="certificates__link" :key="`certificate_${index + 1}`" target="_blank" :to="item.to">
          {{ item.text[language] }}
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>