<script setup lang="ts">
import months from '../../constants/months';
import { computed } from 'vue';
import { declensionBasedOnNumber, diffDate } from '../../utils';
import { useSettings } from '../../composables/useSettings';
import type { Job } from '../../types/job';
import type { TextByLanguage } from '../../types/language';

const endDateNull: TextByLanguage = { ru: 'по настоящее время', en: 'present' };
const props = defineProps<{ item: Job; itemKey: string }>();
const { language } = useSettings();

const startAndEndOfWork = computed<string>(() => {
  const startDate = new Date(props.item.startDate);

  let result = `${months[startDate.getMonth()][language.value]} ${startDate.getFullYear()} - `;

  if (props.item.endDate) {
    const endDate = new Date(props.item.endDate);

    result += `${months[endDate.getMonth()][language.value]} ${endDate.getFullYear()}`;
  }
  else {
    result += endDateNull[language.value];
  }

  return result;
});
const periodOfWork = computed<string>(() => {
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
    <img
      :alt="item.company[language]"
      class="job__image"
      :src="item.imgSrc"
    >
    <div class="job__container">
      <h3
        class="job__title"
        v-text="item.title[language]"
      />
      <p
        class="job__text"
        v-text="`${item.company[language]} · ${item.employmentForm[language]}`"
      />
      <p
        class="job__text"
        v-text="`${startAndEndOfWork} · ${periodOfWork}`"
      />
      <p
        class="job__text"
        v-text="item.address[language]"
      />
      <ul class="job__list list-inside list-dash">
        <li
          v-for="(responsibilityItem, responsibilityIndex) in item.responsibilities"
          :key="`${itemKey}_responsibility_${responsibilityIndex + 1}`"
          class="job__item"
          v-text="responsibilityItem[language]"
        />
      </ul>
      <h4 class="job__list-title">
        <slot name="technology-stack-title" />
      </h4>
      <ul class="job__list list-inside list-disc">
        <li
          v-for="(technologyStackItem, technologyStackItemId) in item.technologyStack"
          :key="`${itemKey}_technology_stack_${technologyStackItemId}`"
          class="job__item"
          v-text="technologyStackItem"
        />
      </ul>
      <h4 class="job__list-title">
        <slot name="tools-title" />
      </h4>
      <ul class="job__list list-inside list-disc">
        <li
          v-for="(toolItem, toolItemId) in item.tools"
          :key="`${itemKey}_tools_${toolItemId}`"
          class="job__item"
          v-text="toolItem"
        />
      </ul>
    </div>
  </div>
</template>
