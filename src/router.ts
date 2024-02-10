import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {path: '/', name: 'home', component: () => import('./pages/Home.vue')},
    {path: '/documents/:documentName', name: 'document', component: () => import('./pages/Document.vue')},
    /*{
        path     : '/interactive-keyboard',
        name     : 'interactiveKeyboard',
        component: () => import('./pages/InteractiveKeyboard.vue')
    }*/
];

const router = createRouter({history: createWebHashHistory(), routes});

export default router;