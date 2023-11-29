<script setup lang="ts">
import ChevronDown from "./components/icons/ChevronDown.vue";
import IconGitHub from "./components/icons/GitHub.vue";

const app = document.documentElement;
const languagesList = [{image: "/assets/images/russian.svg", title: "RU", value: "ru"},
                       {image: "/assets/images/english.svg", title: "EN", value: "en"}];

window.addEventListener("DOMContentLoaded", () => {
  const languageDropdownBtn = document.querySelector(".language-dropdown__btn");
  const languageDropdownBtnFlag = languageDropdownBtn.querySelector(".btn-language-dropdown__flag");
  const languageDropdownBtnText = languageDropdownBtn.querySelector(".btn-language-dropdown__text");
  const languageDropdownListBtns = document.querySelectorAll(".list-language-dropdown__btn");
  const themeCheckboxInput = document.querySelector("#theme-checkbox");

  const setLanguage = () => {
    const localLanguage = localStorage.language;
    let value: string;

    if (localLanguage) {
      value = localStorage.language;

      app.setAttribute("lang", value);
    } else {
      value = app.getAttribute("lang");

      localStorage.language = value;
    }

    const languagesItem = languagesList.find((languagesItem) => languagesItem.value === value);
    languageDropdownBtnFlag.setAttribute("alt", languagesItem.title);
    languageDropdownBtnFlag.setAttribute("src", languagesItem.image);
    languageDropdownBtnText.textContent = languagesItem.title;
  };
  const setTheme = () => {
    const localTheme = localStorage.theme;

    if (localTheme) {
      switch (localTheme) {
        case "dark":
          app.classList.add("dark");
          themeCheckboxInput.checked = true;
          break;
        case "light":
          app.classList.remove("dark");
          break;
      }
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        console.log("Ты предпочитаешь тёмный режим");
        app.classList.add("dark");
        themeCheckboxInput.checked = true;
      } else {
        app.classList.remove("dark");
      }
    }
  };

  languageDropdownBtn.addEventListener("click", () => {
    languageDropdownBtn.classList.toggle("btn-language-dropdown--active");
  });

  languageDropdownListBtns.forEach((languageDropdownListBtn) => {
    languageDropdownListBtn.addEventListener("click", () => {
      languageDropdownBtn.classList.toggle("btn-language-dropdown--active");

      const value: string = languageDropdownListBtn.getAttribute("data-value");
      const languagesItem = languagesList.find((languagesItem) => languagesItem.value === value);

      localStorage.language = value;
      app.setAttribute("lang", value);
      languageDropdownBtnFlag.setAttribute("alt", languagesItem.title);
      languageDropdownBtnFlag.setAttribute("src", languagesItem.image);
      languageDropdownBtnText.textContent = languagesItem.title;
    });
  });

  themeCheckboxInput.addEventListener("change", (event) => {
    if (event.target.checked) {
      localStorage.theme = "dark";
      app.classList.add("dark");
    } else {
      localStorage.theme = "light";
      app.classList.remove("dark");
    }
  });

  window.addEventListener("load", () => {
    setLanguage();
    setTheme();
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => setTheme());
});
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <div class="theme-checkbox">
        <input class="theme-checkbox__input" id="theme-checkbox" type="checkbox">
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