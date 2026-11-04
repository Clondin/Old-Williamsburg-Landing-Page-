export default function Story() {
  return (
    <section id="story" className="scroll-mt-24 bg-paper" aria-labelledby="story-h">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-16 md:grid-cols-12 md:gap-14 md:px-10 md:py-28">
        <div className="reveal md:col-span-6 lg:col-span-5">
          <p className="eyebrow text-brick">Our story</p>
          <h2 id="story-h" className="display mt-4 text-[2.6rem] md:text-7xl">Named for <em className="text-brick">old Williamsburg</em></h2>
          <div className="mt-7 max-w-xl space-y-5 text-lg leading-relaxed text-ink/75">
            <p>
              Since the first pushcarts rolled through the cobblestone streets of old Williamsburg, we&apos;ve upheld the standards of New York&apos;s food makers.
            </p>
            <p>
              Today the name is on hand-sliced Nova salmon and smoked fish, beef jerky, frozen pizza, pickles, salsa, sauces, kugels, knishes and cold brew.
            </p>
          </div>
        </div>
        <figure className="reveal md:col-span-6 lg:col-span-6 lg:col-start-7">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/ny-market-sketch.webp" alt="Pen sketch of an old New York market street" width={640} height={640} loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-sm object-cover sepia-[.15]" />
        </figure>
      </div>
    </section>
  );
}
