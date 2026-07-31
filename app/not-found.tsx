import Link from "next/link";
import { ArrowLeft, Ghost } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="text-center max-w-lg">

        {/* Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-border bg-surface shadow-lg">
          <Ghost className="h-10 w-10 text-primary animate-pulse" />
        </div>

        {/* Error */}
        <p className="text-sm uppercase tracking-[0.3em] text-muted mb-4">
          404 Error
        </p>

        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-text">
          Lost?
        </h1>

        <p className="mt-6 text-muted text-base md:text-lg leading-8">
          Looks like this page wandered away from the internet.
          Maybe it got lost between commits. ✨
        </p>

        {/* Terminal-style message */}
        <div className="mt-8 rounded-xl border border-border bg-surface p-4 text-left font-mono text-sm text-muted">
          <span className="text-primary">$</span> cd requested-page
          <br />
          <span className="text-danger">
            error: page_not_found
          </span>
          <br />
          <span className="text-success">
            suggestion: return_home()
          </span>
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link href="/">
            <Button variant="primary" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to homepage
            </Button>
          </Link>
        </div>

      </div>
    </main>
  );
}