import Link from "next/link";
import type { ProductRange } from "@/data/products";
import { listed } from "@/data/products";
import { ArrowRight } from "../icons";
import { small } from "@/lib/img";

const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-4", "md:col-span-4", "md:col-span-4", "md:col-span-4", "md:col-span-4", "md:col-span-4"];
const FIELDS: Record<string, string> = {
  sauces: "bg-brick text-cream",
  "kugels-knishes": "bg-paper-3 text-ink",
  "cold-brew": "bg-steel text-cream",
};

function RangeCard({ range, i }: { range: ProductRange; i: number }) {
  const items = listed(range.products);
  const shots = items.filter((p) => p.image && !p.comingSoon).slice(0, 3);
  const photo = range.image;
  const field = FIELDS[range.slug] ?? "bg-navy text-cream";
  const big = i < 2;
  return (
    <Link
      href={`/products/range/${range.slug}`}
      className={`reveal group relative isolate flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[2rem] p-7 md:p-9 ${big ? "md:min-h-[520px]" : photo ? "md:min-h-[420px]" : "min-h-[440px] md:min-h-[480px]"} ${SPANS[i] ?? "md:col-span-4"} ${photo ? "text-cream" : field}`}
      style={{ transitionDelay: `${(i % 3) * 80}ms` }}
    >
      {photo ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/0" />
        </>
      ) : shots.length ? (
        <div className="absolute inset-x-0 top-0 -z-10 flex h-[50%] md:h-[54%] items-end justify-center gap-2 px-8 pt-8">
          {shots.map((p, k) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={p.slug} src={small(p.image)} alt="" aria-hidden="true" loading="lazy"
              className={`packshot h-[88%] w-auto max-w-[32%] object-contain transition-transform duration-700 ease-out group-hover:-translate-y-2 ${k === 1 ? "h-full z-10" : ""}`} />
          ))}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/logo.svg" alt="" aria-hidden="true" className="absolute right-[-8%] top-[8%] -z-10 w-[85%] opacity-[0.12] rotate-[-8deg]" />
      )}
      <p className={`eyebrow ${photo || field.includes("text-cream") ? "text-brass-light" : "text-brick"}`}>{items.length} products</p>
      <h3 className={`display mt-2 ${big ? "text-5xl md:text-6xl" : "text-4xl md:text-[2.7rem]"}`}>{range.name}</h3>
      <p className="mt-3 max-w-sm text-[0.98rem] leading-relaxed opacity-80">{range.tagline}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
        <span className="ulink">Shop {range.name.toLowerCase()}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export default function RangeShowcase({ ranges }: { ranges: ProductRange[] }) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28" aria-labelledby="ranges-h">
      <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow text-brick">The range</p>
          <h2 id="ranges-h" className="display mt-3 text-5xl md:text-7xl">From the smokehouse<br className="hidden md:block" /> to the <em className="text-brick">grill.</em></h2>
        </div>
        <Link href="/products" className="inline-flex items-center gap-2 font-semibold text-ink"><span className="ulink">See every product</span> <ArrowRight /></Link>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-12 md:gap-5">
        {ranges.map((r, i) => <RangeCard key={r.slug} range={r} i={i} />)}
      </div>
    </section>
  );
}
