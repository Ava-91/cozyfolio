import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import WhyIBuild from "../components/sections/WhyIBuild";
import CurrentlyBuilding from "../components/sections/CurrentlyBuilding";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import CozyTerminal from "../components/ui/CozyTerminal";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -right-37.5 top-[40%] h-100 w-100 rounded-full bg-primary/5 blur-[100px]" />
      </div>
      <Hero />
      <About />
      <WhyIBuild />
      <CurrentlyBuilding />
      <Skills />
      <Projects />
      <Contact />
      <CozyTerminal />
    </main>
  );
}
