// Composables
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/documents/:documentName', name: 'document', component: () => import('../views/DocumentView.vue') },
  /* {path: '/interactive-keyboard', name: 'interactiveKeyboard', component: () => import('./pages/InteractiveKeyboardView.vue')} */
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
