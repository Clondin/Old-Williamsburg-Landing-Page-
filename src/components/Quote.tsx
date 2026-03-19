export default function Quote() {
  return (
    <section id="quote" className="relative py-24 bg-steel-blue text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('/deli_sign_background.png')" }}
        />
      </div>
      <div className="relative z-10 text-center px-8 border-y-2 border-white/20 py-16">
        <h2 className="font-headline text-4xl md:text-7xl italic font-light tracking-tight mb-8">
          &ldquo;Every bite tells a{" "}
          <span className="text-brick-red font-black">New York</span>{" "}
          story.&rdquo;
        </h2>
        <div className="flex justify-center items-center space-x-3 sm:space-x-6">
          <div className="h-[2px] w-20 bg-white/40 hidden sm:block" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.5em] font-bold">
            Old Williamsburg, Est. 1892
          </span>
          <div className="h-[2px] w-20 bg-white/40 hidden sm:block" />
        </div>
      </div>
    </section>
  );
}
