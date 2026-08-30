import Link from "next/link";
import Card from "@/components/ui/Card";

export default function CurrentlyBuilding() {
  return (
    <section className="px-4 py-12 sm:py-16" aria-labelledby="currently-building-title">
      <div className="container max-w-5xl">
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary sm:text-xs">
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary" aria-hidden="true" />
                Currently building
              </div>
              <h2 id="currently-building-title" className="text-2xl font-semibold text-text sm:text-3xl">music-sync</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">A safety-first tool for reconciling independent music libraries without blindly overwriting metadata or artwork.</p>
            </div>
            <Link href="https://github.com/Ava-91/music-sync" target="_blank" rel="noopener noreferrer" className="inline-flex w-full shrink-0 items-center justify-center rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-text transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 sm:w-auto">Follow the build →</Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
