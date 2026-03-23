import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blueprint-bg px-4">
      <div className="text-center max-w-md">
        <p className="font-mono text-[10px] text-brick-red uppercase tracking-widest mb-4">
          Error 404 // Page Not Found
        </p>
        <h1 className="font-headline text-5xl md:text-7xl text-steel-blue font-black mb-6">
          Lost in Brooklyn
        </h1>
        <p className="font-body text-industrial-gray mb-10 leading-relaxed">
          This page doesn&apos;t exist. Let&apos;s get you back to familiar territory.
        </p>
        <Link
          href="/"
          className="inline-block bg-steel-blue text-white px-10 py-4 font-mono uppercase tracking-widest text-xs font-bold hover:bg-dark-steel transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
