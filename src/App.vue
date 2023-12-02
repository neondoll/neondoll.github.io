<script setup lang="ts">
import {Language, LanguageType} from "./data/interfaces.ts";
import {provide, Ref, ref} from "vue";
import IconGitHub from "./components/icons/GitHub.vue";

const app = document.documentElement;
const languagesList: Record<string, Language> = {
  ru: {image: "/src/assets/images/russian.svg", title: "RU", value: "ru"},
  en: {image: "/src/assets/images/english.svg", title: "EN", value: "en"}
};

let language: Ref<string> = ref("ru");
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
        language.value = app.getAttribute("lang") || "ru";
        localStorage.language = language.value;
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

        language.value = languageDropdownListBtn.getAttribute("data-value") || "ru";
        localStorage.language = language.value;
        app.setAttribute("lang", language.value);
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
      <ul class="footer__list list-footer">
        <li class="list-footer__item">
          <a class="list-footer__link" href="https://github.com/neondoll">GitHub</a>
          <IconGitHub class="list-footer__icon"/>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped></style>