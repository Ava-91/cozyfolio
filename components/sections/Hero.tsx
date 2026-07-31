import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
];

export default function Hero() {
  return (
    <section>
      <FadeIn>
        <div className="text-center">

          {/* Status */}
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Currently building cozy things on the internet
          </div>


          {/* Heading */}
          <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            Hi, I'm{" "}
            <span className="text-primary">
              Ava
            </span>
          </h1>


          {/* Short description */}
          <p className="mt-6 text-xl text-muted md:text-2xl">
            Frontend-first developer building calm,
            minimal and thoughtful web experiences.
          </p>


          {/* Long description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-muted md:text-lg">
            I'm passionate about crafting interfaces that feel
            clean, modern and enjoyable to use. Currently exploring
            Next.js, TypeScript, React and building projects one
            commit at a time.
          </p>


          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link href="#projects">
              <Button variant="primary" size="lg">
                View Projects
              </Button>
            </Link>


            <Link href="#about">
              <Button variant="ghost" size="lg">
                About Me
              </Button>
            </Link>

          </div>


          {/* Tech stack */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-border
                  bg-surface/40
                  px-3
                  py-1
                  text-muted
                "
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </FadeIn>
    </section>
  );
}