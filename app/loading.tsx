export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-20 w-20">
          {/* Rotating ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-primary/20 border-t-primary" />

          {/* Inner circle */}
          <div className="absolute inset-2 rounded-full border border-border bg-surface" />

          {/* Center glow */}
          <div className="absolute inset-5.5 rounded-full bg-primary/20 animate-pulse" />
        </div>

        <div className="space-y-1 text-center">
          <p className="text-sm font-medium text-text">
            Building cozy things...
          </p>

          <p className="text-xs text-muted">
            Just a moment.
          </p>
        </div>
      </div>
    </main>
  );
}