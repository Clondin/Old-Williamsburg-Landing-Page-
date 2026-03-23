"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ranges } from "@/data/products";
import { FadeIn, StaggerContainer, motion, staggerItem } from "./motion";

export default function Catalog() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > div > div")?.offsetWidth ?? 300;
    el.scrollBy({ left: direction === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  };

  return (
    <section
      id="catalog"
      className="py-16 md:py-32 bg-blueprint-bg border-y-2 border-steel-blue/20"
    >
      <div className="px-4 md:px-8">
        <FadeIn>
          <div className="flex flex-col lg:flex-row justify-between items-baseline mb-10 md:mb-20 border-b-2 border-steel-blue pb-8">
            <div className="flex items-center gap-6">
              <h2 className="font-headline text-3xl md:text-5xl text-steel-blue italic font-bold">
                Our Products
              </h2>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-brick-red text-white font-mono text-[10px] px-3 py-1 uppercase tracking-tighter"
              >
                Est. 1892
              </motion.span>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-industrial-gray mt-4 md:mt-0">
              Premium Provisions // Since 1892
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Carousel wrapper */}
      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className={`hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-white/90 border-2 border-steel-blue text-steel-blue backdrop-blur-sm hover:bg-steel-blue hover:text-white transition-all duration-200 ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <span className="material-symbols-outlined text-lg">chevron_left</span>
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className={`hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-white/90 border-2 border-steel-blue text-steel-blue backdrop-blur-sm hover:bg-steel-blue hover:text-white transition-all duration-200 ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>

        {/* Fade edges */}
        <div className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-blueprint-bg to-transparent z-10 pointer-events-none transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-0"}`} />
        <div className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-blueprint-bg to-transparent z-10 pointer-events-none transition-opacity ${canScrollRight ? "opacity-100" : "opacity-0"}`} />

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
        >
          <StaggerContainer
            staggerDelay={0.08}
            className="flex gap-6 px-4 md:px-8 w-max"
          >
            {ranges.map((range) => {
              const hasProducts = range.products.length > 0;
              const href = hasProducts
                ? `/products/range/${range.slug}`
                : "#";

              return (
                <motion.div
                  key={range.slug}
                  variants={staggerItem}
                  className="w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] flex-shrink-0"
                >
                  <Link
                    href={href}
                    className={`group border-2 border-steel-blue/10 bg-white overflow-hidden flex flex-col justify-end h-[320px] md:h-[380px] lg:h-[420px] hover:border-steel-blue transition-all duration-300 relative ${
                      !hasProducts ? "pointer-events-none opacity-60" : ""
                    }`}
                  >
                    <motion.div
                      className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-brick-red opacity-0 group-hover:opacity-100 transition-opacity z-20"
                      whileHover={{ scale: 1.2 }}
                    />

                    <div className="absolute inset-0 z-0 skeleton">
                      {range.image ? (
                        <Image
                          src={range.image}
                          alt={range.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="320px"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full bg-[#f5f5f5]">
                          <span className="font-mono text-xs uppercase tracking-widest text-industrial-gray/30">
                            Coming Soon
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
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
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
