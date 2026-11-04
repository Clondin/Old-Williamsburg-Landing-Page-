import Link from "next/link";
import { ranges, listed } from "@/data/products";
import { CONTACT_EMAIL } from "@/lib/site";
import { Mail } from "./icons";

export default function SiteFooter() {
  const shown = ranges.filter((r) => listed(r.products).length);
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-cream.svg" alt="Old Williamsburg" width={256} height={100} className="h-16 w-auto" loading="lazy" />
            <p className="mt-6 max-w-sm font-headline text-2xl italic leading-snug text-cream/85">
              Every bite tells a New York story.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-sm hover:bg-cream hover:text-ink transition-colors">
              <Mail /> {CONTACT_EMAIL}
            </a>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow text-brass-light mb-5">Ranges</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[0.95rem] text-cream/80">
              {shown.map((r) => (
                <li key={r.slug}><Link className="ulink hover:text-cream" href={`/products/range/${r.slug}`}>{r.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-brass-light mb-5">Company</p>
            <ul className="space-y-3 text-[0.95rem] text-cream/80">
              <li><Link className="ulink hover:text-cream" href="/products">All products</Link></li>
              <li><Link className="ulink hover:text-cream" href="/#story">Our story</Link></li>
              <li><a className="ulink hover:text-cream" href={`mailto:${CONTACT_EMAIL}`}>Customer care</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 select-none font-headline italic leading-none text-cream/[0.06] text-[22vw] md:text-[15rem] tracking-tight whitespace-nowrap" aria-hidden="true">
          Williamsburg
        </div>
        <div className="mt-4 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Old Williamsburg Provisions. All rights reserved.</p>
          <p>Brooklyn, New York</p>
        </div>
      </div>
    </footer>
  );
}
