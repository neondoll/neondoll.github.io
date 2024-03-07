<script setup lang="ts">
import AboutSection from "../components/HomeComponents/AboutSection.vue";
import CertificatesSection from "../components/HomeComponents/CertificatesSection.vue";
import HeroSection from "../components/HomeComponents/HeroSection.vue";
import ProjectsSection from "../components/HomeComponents/ProjectsSection.vue";
import StackSection from "../components/HomeComponents/StackSection.vue";
import WorkSection from "../components/HomeComponents/WorkSection.vue";
</script>

<template>
  <main class="main container">
    <HeroSection/>
    <AboutSection/>
    <WorkSection/>
    <StackSection/>
    <ProjectsSection/>
    <CertificatesSection/>
  </main>
</template>

<style scoped></style>
