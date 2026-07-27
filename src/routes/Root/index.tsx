import type { FC } from "react";

import { About } from "./About";
import { Certificates } from "./Certificates";
import { Education } from "./Education";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Stack } from "./Stack";
import { Work } from "./Work";

export const Root: FC = () => {
  return (
    <main className="px-4 mx-auto container" data-slot="main">
      <Hero />
      <About />
      <Work />
      <Stack />
      <Projects />
      <Education />
      <Certificates />
    </main>
  );
};
