import Link from "next/link";
import type { Product } from "@/data/products";
import { getRangeBySlug } from "@/data/products";
import { small, dims } from "@/lib/img";

export function ComingSoonArt({ label = "Photo coming soon", size = "md" }: { label?: string; size?: "md" | "lg" }) {
  return (
    <div className="absolute inset-0 grid place-items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="" aria-hidden="true" className={`${size === "lg" ? "w-3/5" : "w-2/3"} opacity-[0.16]`} />
      <span className="absolute bottom-[14%] eyebrow rounded-full bg-paper/80 px-3 py-1.5 text-brass !text-[0.6rem] ring-1 ring-brass/25">{label}</span>
    </div>
  );
}

export default function ProductCard({ product, priority = false, showRange = true }: { product: Product; priority?: boolean; showRange?: boolean }) {
  const range = getRangeBySlug(product.rangeSlug);
  const second = product.angles.find((a) => a && !a.endsWith("01.webp"));
  const [w, h] = product.image ? dims(product.image) : [1, 1];
  const sizes = product.variants?.length && product.variants.length > 1 ? `${product.variants.length} sizes` : product.weight.replace(/\s*\(.*\)/, "").toLowerCase();
  return (
    <Link href={`/products/${product.slug}`} className="group block focus-visible:outline-none" aria-label={`${product.name}, ${sizes}`}>
      <div className="stage relative aspect-[4/5] overflow-hidden rounded-[1.6rem] ring-1 ring-ink/[0.06] transition-[transform,box-shadow] duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_24px_40px_-24px_rgba(16,34,63,.45)] group-focus-visible:ring-2 group-focus-visible:ring-brick">
        {product.comingSoon || !product.image ? (
          <ComingSoonArt />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={small(product.image)}
              alt={product.name}
              width={w}
              height={h}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className={`packshot absolute inset-0 m-auto h-[76%] w-[76%] object-contain transition-all duration-700 ease-out group-hover:scale-[1.06] ${second ? "group-hover:opacity-0" : ""}`}
            />
            {second && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={small(second)} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 m-auto h-[86%] w-[86%] object-contain opacity-0 scale-95 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100 mix-blend-multiply" />
            )}
          </>
        )}
        {product.discontinued && <span className="absolute left-4 top-4 eyebrow rounded-full bg-ink px-2.5 py-1 text-cream !text-[0.58rem]">Discontinued</span>}
      </div>
      <div className="px-1 pt-4">
        {showRange && range && <p className="eyebrow text-brass !text-[0.62rem]">{range.name}</p>}
        <h3 className="mt-1 font-headline text-[1.28rem] leading-tight text-ink group-hover:text-brick transition-colors">{product.name}</h3>
        <p className="mt-1 text-sm text-muted">{sizes}</p>
      </div>
    </Link>
  );
}
