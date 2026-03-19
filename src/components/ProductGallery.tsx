"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [activeImage, setActiveImage] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      } else if (e.key === "ArrowRight") {
        setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    },
    [images.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="p-8 lg:p-12 flex flex-col" role="group" aria-label="Product image gallery">
      <div className="relative aspect-[3/4] bg-[#f5f5f5] border border-steel-blue/10 overflow-hidden">
        <Image
          src={images[activeImage]}
          alt={name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="flex gap-3 mt-4">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setActiveImage(i)}
            aria-label={`View ${name} image ${i + 1} of ${images.length}`}
            aria-current={activeImage === i}
            className={`relative w-20 h-20 border-2 overflow-hidden transition-all cursor-pointer ${
              activeImage === i
                ? "border-brick-red"
                : "border-steel-blue/10 hover:border-steel-blue/30"
            }`}
          >
            <Image
              src={img}
              alt={`${name} view ${i + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
