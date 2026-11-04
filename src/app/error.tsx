"use client";
import Link from "next/link";
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-[70vh] place-items-center px-5 pt-24 text-center">
      <div>
        <h1 className="display text-5xl">Something went wrong</h1>
        <p className="mt-3 text-muted">Try loading the page again.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button onClick={reset} className="rounded-full bg-ink px-6 py-3 font-semibold text-cream">Retry</button>
          <Link href="/" className="rounded-full bg-paper-2 px-6 py-3 font-semibold">Home</Link>
        </div>
      </div>
    </main>
  );
}
