import Link from "next/link";
export default function NotFound() {
  return (
    <main className="grid min-h-[75vh] place-items-center bg-paper px-5 pt-24 text-center">
      <div>
        <p className="text-sm text-muted">404</p>
        <h1 className="display mt-3 text-[3rem] md:text-8xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">That link doesn&apos;t go anywhere. The products are all here:</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/products" className="rounded-full bg-ink px-6 py-3.5 font-semibold text-cream">All products</Link>
          <Link href="/" className="rounded-full border border-ink/20 px-6 py-3.5 font-semibold">Home</Link>
        </div>
      </div>
    </main>
  );
}
