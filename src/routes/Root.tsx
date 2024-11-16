import About from "../components/About";
import Certificates from "../components/Certificates";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
import Work from "../components/Work";

export default function Root() {
  return (
    <main className="main container">
      <Hero />
      <About />
      <Work />
      <Stack />
      <Projects />
      <Certificates />
    </main>
  );
}
