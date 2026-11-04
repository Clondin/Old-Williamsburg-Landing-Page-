"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ranges, listed } from "@/data/products";
import { Menu, Close, ArrowRight } from "./icons";
import { CONTACT_EMAIL } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const darkTop = pathname === "/" || pathname.startsWith("/products/range/");
  const overDark = darkTop && !scrolled && !mega;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setOpen(false); setMega(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const shown = ranges.filter((r) => listed(r.products).length);
  const tone = overDark ? "text-cream" : "text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        overDark ? "bg-transparent" : "bg-paper/85 backdrop-blur-md shadow-[0_1px_0_rgba(16,34,63,.08)]"
      }`}
      onMouseLeave={() => setMega(false)}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <Link href="/" aria-label="Old Williamsburg home" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={overDark ? "/logo-cream.svg" : "/logo.svg"} alt="Old Williamsburg" width={256} height={100} className="h-10 md:h-12 w-auto" />
        </Link>

        <nav aria-label="Main" className={`hidden md:flex items-center gap-9 text-[0.95rem] font-medium ${tone}`}>
          <button
            type="button"
            className="ulink py-2"
            aria-expanded={mega}
            onClick={() => setMega((v) => !v)}
            onMouseEnter={() => setMega(true)}
          >
            Products
          </button>
          <Link href="/products" className="ulink py-2">Shop all</Link>
          <Link href="/#story" className="ulink py-2">Our story</Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="ulink py-2">Contact</a>
        </nav>

        <Link
          href="/products"
          className={`hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
            overDark ? "bg-cream text-ink hover:bg-white" : "bg-ink text-cream hover:bg-navy"
          }`}
        >
          Explore the range <ArrowRight />
        </Link>

        <button type="button" className={`md:hidden -mr-2 p-2 ${tone}`} aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* desktop mega menu */}
      <div
        className={`absolute inset-x-0 top-full hidden md:block transition-all duration-300 ${mega ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <div className="mx-auto max-w-[1400px] px-10 pb-8">
          <div className="rounded-3xl bg-paper shadow-[0_30px_60px_-20px_rgba(16,34,63,.35)] ring-1 ring-ink/5 p-6 grid grid-cols-4 gap-3">
            {shown.map((r) => {
              const hero = listed(r.products).find((p) => p.image && !p.comingSoon);
              return (
                <Link key={r.slug} href={`/products/range/${r.slug}`} className="group flex items-center gap-4 rounded-2xl p-3 hover:bg-paper-2 transition-colors">
                  <span className="stage grid h-16 w-16 shrink-0 place-items-center rounded-xl overflow-hidden">
                    {hero && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={hero.image.replace(/\.webp$/, "-s.webp")} alt="" className="packshot h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    )}
                  </span>
                  <span>
                    <span className="block font-headline text-lg leading-tight text-ink">{r.name}</span>
                    <span className="eyebrow text-brass !text-[0.62rem]">{listed(r.products).length} products</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* mobile sheet */}
      <div className={`md:hidden fixed inset-0 z-[60] bg-ink text-cream transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="flex h-16 items-center justify-between px-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-cream.svg" alt="Old Williamsburg" width={256} height={100} className="h-10 w-auto" />
          <button type="button" className="-mr-2 p-2" aria-label="Close menu" onClick={() => setOpen(false)}><Close /></button>
        </div>
        <nav aria-label="Mobile" className="px-6 pt-6 pb-10 overflow-y-auto h-[calc(100dvh-4rem)]">
          <p className="eyebrow text-brass-light mb-4">Ranges</p>
          <ul className="space-y-1">
            {shown.map((r) => (
              <li key={r.slug}>
                <Link href={`/products/range/${r.slug}`} className="flex items-baseline justify-between border-b border-cream/10 py-3.5">
                  <span className="font-headline text-[1.7rem] leading-none">{r.name}</span>
                  <span className="eyebrow text-cream/50">{listed(r.products).length}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3 text-lg">
            <Link href="/products">Shop all products</Link>
            <Link href="/#story">Our story</Link>
            <a href={`mailto:${CONTACT_EMAIL}`}>Contact us</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
