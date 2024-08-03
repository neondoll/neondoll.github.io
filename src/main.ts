import App from './App.vue';
import router from './router';
import VSaneHtml from './directives/sane-html';
import { createApp } from 'vue';
import type { Component } from 'vue';

import './css/style.css';

const app = createApp(App as Component);
app.directive('sane-html', VSaneHtml);
app.use(router);
app.mount('#app');
