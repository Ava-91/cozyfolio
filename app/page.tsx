import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Animated background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-primary/10
            blur-[120px]
            animate-pulse
          "
        />

        <div
          className="
            absolute
            right-[-150px]
            top-[40%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-primary/5
            blur-[100px]
          "
        />
      </div>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}