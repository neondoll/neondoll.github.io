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
          <svg class="theme-checkbox__icon">
            <use xlink:href="#svg-moon"/>
          </svg>
          <span class="theme-checkbox__ball"/>
          <svg class="theme-checkbox__icon">
            <use xlink:href="#svg-sun"/>
          </svg>
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
  <div style="display:none">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <symbol id="svg-moon" viewBox="0 0 473.935 473.935">
        <circle fill="#344e5d" cx="236.967" cy="236.967" r="236.967"/>
        <path fill="#f1eb75"
              d="M248.443,242.685c0-52.318,28.516-97.945,70.832-122.289c-15.757-6.601-33.055-10.26-51.21-10.26 c-73.204,0-132.549,59.341-132.549,132.549c0,73.201,59.341,132.549,132.549,132.549c18.155,0,35.453-3.663,51.21-10.267 C276.96,340.63,248.443,294.995,248.443,242.685z"/>
      </symbol>
      <symbol id="svg-sun" viewBox="0 0 456.54 456.54">
        <rect fill="#fceba2" width="26" height="77.239" x="81.169" y="55.548"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -39.005 94.1686)"/>
        <rect fill="#fceba2" width="26" height="77.239" x="81.169" y="323.75"
              transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -95.4776 685.1913)"/>
        <rect fill="#fceba2" width="26" height="77.239" x="349.372" y="55.544"
              transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 552.0227 416.9835)"/>
        <rect fill="#fceba2" width="26" height="77.239" x="349.378" y="323.753"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -150.0985 362.3763)"/>
        <rect fill="#ffde55" width="26" height="77.24" x="215.27"/>
        <rect fill="#ffde55" width="26" height="77.24" x="215.27" y="379.3"/>
        <rect fill="#ffde55" width="77.24" height="26" x="379.3" y="215.27"/>
        <rect fill="#ffde55" width="77.24" height="26" y="215.27"/>
        <circle fill="#fceba2" cx="228.267" cy="228.271" r="124.003"/>
        <circle fill="#ffde55" cx="228.267" cy="228.271" r="95.142"/>
      </symbol>
    </svg>
  </div>
</template>

<style scoped></style>