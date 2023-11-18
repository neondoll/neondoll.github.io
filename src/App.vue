<script setup lang="ts">
import IconGitHub from "./components/icons/GitHub.vue";

const app = document.documentElement;

window.addEventListener("DOMContentLoaded", (event) => {
  const themeCheckboxInput = document.querySelector("#theme-checkbox");

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

  if (themeCheckboxInput) {
    themeCheckboxInput.addEventListener("change", (event) => {
      if (event.target.checked) {
        localStorage.theme = "dark";
        app.classList.add("dark");
      } else {
        localStorage.theme = "light";
        app.classList.remove("dark");
      }
    });
  }

  window.addEventListener("load", setTheme);

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