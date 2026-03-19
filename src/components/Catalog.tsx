"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ranges } from "@/data/products";

export default function Catalog() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 260 + 24; // card width + gap (gap-6 = 24px)
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="catalog"
      className="py-32 px-8 bg-blueprint-bg border-y-2 border-steel-blue/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b-2 border-steel-blue pb-8">
          <div className="flex items-center gap-6">
            <h2 className="font-headline text-5xl text-steel-blue italic font-bold">
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

        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 bg-white border-2 border-steel-blue/20 flex items-center justify-center hover:border-steel-blue hover:bg-steel-blue hover:text-white text-steel-blue transition-all duration-300 shadow-lg cursor-pointer"
              aria-label="Scroll left"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 bg-white border-2 border-steel-blue/20 flex items-center justify-center hover:border-steel-blue hover:bg-steel-blue hover:text-white text-steel-blue transition-all duration-300 shadow-lg cursor-pointer"
              aria-label="Scroll right"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          )}

          {/* Mobile scroll fade hint */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-blueprint-bg to-transparent z-[5] pointer-events-none md:hidden" />

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pr-8"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {ranges.map((range) => {
              const hasProducts = range.products.length > 0;
              const href = hasProducts
                ? `/products/range/${range.slug}`
                : "#";

              return (
                <Link
                  key={range.slug}
                  href={href}
                  className={`group border-2 border-steel-blue/10 bg-white overflow-hidden flex flex-col justify-end h-[320px] min-w-[260px] w-[260px] shrink-0 hover:border-steel-blue transition-all duration-300 relative ${
                    !hasProducts ? "pointer-events-none opacity-60" : ""
                  }`}
                >
                  <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-brick-red opacity-0 group-hover:opacity-100 transition-opacity z-20" />

                  {/* Range Image Background */}
                  <div className="absolute inset-0 z-0">
                    {range.image ? (
                      <Image
                        src={range.image}
                        alt={range.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="260px"
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
                      <span className="font-mono text-[9px] text-brick-red mb-1 block font-bold">
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
      </div>
    </section>
  );
}
