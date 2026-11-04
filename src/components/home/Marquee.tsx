export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-brick py-4 text-cream" aria-hidden="true">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-headline text-2xl italic md:text-3xl">
            {t}
            <span className="text-brass-light text-base not-italic">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
