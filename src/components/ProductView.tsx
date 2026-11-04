"use client";
import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { ComingSoonArt } from "./ProductCard";
import { ArrowLeft, ArrowRight, Check, Mail } from "./icons";
import { CONTACT_EMAIL } from "@/lib/site";

type Option = { label: string; weight: string; sku: string; upc: string; image: string; angles: string[]; kosherCert?: string };

export default function ProductView({ product, rangeName }: { product: Product; rangeName?: string }) {
  const options: Option[] = useMemo(
    () => (product.variants?.length ? product.variants : [{ label: "", weight: product.weight, sku: product.sku, upc: product.upc, image: product.image, angles: product.angles }]),
    [product]
  );
  const [vi, setVi] = useState(0);
  const v = options[vi];
  const images = useMemo(() => [v.image || product.image, ...(v.image ? v.angles : product.angles)].filter(Boolean), [v, product]);
  const [ii, setIi] = useState(0);
  useEffect(() => setIi(0), [vi]);
  const go = (d: number) => setIi((x) => (x + d + images.length) % images.length);
  const noPhoto = product.comingSoon || images.length === 0;
  const size = v.weight;
  const mail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Old Williamsburg ${product.name} (${size}, item ${v.sku})`)}`;

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      {/* gallery */}
      <div className="lg:col-span-7">
        <div
          className="stage relative aspect-square overflow-hidden rounded-[2rem] ring-1 ring-ink/[0.06]"
          onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }}
          tabIndex={images.length > 1 ? 0 : -1}
          aria-roledescription="carousel"
          aria-label={`${product.name} photos`}
        >
          {noPhoto ? (
            <ComingSoonArt size="lg" />
          ) : (
            images.map((src, k) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                srcSet={`${src.replace(".webp", "-s.webp")} 640w, ${src} 1200w`}
                sizes="(min-width: 1024px) 55vw, 100vw"
                alt={k === 0 ? `${product.name}, ${size}` : `${product.name}, photo ${k + 1}`}
                loading={k === 0 ? "eager" : "lazy"}
                fetchPriority={k === 0 ? "high" : "auto"}
                decoding="async"
                className={`absolute inset-0 m-auto h-[82%] w-[82%] object-contain transition-all duration-500 ${k === 0 ? "packshot" : "mix-blend-multiply"} ${k === ii ? "opacity-100 scale-100" : "opacity-0 scale-[.97] pointer-events-none"}`}
              />
            ))
          )}
          {images.length > 1 && (
            <>
              <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="absolute left-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-paper/90 text-ink shadow-md hover:bg-white"><ArrowLeft /></button>
              <button type="button" onClick={() => go(1)} aria-label="Next photo" className="absolute right-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-paper/90 text-ink shadow-md hover:bg-white"><ArrowRight /></button>
              <span className="absolute bottom-4 right-5 eyebrow text-muted !text-[0.6rem]">{ii + 1} / {images.length}</span>
            </>
          )}
        </div>
        {images.length > 1 && (
          <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1">
            {images.map((src, k) => (
              <button key={src} type="button" onClick={() => setIi(k)} aria-label={`Show photo ${k + 1}`} aria-current={k === ii}
                className={`stage relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 transition ${k === ii ? "ring-ink" : "ring-transparent hover:ring-ink/20"}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src.replace(".webp", "-s.webp")} alt="" loading="lazy" className="absolute inset-0 m-auto h-[80%] w-[80%] object-contain mix-blend-multiply" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* details */}
      <div className="lg:col-span-5 lg:pt-4">
        {rangeName && <p className="eyebrow text-brick">{rangeName}</p>}
        <h1 className="display mt-3 text-5xl md:text-6xl">{product.name}</h1>
        <p className="mt-3 text-lg text-muted">{size}</p>
        {product.discontinued && (
          <p className="mt-5 rounded-2xl bg-paper-2 px-4 py-3 text-sm text-ink ring-1 ring-ink/10">This item is listed as discontinued.</p>
        )}

        {options.length > 1 && (
          <fieldset className="mt-8">
            <legend className="eyebrow text-muted !text-[0.62rem] mb-3">{options.every((o) => /oz|lb/i.test(o.label)) ? "Size" : "Version"}</legend>
            <div className="flex flex-wrap gap-2">
              {options.map((o, k) => (
                <button key={o.sku} type="button" onClick={() => setVi(k)} aria-pressed={k === vi}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${k === vi ? "bg-ink text-cream" : "bg-paper-2 text-ink hover:bg-paper-3"}`}>
                  {o.label}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        <p className="mt-8 text-lg leading-relaxed text-ink/80">{product.description}</p>

        {product.features.length > 0 && (
          <ul className="mt-8 space-y-3">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-3"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brick/10 text-brick"><Check className="w-3.5 h-3.5" /></span>{f}</li>
            ))}
          </ul>
        )}

        <dl className="mt-10 divide-y divide-ink/10 border-y border-ink/10 text-[0.95rem]">
          <div className="flex justify-between py-3"><dt className="text-muted">Size</dt><dd className="font-medium">{size}</dd></div>
          {(v.kosherCert || product.kosherCert) && <div className="flex justify-between py-3"><dt className="text-muted">Kosher</dt><dd className="font-medium">{v.kosherCert || product.kosherCert}</dd></div>}
          {product.storage && <div className="flex justify-between py-3"><dt className="text-muted">Aisle</dt><dd className="font-medium">{product.storage}</dd></div>}
          <div className="flex justify-between py-3"><dt className="text-muted">Item #</dt><dd className="font-mono">{v.sku}</dd></div>
          {v.upc && <div className="flex justify-between py-3"><dt className="text-muted">UPC</dt><dd className="font-mono">{v.upc}</dd></div>}
        </dl>

        <a href={mail} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-cream transition-colors hover:bg-navy sm:w-auto">
          <Mail /> Ask about this product
        </a>
      </div>
    </div>
  );
}
