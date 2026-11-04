import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getProductBySlug, getAllProductSlugs, getRangeBySlug, listed } from "@/data/products";
import ProductView from "@/components/ProductView";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";
import { absUrl, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return { title: "Product not found" };
  const range = getRangeBySlug(p.rangeSlug);
  const size = p.weight.replace(/\s*\(.*\)/, "").toLowerCase();
  const desc = `${p.description} ${size}${p.kosherCert ? `, kosher (${p.kosherCert})` : ""}. ${range ? `Part of the Old Williamsburg ${range.name} range.` : ""}`.replace(/\s+/g, " ").trim().slice(0, 160);
  const img = p.image || "/og.jpg";
  return {
    title: `${p.name} ${size}`,
    description: desc,
    alternates: { canonical: `/products/${p.slug}` },
    robots: p.discontinued ? { index: false, follow: true } : undefined,
    openGraph: { type: "website", title: `${p.name} | ${SITE_NAME}`, description: desc, url: `/products/${p.slug}`, images: [{ url: img, alt: p.name }] },
    twitter: { card: "summary_large_image", title: `${p.name} | ${SITE_NAME}`, description: desc, images: [img] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const range = getRangeBySlug(product.rangeSlug);
  const related = range ? listed(range.products).filter((p) => p.slug !== product.slug).slice(0, 4) : [];
  const gtin = product.upc && /^\d{12,14}$/.test(product.upc) ? product.upc : undefined;
  const images = [product.image, ...product.angles].filter(Boolean).map((s) => absUrl(s));

  return (
    <main className="bg-paper">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${product.name} ${product.weight.replace(/\s*\(.*\)/, "")}`,
            description: product.description,
            sku: product.sku,
            mpn: product.sku,
            ...(gtin ? { [gtin.length === 12 ? "gtin12" : gtin.length === 13 ? "gtin13" : "gtin14"]: gtin } : {}),
            ...(images.length ? { image: images } : {}),
            brand: { "@type": "Brand", name: SITE_NAME },
            category: range?.name,
            url: absUrl(`/products/${product.slug}`),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
              { "@type": "ListItem", position: 2, name: "Products", item: absUrl("/products") },
              ...(range ? [{ "@type": "ListItem", position: 3, name: range.name, item: absUrl(`/products/range/${range.slug}`) }] : []),
              { "@type": "ListItem", position: range ? 4 : 3, name: product.name, item: absUrl(`/products/${product.slug}`) },
            ],
          },
        ]}
      />
      <div className="mx-auto max-w-[1400px] px-5 pt-24 pb-20 md:px-10 md:pt-32">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted">
          <Link href="/" className="ulink hover:text-ink">Home</Link><span aria-hidden="true">/</span>
          <Link href="/products" className="ulink hover:text-ink">Products</Link>
          {range && (<><span aria-hidden="true">/</span><Link href={`/products/range/${range.slug}`} className="ulink hover:text-ink">{range.name}</Link></>)}
        </nav>
        <ProductView product={product} rangeName={range?.name} />
      </div>
      {related.length > 0 && range && (
        <section className="border-t border-ink/10 bg-paper-2/50" aria-labelledby="more-h">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
            <div className="mb-10 flex items-end justify-between gap-6">
              <h2 id="more-h" className="display text-4xl md:text-5xl">More <em className="text-brick">{range.name.toLowerCase()}</em></h2>
              <Link href={`/products/range/${range.slug}`} className="ulink shrink-0 font-semibold">See all</Link>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
              {related.map((p) => <ProductCard key={p.slug} product={p} showRange={false} />)}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
