<script setup lang="ts">
</script>

<template>
  <main class="main container">
    <section class="hero">
      <div class="hero__image"></div>
      <div class="hero__container">
        <h2 class="hero__title">Привет, я Александра!</h2>
        <p class="hero__subtitle">Будем знакомы</p>
      </div>
    </section>
    <section class="about">
      <h2 class="about__title">Обо мне</h2>
      <div class="about__container">
        <p class="about__text about__text--me">Frontend-разработчик из Москвы, который ищет развития и профессионального
          роста</p>
        <p class="about__text about__text--interface">Пришла во frontend-разработку, чтобы разрабатывать крутые
          интерфейсы и максимально улучшать пользовательский опыт</p>
        <!--<p class="about__text about__text--resources">Cлушаю <a class="about__link" href="https://web-standards.ru/">веб-стандарты</a>,
          смотрю <a class="about__link" href="https://www.youtube.com/c/Фронтенд/videos">лекции ШРИ Яндекса</a>, читаю
          статьи на Habr и Medium. Очень интересны результаты опросов <a href="https://stateofcss.com/en-us/">State of
            CSS</a> и <a class="about__link" href="https://stateofjs.com/en-us/">State of JS</a>.</p>-->
      </div>
    </section>
    <section class="work">
      <h2 class="work__title">Опыт работы</h2>
      <div class="work__container">
        <div class="job">
          <img class="job__image" src="../assets/images/MIREA.png" alt="МИРЭА Герб">
          <div class="job__container">
            <h3 class="job__title">Fullstack-разработчик</h3>
            <p class="job__text">Учебно-научный институт информатики и систем управления · Полня занятость</p>
            <p class="job__text">Фев 2020 - по настоящее время · 3 года 10 месяцев</p>
            <p class="job__text">Москва, Россия</p>
            <ul class="job__list list-inside list-dash">
              <li class="job__item">Разработка систем с нуля (от проектирования архитектуры и схемы базы данных и до
                реализации системы)
              </li>
              <li class="job__item">Поддержка существующих систем</li>
              <li class="job__item">Доработка существующих систем</li>
            </ul>
            <h4 class="job__list-title">Стек технологий:</h4>
            <ul class="job__list list-inside list-disc">
              <li class="job__item">HTML 5</li>
              <li class="job__item">CSS 3</li>
              <li class="job__item">SCSS</li>
              <li class="job__item">jQuery</li>
              <li class="job__item">JavaScript</li>
              <li class="job__item">Vue</li>
              <li class="job__item">Bootstrap</li>
              <li class="job__item">BootstrapVue</li>
              <li class="job__item">Vuetify</li>
              <li class="job__item">Tailwind CSS</li>
              <li class="job__item">PHP</li>
              <li class="job__item">Yii2</li>
              <li class="job__item">Laravel</li>
            </ul>
            <h4 class="job__list-title">Инструменты:</h4>
            <ul class="job__list list-inside list-disc">
              <li class="job__item">Webpack;</li>
              <li class="job__item">Vite;</li>
              <li class="job__item">PhpStorm;</li>
              <li class="job__item">DataGrip</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="stack">
      <h2 class="stack__title">Мой стек</h2>
      <ul class="stack__list">
        <li class="stack__item stack__item--html5">HTML 5</li>
        <li class="stack__item stack__item--css3">CSS 3</li>
        <li class="stack__item stack__item--scss">SCSS</li>
        <li class="stack__item stack__item--jquery">jQuery</li>
        <li class="stack__item stack__item--javascript">JavaScript</li>
        <li class="stack__item stack__item--typescript">TypeScript</li>
        <li class="stack__item stack__item--vue">Vue</li>
        <li class="stack__item stack__item--bootstrap">Bootstrap</li>
        <li class="stack__item stack__item--bootstrap-vue">BootstrapVue</li>
        <li class="stack__item stack__item--vuetify">Vuetify</li>
        <li class="stack__item stack__item--tailwind-css">Tailwind CSS</li>
      </ul>
      <h3 class="stack__subtitle">Инструменты и прочее:</h3>
      <ul class="stack__list">
        <li class="stack__item stack__item--phpstorm">PhpStorm</li>
      </ul>
    </section>
    <!--<section class="projects">
      <h2 class="projects__title">Проекты</h2>
    </section>-->
    <section class="certificates">
      <h2 class="certificates__title">Сертификаты</h2>
      <ul class="certificates__list list-inside list-disc">
        <li class="certificates__item">
          <a class="certificates__link"
             href="https://github.com/neondoll/portfolio/blob/main/assets/files/-OST-2-MIREA-IKBO-certificate.pdf"
             target="_blank">CCNA 7. Switching, Routing, and Wireless Essentials (SRWE) (Основы маршрутизации,
            коммутации и беспроводных сетей)</a>
        </li>
        <li class="certificates__item">
          <a class="certificates__link"
             href="https://github.com/neondoll/portfolio/blob/main/assets/files/certificate-html-layout-from-scratch-to-first-layout.pdf"
             target="_blank">HTML-верстка: с нуля до первого макета</a>
        </li>
        <li class="certificates__item">
          <a class="certificates__link"
             href="https://github.com/neondoll/portfolio/blob/main/assets/files/certificate-adaptive-and-mobile-layout.pdf"
             target="_blank">Адаптивная и мобильная верстка</a>
        </li>
        <li class="certificates__item">
          <a class="certificates__link"
             href="https://github.com/neondoll/portfolio/blob/main/assets/files/certificate-basics-of-programming.pdf"
             target="_blank">Основы программирования</a>
        </li>
        <li class="certificates__item">
          <a class="certificates__link"
             href="https://github.com/neondoll/portfolio/blob/main/assets/files/certificate-git-version-control-system.pdf"
             target="_blank">Git — система контроля версий</a>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped></style>