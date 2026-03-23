"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#story", label: "Our Story" },
    { href: "#catalog", label: "Products" },
    { href: "#quote", label: "The Standard" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b-2 border-steel-blue transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-lg" : "bg-white/90"
      }`}
    >
      <a
        href="#catalog"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-steel-blue focus:border-2 focus:border-steel-blue font-mono text-sm"
      >
        Skip to content
      </a>
      <div className="flex justify-between items-center w-full px-6 py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center space-x-3"
        >
          <Link href="/">
            <Image src="/logo.svg" alt="Old Williamsburg" width={160} height={40} className="h-10 w-auto" />
          </Link>
          <span className="hidden md:block text-[10px] font-mono text-brick-red tracking-widest uppercase border border-brick-red px-2 py-0.5">
            Est. 1892
          </span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <Link
                className="uppercase tracking-widest text-[11px] font-mono text-industrial-gray hover:text-steel-blue transition-colors font-semibold relative group"
                href={link.href}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brick-red group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center md:hidden">
          <button
            className="group bg-steel-blue text-white p-3 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-steel-blue/90 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-white rounded-sm transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white rounded-sm transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white rounded-sm transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden border-t border-steel-blue/20 bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                >
                  <Link
                    className="py-3 uppercase tracking-widest text-[11px] font-mono text-industrial-gray hover:text-steel-blue transition-colors font-semibold block"
                    href={link.href}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
