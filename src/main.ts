import { Component, createApp, DirectiveBinding } from 'vue';
import './css/style.css';
import App from './App.vue';
import DOMPurify from 'isomorphic-dompurify';
import router from './router.ts';

const app = createApp(App as Component);
app.directive('sane-html', (el: HTMLElement, binding: DirectiveBinding<string | Node>) => {
  el.innerHTML = DOMPurify.sanitize(binding.value);
});
app.use(router);
app.mount('#app');
