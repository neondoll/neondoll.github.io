// Types
import type { Component } from 'vue';
import type { Language, Theme } from '../types';

type AppHeaderEmits = { 'update:language': [value: Language]; 'update:theme': [value: Theme] };
type AppHeaderProps = { language: Language; theme: Theme };
type LanguageDropdownEmits = { 'update:modelValue': [value: LanguageDropdownModelValue] };
type LanguageDropdownItem = { icon: Component; text: string };
type LanguageDropdownModelValue = string;
type LanguageDropdownProps = {
  list: Record<LanguageDropdownModelValue, LanguageDropdownItem>;
  modelValue?: LanguageDropdownModelValue;
};
type ThemeCheckboxEmits = { 'update:modelValue': [value: ThemeCheckboxModelValue] };
type ThemeCheckboxModelValue = boolean | string;
type ThemeCheckboxProps = {
  falseValue?: ThemeCheckboxModelValue;
  inputId?: string;
  modelValue?: ThemeCheckboxModelValue;
  trueValue?: ThemeCheckboxModelValue;
};

export type {
  AppHeaderEmits, AppHeaderProps, LanguageDropdownEmits, LanguageDropdownItem, LanguageDropdownModelValue,
  LanguageDropdownProps, ThemeCheckboxEmits, ThemeCheckboxProps,
};
