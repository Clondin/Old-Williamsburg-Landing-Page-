"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Product } from "@/data/products";
import { ComingSoonArt } from "./ProductCard";
import { ArrowLeft, ArrowRight, Copy, Check, Mail } from "./icons";
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
  const [copied, setCopied] = useState(false);
  const rail = useRef<HTMLDivElement>(null);
  const noPhoto = product.comingSoon || images.length === 0;
  const size = v.weight;
  const kosher = v.kosherCert || product.kosherCert;

  const goTo = (k: number) => {
    const el = rail.current;
    if (!el) return;
    const n = (k + images.length) % images.length;
    el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" });
  };
  useEffect(() => {
    rail.current?.scrollTo({ left: 0 });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIi(0);
  }, [vi]);
  const onScroll = () => {
    const el = rail.current;
    if (el) setIi(Math.round(el.scrollLeft / Math.max(1, el.clientWidth)));
  };

  const subject = `Where to buy: Old Williamsburg ${product.name} (${size}, item ${v.sku})`;
  const body = `Hi, I'm looking for Old Williamsburg ${product.name}, ${size}.\nItem # ${v.sku}${v.upc ? `\nUPC ${v.upc}` : ""}\n\nWhere can I buy it near me? My zip code is: `;
  const mail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const copy = async () => {
    try { await navigator.clipboard.writeText(v.upc || v.sku); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch { /* clipboard blocked */ }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
      {/* gallery */}
      <div className="lg:col-span-7">
        <div className="lg:sticky lg:top-28">
          <div className="stage relative -mx-5 aspect-square overflow-hidden sm:mx-0 sm:rounded-md">
            {noPhoto ? (
              <ComingSoonArt size="lg" />
            ) : (
              <div ref={rail} onScroll={onScroll} className="rail h-full auto-cols-[100%]" aria-roledescription="carousel" aria-label={`${product.name} photos`} tabIndex={0}
                onKeyDown={(e) => { if (e.key === "ArrowRight") goTo(ii + 1); if (e.key === "ArrowLeft") goTo(ii - 1); }}>
                {images.map((src, k) => (
                  <div key={src} className="relative h-full" aria-roledescription="slide" aria-label={`${k + 1} of ${images.length}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      srcSet={`${src.replace(".webp", "-s.webp")} 640w, ${src} 1200w`}
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      alt={k === 0 ? `${product.name}, ${size}` : `${product.name}, photo ${k + 1}`}
                      loading={k === 0 ? "eager" : "lazy"}
                      fetchPriority={k === 0 ? "high" : "auto"}
                      decoding="async"
                      className={`absolute inset-0 m-auto h-[84%] w-[84%] object-contain ${k === 0 ? "packshot" : "mix-blend-multiply"}`}
                    />
                  </div>
                ))}
              </div>
            )}
            {images.length > 1 && !noPhoto && (
              <>
                <button type="button" onClick={() => goTo(ii - 1)} aria-label="Previous photo" className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-paper/90 text-ink shadow-sm hover:bg-white md:grid"><ArrowLeft /></button>
                <button type="button" onClick={() => goTo(ii + 1)} aria-label="Next photo" className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-paper/90 text-ink shadow-sm hover:bg-white md:grid"><ArrowRight /></button>
                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1.5 md:hidden" aria-hidden="true">
                  {images.map((src, k) => <span key={src} className={`h-1.5 rounded-full transition-all ${k === ii ? "w-5 bg-ink" : "w-1.5 bg-ink/25"}`} />)}
                </div>
              </>
            )}
          </div>
          {images.length > 1 && !noPhoto && (
            <div className="no-scrollbar mt-3 hidden gap-2 overflow-x-auto md:flex">
              {images.map((src, k) => (
                <button key={src} type="button" onClick={() => goTo(k)} aria-label={`Show photo ${k + 1}`} aria-current={k === ii}
                  className={`stage relative h-20 w-20 shrink-0 overflow-hidden rounded-md ring-2 ring-inset transition ${k === ii ? "ring-ink" : "ring-transparent hover:ring-ink/20"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src.replace(".webp", "-s.webp")} alt="" loading="lazy" className="absolute inset-0 m-auto h-[80%] w-[80%] object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* details */}
      <div className="lg:col-span-5 lg:pt-2">
        {rangeName && <p className="text-sm text-muted">{rangeName}{product.isNew && <span className="ml-2 font-semibold text-brick">New</span>}</p>}
        <h1 className="display mt-2 text-[2.6rem] md:text-6xl">{product.name}</h1>
        <p className="mt-3 text-lg text-ink/70">{size}{kosher ? <span className="text-muted"> &middot; Kosher, {kosher}</span> : null}</p>
        {product.discontinued && (
          <p className="mt-5 border-l-2 border-brick pl-4 text-sm text-ink">This item is discontinued.</p>
        )}

        {options.length > 1 && (
          <fieldset className="mt-7">
            <legend className="mb-3 text-sm font-medium text-ink">{options.every((o) => /oz|lb/i.test(o.label)) ? "Size" : "Version"}</legend>
            <div className="flex flex-wrap gap-2">
              {options.map((o, k) => (
                <button key={o.sku} type="button" onClick={() => setVi(k)} aria-pressed={k === vi}
                  className={`min-w-[5.5rem] rounded-md border px-4 py-2.5 text-left transition-colors ${k === vi ? "border-ink bg-ink text-cream" : "border-ink/15 text-ink hover:border-ink/50"}`}>
                  <span className="block text-[0.95rem] font-semibold">{o.label}</span>
                  <span className={`block text-xs ${k === vi ? "text-cream/60" : "text-muted"}`}>Item {o.sku}</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        <p className="mt-7 text-lg leading-relaxed text-ink/80">{product.description}</p>

        {product.features.length > 0 && (
          <ul className="mt-6 grid gap-2 text-[0.98rem] text-ink/80">
            {product.features.map((f) => (
              <li key={f} className="flex gap-3"><span className="mt-[0.7em] h-px w-3 shrink-0 bg-brick" aria-hidden="true" />{f}</li>
            ))}
          </ul>
        )}

        <section className="mt-9 rounded-md bg-paper-2/70 p-5 md:p-6" aria-labelledby="buy-h">
          <h2 id="buy-h" className="font-headline text-2xl">Where to buy</h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">
            Ask customer care for a store that carries it. The email opens with the item # and UPC filled in, so add your zip code and send.
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <a href={mail} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-cream transition-colors hover:bg-navy">
              <Mail /> Email customer care
            </a>
            <button type="button" onClick={copy} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-5 py-3.5 font-semibold text-ink transition-colors hover:border-ink/50">
              {copied ? <Check /> : <Copy />} {copied ? "Copied" : v.upc ? "Copy UPC" : "Copy item #"}
            </button>
          </div>
        </section>

        <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10 text-[0.95rem]">
          <div className="flex justify-between gap-4 py-3"><dt className="text-muted">Size</dt><dd className="text-right font-medium">{size}</dd></div>
          {kosher && <div className="flex justify-between gap-4 py-3"><dt className="text-muted">Kosher</dt><dd className="text-right font-medium">{kosher}</dd></div>}
          {product.storage && <div className="flex justify-between gap-4 py-3"><dt className="text-muted">Aisle</dt><dd className="text-right font-medium">{product.storage}</dd></div>}
          <div className="flex justify-between gap-4 py-3"><dt className="text-muted">Item #</dt><dd className="font-medium tabular-nums">{v.sku}</dd></div>
          {v.upc && <div className="flex justify-between gap-4 py-3"><dt className="text-muted">UPC</dt><dd className="font-medium tabular-nums">{v.upc}</dd></div>}
        </dl>
      </div>
    </div>
  );
}
