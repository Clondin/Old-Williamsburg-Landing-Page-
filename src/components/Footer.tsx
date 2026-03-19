import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-steel-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">
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
              Internal Refs
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link className="hover:text-brick-red transition-colors" href="#">
                  Our Standard
                </Link>
              </li>
              <li>
                <Link className="hover:text-brick-red transition-colors" href="#">
                  Component Index
                </Link>
              </li>
              <li>
                <Link className="hover:text-brick-red transition-colors" href="#">
                  Quality Assurance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest mb-6 text-brick-red font-bold">
              Contact Node
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link className="hover:text-brick-red transition-colors" href="#">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="hover:text-brick-red transition-colors" href="#">
                  Dispatch Support
                </Link>
              </li>
              <li>
                <Link className="hover:text-brick-red transition-colors" href="#">
                  Legal Dept
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">
          <p>&copy; 1892 OLD WILLIAMSBURG PROVISIONS. ALL REPRODUCTION FORBIDDEN.</p>
          <p>BK-USA-718</p>
        </div>
      </div>
    </footer>
  );
}
