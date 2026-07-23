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
      <Certificates />
    </main>
  );
};
