<script setup lang="ts">
import { StackItem } from '../../interfaces.ts';

const props = defineProps<{ item: StackItem }>();
</script>

<template>
  <li class="item-stack">
    <svg
      v-if="props.item.svgUse"
      class="item-stack__icon"
      v-html="props.item.svgUse"
    />
    <img
      v-else-if="props.item.imgSrc"
      class="item-stack__image"
      :src="props.item.imgSrc"
      :alt="props.item.text"
    >
    <span
      class="item-stack__text"
      v-text="props.item.text"
    />
  </li>
</template>
