<script setup lang="ts">
// Components
import IconGithub from '../icons/IconGithub.vue';
import IconTelegram from '../icons/IconTelegram.vue';

// Types
import type { Component } from 'vue';

type ContactItem = { icon: Component; link: string; text: string };
/* type FooterNavItem = { text: TextByLanguage, to: RouteLocationRaw }; */

const contactList: Record<string, ContactItem> = {
  github: { icon: IconGithub as Component, link: 'https://github.com/neondoll', text: 'GitHub' },
  telegram: { icon: IconTelegram as Component, link: 'https://t.me/owlet_owl', text: 'Telegram' },
};
/* const footerNavList: FooterNavItem[] = [{text: {ru: 'Интерактивная клавиатура', en: 'Interactive keyboard'}, to: {name: 'interactiveKeyboard'}}]; */
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <address class="footer__contacts contacts-footer">
        <ul class="contacts-footer__list">
          <li
            v-for="(contactItem, contactId) in contactList"
            :key="`contact_${contactId}`"
            class="contacts-footer__item"
          >
            <Component
              :is="contactItem.icon"
              class="contacts-footer__icon"
            />
            <a
              class="contacts-footer__link"
              :href="contactItem.link"
              v-text="contactItem.text"
            />
          </li>
        </ul>
      </address>
      <!--<nav class="footer__nav nav-footer">
        <ul class="nav-footer__list">
          <template v-for="footerNavItem in footerNavList">
            <li class="nav-footer__item">
              <RouterLink class="nav-footer__link" :to="footerNavItem.to">
                {{ footerNavItem.text[language] }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </nav>-->
    </div>
  </footer>
</template>
