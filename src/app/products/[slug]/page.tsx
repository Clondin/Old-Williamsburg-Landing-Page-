import { notFound } from "next/navigation";
import { getProductBySlug, getAllProductSlugs, getRangeBySlug } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";
import Link from "next/link";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const range = getRangeBySlug(product.rangeSlug);

  return (
    <main className="min-h-screen bg-blueprint-bg">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-8 pt-28 pb-4">
        <nav className="font-mono text-[10px] uppercase tracking-widest text-industrial-gray flex items-center gap-2">
          <Link
            href="/"
            className="hover:text-steel-blue transition-colors"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/#catalog"
            className="hover:text-steel-blue transition-colors"
          >
            Catalog
          </Link>
          <span>/</span>
          {range && (
            <>
              <Link
                href={`/products/range/${range.slug}`}
                className="hover:text-steel-blue transition-colors"
              >
                {range.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-steel-blue font-bold">{product.shortName}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="border-2 border-steel-blue/20 bg-white relative">
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-brick-red" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-brick-red" />

          <ProductDetail product={product} />
        </div>
      </section>
    </main>
  );
}
