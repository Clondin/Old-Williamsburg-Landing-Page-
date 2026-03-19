/* eslint-disable @next/next/no-img-element */

export default function Distributor() {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4 border-r-2 border-steel-blue/10 pr-12">
          <h2 className="font-headline text-5xl text-steel-blue mb-8 font-bold leading-tight">
            Locate a <br />
            <span className="text-brick-red">Distributor</span>
          </h2>
          <p className="font-body text-xl text-industrial-gray mb-12">
            Authorized retailers and heritage delis carrying our official
            provisions.
          </p>
          <div className="space-y-10">
            <div className="flex items-start space-x-4 group">
              <span className="material-symbols-outlined text-brick-red p-2 border-2 border-brick-red/20 group-hover:bg-brick-red group-hover:text-white transition-all">
                room
              </span>
              <div>
                <p className="font-bold text-steel-blue uppercase font-mono text-sm">
                  Central Workshop
                </p>
                <p className="text-industrial-gray">
                  182 Bedford Ave, Brooklyn, NY
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <span className="material-symbols-outlined text-steel-blue p-2 border-2 border-steel-blue/20 group-hover:bg-steel-blue group-hover:text-white transition-all">
                local_shipping
              </span>
              <div>
                <p className="font-bold text-steel-blue uppercase font-mono text-sm">
                  Logistics Hub
                </p>
                <p className="text-industrial-gray">
                  Fresh delivery to your coordinate.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 bg-concrete border-2 border-steel-blue p-2 relative shadow-2xl">
          <div className="bg-blueprint-bg w-full h-[500px] flex flex-col items-center justify-center relative overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply grayscale"
              alt="Technical map of Brooklyn"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ7tYUjlUYf345L0bvMJiSpLMUQT0m4-flcr9IgP4GwInJH0c_sZFvaZwZFZQhqov1KHoVtsIZgzq3UCMIZiJSI746wJOSknUZ2nvGEOk2HiuC6Is3SkbCs-_M09KFXl6d7W3HZc1tZLRZ3hE8e6aBswjm1Pws5UIm-9XssbjqxSDPy-sn4hr0LJUAL30HHbVP09h-27uZy2UuwTC_Zj4gNKY_A90fYA80C4wmg6Eia1-eVklqYijIKf7rx4y0Q8W4ADrLY4-4o5o"
            />
            <div className="relative z-10 w-full max-w-md p-10 bg-white/90 backdrop-blur-md border border-steel-blue shadow-lg">
              <h3 className="font-mono text-sm text-brick-red font-bold uppercase mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-brick-red mr-4" />
                Point of Sale Search
              </h3>
              <div className="space-y-6">
                <div className="relative">
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-steel-blue/30 text-steel-blue p-4 focus:ring-0 focus:border-steel-blue placeholder:text-steel-blue/40 font-mono text-sm uppercase"
                    placeholder="Enter Zip/Postal Code"
                    type="text"
                  />
                </div>
                <button className="w-full bg-brick-red text-white py-5 font-mono uppercase tracking-widest text-xs font-bold hover:bg-rust transition-colors shadow-lg">
                  Execute Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
