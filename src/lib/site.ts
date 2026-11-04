/**
 * One place for the public URL. Set NEXT_PUBLIC_SITE_URL in Vercel when the final domain is chosen;
 * until then canonical/sitemap URLs use the domain the original site declared.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://oldwilliamsburg.com").replace(/\/$/, "");
export const SITE_NAME = "Old Williamsburg";
export const CONTACT_EMAIL = "customercare@kayco.com";
export const SITE_DESCRIPTION =
  "Old Williamsburg smoked fish, beef jerky, frozen pizza, pickles, salsa, sauces, kugels, knishes and cold brew coffee. Sizes, item numbers and kosher details for every product.";

export function absUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
