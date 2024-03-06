<script setup lang="ts">
import {Job, Language, TextByLanguage} from "../../interfaces.ts";
import {computed, inject, ref, Ref} from "vue";
import months from "../../data/months.ts";

const endDateNull: TextByLanguage = {ru: 'по настоящее время', en: 'present'};
const language: Ref<Language> = inject('language') || ref('ru');
const props = defineProps<{ item: Job; itemKey: string; }>();

const startDate = new Date(props.item.startDate);
const endDate = props.item.endDate ? new Date(props.item.endDate) : undefined;

const startAndEndDate = computed(() => {
  let result = `${months[startDate.getMonth()][language.value]} ${startDate.getFullYear()} - `;

  if (endDate) {
    result += `${months[endDate.getMonth()][language.value]} ${endDate.getFullYear()}`;
  } else {
    result += endDateNull[language.value];
  }

  return result;
});
</script>

<template>
  <div class="job" :key="props.itemKey">
    <img class="job__image" :src="props.item.imgSrc" :alt="props.item.company[language]">
    <div class="job__container">
      <h3 class="job__title">{{ props.item.title[language] }}</h3>
      <p class="job__text">
        {{ props.item.company[language] }} · {{ props.item.employmentForm[language] }}
      </p>
      <p class="job__text">{{ startAndEndDate }}</p>
      <p class="job__text">{{ props.item.address[language] }}</p>
      <ul class="job__list list-inside list-dash">
        <li v-for="(item, index) in props.item.responsibilities" class="job__item"
            :key="`${props.itemKey}_responsibility_${index + 1}`">
          {{ item[language] }}
        </li>
      </ul>
      <h4 class="job__list-title">
        <slot name="technology-stack-title"/>
      </h4>
      <ul class="job__list list-inside list-disc">
        <li v-for="(item, itemId) in props.item.technologyStack" class="job__item"
            :key="`${props.itemKey}_technology_stack_${itemId}`">
          {{ item }}
        </li>
      </ul>
      <h4 class="job__list-title">
        <slot name="tools-title"/>
      </h4>
      <ul class="job__list list-inside list-disc">
        <li v-for="(item, itemId) in props.item.tools" class="job__item" :key="`${props.itemKey}_tools_${itemId}`">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>