"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import BridgeSvg from "./BridgeSvg";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Hero() {
  const bridgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!bridgeRef.current) return;
      const scrollY = window.scrollY;
      const translateX = Math.min(scrollY * 0.15, 100);
      const translateY = scrollY * 0.05;
      bridgeRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[921px] flex items-center pt-24 overflow-hidden bg-concrete">
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease }}
        className="absolute inset-0 z-0 mix-blend-multiply"
      >
        <Image
          className="w-full h-full object-cover brightness-125 contrast-75 hero-mask"
          alt="Williamsburg Bridge illustration"
          src="/bridge.png"
          fill
          priority
        />
      </motion.div>
      <div className="absolute inset-0 z-0 bg-blue-100/20" />

      <div ref={bridgeRef} className="bridge-container bridge-parallax">
        <BridgeSvg />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="bg-white/20 backdrop-blur-[2px] p-6 md:p-12 border-l-4 md:border-l-[12px] border-steel-blue shadow-2xl max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="mb-8 flex items-center space-x-4"
          >
            <Image
              className="w-24 opacity-80"
              alt="Old Williamsburg logo"
              src="/logo.svg"
              width={96}
              height={38}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              style={{ transformOrigin: "left" }}
              className="h-px bg-steel-blue flex-grow opacity-30"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="font-headline text-3xl sm:text-5xl md:text-7xl text-steel-blue mb-8 leading-[1.1] font-black tracking-tight uppercase"
          >
            Born in{" "}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease }}
              className="text-brick-red italic"
            >
              Brooklyn
            </motion.span>
            .{" "}
            <br />
            Engineered for{" "}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease }}
              className="text-brick-red italic"
            >
              Generations
            </motion.span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease }}
            className="font-body text-xl text-industrial-gray max-w-lg mb-6 md:mb-12 leading-relaxed"
          >
            Premium smoked fish, cured meats, and deli staples —
            precision-crafted using original 19th-century methods.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-steel-blue text-white px-6 sm:px-12 py-4 sm:py-5 font-mono uppercase tracking-widest font-bold text-sm flex items-center justify-center hover:bg-dark-steel transition-all cursor-pointer"
            >
              Shop Our Products
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
