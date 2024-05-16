import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'home', component: () => import('./pages/HomePage.vue') },
  { path: '/documents/:documentName', name: 'document', component: () => import('./pages/DocumentPage.vue') },
  /* {path: '/interactive-keyboard', name: 'interactiveKeyboard', component: () => import('./pages/InteractiveKeyboardPage.vue')} */
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
