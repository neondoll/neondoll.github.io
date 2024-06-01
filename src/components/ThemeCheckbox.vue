<script setup lang="ts">
// Components
import IconMoon from '../icons/IconMoon.vue';
import IconSun from '../icons/IconSun.vue';

// Composables
import { useUniqueID } from '../composables/uniqueID';

// Types
import type { ThemeCheckboxEmits, ThemeCheckboxProps } from './types';

const emit = defineEmits<ThemeCheckboxEmits>();
const props = withDefaults(defineProps<ThemeCheckboxProps>(), {
  falseValue: false,
  inputId: () => useUniqueID('theme-checkbox-input'),
  modelValue: undefined,
  trueValue: true,
});

const updateModelValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).checked ? props.trueValue : props.falseValue);
};
</script>

<template>
  <div class="theme-checkbox">
    <input
      :id="props.inputId"
      class="theme-checkbox__input"
      type="checkbox"
      :checked="props.modelValue === props.trueValue"
      v-on="props.modelValue === undefined ? {} : { change: updateModelValue }"
    >
    <label
      class="theme-checkbox__label"
      :for="props.inputId"
    >
      <IconMoon class="theme-checkbox__icon" />
      <span class="theme-checkbox__ball" />
      <IconSun class="theme-checkbox__icon" />
    </label>
  </div>
</template>
