import { imageDims } from "@/data/image-dims";

/** Small (640px) variant of a /p/<sku>/NN.webp image. */
export function small(src: string) {
  return src.replace(/\.webp$/, "-s.webp");
}

export function dims(src: string): [number, number] {
  return imageDims[src] ?? [1000, 1000];
}

/** srcSet for product images: 640w + full (max 1200w). */
export function productSrcSet(src: string) {
  if (!src.startsWith("/p/")) return undefined;
  const [w] = dims(src);
  return `${small(src)} ${Math.min(640, w)}w, ${src} ${w}w`;
}
