import Link from "next/link";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import RangeShowcase from "@/components/home/RangeShowcase";
import Spotlight from "@/components/home/Spotlight";
import Story from "@/components/home/Story";
import Quote from "@/components/home/Quote";
import ProductGrid from "@/components/ProductGrid";
import JsonLd from "@/components/JsonLd";
import { ranges, listed, getProductBySlug } from "@/data/products";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/site";
import { ArrowRight } from "@/components/icons";

export default function Home() {
  const shown = ranges.filter((r) => listed(r.products).length);
  const products = shown.flatMap((r) => listed(r.products));
  const kosher = products.filter((p) => p.kosherCert || p.kosher).length;
  const nova = getProductBySlug("smoked-nova-salmon")!;
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: `${SITE_URL}/logo.svg`,
          email: CONTACT_EMAIL,
        }}
      />
      <Hero productCount={products.length} rangeCount={shown.length} kosherCount={kosher} />
      <Marquee items={shown.map((r) => r.name)} />
      <RangeShowcase ranges={shown} />
      <Spotlight product={nova} eyebrow="The brunch cornerstone" title={<>Smoked Nova <em className="text-brass-light">Salmon.</em></>} />
      <section id="catalog" className="mx-auto max-w-[1400px] scroll-mt-24 px-5 py-20 md:px-10 md:py-28" aria-labelledby="catalog-h">
        <div className="reveal mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-brick">The pantry</p>
            <h2 id="catalog-h" className="display mt-3 text-5xl md:text-7xl">Every product, <em className="text-brick">one shelf.</em></h2>
          </div>
          <Link href="/products" className="inline-flex items-center gap-2 font-semibold"><span className="ulink">Open the full catalog</span> <ArrowRight /></Link>
        </div>
        <ProductGrid ranges={shown.map(({ slug, name }) => ({ slug, name }))} products={products} />
      </section>
      <Story />
      <Quote />
    </main>
  );
}
