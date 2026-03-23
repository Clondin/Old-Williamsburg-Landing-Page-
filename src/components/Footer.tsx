"use client";

import Image from "next/image";
import Link from "next/link";
import FooterSeal from "./FooterSeal";
import { FadeIn, StaggerContainer, motion, staggerItem, LineDraw } from "./motion";

export default function Footer() {
  return (
    <footer className="w-full bg-steel-blue text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Brand SVG Seal */}
      <motion.div
        initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
        whileInView={{ opacity: 0.2, rotate: -15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-12 right-12 w-48 h-48 pointer-events-none origin-center hidden lg:block text-white"
      >
        <FooterSeal />
      </motion.div>

      <div className="px-8 relative z-10">
        <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-4 gap-8 md:gap-12 border-b border-white/10 pb-16">
          <motion.div variants={staggerItem} className="md:col-span-2">
            <div className="mb-6">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Old Williamsburg"
                  width={192}
                  height={48}
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-white/60 max-w-sm font-light text-sm leading-relaxed">
              Maintaining the structural integrity of New York culinary
              traditions since 1892. Original recipes, architectural precision.
            </p>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-mono text-[10px] uppercase tracking-widest mb-6 text-brick-red font-bold">
              Explore
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link className="hover:text-brick-red transition-colors py-2 inline-block" href="#story">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="hover:text-brick-red transition-colors py-2 inline-block" href="#catalog">
                  Products
                </Link>
              </li>
              <li>
                <Link className="hover:text-brick-red transition-colors py-2 inline-block" href="#quote">
                  Quality Assurance
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-mono text-[10px] uppercase tracking-widest mb-6 text-brick-red font-bold">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs tracking-wider font-semibold">
              <li>
                <a className="hover:text-brick-red transition-colors py-2 inline-block uppercase" href="mailto:customercare@kayco.com">
                  Customer Support
                </a>
              </li>
              <li>
                <span className="py-2 inline-block text-white/60 normal-case">
                  customercare@kayco.com
                </span>
              </li>
            </ul>
          </motion.div>
        </StaggerContainer>

        <FadeIn delay={0.5} y={10}>
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">
            <p>&copy; 2026 OLD WILLIAMSBURG PROVISIONS. ALL RIGHTS RESERVED.</p>
            <p>BK-USA-718</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
