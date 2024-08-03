<script setup lang="ts">
import ItemStack from './StackItem.vue';
import { useSettings } from '../../composables/useSettings';
import type { TextByLanguage } from '../../types/language';
import type { StackItem } from '../../types/stack';

interface Content {
  stack: { title: TextByLanguage; items: Record<string, StackItem> };
  toolsAndOther: { title: TextByLanguage; items: Record<string, StackItem> };
}

const content: Content = {
  stack: {
    title: { ru: 'Мой стек', en: 'My stack' },
    items: {
      html5: { svgUse: '<use xlink:href="#svg-html5"/>', text: 'HTML 5' },
      css3: { svgUse: '<use xlink:href="#svg-css3"/>', text: 'CSS 3' },
      scss: { svgUse: '<use xlink:href="#svg-scss"/>', text: 'SCSS' },
      jquery: { svgUse: '<use xlink:href="#svg-jquery"/>', text: 'jQuery' },
      javascript: { svgUse: '<use xlink:href="#svg-javascript"/>', text: 'JavaScript' },
      typescript: { svgUse: '<use xlink:href="#svg-typescript"/>', text: 'TypeScript' },
      vue: { svgUse: '<use xlink:href="#svg-vue"/>', text: 'Vue' },
      bootstrap: { svgUse: '<use xlink:href="#svg-bootstrap"/>', text: 'Bootstrap' },
      bootstrap_vue: { svgUse: '<use xlink:href="#svg-bootstrap-vue"/>', text: 'BootstrapVue' },
      vuetify: { svgUse: '<use xlink:href="#svg-vuetify"/>', text: 'Vuetify' },
      tailwind_css: { svgUse: '<use xlink:href="#svg-tailwind-css"/>', text: 'Tailwind CSS' },
    },
  },
  toolsAndOther: {
    title: { ru: 'Инструменты и прочее', en: 'Tools and other' },
    items: {
      webpack: { svgUse: '<use xlink:href="#svg-webpack"/>', text: 'Webpack' },
      vite: { imgSrc: 'https://neondoll.github.io/project-sources/neondoll-github-io/icons/vite.svg', text: 'Vite' },
      phpstorm: {
        imgSrc: 'https://neondoll.github.io/project-sources/neondoll-github-io/icons/phpstorm.svg',
        text: 'PhpStorm',
      },
      git: { svgUse: '<use xlink:href="#svg-git"/>', text: 'Git' },
    },
  },
};
const { language } = useSettings();
</script>

<template>
  <section class="stack">
    <h2
      class="stack__title"
      v-text="content.stack.title[language]"
    />
    <ul class="stack__list">
      <ItemStack
        v-for="(item, itemId) in content.stack.items"
        :key="`stack_${itemId}`"
        class="stack__item"
        :item="item"
      />
    </ul>
    <h3
      class="stack__subtitle"
      v-text="content.toolsAndOther.title[language]"
    />
    <ul class="stack__list">
      <ItemStack
        v-for="(item, itemId) in content.toolsAndOther.items"
        :key="`tool_${itemId}`"
        class="stack__item"
        :item="item"
      />
    </ul>
  </section>
</template>
