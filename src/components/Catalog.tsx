import Image from "next/image";
import Link from "next/link";
import { ranges } from "@/data/products";

export default function Catalog() {
  return (
    <section
      id="catalog"
      className="py-16 md:py-32 px-4 md:px-8 bg-blueprint-bg border-y-2 border-steel-blue/20"
    >
      <div>
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-10 md:mb-20 border-b-2 border-steel-blue pb-8">
          <div className="flex items-center gap-6">
            <h2 className="font-headline text-3xl md:text-5xl text-steel-blue italic font-bold">
              Our Products
            </h2>
            <span className="bg-brick-red text-white font-mono text-[10px] px-3 py-1 uppercase tracking-tighter">
              Est. 1892
            </span>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-industrial-gray mt-4 md:mt-0">
            Premium Provisions // Since 1892
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {ranges.map((range) => {
              const hasProducts = range.products.length > 0;
              const href = hasProducts
                ? `/products/range/${range.slug}`
                : "#";

              return (
                <Link
                  key={range.slug}
                  href={href}
                  className={`group border-2 border-steel-blue/10 bg-white overflow-hidden flex flex-col justify-end h-[320px] md:h-[380px] xl:h-[420px] hover:border-steel-blue transition-all duration-300 relative ${
                    !hasProducts ? "pointer-events-none opacity-60" : ""
                  }`}
                >
                  <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-brick-red opacity-0 group-hover:opacity-100 transition-opacity z-20" />

                  {/* Range Image Background */}
                  <div className="absolute inset-0 z-0 skeleton">
                    {range.image ? (
                      <Image
                        src={range.image}
                        alt={range.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-[#f5f5f5]">
                        <span className="font-mono text-xs uppercase tracking-widest text-industrial-gray/30">
                          Coming Soon
                        </span>
                      </div>
                    )}
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  </div>

                  <div className="relative z-10 p-5 flex flex-col h-full justify-end text-white">
                    <div>
                      <span className="font-mono text-[10px] text-brick-red mb-1 block font-bold">
                        {range.code}
                      </span>
                      <h3 className="font-headline text-xl mb-1 font-bold text-white">
                        {range.name}
                      </h3>
                      <p className="text-white/80 leading-snug font-light text-xs">
                        {range.tagline}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/20">
                      {hasProducts ? (
                        <span className="font-mono text-xs uppercase tracking-widest font-bold flex items-center group-hover:text-brick-red transition-colors text-white">
                          Shop Range
                          <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </span>
                      ) : (
                        <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}
