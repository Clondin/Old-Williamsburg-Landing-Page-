"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductDetail({ product }: { product: Product }) {
  const [variantIndex, setVariantIndex] = useState(0);
  const [imgError, setImgError] = useState(false);
  const hasVariants = product.variants && product.variants.length > 1;

  const active = hasVariants && product.variants ? product.variants[variantIndex] : null;
  const currentImage = active?.image ?? product.image;
  const currentAngles = active?.angles ?? product.angles;
  const currentWeight = active?.weight ?? product.weight;
  const currentSku = active?.sku ?? product.sku;
  const currentUpc = active?.upc ?? product.upc;

  const allImages = [currentImage, ...currentAngles];
  const [activeImage, setActiveImage] = useState(0);

  const handleVariantChange = (i: number) => {
    setVariantIndex(i);
    setActiveImage(0);
    setImgError(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveImage((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
      } else if (e.key === "ArrowRight") {
        setActiveImage((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [allImages.length]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* Image Gallery */}
      <div className="p-6 lg:p-10 flex flex-col items-center">
        <div className="relative aspect-square w-full max-h-[480px] skeleton border border-steel-blue/10 overflow-hidden">
          {imgError ? (
            <div className="flex items-center justify-center h-full">
              <span className="font-mono text-xs uppercase tracking-widest text-industrial-gray/40">
                Image unavailable
              </span>
            </div>
          ) : (
            <Image
              src={allImages[activeImage]}
              alt={product.name}
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 90vw, 440px"
              priority
              onError={() => setImgError(true)}
            />
          )}
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {allImages.map((img, i) => (
            <button
              key={`${variantIndex}-${img}`}
              onClick={() => { setActiveImage(i); setImgError(false); }}
              aria-label={`View ${product.name} angle ${i + 1}`}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 border-2 overflow-hidden transition-all cursor-pointer skeleton ${
                activeImage === i
                  ? "border-brick-red"
                  : "border-steel-blue/10 hover:border-steel-blue/30"
              }`}
            >
              <Image
                src={img}
                alt={`${product.name} view ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-8 lg:p-12 flex flex-col justify-between border-t-2 lg:border-t-0 lg:border-l-2 border-steel-blue/10">
        <div>
          <span className="font-mono text-[10px] text-brick-red mb-2 block font-bold">
            {product.code}
          </span>
          <h1 className="font-headline text-4xl lg:text-5xl text-steel-blue mb-6 font-bold leading-tight">
            {product.name}
          </h1>
          <p className="text-industrial-gray leading-relaxed font-light text-lg mb-8">
            {product.description}
          </p>

          {/* Size Selector */}
          {hasVariants && (
            <div className="mb-8">
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-steel-blue font-bold mb-3">
                Select Size
              </h2>
              <div className="flex flex-wrap gap-3" role="group" aria-label="Size options">
                {product.variants?.map((v, i) => (
                  <button
                    key={v.sku}
                    onClick={() => handleVariantChange(i)}
                    aria-pressed={variantIndex === i}
                    className={`font-mono text-sm px-5 py-3 border-2 transition-all cursor-pointer ${
                      variantIndex === i
                        ? "border-brick-red bg-brick-red text-white"
                        : "border-steel-blue/20 text-steel-blue hover:border-steel-blue"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Specs */}
          <div className="space-y-4 border-t border-steel-blue/10 pt-6">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-steel-blue font-bold mb-4">
              Product Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-mono text-[10px] text-industrial-gray/60 uppercase block">
                  Net Weight
                </span>
                <span className="font-mono text-sm text-steel-blue font-bold">
                  {currentWeight}
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-industrial-gray/60 uppercase block">
                  SKU
                </span>
                <span className="font-mono text-sm text-steel-blue font-bold">
                  {currentSku}
                </span>
              </div>
              {currentUpc && (
                <div>
                  <span className="font-mono text-[10px] text-industrial-gray/60 uppercase block">
                    UPC
                  </span>
                  <span className="font-mono text-sm text-steel-blue font-bold">
                    {currentUpc}
                  </span>
                </div>
              )}
              {product.kosher && (
                <div>
                  <span className="font-mono text-[10px] text-industrial-gray/60 uppercase block">
                    Certification
                  </span>
                  <span className="font-mono text-sm text-steel-blue font-bold">
                    Kosher Parve
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 space-y-3">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brick-red text-base" aria-hidden="true">
                  check_circle
                </span>
                <span className="font-mono text-xs uppercase tracking-wide text-steel-blue">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-steel-blue/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-industrial-gray/40 uppercase">
            REF: {currentSku}
          </span>
        </div>
      </div>
    </div>
  );
}
