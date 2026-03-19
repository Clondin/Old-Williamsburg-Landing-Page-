import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, getAllProductSlugs, getRangeBySlug } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — Old Williamsburg`,
    description: product.description,
  };
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
        <nav className="font-mono text-[10px] uppercase tracking-widest text-industrial-gray flex flex-wrap items-center gap-2">
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
            Products
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
      <section className="max-w-7xl mx-auto px-8 pb-16 lg:pb-32">
        <div className="border-2 border-steel-blue/20 bg-white relative">
          <div className="absolute top-0 right-0 w-12 h-12 sm:w-24 sm:h-24 border-t-2 border-r-2 border-brick-red" />
          <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 border-b-2 border-l-2 border-brick-red" />

          <ProductDetail product={product} />
        </div>
      </section>

      {/* Related Products */}
      {range && range.products.filter(p => p.slug !== product.slug).length > 0 && (
        <section className="max-w-7xl mx-auto px-8 pb-16 lg:pb-32">
          <h2 className="font-headline text-3xl text-steel-blue italic font-bold mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {range.products
              .filter(p => p.slug !== product.slug)
              .slice(0, 4)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/products/${related.slug}`}
                  className="group border-2 border-steel-blue/10 bg-white overflow-hidden flex flex-col justify-end min-h-[240px] sm:min-h-[280px] hover:border-steel-blue transition-all duration-300 relative"
                >
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brick-red opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  <div className="relative z-10 p-4 text-white">
                    <span className="font-mono text-[9px] text-brick-red mb-1 block font-bold">
                      {related.code}
                    </span>
                    <h3 className="font-headline text-lg font-bold text-white mb-1">
                      {related.shortName}
                    </h3>
                    <span className="font-mono text-[10px] text-white/60 uppercase">
                      {related.weight}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      )}
    </main>
  );
}
