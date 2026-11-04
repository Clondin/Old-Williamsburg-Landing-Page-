import Hero from "@/components/home/Hero";
import RangeIndex from "@/components/home/RangeIndex";
import Spotlight from "@/components/home/Spotlight";
import NewRail from "@/components/home/NewRail";
import Story from "@/components/home/Story";
import JsonLd from "@/components/JsonLd";
import { ranges, listed, getProductBySlug } from "@/data/products";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/site";

export default function Home() {
  const shown = ranges.filter((r) => listed(r.products).length);
  const products = shown.flatMap((r) => listed(r.products));
  const fresh = products.filter((p) => p.isNew && p.image && !p.comingSoon).slice(0, 10);
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
      <Hero productCount={products.length} />
      <RangeIndex ranges={shown} />
      <Spotlight product={nova} eyebrow="Smoked fish" />
      <NewRail products={fresh} />
      <Story />
    </main>
  );
}
