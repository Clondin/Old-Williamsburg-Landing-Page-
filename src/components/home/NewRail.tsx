import Link from "next/link";
import type { Product } from "@/data/products";
import ProductCard from "../ProductCard";
import { ArrowRight } from "../icons";

export default function NewRail({ products }: { products: Product[] }) {
  return (
    <section className="bg-paper-2/60" aria-labelledby="new-h">
      <div className="mx-auto max-w-[1400px] py-16 md:py-24">
        <div className="flex items-end justify-between gap-6 px-5 md:px-10">
          <div>
            <p className="eyebrow text-brick">New to the range</p>
            <h2 id="new-h" className="display mt-3 text-[2.6rem] md:text-7xl">Just added</h2>
          </div>
          <Link href="/products?new=1" className="inline-flex shrink-0 items-center gap-2 font-semibold"><span className="ulink">See all new</span> <ArrowRight /></Link>
        </div>
        <div className="rail mt-8 auto-cols-[44%] gap-4 px-5 scroll-px-5 sm:auto-cols-[30%] md:mt-12 md:auto-cols-[calc((100%-5*1.5rem)/5)] md:gap-6 md:px-10 md:scroll-px-10">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </div>
    </section>
  );
}
