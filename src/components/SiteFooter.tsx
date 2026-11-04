import Link from "next/link";
import { ranges, listed } from "@/data/products";
import { CONTACT_EMAIL } from "@/lib/site";
import { Mail } from "./icons";

export default function SiteFooter() {
  const shown = ranges.filter((r) => listed(r.products).length);
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-10 md:px-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-cream.svg" alt="Old Williamsburg" width={256} height={100} className="h-14 w-auto" loading="lazy" />
            <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-cream/70">
              Questions about a product, or looking for a store that carries it? Customer care can help.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-5 inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-sm transition-colors hover:bg-cream hover:text-ink">
              <Mail /> {CONTACT_EMAIL}
            </a>
          </div>
          <nav aria-label="Ranges" className="md:col-span-4">
            <p className="mb-4 text-sm font-semibold text-cream">Ranges</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[0.95rem] text-cream/70">
              {shown.map((r) => (
                <li key={r.slug}><Link className="ulink hover:text-cream" href={`/products/range/${r.slug}`}>{r.name}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company" className="md:col-span-3">
            <p className="mb-4 text-sm font-semibold text-cream">Old Williamsburg</p>
            <ul className="space-y-3 text-[0.95rem] text-cream/70">
              <li><Link className="ulink hover:text-cream" href="/products">All products</Link></li>
              <li><Link className="ulink hover:text-cream" href="/products?new=1">New products</Link></li>
              <li><Link className="ulink hover:text-cream" href="/#story">Our story</Link></li>
              <li><a className="ulink hover:text-cream" href={`mailto:${CONTACT_EMAIL}`}>Customer care</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Old Williamsburg Provisions. All rights reserved.</p>
          <p>Brooklyn, New York</p>
        </div>
      </div>
    </footer>
  );
}
