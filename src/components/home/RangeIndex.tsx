import Link from "next/link";
import type { ProductRange } from "@/data/products";
import { listed } from "@/data/products";
import { ArrowRight } from "../icons";
import { small } from "@/lib/img";

export default function RangeIndex({ ranges }: { ranges: ProductRange[] }) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-28" aria-labelledby="ranges-h">
      <div className="flex items-end justify-between gap-6">
        <h2 id="ranges-h" className="display text-[2.6rem] md:text-7xl">Shop by <em className="text-brick">range</em></h2>
        <Link href="/products" className="hidden shrink-0 items-center gap-2 font-semibold sm:inline-flex"><span className="ulink">All products</span> <ArrowRight /></Link>
      </div>
      <ol className="mt-8 border-t rule md:mt-12">
        {ranges.map((r, i) => {
          const items = listed(r.products);
          const shots = items.filter((p) => p.image && !p.comingSoon).slice(0, 3);
          return (
            <li key={r.slug} className="border-b rule">
              <Link href={`/products/range/${r.slug}`} className="group grid grid-cols-[1fr_auto] items-center gap-x-4 py-5 md:grid-cols-[3.5rem_minmax(0,1.1fr)_minmax(0,1fr)_15rem_2rem] md:gap-x-8 md:py-7">
                <span className="hidden font-mono text-sm text-muted md:block">{String(i + 1).padStart(2, "0")}</span>
                <span className="min-w-0">
                  <span className="flex items-baseline gap-3">
                    <span className="font-headline text-[1.9rem] leading-none tracking-tight text-ink transition-colors group-hover:text-brick md:text-5xl">{r.name}</span>
                    <span className="text-sm text-muted md:hidden">{items.length}</span>
                  </span>
                  <span className="mt-2 block text-[0.95rem] leading-snug text-muted md:hidden">{r.tagline}</span>
                </span>
                <span className="hidden text-[0.98rem] leading-relaxed text-muted md:block">{r.tagline} <span className="whitespace-nowrap text-ink/60">{items.length} products</span></span>
                <span className="flex h-16 items-end justify-end gap-1.5 md:h-24 md:gap-3">
                  {shots.length ? (
                    shots.map((p, k) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={p.slug} src={small(p.image)} alt="" aria-hidden="true" loading="lazy" decoding="async"
                        className={`packshot h-full w-auto max-w-[4.5rem] object-contain object-bottom transition-transform duration-500 group-hover:-translate-y-1 md:max-w-[5rem] ${k > 0 ? "hidden md:block" : ""}`} />
                    ))
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src="/logo.svg" alt="" aria-hidden="true" className="h-10 w-auto opacity-20 md:h-12" />
                  )}
                </span>
                <ArrowRight className="hidden h-5 w-5 text-ink/40 transition-all group-hover:translate-x-1 group-hover:text-brick md:block" />
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
