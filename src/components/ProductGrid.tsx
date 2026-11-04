"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Product, ProductRange } from "@/data/products";
import ProductCard from "./ProductCard";
import { Search, Close } from "./icons";

const AISLES = ["Refrigerated", "Frozen", "Pantry"] as const;

function haystack(p: Product, rangeName: string) {
  const v = p.variants ?? [];
  return [p.name, rangeName, p.sku, p.upc, p.weight, p.description, ...v.flatMap((x) => [x.sku, x.upc, x.label])].join(" ").toLowerCase();
}

export default function ProductGrid({ ranges, products }: { ranges: Pick<ProductRange, "slug" | "name">[]; products: Product[] }) {
  const [q, setQ] = useState("");
  const [range, setRange] = useState("all");
  const [aisle, setAisle] = useState("all");
  const [onlyNew, setOnlyNew] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const ready = useRef(false);

  // read filters from the URL once (?q= ?range= ?aisle= ?new=1 ?focus=search)
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    /* eslint-disable react-hooks/set-state-in-effect */
    if (sp.get("q")) setQ(sp.get("q")!);
    if (sp.get("range") && ranges.some((r) => r.slug === sp.get("range"))) setRange(sp.get("range")!);
    if (sp.get("aisle") && (AISLES as readonly string[]).includes(sp.get("aisle")!)) setAisle(sp.get("aisle")!);
    if (sp.get("new") === "1") setOnlyNew(true);
    /* eslint-enable react-hooks/set-state-in-effect */
    if (sp.get("focus") === "search") setTimeout(() => input.current?.focus(), 50);
    ready.current = true;
  }, [ranges]);

  // keep the URL shareable
  useEffect(() => {
    if (!ready.current) return;
    const sp = new URLSearchParams();
    if (q.trim()) sp.set("q", q.trim());
    if (range !== "all") sp.set("range", range);
    if (aisle !== "all") sp.set("aisle", aisle);
    if (onlyNew) sp.set("new", "1");
    const s = sp.toString();
    window.history.replaceState(null, "", s ? `?${s}` : window.location.pathname);
  }, [q, range, aisle, onlyNew]);

  const names = useMemo(() => Object.fromEntries(ranges.map((r) => [r.slug, r.name])), [ranges]);
  const index = useMemo(() => products.map((p) => [p, haystack(p, names[p.rangeSlug] ?? "")] as const), [products, names]);
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  const base = index.filter(([p, h]) => (aisle === "all" || p.storage === aisle) && (!onlyNew || p.isNew) && terms.every((t) => h.includes(t)));
  const shown = base.filter(([p]) => range === "all" || p.rangeSlug === range).map(([p]) => p);
  const count = (slug: string) => base.filter(([p]) => p.rangeSlug === slug).length;
  const filtered = q || range !== "all" || aisle !== "all" || onlyNew;
  const reset = () => { setQ(""); setRange("all"); setAisle("all"); setOnlyNew(false); };

  const chip = (on: boolean) =>
    `shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${on ? "bg-ink text-cream" : "bg-paper-2 text-ink hover:bg-paper-3"}`;

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-5 border-b rule bg-paper/95 px-5 pb-3 pt-3 backdrop-blur md:top-20 md:mx-0 md:px-0">
        <label className="relative block">
          <span className="sr-only">Search products</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
          <input
            ref={input}
            id="product-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, item # or UPC"
            className="h-12 w-full rounded-full border border-ink/15 bg-white/70 pl-12 pr-11 text-base text-ink placeholder:text-muted/80 focus:border-ink/40 focus:outline-none"
          />
          {q && (
            <button type="button" onClick={() => setQ("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted hover:text-ink"><Close className="h-5 w-5" /></button>
          )}
        </label>
        <div role="group" aria-label="Filter by range" className="no-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
          {[{ slug: "all", name: "All ranges" }, ...ranges].map((r) => {
            const on = range === r.slug;
            const n = r.slug === "all" ? base.length : count(r.slug);
            return (
              <button key={r.slug} type="button" aria-pressed={on} onClick={() => setRange(r.slug)} className={`${chip(on)} ${n === 0 && !on ? "opacity-40" : ""}`}>
                {r.name}
                <span className={`ml-1.5 text-xs tabular-nums ${on ? "text-cream/60" : "text-muted"}`}>{n}</span>
              </button>
            );
          })}
        </div>
        <div role="group" aria-label="Filter by aisle" className="no-scrollbar -mx-5 mt-2 flex items-center gap-2 overflow-x-auto px-5 md:mx-0 md:px-0">
          {["all", ...AISLES].map((a) => (
            <button key={a} type="button" aria-pressed={aisle === a} onClick={() => setAisle(a)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[0.8rem] transition-colors ${aisle === a ? "border-ink bg-ink/5 font-semibold text-ink" : "border-ink/15 text-muted hover:border-ink/40"}`}>
              {a === "all" ? "Any aisle" : a}
            </button>
          ))}
          <span className="mx-1 h-4 w-px shrink-0 bg-ink/15" aria-hidden="true" />
          <button type="button" aria-pressed={onlyNew} onClick={() => setOnlyNew((v) => !v)}
            className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[0.8rem] transition-colors ${onlyNew ? "border-brick bg-brick/10 font-semibold text-brick" : "border-ink/15 text-muted hover:border-ink/40"}`}>
            New only
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-muted" aria-live="polite">
        <p>{shown.length} {shown.length === 1 ? "product" : "products"}</p>
        {filtered && <button type="button" onClick={reset} className="ulink font-medium text-ink">Clear filters</button>}
      </div>

      {shown.length ? (
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
          {shown.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 4} showRange={range === "all"} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="font-headline text-3xl">Nothing matches that.</p>
          <p className="mt-2 text-muted">Try a shorter search, or <button type="button" onClick={reset} className="ulink font-medium text-ink">clear the filters</button>.</p>
        </div>
      )}
    </div>
  );
}

