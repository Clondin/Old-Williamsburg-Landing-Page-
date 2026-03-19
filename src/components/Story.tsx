/* eslint-disable @next/next/no-img-element */

export default function Story() {
  return (
    <section className="py-32 px-8 bg-white relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="red-accent-rule pl-12">
          <span className="uppercase font-mono text-brick-red tracking-[0.4em] text-xs block mb-6 font-bold">
            Documented Legacy // BK-92
          </span>
          <h2 className="font-headline text-5xl md:text-6xl text-steel-blue mb-10 italic font-bold">
            The New York Way
          </h2>
          <div className="font-body text-xl text-industrial-gray leading-relaxed space-y-6">
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
            <img
              alt="Vintage Deli Scene"
              className="w-full grayscale contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrz-QlfguQi5kZvIXWsYo-KIk4kcmmw0r5CsX52awb4tgfzRT880e7X3g_2H3cOz17QB-5sc2WseE7gv3OnjeK2Z0VU618GrQ1iEcQspNzaIRTGHIk_DmcdV4CWPvP6YFAjUl1Tmt0CO3it4dbvXSvWAkxDad6vFMcXCkGQqrzS_ervzilhiJyI7_DQuty60bfvwQbz8V1fMNcMbcCvqbqbVlHN3Dv7ZZhTkJGrLyjYR8ZM79yWPW6yIQWg0FZC-awB4pt1t1aJfc"
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
