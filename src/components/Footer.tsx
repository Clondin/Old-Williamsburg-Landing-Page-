import Image from "next/image";
import Link from "next/link";
import FooterSeal from "./FooterSeal";

export default function Footer() {
  return (
    <footer className="w-full bg-steel-blue text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Brand SVG Seal */}
      <div className="absolute top-12 right-12 w-48 h-48 opacity-20 pointer-events-none origin-center rotate-[-15deg] hidden lg:block text-white">
        <FooterSeal />
      </div>
      <div className="px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.svg"
                alt="Old Williamsburg"
                width={192}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/60 max-w-sm font-light text-sm leading-relaxed">
              Maintaining the structural integrity of New York culinary
              traditions since 1892. Original recipes, architectural precision.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest mb-6 text-brick-red font-bold">
              Explore
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link className="hover:text-brick-red transition-colors" href="#story">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="hover:text-brick-red transition-colors" href="#catalog">
                  Products
                </Link>
              </li>
              <li>
                <Link className="hover:text-brick-red transition-colors" href="#quote">
                  Quality Assurance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest mb-6 text-brick-red font-bold">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link className="hover:text-brick-red transition-colors" href="#">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="hover:text-brick-red transition-colors" href="#">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link className="hover:text-brick-red transition-colors" href="#">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">
          <p>&copy; 2025 OLD WILLIAMSBURG PROVISIONS. ALL RIGHTS RESERVED.</p>
          <p>BK-USA-718</p>
        </div>
      </div>
    </footer>
  );
}
