import Link from "next/link";
import { ArrowRight, Search } from "../icons";
import { dims } from "@/lib/img";

/* Real packshots, standing on one shelf line. Heights are relative to the shelf box. */
const SHELF = [
  { src: "/p/180771/01.webp", alt: "Old Williamsburg smoky barbeque beef jerky", h: "h-[62%]", hide: "hidden sm:block" },
  { src: "/p/180714/01.webp", alt: "Old Williamsburg smoked Nova salmon, 4 oz", h: "h-[52%]", hide: "" },
  { src: "/p/180750/01.webp", alt: "Old Williamsburg classic pizza, 8 slices", h: "h-[78%]", hide: "" },
  { src: "/p/180840/01.webp", alt: "Old Williamsburg dill gherkins", h: "h-[70%]", hide: "" },
  { src: "/p/180855/01.webp", alt: "Old Williamsburg original BBQ sauce", h: "h-[74%]", hide: "hidden sm:block" },
];

export default function Hero({ productCount }: { productCount: number }) {
  return (
    <section className="stage-dark relative isolate overflow-hidden text-cream">
      {/* engraving of the Williamsburg Bridge, tinted into the navy */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/bridge.webp" alt="" aria-hidden="true" width={1536} height={1024} className="absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-[0.10] mix-blend-luminosity [mask-image:linear-gradient(to_bottom,black_40%,transparent_85%)]" />
      <div className="mx-auto max-w-[1400px] px-5 pt-24 md:px-10 md:pt-36">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow text-brass-light">Old Williamsburg &middot; Brooklyn, New York</p>
            <h1 className="display mt-5 text-[2.9rem] sm:text-6xl lg:text-[5.4rem]">
              Smoked salmon, beef jerky and <em className="text-brass-light">New&nbsp;York pizza.</em>
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pb-3">
            <p className="lede max-w-md text-cream/75">
              Also pickles, salsa, sauces, kugels, knishes and cold brew. Every product with its sizes, item number and kosher certification.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-white">
                See all {productCount} products <ArrowRight />
              </Link>
              <Link href="/products?focus=search" className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-3.5 font-semibold text-cream transition-colors hover:bg-cream/10">
                <Search className="w-4 h-4" /> Find a product
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mt-10 md:mt-16">
          <div className="flex h-[210px] items-end justify-center gap-3 sm:h-[300px] sm:gap-6 lg:h-[380px] lg:gap-10">
            {SHELF.map((s, i) => {
              const [w, h] = dims(s.src);
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={s.src} src={s.src.replace(".webp", "-s.webp")} alt={s.alt} width={w} height={h} loading={i < 4 ? "eager" : "lazy"} fetchPriority={i === 2 ? "high" : "auto"} decoding="async"
                  className={`packshot ${s.h} ${s.hide} w-auto max-w-[34%] object-contain object-bottom`} />
              );
            })}
          </div>
          <div className="h-px bg-brass-light/40" aria-hidden="true" />
          <div className="h-8 bg-gradient-to-b from-black/25 to-transparent md:h-12" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
