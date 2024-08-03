<script setup lang="ts">
import type { StackItem } from '../../types/stack';

defineProps<{ item: StackItem }>();
</script>

<template>
  <li class="item-stack">
    <svg
      v-if="item.svgUse"
      class="item-stack__icon"
      v-html="item.svgUse"
    />
    <img
      v-else-if="item.imgSrc"
      :alt="item.text"
      class="item-stack__image"
      :src="item.imgSrc"
    >
    <span
      class="item-stack__text"
      v-text="props.item.text"
    />
  </li>
</template>
