<script setup lang="ts">
// Components
import IconEnglish from '../icons/IconEnglish.vue';
import IconRussian from '../icons/IconRussian.vue';
import LanguageDropdown from './LanguageDropdown.vue';
import ThemeCheckbox from './ThemeCheckbox.vue';

// Types
import type { Component } from 'vue';
import type { AppHeaderEmits, AppHeaderProps, LanguageDropdownItem } from './types';
import type { Language } from '../types';

const emit = defineEmits<AppHeaderEmits>();
const props = defineProps<AppHeaderProps>();

const languagesList: Record<Language, LanguageDropdownItem> = {
  ru: { icon: IconRussian as Component, text: 'RU' },
  en: { icon: IconEnglish as Component, text: 'EN' },
};

const updateLanguage = (value: AppHeaderProps['language']) => {
  emit('update:language', value);
};
const updateTheme = (value: AppHeaderProps['theme']) => {
  emit('update:theme', value);
};
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <ThemeCheckbox
        false-value="light"
        :model-value="props.theme"
        true-value="dark"
        @update:model-value="updateTheme"
      />
      <LanguageDropdown
        :list="languagesList"
        :model-value="props.language"
        @update:model-value="updateLanguage"
      />
    </div>
  </header>
</template>
