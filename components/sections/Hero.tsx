import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const technologies = ["Next.js", "TypeScript", "Python", "React"];

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 pb-12 pt-28 sm:pb-16 sm:pt-32">
      <FadeIn>
        <div className="mx-auto w-full max-w-4xl text-center">
          <Link href="https://github.com/Ava-91/music-sync" target="_blank" rel="noopener noreferrer" className="mb-6 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-2 text-center text-xs text-muted transition-colors hover:border-primary/40 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50)" aria-label="View the music-sync project on GitHub">
            <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            Currently building music-sync
          </Link>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">Hi, I’m <span className="text-primary">Ava</span></h1>
          <p className="mt-5 text-lg text-muted sm:text-xl md:text-2xl">I build cozy interfaces and oddly specific tools.</p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted sm:mt-8 sm:text-base sm:leading-8 md:text-lg">From organizing messy music libraries to turning GitHub repositories into shareable visuals, I like building software for problems that are just annoying enough to deserve a tool.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="#projects"><Button variant="primary" size="lg" fullWidth>View Projects</Button></Link>
            <Link href="#about"><Button variant="ghost" size="lg" fullWidth>About Me</Button></Link>
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-2.5 text-xs sm:mt-12 sm:gap-3 sm:text-sm" aria-label="Technologies">
            {technologies.map((tech) => <span key={tech} className="rounded-full border border-border bg-surface/40 px-3 py-1 text-muted">{tech}</span>)}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
