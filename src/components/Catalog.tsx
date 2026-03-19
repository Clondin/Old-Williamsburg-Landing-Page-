const products = [
  {
    code: "P-01 // SMOKE_DEPT",
    name: "Smoked Lox",
    description:
      "Cold-smoked over fruitwood for 12 hours. Silk-textured perfection from the North Atlantic.",
  },
  {
    code: "P-02 // COAL_FIRED",
    name: "Brooklyn Pizza",
    description:
      "The original thin-crust legend. Fermented dough, San Marzano sauce, and coal-fired char.",
  },
  {
    code: "P-03 // CURED_GOODS",
    name: "Artisan Jerky",
    description:
      "Prime brisket, hand-trimmed and cured with our secret 1892 black pepper and honey rub.",
  },
];

export default function Catalog() {
  return (
    <section className="py-32 px-8 bg-blueprint-bg border-y-2 border-steel-blue/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b-2 border-steel-blue pb-8">
          <div className="flex items-center gap-6">
            <h2 className="font-headline text-5xl text-steel-blue italic font-bold">
              The Catalog
            </h2>
            <span className="bg-brick-red text-white font-mono text-[10px] px-3 py-1 uppercase tracking-tighter">
              Inventory v1.2
            </span>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-industrial-gray mt-4 md:mt-0">
            Certified Provisions // Grade A Quality
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div
              key={product.code}
              className="group border-2 border-steel-blue/10 bg-white p-8 flex flex-col justify-between h-[420px] hover:border-steel-blue transition-all duration-300 relative"
            >
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-brick-red opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <span className="font-mono text-[10px] text-brick-red mb-2 block font-bold">
                  {product.code}
                </span>
                <h3 className="font-headline text-3xl text-steel-blue mb-4 font-bold">
                  {product.name}
                </h3>
                <p className="text-industrial-gray leading-relaxed font-light">
                  {product.description}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-steel-blue/10">
                <button className="font-mono text-xs uppercase tracking-widest text-steel-blue font-bold flex items-center hover:text-brick-red transition-colors">
                  View Details
                  <span className="material-symbols-outlined ml-2 text-sm">
                    add_circle
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
