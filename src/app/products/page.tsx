import type { Metadata } from "next";
import { ranges, listed } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "All products",
  description: "Every Old Williamsburg product: smoked fish, beef jerky, pizza, pickles and gherkins, salsa, sauces and mustards, kugels and knishes, and cold brew coffee.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const shown = ranges.filter((r) => listed(r.products).length);
  const products = shown.flatMap((r) => listed(r.products));
  return (
    <main className="bg-paper">
      <section className="mx-auto max-w-[1400px] px-5 pt-28 pb-20 md:px-10 md:pt-40">
        <p className="eyebrow text-brick">The catalog</p>
        <h1 className="display mt-3 text-6xl md:text-8xl">All <em className="text-brick">products.</em></h1>
        <p className="mt-5 max-w-xl text-lg text-muted">{products.length} products across {shown.length} ranges.</p>
        <div className="mt-12">
          <ProductGrid ranges={shown.map(({ slug, name }) => ({ slug, name }))} products={products} />
        </div>
      </section>
    </main>
  );
}
