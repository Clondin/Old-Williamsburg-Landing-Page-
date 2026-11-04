"use client";
import { useMemo, useState } from "react";
import type { Product, ProductRange } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ ranges, products, initial = "all" }: { ranges: Pick<ProductRange, "slug" | "name">[]; products: Product[]; initial?: string }) {
  const [active, setActive] = useState(initial);
  const shown = useMemo(() => (active === "all" ? products : products.filter((p) => p.rangeSlug === active)), [active, products]);
  const count = (slug: string) => products.filter((p) => p.rangeSlug === slug).length;
  return (
    <div>
      <div role="tablist" aria-label="Filter by range" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0">
        {[{ slug: "all", name: "Everything" }, ...ranges].map((r) => {
          const on = active === r.slug;
          return (
            <button
              key={r.slug}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(r.slug)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${on ? "bg-ink text-cream" : "bg-paper-2 text-ink hover:bg-paper-3"}`}
            >
              {r.name}
              <span className={`ml-2 text-xs ${on ? "text-cream/60" : "text-muted"}`}>{r.slug === "all" ? products.length : count(r.slug)}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
        {shown.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < 4} showRange={active === "all"} />
        ))}
      </div>
    </div>
  );
}
