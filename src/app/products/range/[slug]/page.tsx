import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getRangeBySlug, getAllRangeSlugs, listed, ranges } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";
import { absUrl } from "@/lib/site";

export function generateStaticParams() {
  return getAllRangeSlugs().map((slug) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = getRangeBySlug(slug);
  if (!r) return { title: "Range not found" };
  const n = listed(r.products).length;
  const desc = `${r.tagline} ${n} Old Williamsburg ${r.name.toLowerCase()} products.`.slice(0, 160);
  const img = r.image || listed(r.products).find((p) => p.image)?.image || "/og.jpg";
  return {
    title: r.name,
    description: desc,
    alternates: { canonical: `/products/range/${r.slug}` },
    openGraph: { title: `${r.name} | Old Williamsburg`, description: desc, url: `/products/range/${r.slug}`, images: [{ url: img, alt: r.name }] },
  };
}

export default async function RangePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const range = getRangeBySlug(slug);
  if (!range) notFound();
  const items = listed(range.products);

  return (
    <main className="bg-paper">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Old Williamsburg ${range.name}`,
          url: absUrl(`/products/range/${range.slug}`),
          mainEntity: {
            "@type": "ItemList",
            itemListElement: items.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: absUrl(`/products/${p.slug}`), name: p.name })),
          },
        }}
      />
      <section className="mx-auto max-w-[1400px] px-5 pt-24 md:px-10 md:pt-36">
        <nav aria-label="Breadcrumb" className="mb-5 flex gap-2 text-sm text-muted">
          <Link href="/" className="ulink hover:text-ink">Home</Link><span aria-hidden="true">/</span>
          <Link href="/products" className="ulink hover:text-ink">Products</Link>
        </nav>
        <div className="grid gap-6 border-b rule pb-8 md:grid-cols-12 md:items-end md:pb-12">
          <h1 className="display text-[3rem] md:col-span-7 md:text-8xl">{range.name}</h1>
          <div className="md:col-span-5 md:pb-2">
            <p className="lede text-ink/75">{range.tagline}</p>
            <p className="mt-2 text-sm text-muted">{items.length} products</p>
          </div>
        </div>
        <nav aria-label="Ranges" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 py-4 md:mx-0 md:flex-wrap md:px-0">
          {ranges.filter((r) => listed(r.products).length).map((r) => (
            <Link key={r.slug} href={`/products/range/${r.slug}`} aria-current={r.slug === range.slug ? "page" : undefined}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${r.slug === range.slug ? "bg-ink text-cream" : "bg-paper-2 text-ink hover:bg-paper-3"}`}>
              {r.name}
            </Link>
          ))}
        </nav>
      </section>
      <section className="mx-auto max-w-[1400px] px-5 pt-6 pb-16 md:px-10 md:pb-24" aria-label={`${range.name} products`}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p, i) => <ProductCard key={p.slug} product={p} showRange={false} priority={i < 4} />)}
        </div>
      </section>
    </main>
  );
}
