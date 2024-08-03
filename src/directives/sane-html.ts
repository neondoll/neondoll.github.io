import DOMPurify from 'isomorphic-dompurify';
import type { DirectiveBinding } from 'vue';

const VSaneHtml = (el: HTMLElement, binding: DirectiveBinding<string | Node>) => {
  el.innerHTML = DOMPurify.sanitize(binding.value);
};

export default VSaneHtml;
