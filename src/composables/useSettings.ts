import { computed, inject } from 'vue';
import type { Language } from '../types/language';
import type { Ref } from 'vue';
import type { Theme } from '../types/theme';

export interface InjectedSettings {
  language: Ref<Language>;
  theme: Ref<Theme>;
}

export const useSettings = () => {
  const settings = inject<InjectedSettings>('settings');

  return {
    language: computed<Language>(() => settings?.language?.value || 'ru'),
    theme: computed<Theme>(() => settings?.theme?.value || 'light'),
  };
};
