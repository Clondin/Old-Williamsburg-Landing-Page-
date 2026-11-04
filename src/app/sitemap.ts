import type { MetadataRoute } from "next";
import { ranges, listed } from "@/data/products";
import { absUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const shown = ranges.filter((r) => listed(r.products).length);
  return [
    { url: absUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absUrl("/products"), changeFrequency: "monthly", priority: 0.9 },
    ...shown.map((r) => ({ url: absUrl(`/products/range/${r.slug}`), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...shown.flatMap((r) => listed(r.products)).map((p) => ({
      url: absUrl(`/products/${p.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      ...(p.image ? { images: [absUrl(p.image)] } : {}),
    })),
  ];
}
