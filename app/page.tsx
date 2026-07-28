export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-text">
      <section className="container flex min-h-screen flex-col items-center justify-center text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
          Cozyfolio
        </p>

        <h1 className="mb-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Hi, I'm Ava.
        </h1>

        <p className="max-w-xl text-lg leading-8 text-muted">
          Building cozy internet things with Next.js, TypeScript, Tailwind CSS,
          and lots of late-night commits.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-primary px-6 py-3 font-medium text-background transition hover:bg-primary-hover">
            View Projects
          </button>

          <button className="rounded-full border border-border bg-surface px-6 py-3 font-medium transition hover:border-primary hover:bg-background">
            GitHub
          </button>
        </div>
      </section>
    </main>
  );
}