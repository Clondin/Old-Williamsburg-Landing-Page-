export default function Quote() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-cream">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/heritage-deli.webp" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 mix-blend-luminosity" />
      <div className="mx-auto max-w-5xl px-5 py-24 text-center md:py-36">
        <p className="reveal display text-5xl md:text-8xl">
          &ldquo;Every bite tells a <em className="text-brass-light">New York</em> story.&rdquo;
        </p>
      </div>
    </section>
  );
}
