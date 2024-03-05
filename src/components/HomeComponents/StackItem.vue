<script setup lang="ts">
import {StackItem} from "../../interfaces.ts";

const props = defineProps<{ item: StackItem; }>();
</script>

<template>
  <li class="item-stack">
    <svg v-if="props.item.svgUse" v-html="props.item.svgUse" class="item-stack__icon"/>
    <img v-else-if="props.item.imgSrc" class="item-stack__image" :src="props.item.imgSrc" :alt="props.item.text">
    <span class="item-stack__text">{{ props.item.text }}</span>
  </li>
</template>

<style scoped></style>