import Link from "next/link";
export default function NotFound() {
  return (
    <main className="stage-dark grid min-h-[80vh] place-items-center px-5 pt-24 text-center text-cream">
      <div>
        <p className="eyebrow text-brass-light">404</p>
        <h1 className="display mt-4 text-6xl md:text-8xl">Off the <em className="text-brass-light">map.</em></h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-cream/70">That page isn&apos;t here. The pantry is right this way.</p>
        <div className="mt-9 flex justify-center gap-3">
          <Link href="/products" className="rounded-full bg-cream px-6 py-3.5 font-semibold text-ink">Shop all products</Link>
          <Link href="/" className="rounded-full border border-cream/25 px-6 py-3.5 font-semibold">Home</Link>
        </div>
      </div>
    </main>
  );
}
