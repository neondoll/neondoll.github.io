<script setup lang="ts">
import {Language, LanguageType, TextLine} from "./data/interfaces.ts";
import {provide, Ref, ref} from "vue";
import IconGitHub from "./components/icons/GitHub.vue";

interface footerNavItem {
  text: TextLine;
  to: { name: string; }
}

const app = document.documentElement;
const footerNavList: footerNavItem[] = [
  {text: {ru: "Интерактивная клавиатура", en: "Interactive keyboard"}, to: {name: "interactiveKeyboard"}}
];
const languagesList: Record<string, Language> = {
  ru: {image: "/src/assets/images/russian.svg", title: "RU", value: "ru"},
  en: {image: "/src/assets/images/english.svg", title: "EN", value: "en"}
};

let language: Ref<LanguageType> = ref("ru");
let theme: Ref<string> = ref("light");

provide("language", language);

window.addEventListener("DOMContentLoaded", () => {
  const languageDropdown: Element | null = app.querySelector(".language-dropdown");
  const themeCheckboxInput: Element | null = app.querySelector("#theme-checkbox");

  if (languageDropdown) {
    const languageDropdownBtn: Element | null = languageDropdown.querySelector(".language-dropdown__btn");
    const languageDropdownListBtns: NodeListOf<Element> = languageDropdown.querySelectorAll(".list-language-dropdown__btn");

    const setLanguage = () => {
      const localLanguage: LanguageType = localStorage.language;

      if (localLanguage) {
        language.value = localLanguage;
        app.setAttribute("lang", language.value);
      } else {
        const appLanguage = app.getAttribute("lang");

        if (appLanguage) {
          language.value = appLanguage as LanguageType ? appLanguage : "ru";
          localStorage.language = language.value;
        }
      }
    };

    window.addEventListener("load", () => setLanguage());

    if (languageDropdownBtn) {
      languageDropdownBtn.addEventListener("click", () => {
        languageDropdown.classList.toggle("language-dropdown--active");
      });
    }

    languageDropdownListBtns.forEach((languageDropdownListBtn) => {
      languageDropdownListBtn.addEventListener("click", () => {
        languageDropdown.classList.toggle("language-dropdown--active");
        const languageDropdownValue = languageDropdownListBtn.getAttribute("data-value");

        if (languageDropdownValue) {
          language.value = languageDropdownValue as LanguageType ? languageDropdownValue : "ru";
          localStorage.language = language.value;
          app.setAttribute("lang", language.value);
        }
      });
    });
  }

  if (themeCheckboxInput) {
    const setAppTheme = () => {
      if (theme.value === "dark") {
        app.classList.add("dark");
      } else {
        app.classList.remove("dark");
      }
    };
    const setTheme = () => {
      const localTheme = localStorage.theme;

      if (localTheme) {
        theme.value = localTheme;
      } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          console.log("Ты предпочитаешь тёмный режим");
          theme.value = "dark";
        } else {
          theme.value = "light";
        }
      }

      setAppTheme();
    };

    window.addEventListener("load", () => setTheme());

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => setTheme());

    themeCheckboxInput.addEventListener("change", (event: Event) => {
      theme.value = (event.target as HTMLInputElement).checked ? "dark" : "light";
      localStorage.theme = theme.value;

      setAppTheme();
    });
  }
});
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <div class="theme-checkbox">
        <input class="theme-checkbox__input" id="theme-checkbox" type="checkbox" :checked="theme === 'dark'">
        <label class="theme-checkbox__label" for="theme-checkbox">
          <span class="theme-checkbox__icon icon--moon"/>
          <span class="theme-checkbox__ball"/>
          <span class="theme-checkbox__icon icon--sun"/>
        </label>
      </div>
      <div class="language-dropdown">
        <button v-text="languagesList[language].title"
                :class="`language-dropdown__btn icon--${language}`"
                type="button"/>
        <ul class="language-dropdown__list list-language-dropdown">
          <li v-for="(languagesItem, languagesItemId) in languagesList"
              class="list-language-dropdown__item"
              :key="`language_${languagesItemId}`">
            <button v-text="languagesItem.title"
                    :class="`list-language-dropdown__btn icon--${languagesItemId}`"
                    :data-value="languagesItemId"
                    type="button"/>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <RouterView/>
  <footer class="footer">
    <div class="footer__container container">
      <address class="footer__contacts contacts-footer">
        <ul class="contacts-footer__list">
          <li class="contacts-footer__item">
            <a class="contacts-footer__link" href="https://github.com/neondoll">GitHub</a>
            <IconGitHub class="contacts-footer__icon"/>
          </li>
        </ul>
      </address>
      <nav class="footer__nav nav-footer">
        <ul class="nav-footer__list">
          <template v-for="footerNavItem in footerNavList">
            <li class="nav-footer__item">
              <RouterLink class="nav-footer__link" :to="footerNavItem.to">
                {{ footerNavItem.text[language] }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style scoped></style>