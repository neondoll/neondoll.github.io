<script setup lang="ts">
// Composables
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const url = computed((): string => `https://neondoll.github.io/project-sources/neondoll-github-io/documents/${route.params.documentName as string}`);
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
