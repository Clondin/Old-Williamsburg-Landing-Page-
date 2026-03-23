"use client";

import Image from "next/image";
import { FadeIn, SlideIn, LineDraw, Parallax, motion, useInView } from "./motion";
import { useRef } from "react";

export default function Story() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="story" ref={sectionRef} className="py-16 md:py-32 px-8 bg-white relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center max-w-7xl mx-auto">
        <SlideIn direction="left" delay={0.1}>
          <div className="red-accent-rule pl-6 md:pl-12">
            <FadeIn delay={0.2}>
              <span className="uppercase font-mono text-brick-red tracking-[0.4em] text-xs block mb-6 font-bold">
                Our Heritage // Brooklyn, NY
              </span>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl text-steel-blue mb-10 italic font-bold">
                The New York Way
              </h2>
            </FadeIn>
            <LineDraw
              delay={0.5}
              className="h-[2px] bg-steel-blue/20 mb-8"
            />
            <div className="font-body text-base md:text-xl text-industrial-gray leading-relaxed space-y-6">
              <FadeIn delay={0.5}>
                <p>
                  Since the first pushcarts rolled through the cobblestone streets
                  of old Williamsburg, we&apos;ve upheld the rigorous standards of New
                  York&apos;s culinary pioneers.
                </p>
              </FadeIn>
              <FadeIn delay={0.7}>
                <p>
                  Our tradition isn&apos;t just about recipes; it&apos;s an obsession with the
                  slow-cured, the hand-sliced, and the barrel-aged. We believe that
                  history is something you can taste — a legacy of craft that lives
                  in every deli counter and family table.
                </p>
              </FadeIn>
            </div>
          </div>
        </SlideIn>

        <SlideIn direction="right" delay={0.3}>
          <div className="relative">
            <Parallax speed={0.15}>
              <motion.div
                className="blueprint-border p-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  alt="Rustic New York Market Sketch"
                  className="w-full grayscale contrast-125"
                  src="/ny_market_sketch.png"
                  width={600}
                  height={400}
                />
              </motion.div>
            </Parallax>
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 30, y: 30 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute -bottom-6 -right-6 bg-steel-blue text-white p-6 font-mono text-xs hidden lg:block shadow-xl"
            >
              COORDINATES: 40.7081&deg; N, 73.9571&deg; W
            </motion.div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
