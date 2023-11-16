<script setup lang="ts">
window.addEventListener("DOMContentLoaded", (event) => {
  const app = document.querySelector("#app");
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
  <div class="theme-checkbox">
    <input class="theme-checkbox__input" id="theme-checkbox" type="checkbox">
    <label class="theme-checkbox__label" for="theme-checkbox">
      <img class="theme-checkbox__icon" src="../assets/images/moon.svg" alt="" draggable="false" loading="lazy">
      <span class="theme-checkbox__ball"></span>
      <img class="theme-checkbox__icon" src="../assets/images/sun.svg" alt="" draggable="false" loading="lazy">
    </label>
  </div>
</template>

<style scoped>

</style>