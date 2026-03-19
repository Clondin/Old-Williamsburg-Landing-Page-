import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="py-16 md:py-32 px-8 bg-white relative">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center max-w-7xl mx-auto">
        <div className="red-accent-rule pl-6 md:pl-12">
          <span className="uppercase font-mono text-brick-red tracking-[0.4em] text-xs block mb-6 font-bold">
            Our Heritage // Brooklyn, NY
          </span>
          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl text-steel-blue mb-10 italic font-bold">
            The New York Way
          </h2>
          <div className="font-body text-base md:text-xl text-industrial-gray leading-relaxed space-y-6">
            <p>
              Since the first pushcarts rolled through the cobblestone streets
              of old Williamsburg, we&apos;ve upheld the rigorous standards of New
              York&apos;s culinary pioneers.
            </p>
            <p>
              Our tradition isn&apos;t just about recipes; it&apos;s an obsession with the
              slow-cured, the hand-sliced, and the barrel-aged. We believe that
              history is something you can taste — a legacy of craft that lives
              in every deli counter and family table.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="blueprint-border p-1">
            <Image
              alt="Rustic New York Market Sketch"
              className="w-full grayscale contrast-125"
              src="/ny_market_sketch.png"
              width={600}
              height={400}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-steel-blue text-white p-6 font-mono text-xs hidden lg:block shadow-xl">
            COORDINATES: 40.7081&deg; N, 73.9571&deg; W
          </div>
        </div>
      </div>
    </section>
  );
}
