import { notFound } from "next/navigation";
import { getRangeBySlug, getAllRangeSlugs } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return getAllRangeSlugs().map((slug) => ({ slug }));
}

export default async function RangePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const range = getRangeBySlug(slug);

  if (!range) notFound();

  return (
    <main className="min-h-screen bg-blueprint-bg">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-8 pt-28 pb-4">
        <nav className="font-mono text-[10px] uppercase tracking-widest text-industrial-gray flex items-center gap-2">
          <Link href="/" className="hover:text-steel-blue transition-colors">
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
          <span className="text-steel-blue font-bold">{range.name}</span>
        </nav>
      </div>

      {/* Range Header */}
      <section className="max-w-7xl mx-auto px-8 pb-8">
        <div className="border-b-2 border-steel-blue pb-8 mb-12 flex flex-col md:flex-row justify-between items-baseline">
          <div className="flex items-center gap-6">
            <h1 className="font-headline text-5xl text-steel-blue italic font-bold">
              {range.name}
            </h1>
            <span className="bg-brick-red text-white font-mono text-[10px] px-3 py-1 uppercase tracking-tighter">
              {range.code}
            </span>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-industrial-gray mt-4 md:mt-0">
            {range.products.length} Products
          </p>
        </div>
        <p className="text-industrial-gray leading-relaxed font-light text-lg max-w-2xl mb-16">
          {range.tagline}
        </p>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {range.products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group border-2 border-steel-blue/10 bg-white overflow-hidden flex flex-col justify-end h-[320px] hover:border-steel-blue transition-all duration-300 relative"
            >
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-brick-red opacity-0 group-hover:opacity-100 transition-opacity z-20" />

              {/* Product Image Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Product Info */}
              <div className="relative z-10 p-5 flex flex-col justify-end text-white">
                <span className="font-mono text-[9px] text-brick-red mb-1 block font-bold">
                  {product.code}
                </span>
                <h2 className="font-headline text-xl font-bold text-white mb-1">
                  {product.shortName}
                </h2>
                <span className="font-mono text-[10px] text-white/60 uppercase mb-2">
                  {product.weight}
                </span>
                <div className="mt-2 pt-2 border-t border-white/20">
                  <span className="font-mono text-xs uppercase tracking-widest font-bold flex items-center group-hover:text-brick-red transition-colors text-white">
                    View
                    <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
