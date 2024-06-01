<script setup lang="ts">
// Composables
import { computed, ref, watch } from 'vue';

// Types
import type { LanguageDropdownEmits, LanguageDropdownModelValue, LanguageDropdownProps } from './types';

const emit = defineEmits<LanguageDropdownEmits>();
const props = withDefaults(defineProps<LanguageDropdownProps>(), { modelValue: undefined });

const isActive = ref(false);
const value = ref<LanguageDropdownProps['modelValue']>();

const languageDropdownClass = computed<Record<string, boolean>>(() => ({
  'language-dropdown': true,
  'language-dropdown--active': isActive.value,
}));

const languageDropdownBtnClick = () => {
  isActive.value = !isActive.value;
};
const languageDropdownListBtnClick = (event: Event) => {
  isActive.value = !isActive.value;
  value.value = ((event.target as HTMLElement).closest('.list-language-dropdown__btn') as HTMLElement).dataset.value;
};
const updateModelValue = (value: LanguageDropdownModelValue) => {
  console.log('updateModelValue', value);
  emit('update:modelValue', value);
};

watch(() => props.modelValue, (newValue, oldValue) => {
  if (newValue !== undefined && newValue in props.list) {
    value.value = newValue;
  }
  else if (oldValue !== undefined && oldValue in props.list) {
    value.value = oldValue;
  }
  else {
    const listKeys = Object.keys(props.list);

    if (listKeys.length) {
      value.value = listKeys[0];
    }
  }
}, { immediate: true });
watch(() => value.value, (newValue, oldValue) => {
  console.log('watch value', newValue, oldValue);

  if (newValue) {
    updateModelValue(newValue);
  }
  else if (oldValue) {
    updateModelValue(oldValue);
  }
});
</script>

<template>
  <div :class="languageDropdownClass">
    <button
      class="language-dropdown__btn"
      type="button"
      @click="languageDropdownBtnClick"
    >
      <Component
        :is="value ? props.list[value].icon : 'svg'"
        class="language-dropdown__btn-flag"
      />
      <span
        class="language-dropdown__btn-text"
        v-text="value ? props.list[value].text : ''"
      />
      <svg class="language-dropdown__btn-icon">
        <use xlink:href="#svg-chevron-down" />
      </svg>
    </button>
    <ul class="language-dropdown__list list-language-dropdown">
      <li
        v-for="(item, itemId) in props.list"
        :key="`language_${itemId}`"
        class="list-language-dropdown__item"
      >
        <button
          class="list-language-dropdown__btn"
          :data-value="itemId"
          type="button"
          @click="languageDropdownListBtnClick"
        >
          <Component
            :is="item.icon"
            class="list-language-dropdown__btn-flag"
          />
          <span
            class="list-language-dropdown__btn-text"
            v-text="item.text"
          />
        </button>
      </li>
    </ul>
  </div>
</template>
