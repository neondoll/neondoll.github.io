import type { FC } from "react";

import { About } from "./About";
import { Certificates } from "./Certificates";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Stack } from "./Stack";
import { Work } from "./Work";

export const Root: FC = () => {
  return (
    <main className="space-y-8 px-4 mx-auto container md:space-y-16" data-slot="main">
      <Hero />
      <About />
      <Work />
      <Stack />
      <Projects />
      <section id="education">
        <h2>Образование</h2>
        <div>
          <h3>Бакалавр программной инженерии</h3>
          <p>МИРЭА — Российский технологический университет, 2022</p>
          <p>Направление 09.03.04 «Программная инженерия».</p>
        </div>
      </section>
      <Certificates />
    </main>
  );
};
