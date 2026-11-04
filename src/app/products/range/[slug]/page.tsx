import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getRangeBySlug, getAllRangeSlugs, listed, ranges } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";
import { absUrl } from "@/lib/site";
import { ArrowRight } from "@/components/icons";
import { small } from "@/lib/img";

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
  const shots = items.filter((p) => p.image && !p.comingSoon).slice(0, 4);
  const others = ranges.filter((r) => r.slug !== range.slug && listed(r.products).length);

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
      <section className="stage-dark relative isolate overflow-hidden text-cream">
        {range.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={range.image} alt="" aria-hidden="true" className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover opacity-40 md:w-3/5 md:opacity-90 [mask-image:linear-gradient(to_right,transparent,black_45%)]" />
        )}
        <div className="mx-auto grid max-w-[1400px] items-end gap-10 px-5 pt-28 pb-14 md:grid-cols-2 md:px-10 md:pt-40 md:pb-20">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-sm text-cream/60">
              <Link href="/" className="ulink hover:text-cream">Home</Link><span aria-hidden="true">/</span>
              <Link href="/products" className="ulink hover:text-cream">Products</Link>
            </nav>
            <p className="eyebrow text-brass-light">{items.length} products</p>
            <h1 className="display mt-3 text-6xl md:text-8xl">{range.name}</h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream/75">{range.tagline}</p>
          </div>
          {!range.image && shots.length > 0 && (
            <div className="flex h-56 items-end justify-center gap-3 md:h-72">
              {shots.map((p, k) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={p.slug} src={small(p.image)} alt="" aria-hidden="true" className={`float packshot h-[80%] w-auto max-w-[24%] object-contain ${k % 2 ? "h-full" : ""}`} style={{ animationDelay: `${-k * 1.5}s` }} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24" aria-label={`${range.name} products`}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p, i) => <ProductCard key={p.slug} product={p} showRange={false} priority={i < 4} />)}
        </div>
      </section>
      <section className="border-t border-ink/10" aria-labelledby="other-h">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10">
          <h2 id="other-h" className="eyebrow text-muted mb-5">More from Old Williamsburg</h2>
          <div className="flex flex-wrap gap-2">
            {others.map((r) => (
              <Link key={r.slug} href={`/products/range/${r.slug}`} className="group inline-flex items-center gap-2 rounded-full bg-paper-2 px-5 py-3 font-headline text-xl hover:bg-ink hover:text-cream transition-colors">
                {r.name} <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
