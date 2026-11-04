import Link from "next/link";
import type { Product } from "@/data/products";
import { getRangeBySlug } from "@/data/products";
import { small, dims } from "@/lib/img";

export function ComingSoonArt({ label = "Photo coming soon", size = "md" }: { label?: string; size?: "md" | "lg" }) {
  return (
    <div className="absolute inset-0 grid place-items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="" aria-hidden="true" className={`${size === "lg" ? "w-3/5" : "w-2/3"} opacity-[0.16]`} />
      <span className="absolute bottom-[10%] text-[0.75rem] font-medium text-ink/50">{label}</span>
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
      <div className="stage relative aspect-[4/5] overflow-hidden rounded-md transition-shadow duration-500 group-hover:shadow-[0_18px_30px_-22px_rgba(16,34,63,.5)] group-focus-visible:ring-2 group-focus-visible:ring-brick">
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
        {product.discontinued && <span className="absolute left-3 top-3 rounded-sm bg-ink px-2 py-1 text-[0.7rem] font-medium text-cream">Discontinued</span>}
      </div>
      <div className="pt-3">
        {(showRange || product.isNew) && (
          <p className="flex items-center gap-2 text-[0.78rem] text-muted">
            {showRange && range && <span>{range.name}</span>}
            {product.isNew && <span className="font-semibold text-brick">New</span>}
          </p>
        )}
        <h3 className="mt-0.5 font-headline text-[1.2rem] leading-[1.15] text-ink transition-colors group-hover:text-brick md:text-[1.3rem]">{product.name}</h3>
        <p className="mt-1 text-sm text-muted">{sizes}</p>
      </div>
    </Link>
  );
}
