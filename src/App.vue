<script setup lang="ts">
import ThemeCheckbox from "./components/ThemeCheckbox.vue";
import developer from "./assets/images/NxcQR6VIBiA.jpg";
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <ThemeCheckbox/>
    </div>
  </header>
  <main class="main container">
    <section class="hero">
      <div class="hero__text-container">
        <h2 class="hero__title">Привет, я Александра!</h2>
        <p class="hero__subtitle">Будем знакомы</p>
      </div>
      <div class="hero__image-container">
        <div class="hero__image"></div>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>