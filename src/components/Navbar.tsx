"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-steel-blue">
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
            href="#"
          >
            Spec. Story
          </Link>
          <Link
            className="uppercase tracking-widest text-[11px] font-mono text-industrial-gray hover:text-steel-blue transition-colors font-semibold"
            href="#"
          >
            Component Catalog
          </Link>
          <Link
            className="uppercase tracking-widest text-[11px] font-mono text-steel-blue border-b-2 border-brick-red pb-1"
            href="#"
          >
            The NY Standard
          </Link>
          <Link
            className="uppercase tracking-widest text-[11px] font-mono text-industrial-gray hover:text-steel-blue transition-colors font-semibold"
            href="#"
          >
            Distribution
          </Link>
        </div>
        <div className="flex items-center">
          <button className="bg-steel-blue text-white p-2 flex items-center justify-center">
            <span className="material-symbols-outlined text-sm">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
