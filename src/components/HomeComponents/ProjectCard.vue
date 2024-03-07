<script setup lang="ts">
import {Language, Project} from "../../interfaces.ts";
import {inject, ref, Ref} from "vue";

const language: Ref<Language> = inject<Ref<Language>>('language') || ref<Language>('ru');
const props = defineProps<{ item: Project; }>();
</script>

<template>
  <article class="card-project">
    <figure class="card-project__image-container">
      <img class="card-project__image" :src="props.item.imgSrc" :alt="props.item.title[language]">
    </figure>
    <div class="card-project__info">
      <h3 class="card-project__title">{{ props.item.title[language] }}</h3>
      <p class="card-project__description">{{ props.item.description[language] }}</p>
      <div v-if="props.item.links" class="card-project__links">
        <a v-if="props.item.links.live" class="card-project__link" :href="props.item.links.live" target="_blank">
          <svg class="card-project__link-icon">
            <use xlink:href="#svg-external"/>
          </svg>
          <span class="card-project__link-caption">
            <slot name="link-live-text"/>
          </span>
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped></style>