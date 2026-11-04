import Link from "next/link";
import type { Product } from "@/data/products";
import { ArrowRight } from "../icons";
import { dims } from "@/lib/img";

export default function Spotlight({ product, eyebrow }: { product: Product; eyebrow: string }) {
  const [w, h] = dims(product.image);
  const sizes = product.variants?.length ? product.variants : [];
  return (
    <section className="stage-dark relative overflow-hidden text-cream" aria-labelledby="spot-h">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
        <div className="reveal">
          <p className="eyebrow text-brass-light">{eyebrow}</p>
          <h2 id="spot-h" className="display mt-4 text-[2.8rem] md:text-7xl">Smoked Nova <em className="text-brass-light">Salmon</em></h2>
          <p className="lede mt-5 max-w-lg text-cream/75">{product.description}</p>
          <p className="mt-5 max-w-lg text-[0.95rem] text-cream/60">{product.features.join(" \u00b7 ")}</p>
          {sizes.length > 1 && (
            <div className="mt-8">
              <p className="text-sm text-cream/50">Comes in</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {sizes.map((v) => (
                  <span key={v.sku} className="rounded-full border border-cream/20 px-4 py-2 text-sm">{v.label}</span>
                ))}
              </div>
            </div>
          )}
          <Link href={`/products/${product.slug}`} className="mt-9 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-white">
            View product <ArrowRight />
          </Link>
        </div>
        <div className="reveal relative">
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} srcSet={`${product.image.replace(".webp", "-s.webp")} 640w, ${product.image} 1200w`} sizes="(min-width: 768px) 45vw, 90vw"
              alt={product.name} width={w} height={h} loading="lazy" decoding="async" className="packshot absolute inset-[6%] h-[88%] w-[88%] object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
