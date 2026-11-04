import Link from "next/link";
import type { Product } from "@/data/products";
import { ArrowRight, Check } from "../icons";

export default function Spotlight({ product, eyebrow, title }: { product: Product; eyebrow: string; title: React.ReactNode }) {
  const angle = product.angles[0];
  return (
    <section className="stage-dark relative overflow-hidden text-cream">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div className="reveal relative order-2 md:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="absolute inset-[12%] rounded-full bg-brass/20 blur-3xl" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={product.name} loading="lazy" decoding="async" className="packshot float absolute inset-[8%] h-[84%] w-[84%] object-contain [--r:-2deg]" />
            {angle && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={angle.replace(".webp", "-s.webp")} alt="" aria-hidden="true" loading="lazy" className="absolute -bottom-2 -right-2 w-[36%] rounded-2xl bg-paper p-2 shadow-2xl ring-1 ring-black/10 rotate-[4deg] hidden sm:block" />
            )}
          </div>
        </div>
        <div className="reveal order-1 md:order-2">
          <p className="eyebrow text-brass-light">{eyebrow}</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">{title}</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/75">{product.description}</p>
          <ul className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-cream/90"><span className="grid h-6 w-6 place-items-center rounded-full bg-brass/25 text-brass-light"><Check className="w-3.5 h-3.5" /></span>{f}</li>
            ))}
          </ul>
          <Link href={`/products/${product.slug}`} className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5">
            See {product.name} <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
