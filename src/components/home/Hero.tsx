import Link from "next/link";
import { ArrowRight } from "../icons";
import { dims } from "@/lib/img";

const SHELF = [
  { src: "/p/180750/01.webp", alt: "Old Williamsburg 8-slice pizza", cls: "left-[2%] bottom-[8%] w-[38%] [--r:-6deg]", delay: "0s" },
  { src: "/p/180840/01.webp", alt: "Old Williamsburg dill gherkins", cls: "left-[33%] bottom-[16%] w-[20%] z-10 [--r:2deg]", delay: "-2s" },
  { src: "/p/180714/01.webp", alt: "Old Williamsburg smoked Nova salmon", cls: "left-[50%] bottom-[4%] w-[30%] z-20 [--r:-3deg]", delay: "-4s" },
  { src: "/p/180855/01.webp", alt: "Old Williamsburg original BBQ sauce", cls: "right-[1%] bottom-[14%] w-[13%] z-10 [--r:5deg]", delay: "-1s" },
  { src: "/p/180771/01.webp", alt: "Old Williamsburg smoky barbeque beef jerky", cls: "left-[20%] top-[6%] w-[24%] [--r:-9deg]", delay: "-3s" },
  { src: "/p/180838/01.webp", alt: "Old Williamsburg hot salsa", cls: "right-[12%] top-[2%] w-[14%] [--r:8deg]", delay: "-5s" },
];

export default function Hero({ productCount, rangeCount, kosherCount }: { productCount: number; rangeCount: number; kosherCount: number }) {
  return (
    <section className="stage-dark relative isolate overflow-hidden text-cream">
      {/* engraving of the Williamsburg Bridge, tinted into the navy */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/bridge.webp" alt="" aria-hidden="true" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.13] mix-blend-luminosity [mask-image:linear-gradient(to_bottom,black_55%,transparent)]" />
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 pt-28 pb-14 md:grid-cols-12 md:px-10 md:pt-36 md:pb-24 lg:min-h-[92vh]">
        <div className="md:col-span-6 lg:col-span-5">
          <p className="eyebrow text-brass-light">Old Williamsburg &middot; Brooklyn, NY</p>
          <h1 className="display mt-5 text-[3.1rem] sm:text-6xl lg:text-[5.6rem]">
            Born in <em className="text-brass-light">Brooklyn.</em>
            <br />
            Made for <em className="text-brass-light">generations.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">
            Smoked fish, beef jerky, pizza, pickles, sauces, kugels and cold brew. The whole Old Williamsburg pantry, in one place.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5">
              Explore the range <ArrowRight />
            </Link>
            <Link href="/#story" className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 font-semibold text-cream transition-colors hover:bg-cream/10">
              Our story
            </Link>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-cream/15 pt-6">
            <div><dt className="eyebrow text-cream/50 !text-[0.6rem]">Ranges</dt><dd className="display mt-1 text-4xl">{rangeCount}</dd></div>
            <div><dt className="eyebrow text-cream/50 !text-[0.6rem]">Products</dt><dd className="display mt-1 text-4xl">{productCount}</dd></div>
            <div><dt className="eyebrow text-cream/50 !text-[0.6rem]">Kosher certified</dt><dd className="display mt-1 text-4xl">{kosherCount}</dd></div>
          </dl>
        </div>
        <div className="relative md:col-span-6 lg:col-span-7">
          <div className="relative mx-auto aspect-[5/4] w-full max-w-[760px]">
            <div className="absolute inset-x-[6%] bottom-[3%] h-[14%] rounded-[50%] bg-black/35 blur-2xl" aria-hidden="true" />
            {SHELF.map((s, i) => {
              const [w, h] = dims(s.src);
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={s.src} src={s.src.replace(".webp", "-s.webp")} alt={s.alt} width={w} height={h} loading={i < 3 ? "eager" : "lazy"} decoding="async"
                  className={`float packshot absolute h-auto ${s.cls}`} style={{ animationDelay: s.delay }} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
