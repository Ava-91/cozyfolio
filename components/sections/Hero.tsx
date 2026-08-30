import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const technologies = [
  "Next.js",
  "TypeScript",
  "Python",
  "React",
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24">
      <FadeIn>
        <div className="text-center">
          {/* Status */}
          <Link
            href="https://github.com/Ava-91/music-sync"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-2 text-sm text-muted transition-colors hover:border-primary/40 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            aria-label="View the music-sync project on GitHub"
          >
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            Currently building music-sync
          </Link>

          {/* Heading */}
          <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            Hi, I’m{" "}
            <span className="text-primary">Ava</span>
          </h1>

          {/* Short description */}
          <p className="mt-6 text-xl text-muted md:text-2xl">
            I build cozy interfaces and oddly specific tools.
          </p>

          {/* Long description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-muted md:text-lg">
            From organizing messy music libraries to turning GitHub repositories
            into shareable visuals, I like building software for problems that
            are just annoying enough to deserve a tool.
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
          <div
            className="mt-12 flex flex-wrap justify-center gap-3 text-sm"
            aria-label="Technologies"
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface/40 px-3 py-1 text-muted"
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
