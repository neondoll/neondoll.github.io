<script setup lang="ts">
import {Job, Language, TextByLanguage} from "../../interfaces.ts";
import {computed, inject, ref, Ref} from "vue";
import declensionBasedOnNumber from "../../data/declensionBasedOnNumber.ts";
import diffDate from "../../data/diffDate.ts";
import months from "../../data/months.ts";

const endDateNull: TextByLanguage = {ru: 'по настоящее время', en: 'present'};
const language: Ref<Language> = inject<Ref<Language>>('language') || ref<Language>('ru');
const props = defineProps<{ item: Job; itemKey: string; }>();

const startAndEndOfWork = computed(() => {
  const startDate = new Date(props.item.startDate);

  let result = `${months[startDate.getMonth()][language.value]} ${startDate.getFullYear()} - `;

  if (props.item.endDate) {
    const endDate = new Date(props.item.endDate);

    result += `${months[endDate.getMonth()][language.value]} ${endDate.getFullYear()}`;
  } else {
    result += endDateNull[language.value];
  }

  return result;
});
const periodOfWork = computed(() => {
  const diff = diffDate(props.item.startDate, props.item.endDate);
  const diffYear = diff.year;
  const diffMonth = diff.month + (diff.day ? 1 : 0);

  let result = '';

  if (diffYear) {
    switch (language.value) {
      case 'ru':
        result += declensionBasedOnNumber(diffYear, 'год', 'года', 'лет');
        break;
      case 'en':
        result += declensionBasedOnNumber(diffYear, 'year', 'years', 'years');
        break;
    }
  }

  if (diffMonth) {
    if (result !== '') {
      result += ' ';
    }

    switch (language.value) {
      case 'ru':
        result += declensionBasedOnNumber(diffMonth, 'месяц', 'месяца', 'месяцев');
        break;
      case 'en':
        result += declensionBasedOnNumber(diffMonth, 'month', 'months', 'months');
        break;
    }
  }

  return result;
});
</script>

<template>
  <div class="job">
    <img class="job__image" :src="props.item.imgSrc" :alt="props.item.company[language]">
    <div class="job__container">
      <h3 class="job__title">{{ props.item.title[language] }}</h3>
      <p class="job__text">{{ props.item.company[language] }} · {{ props.item.employmentForm[language] }}</p>
      <p class="job__text">{{ startAndEndOfWork }} · {{ periodOfWork }}</p>
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