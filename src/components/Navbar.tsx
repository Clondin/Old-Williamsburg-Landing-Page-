"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-steel-blue">
      <a
        href="#catalog"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-steel-blue focus:border-2 focus:border-steel-blue font-mono text-sm"
      >
        Skip to content
      </a>
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="Old Williamsburg" width={160} height={40} className="h-10 w-auto" />
          <span className="hidden md:block text-[10px] font-mono text-brick-red tracking-widest uppercase border border-brick-red px-2 py-0.5">
            Est. 1892
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <Link
            className="uppercase tracking-widest text-[11px] font-mono text-industrial-gray hover:text-steel-blue transition-colors font-semibold"
            href="#story"
          >
            Our Story
          </Link>
          <Link
            className="uppercase tracking-widest text-[11px] font-mono text-industrial-gray hover:text-steel-blue transition-colors font-semibold"
            href="#catalog"
          >
            Products
          </Link>
          <Link
            className="uppercase tracking-widest text-[11px] font-mono text-industrial-gray hover:text-steel-blue transition-colors font-semibold"
            href="#quote"
          >
            The Standard
          </Link>
          <Link
            className="uppercase tracking-widest text-[11px] font-mono text-industrial-gray hover:text-steel-blue transition-colors font-semibold"
            href="#distributor"
          >
            Find Us
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <button
            className="bg-steel-blue text-white p-2 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-sm">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-steel-blue/20 bg-white/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link
              className="uppercase tracking-widest text-[11px] font-mono text-industrial-gray hover:text-steel-blue transition-colors font-semibold"
              href="#story"
              onClick={handleLinkClick}
            >
              Our Story
            </Link>
            <Link
              className="uppercase tracking-widest text-[11px] font-mono text-industrial-gray hover:text-steel-blue transition-colors font-semibold"
              href="#catalog"
              onClick={handleLinkClick}
            >
              Products
            </Link>
            <Link
              className="uppercase tracking-widest text-[11px] font-mono text-industrial-gray hover:text-steel-blue transition-colors font-semibold"
              href="#quote"
              onClick={handleLinkClick}
            >
              The Standard
            </Link>
            <Link
              className="uppercase tracking-widest text-[11px] font-mono text-industrial-gray hover:text-steel-blue transition-colors font-semibold"
              href="#distributor"
              onClick={handleLinkClick}
            >
              Find Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
