"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blueprint-bg px-4">
      <div className="text-center max-w-md">
        <p className="font-mono text-[10px] text-brick-red uppercase tracking-widest mb-4">
          Error 500 // Something Went Wrong
        </p>
        <h1 className="font-headline text-5xl md:text-7xl text-steel-blue font-black mb-6">
          Bridge Under Repair
        </h1>
        <p className="font-body text-industrial-gray mb-10 leading-relaxed">
          Something unexpected happened. Let&apos;s try to get things back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-steel-blue text-white px-10 py-4 font-mono uppercase tracking-widest text-xs font-bold hover:bg-dark-steel transition-colors cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border-2 border-steel-blue text-steel-blue px-10 py-4 font-mono uppercase tracking-widest text-xs font-bold hover:bg-steel-blue hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
