export default function Story() {
  return (
    <section id="story" className="grain scroll-mt-24 bg-paper">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-20 md:grid-cols-12 md:px-10 md:py-32">
        <div className="reveal md:col-span-6 lg:col-span-5">
          <p className="eyebrow text-brick">Our heritage &middot; Brooklyn, NY</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">The New York <em className="text-brick">way.</em></h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Since the first pushcarts rolled through the cobblestone streets of old Williamsburg, we&apos;ve upheld the rigorous standards of New York&apos;s culinary pioneers.
            </p>
            <p>
              Our tradition isn&apos;t just about recipes; it&apos;s an obsession with the slow-cured, the hand-sliced, and the barrel-aged. We believe that history is something you can taste, a legacy of craft that lives in every deli counter and family table.
            </p>
          </div>
        </div>
        <div className="reveal relative md:col-span-6 lg:col-span-6 lg:col-start-7">
          <div className="relative overflow-hidden rounded-[2rem] bg-paper-2 p-3 ring-1 ring-ink/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/ny-market-sketch.webp" alt="Pen sketch of an old New York market street" width={640} height={640} loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover grayscale-[.3] sepia-[.15]" />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-ink px-5 py-4 text-cream shadow-xl md:-left-8">
            <p className="eyebrow text-brass-light !text-[0.6rem]">Williamsburg, Brooklyn</p>
            <p className="mt-1 font-mono text-sm">40.7081&deg; N, 73.9571&deg; W</p>
          </div>
        </div>
      </div>
    </section>
  );
}
