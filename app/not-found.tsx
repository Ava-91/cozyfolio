import Link from "next/link";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary/20 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-text mb-2">Page not found</h2>
          <p className="text-muted">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link href="/">
          <Button variant="primary" size="lg">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go back home
          </Button>
        </Link>
      </div>
    </div>
  );
}