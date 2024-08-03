<script setup lang="ts">
import { useSettings } from '../../composables/useSettings';
import type { Project } from '../../types/project';

defineProps<{ item: Project }>();
const { language } = useSettings();
</script>

<template>
  <article class="card-project">
    <figure class="card-project__image-container">
      <img
        :alt="item.title[language]"
        class="card-project__image"
        :src="item.imgSrc"
      >
    </figure>
    <div class="card-project__info">
      <h3
        class="card-project__title"
        v-text="item.title[language]"
      />
      <p
        class="card-project__description"
        v-text="item.description[language]"
      />
      <div
        v-if="item.links"
        class="card-project__links"
      >
        <a
          v-if="item.links.live"
          class="card-project__link"
          :href="item.links.live"
          target="_blank"
        >
          <svg class="card-project__link-icon">
            <use xlink:href="#svg-external" />
          </svg>
          <span class="card-project__link-caption">
            <slot name="link-live-text" />
          </span>
        </a>
      </div>
    </div>
  </article>
</template>
