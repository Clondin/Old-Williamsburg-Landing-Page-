"use client";

import { useState } from "react";
import Image from "next/image";

export default function Distributor() {
  const [zipCode, setZipCode] = useState("");

  return (
    <section id="distributor" className="py-16 md:py-32 px-4 md:px-8 bg-white">
      <div className="grid md:grid-cols-12 gap-8 md:gap-16 max-w-7xl mx-auto">
        <div className="md:col-span-4 md:border-r-2 border-steel-blue/10 md:pr-12">
          <h2 className="font-headline text-3xl md:text-5xl text-steel-blue mb-8 font-bold leading-tight">
            Locate a <br />
            <span className="text-brick-red">Distributor</span>
          </h2>
          <p className="font-body text-xl text-industrial-gray mb-12">
            Authorized retailers and heritage delis carrying our official
            provisions.
          </p>
          <div className="space-y-10">
            <div className="flex items-start space-x-4 group">
              <span
                className="material-symbols-outlined text-brick-red p-2 border-2 border-brick-red/20 group-hover:bg-brick-red group-hover:text-white transition-all"
                aria-label="Location pin"
              >
                room
              </span>
              <div>
                <p className="font-bold text-steel-blue uppercase font-mono text-sm">
                  Flagship Location
                </p>
                <p className="text-industrial-gray">
                  182 Bedford Ave, Brooklyn, NY
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <span
                className="material-symbols-outlined text-steel-blue p-2 border-2 border-steel-blue/20 group-hover:bg-steel-blue group-hover:text-white transition-all"
                aria-label="Shipping truck"
              >
                local_shipping
              </span>
              <div>
                <p className="font-bold text-steel-blue uppercase font-mono text-sm">
                  Local Delivery
                </p>
                <p className="text-industrial-gray">
                  Fresh delivery straight to your door.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 bg-concrete border-2 border-steel-blue p-2 relative shadow-2xl">
          <div className="bg-blueprint-bg w-full h-[300px] md:h-[500px] flex flex-col items-center justify-center relative overflow-hidden">
            <Image
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              alt="Blueprint map of Brooklyn"
              src="/brooklyn_blueprint_map.png"
              fill
            />
            <div className="relative z-10 w-full max-w-md p-6 md:p-10 bg-white/90 backdrop-blur-md border border-steel-blue shadow-lg">
              <h3 className="font-mono text-sm text-brick-red font-bold uppercase mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-brick-red mr-4" />
                Find a Store Near You
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Search functionality coming soon for zip code: " + zipCode);
                }}
              >
                <div className="space-y-6">
                  <div className="relative">
                    <label htmlFor="zip-code-input" className="sr-only">
                      Zip/Postal Code
                    </label>
                    <input
                      id="zip-code-input"
                      className="w-full bg-transparent border-0 border-b-2 border-steel-blue/30 text-steel-blue p-4 focus:ring-0 focus:border-steel-blue placeholder:text-steel-blue/40 font-mono text-sm uppercase"
                      placeholder="Enter Zip/Postal Code"
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brick-red text-white py-5 font-mono uppercase tracking-widest text-xs font-bold hover:bg-rust transition-colors shadow-lg"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
