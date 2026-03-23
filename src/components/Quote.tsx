"use client";

import { FadeIn, ScaleIn, LineDraw, TextReveal, motion, useInView, useScroll, useTransform } from "./motion";
import { useRef } from "react";

export default function Quote() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="quote"
      ref={sectionRef}
      className="relative py-24 bg-steel-blue text-white overflow-hidden"
    >
      <motion.div className="absolute inset-0 opacity-20" style={{ y: bgY }}>
        <div
          className="w-full h-[130%] bg-center bg-cover"
          style={{ backgroundImage: "url('/heritage_deli.png')" }}
        />
      </motion.div>

      <div className="relative z-10 text-center px-8 border-y-2 border-white/20 py-16">
        <ScaleIn>
          <h2 className="font-headline text-4xl md:text-7xl italic font-light tracking-tight mb-8">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              &ldquo;
            </motion.span>
            <TextReveal text="Every bite tells a" delay={0.2} />
            {" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-brick-red font-black"
            >
              New York
            </motion.span>
            {" "}
            <TextReveal text="story." delay={0.9} />
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              &rdquo;
            </motion.span>
          </h2>
        </ScaleIn>

        <FadeIn delay={1.0} y={0}>
          <div className="flex justify-center items-center space-x-3 sm:space-x-6">
            <LineDraw delay={1.2} direction="right" className="h-[2px] w-20 bg-white/40 hidden sm:block" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.5em] font-bold">
              Old Williamsburg, Est. 1892
            </span>
            <LineDraw delay={1.2} direction="left" className="h-[2px] w-20 bg-white/40 hidden sm:block" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
