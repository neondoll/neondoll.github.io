<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const url = computed<string>(() => {
  return `https://neondoll.github.io/project-sources/neondoll-github-io/documents/${route.params.documentName}`;
});
</script>

<template>
  <main class="main document-page">
    <object
      :data="url"
      type="application/pdf"
    >
      <embed
        :src="url"
        type="application/pdf"
      >
    </object>
  </main>
</template>
