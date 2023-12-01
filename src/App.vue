<script setup lang="ts">
import {Language, LanguageType} from "./data/interfaces.ts";
import {provide, Ref, ref} from "vue";
import ChevronDown from "./components/icons/ChevronDown.vue";
import IconGitHub from "./components/icons/GitHub.vue";

const app = document.documentElement;
const languagesList: Language[] = [
  {image: "/assets/images/russian.svg", title: "RU", value: "ru"},
  {image: "/assets/images/english.svg", title: "EN", value: "en"}
];

let language: Ref<string> = ref("ru");
let theme: Ref<string> = ref("light");

provide("language", language);

window.addEventListener("DOMContentLoaded", () => {
  const languageDropdownBtn: Element | null = app.querySelector(".language-dropdown__btn");
  const languageDropdownListBtns: NodeListOf<Element> = app.querySelectorAll(".list-language-dropdown__btn");
  const themeCheckboxInput: Element | null = app.querySelector("#theme-checkbox");

  if (languageDropdownBtn) {
    const languageDropdownBtnFlag: Element | null = languageDropdownBtn.querySelector(".btn-language-dropdown__flag");
    const languageDropdownBtnText: Element | null = languageDropdownBtn.querySelector(".btn-language-dropdown__text");

    const setLanguage = () => {
      const localLanguage: LanguageType = localStorage.language;

      if (localLanguage) {
        language.value = localLanguage;
        app.setAttribute("lang", language.value);
      } else {
        language.value = app.getAttribute("lang") || "ru";
        localStorage.language = language.value;
      }

      setLanguageDropdownBtnContent();
    };
    const setLanguageDropdownBtnContent = () => {
      const languagesItem: Language = languagesList.find((languagesItem) => languagesItem.value === language.value) || languagesList[0];

      if (languageDropdownBtnFlag) {
        languageDropdownBtnFlag.setAttribute("alt", languagesItem.title);
        languageDropdownBtnFlag.setAttribute("src", languagesItem.image);
      }

      if (languageDropdownBtnText) {
        languageDropdownBtnText.textContent = languagesItem.title;
      }
    };

    window.addEventListener("load", () => setLanguage());

    languageDropdownBtn.addEventListener("click", () => {
      languageDropdownBtn.classList.toggle("btn-language-dropdown--active");
    });

    languageDropdownListBtns.forEach((languageDropdownListBtn) => {
      languageDropdownListBtn.addEventListener("click", () => {
        languageDropdownBtn.classList.toggle("btn-language-dropdown--active");

        language.value = languageDropdownListBtn.getAttribute("data-value") || "ru";
        localStorage.language = language.value;
        app.setAttribute("lang", language.value);

        setLanguageDropdownBtnContent();
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
        <input class="theme-checkbox__input" :checked="theme === 'dark'" id="theme-checkbox" type="checkbox">
        <label class="theme-checkbox__label" for="theme-checkbox">
          <span class="theme-checkbox__icon icon--moon"/>
          <span class="theme-checkbox__ball"/>
          <span class="theme-checkbox__icon icon--sun"/>
        </label>
      </div>
      <div class="language-dropdown">
        <button class="language-dropdown__btn btn-language-dropdown" type="button">
          <img class="btn-language-dropdown__flag" alt="RU" src="/assets/images/russian.svg">
          <span class="btn-language-dropdown__text">RU</span>
          <ChevronDown class="btn-language-dropdown__icon"/>
        </button>
        <ul class="language-dropdown__list list-language-dropdown">
          <template v-for="languagesItem in languagesList">
            <li class="list-language-dropdown__item">
              <button class="list-language-dropdown__btn btn-list-language-dropdown"
                      :data-value="languagesItem.value"
                      type="button">
                <img class="btn-list-language-dropdown__flag" :alt="languagesItem.title" :src="languagesItem.image">
                <span class="btn-list-language-dropdown__text">{{ languagesItem.title }}</span>
              </button>
            </li>
          </template>
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