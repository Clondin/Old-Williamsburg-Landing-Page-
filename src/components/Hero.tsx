"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import BridgeSvg from "./BridgeSvg";

export default function Hero() {
  const bridgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bridgeRef.current) return;
      const scrollY = window.scrollY;
      const translateX = scrollY * 0.15;
      const translateY = scrollY * 0.05;
      bridgeRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[921px] flex items-center pt-24 overflow-hidden bg-concrete">
      <div className="absolute right-0 top-0 w-3/4 h-full z-0 opacity-40 mix-blend-multiply">
        <Image
          className="w-full h-full object-cover brightness-125 contrast-75 hero-mask"
          alt="Williamsburg Bridge illustration"
          src="/bridge.png"
          fill
          priority
        />
      </div>
      <div className="absolute inset-0 z-0 bg-blue-100/20" />

      <div ref={bridgeRef} className="bridge-container bridge-parallax">
        <BridgeSvg />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white/20 backdrop-blur-[2px] p-12 border-l-[12px] border-steel-blue shadow-2xl">
          <div className="mb-8 flex items-center space-x-4">
            <Image
              className="w-24 opacity-80"
              alt="Old Williamsburg logo"
              src="/logo.svg"
              width={96}
              height={38}
            />
            <div className="h-px bg-steel-blue flex-grow opacity-30" />
          </div>
          <h1 className="font-headline text-5xl md:text-7xl text-steel-blue mb-8 leading-[1.1] font-black tracking-tight uppercase">
            Born in <span className="text-brick-red italic">Brooklyn</span>.{" "}
            <br />
            Engineered for{" "}
            <span className="text-brick-red italic">Generations</span>.
          </h1>
          <p className="font-body text-xl text-industrial-gray max-w-lg mb-12 leading-relaxed">
            Premium smoked fish, cured meats, and deli staples —
            precision-crafted using original 19th-century methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-steel-blue text-white px-12 py-5 font-mono uppercase tracking-widest font-bold text-sm flex items-center justify-center hover:bg-dark-steel transition-all">
              View Technical Specs
              <span className="material-symbols-outlined ml-3">settings</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
