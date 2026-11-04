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
      <section className="mx-auto max-w-[1400px] px-5 pt-24 pb-20 md:px-10 md:pt-36">
        <h1 className="display text-[3rem] md:text-8xl">All products</h1>
        <p className="lede mt-4 max-w-xl text-muted">{products.length} products in {shown.length} ranges. Search by name, item number or UPC.</p>
        <div className="mt-8 md:mt-10">
          <ProductGrid ranges={shown.map(({ slug, name }) => ({ slug, name }))} products={products} />
        </div>
      </section>
    </main>
  );
}
