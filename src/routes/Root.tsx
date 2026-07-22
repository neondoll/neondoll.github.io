import type { FC } from "react";

import { About } from "../components/About";
import { Certificates } from "../components/Certificates";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Stack } from "../components/Stack";
import { Work } from "../components/Work";

export const Root: FC = () => {
  return (
    <main className="flex flex-col gap-16 px-4 mx-auto container" data-slot="main">
      <Hero />
      <About />
      <Work />
      <Stack />
      <Projects />
      <Certificates />
    </main>
  );
};
