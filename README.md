# Old Williamsburg site

Next.js 16 (App Router, all pages static) + Tailwind 4. No client-side framework besides React.

## Content
- `src/data/products.ts`: ranges and products. Item #, UPC, size, kosher certification and aisle come from the Kayco item master;
  descriptions/features on the original 29 SKUs are the original site copy. No prices or ratings anywhere.
  - `comingSoon: true` renders the "photo coming soon" card (no DAM photo yet).
  - `discontinued: true` hides a product from listings and the sitemap; its page still resolves (noindex).
- `public/p/<item#>/NN.webp` (max 1200px) and `NN-s.webp` (640px): product photos from the DAM, optimized.
  `01` is the main packshot. `src/data/image-dims.ts` holds their sizes (regenerate when images change).
- `public/img/`: range photos and illustrations.

## SEO
`src/lib/site.ts` holds the public URL (set `NEXT_PUBLIC_SITE_URL` in Vercel once the domain is final).
Sitemap (`/sitemap.xml`), robots (`/robots.txt`), canonical URLs, Open Graph, Organization + Product + Breadcrumb JSON-LD are generated.

## Develop
```
npm ci
npm run dev
npm run build
```
