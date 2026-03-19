export interface ProductVariant {
  label: string;
  weight: string;
  sku: string;
  upc: string;
  image: string;
  angles: string[];
}

export interface Product {
  slug: string;
  code: string;
  rangeSlug: string;
  name: string;
  shortName: string;
  description: string;
  weight: string;
  sku: string;
  upc: string;
  image: string;
  angles: string[];
  kosher: boolean;
  features: string[];
  variants?: ProductVariant[];
}

export interface ProductRange {
  slug: string;
  name: string;
  tagline: string;
  code: string;
  image: string;
  products: Product[];
}

export const ranges: ProductRange[] = [
  {
    slug: "smoked-fish",
    name: "Smoked Fish",
    tagline:
      "Cold-smoked Atlantic & Pacific selections, crafted in Brooklyn since 1892.",
    code: "SMOKE_DEPT",
    image: "/products/salmon/sketch_180700.png",
    products: [
      {
        slug: "smoked-nova-salmon",
        code: "P-01 // SMOKED_FISH",
        rangeSlug: "smoked-fish",
        name: "Smoked Nova Salmon",
        shortName: "Nova Salmon",
        description:
          "Classic cold-smoked Nova salmon, hand-sliced and ready to serve. The cornerstone of every Brooklyn brunch spread.",
        weight: "4 OZ (113g)",
        sku: "180700",
        upc: "073490133220",
        image: "/products/salmon/sketch_180700.png",
        angles: [
          "/products/salmon/073490133220_T1.jpg",
          "/products/salmon/073490133220_T8.jpg",
        ],
        kosher: true,
        features: [
          "Hand-Sliced Nova Style",
          "Cold-Smoked Over Fruitwood",
          "No Artificial Preservatives",
          "Ready to Serve",
        ],
        variants: [
          {
            label: "4 oz",
            weight: "4 OZ (113g)",
            sku: "180700",
            upc: "073490133220",
            image: "/products/salmon/sketch_180700.png",
            angles: [
              "/products/salmon/073490133220_T1.jpg",
              "/products/salmon/073490133220_T8.jpg",
            ],
          },
          {
            label: "8 oz",
            weight: "8 OZ (227g)",
            sku: "180701",
            upc: "073490133237",
            image: "/products/salmon/180701.png",
            angles: ["/products/salmon/073490133237_T1.jpg"],
          },
          {
            label: "16 oz",
            weight: "16 OZ (454g)",
            sku: "180703",
            upc: "073490133251",
            image: "/products/salmon/180703.png",
            angles: ["/products/salmon/073490133251_T1.jpg"],
          },
        ],
      },
      {
        slug: "smoked-nova-tidbits-8oz",
        code: "P-02 // SMOKED_FISH",
        rangeSlug: "smoked-fish",
        name: "Smoked Nova Salmon Tidbits",
        shortName: "Nova Tidbits 8oz",
        description:
          "Premium nova trimmings — perfect for salads, omelets, and pasta. All the flavor at a great value.",
        weight: "8 OZ (227g)",
        sku: "180702",
        upc: "073490133244",
        image: "/products/salmon/180702.png",
        angles: ["/products/salmon/073490133244_T1.jpg"],
        kosher: true,
        features: [
          "Versatile Tidbit Cut",
          "Great for Cooking & Salads",
          "Cold-Smoked Premium Salmon",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "smoked-pastrami-salmon-4oz",
        code: "P-04 // SMOKED_FISH",
        rangeSlug: "smoked-fish",
        name: "Smoked Pastrami Salmon",
        shortName: "Pastrami Salmon 4oz",
        description:
          "A Brooklyn original — salmon cured with our pastrami spice blend. The perfect union of deli tradition and smoked fish craft.",
        weight: "4 OZ (113g)",
        sku: "180704",
        upc: "073490133633",
        image: "/products/salmon/180704.png",
        angles: ["/products/salmon/073490133633_T1.jpg"],
        kosher: true,
        features: [
          "Pastrami Spice Crusted",
          "Brooklyn Original Recipe",
          "Cold-Smoked Premium Salmon",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "smoked-everything-bagel-salmon-4oz",
        code: "P-05 // SMOKED_FISH",
        rangeSlug: "smoked-fish",
        name: "Smoked Everything Bagel Salmon",
        shortName: "Everything Bagel Salmon 4oz",
        description:
          "Cold-smoked salmon crusted with our signature everything bagel seasoning. The bagel and lox experience in every bite.",
        weight: "4 OZ (113g)",
        sku: "180709",
        upc: "073490134302",
        image: "/products/salmon/180709.png",
        angles: [
          "/products/salmon/073490134302_T1.jpg",
          "/products/salmon/073490134302_T8.jpg",
        ],
        kosher: true,
        features: [
          "Everything Bagel Seasoning",
          "Cold-Smoked Premium Salmon",
          "Presliced & Ready to Eat",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "original-smoked-salmon",
        code: "P-06 // SMOKED_FISH",
        rangeSlug: "smoked-fish",
        name: "Original Smoked Salmon",
        shortName: "Original Smoked Salmon",
        description:
          "Our classic hot-smoked salmon fillet. Rich, flaky, and full-flavored — the way it's been done since 1892.",
        weight: "8 OZ (227g)",
        sku: "180720",
        upc: "",
        image: "/products/salmon/Original-Smoked-Salmon-180720.png",
        angles: ["/products/salmon/Original Smoked Salmon 180720.jpg"],
        kosher: true,
        features: [
          "Traditional Hot-Smoked",
          "Whole Fillet",
          "Rich & Flaky Texture",
          "Original 1892 Recipe",
        ],
      },
      {
        slug: "honey-maple-smoked-salmon",
        code: "P-07 // SMOKED_FISH",
        rangeSlug: "smoked-fish",
        name: "Honey Maple Smoked Salmon",
        shortName: "Honey Maple Salmon",
        description:
          "Hot-smoked salmon glazed with pure honey and real maple syrup. A sweet and savory Brooklyn delicacy.",
        weight: "8 OZ (227g)",
        sku: "180721",
        upc: "",
        image: "/products/salmon/Williamsburg-Honey-Maple-Smoked-Salmon-180721.png",
        angles: [
          "/products/salmon/Williamsburg Honey Maple Smoked Salmon 180721.jpg",
        ],
        kosher: true,
        features: [
          "Pure Honey & Maple Glaze",
          "Hot-Smoked Fillet",
          "Sweet & Savory Profile",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "bbq-smoked-salmon",
        code: "P-08 // SMOKED_FISH",
        rangeSlug: "smoked-fish",
        name: "BBQ Smoked Salmon",
        shortName: "BBQ Smoked Salmon",
        description:
          "Hot-smoked salmon with our signature Brooklyn BBQ rub. Bold, smoky, and unlike anything else in the deli case.",
        weight: "8 OZ (227g)",
        sku: "180722",
        upc: "",
        image: "/products/salmon/Williamsburg-BBQ-Smoked-Salmon-180722.png",
        angles: [
          "/products/salmon/Williamsburg BBQ Smoked Salmon 180722.jpg",
        ],
        kosher: true,
        features: [
          "Brooklyn BBQ Spice Rub",
          "Hot-Smoked Fillet",
          "Bold Smoky Flavor",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "sesame-crusted-smoked-ahi-tuna",
        code: "P-10 // SMOKED_FISH",
        rangeSlug: "smoked-fish",
        name: "Sesame Crusted Smoked Ahi Tuna",
        shortName: "Smoked Ahi Tuna",
        description:
          "Premium ahi tuna, sesame crusted and cold-smoked to perfection. Presliced and ready to eat — no artificial preservatives.",
        weight: "3 OZ (85g)",
        sku: "180725",
        upc: "073490134319",
        image: "/products/tuna/180725.png",
        angles: [
          "/products/tuna/073490134319_T1.jpg",
          "/products/tuna/073490134319_T8.jpg",
        ],
        kosher: true,
        features: [
          "Presliced & Ready to Eat",
          "No Artificial Preservatives",
          "Cold-Smoked Premium Ahi",
          "Sesame Crusted Finish",
        ],
      },
    ],
  },
  {
    slug: "dried-meats",
    name: "Dried Meats",
    tagline:
      "Premium jerky and beef sticks — hand-trimmed, bold-flavored, and Brooklyn-made.",
    code: "CURED_GOODS",
    image: "/products/jerky/sketch_180771.png",
    products: [
      {
        slug: "jerky-smoky-bbq",
        code: "P-01 // CURED_GOODS",
        rangeSlug: "dried-meats",
        name: "Smoky BBQ Jerky",
        shortName: "Smoky BBQ 2oz",
        description:
          "Slow-smoked BBQ jerky made from hand-trimmed premium beef. Bold, smoky, and satisfying.",
        weight: "2 OZ (57g)",
        sku: "180771",
        upc: "073490133893",
        image: "/products/jerky/180771.png",
        angles: ["/products/jerky/073490133893_T1.jpg"],
        kosher: true,
        features: [
          "Smoky BBQ Flavor",
          "Hand-Trimmed Beef",
          "High Protein Snack",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "jerky-pepper-crusted",
        code: "P-02 // CURED_GOODS",
        rangeSlug: "dried-meats",
        name: "Pepper Crusted Jerky",
        shortName: "Pepper Crusted 2oz",
        description:
          "Premium beef jerky crusted with cracked black pepper. A timeless classic with serious bite.",
        weight: "2 OZ (57g)",
        sku: "180772",
        upc: "073490133909",
        image: "/products/jerky/180772.png",
        angles: ["/products/jerky/073490133909_T1.jpg"],
        kosher: true,
        features: [
          "Cracked Pepper Crust",
          "Hand-Trimmed Beef",
          "High Protein Snack",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "jerky-sweet-chipotle",
        code: "P-03 // CURED_GOODS",
        rangeSlug: "dried-meats",
        name: "Sweet Chipotle Jerky",
        shortName: "Sweet Chipotle 2oz",
        description:
          "Sweet meets smoky in our chipotle-glazed jerky. A perfect balance of heat and sweetness.",
        weight: "2 OZ (57g)",
        sku: "180773",
        upc: "073490133923",
        image: "/products/jerky/180773.png",
        angles: ["/products/jerky/073490133923_T1.jpg"],
        kosher: true,
        features: [
          "Sweet Chipotle Glaze",
          "Hand-Trimmed Beef",
          "High Protein Snack",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "jerky-cherry-cola",
        code: "P-04 // CURED_GOODS",
        rangeSlug: "dried-meats",
        name: "Cherry Cola Jerky",
        shortName: "Cherry Cola 2oz",
        description:
          "Our most inventive flavor — premium beef jerky with a sweet cherry cola glaze. Brooklyn creativity at its finest.",
        weight: "2 OZ (57g)",
        sku: "180774",
        upc: "073490133886",
        image: "/products/jerky/180774.png",
        angles: ["/products/jerky/073490133886_T1.jpg"],
        kosher: true,
        features: [
          "Cherry Cola Glaze",
          "Hand-Trimmed Beef",
          "High Protein Snack",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "jerky-teriyaki",
        code: "P-05 // CURED_GOODS",
        rangeSlug: "dried-meats",
        name: "Teriyaki Jerky",
        shortName: "Teriyaki 2oz",
        description:
          "Traditional teriyaki-glazed beef jerky. Sweet, savory, and impossibly tender.",
        weight: "2 OZ (57g)",
        sku: "180770",
        upc: "073490133916",
        image: "/products/jerky/180770.png",
        angles: ["/products/jerky/073490133916_T1.jpg"],
        kosher: true,
        features: [
          "Classic Teriyaki Glaze",
          "Hand-Trimmed Beef",
          "High Protein Snack",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "beef-sticks-italian",
        code: "P-06 // CURED_GOODS",
        rangeSlug: "dried-meats",
        name: "Beef Sticks Italian",
        shortName: "Italian Beef Sticks 3oz",
        description:
          "Classic Italian-seasoned beef sticks made with premium cuts. A bold, savory snack rooted in Brooklyn tradition.",
        weight: "3 OZ (85g)",
        sku: "180785",
        upc: "073490134067",
        image: "/products/beef-sticks/180785.png",
        angles: ["/products/beef-sticks/073490134067_T1.jpg"],
        kosher: true,
        features: [
          "Italian Seasoned",
          "Premium Beef",
          "Ready to Eat Snack",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "beef-sticks-kielbasa",
        code: "P-07 // CURED_GOODS",
        rangeSlug: "dried-meats",
        name: "Beef Sticks Kielbasa",
        shortName: "Kielbasa Beef Sticks 3oz",
        description:
          "Kielbasa-style beef sticks with a smoky, garlicky kick. Old-world flavor in every bite.",
        weight: "3 OZ (85g)",
        sku: "180786",
        upc: "073490134074",
        image: "/products/beef-sticks/180786.png",
        angles: ["/products/beef-sticks/073490134074_T1.jpg"],
        kosher: true,
        features: [
          "Kielbasa Seasoned",
          "Premium Beef",
          "Ready to Eat Snack",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "beef-sticks-hot-spicy",
        code: "P-08 // CURED_GOODS",
        rangeSlug: "dried-meats",
        name: "Beef Sticks Hot & Spicy",
        shortName: "Hot & Spicy Beef Sticks 3oz",
        description:
          "Fiery beef sticks with our signature hot & spicy blend. For those who like it bold.",
        weight: "3 OZ (85g)",
        sku: "180787",
        upc: "073490134081",
        image: "/products/beef-sticks/180787.png",
        angles: ["/products/beef-sticks/073490134081_T1.jpg"],
        kosher: true,
        features: [
          "Hot & Spicy Blend",
          "Premium Beef",
          "Ready to Eat Snack",
          "No Artificial Preservatives",
        ],
      },
    ],
  },
  {
    slug: "pizza",
    name: "Pizza",
    tagline:
      "The original Brooklyn thin-crust legend. Coal-fired and handmade.",
    code: "COAL_FIRED",
    image: "/products/pizza/sketch_180752-Large.png",
    products: [
      {
        slug: "pizza-cheese",
        code: "P-01 // COAL_FIRED",
        rangeSlug: "pizza",
        name: "Coal-Fired Cheese Pizza",
        shortName: "Cheese Pizza",
        description:
          "Our classic coal-fired cheese pizza. Hand-stretched dough, San Marzano tomato sauce, and whole milk mozzarella.",
        weight: "16 OZ (454g)",
        sku: "180750",
        upc: "073490133718",
        image: "/products/pizza/073490133718_T1.jpg",
        angles: [],
        kosher: true,
        features: [
          "Coal-Fired Crust",
          "Whole Milk Mozzarella",
          "San Marzano Sauce",
          "Hand-Stretched Dough",
        ],
      },
      {
        slug: "pizza-mushroom",
        code: "P-02 // COAL_FIRED",
        rangeSlug: "pizza",
        name: "Coal-Fired Mushroom Pizza",
        shortName: "Mushroom Pizza",
        description:
          "Coal-fired pizza loaded with a wild mushroom blend. Earthy, savory, and deeply satisfying.",
        weight: "16.8 OZ (476g)",
        sku: "180751",
        upc: "073490133725",
        image: "/products/pizza/073490133725_T1.jpg",
        angles: [],
        kosher: true,
        features: [
          "Coal-Fired Crust",
          "Wild Mushroom Blend",
          "San Marzano Sauce",
          "Hand-Stretched Dough",
        ],
      },
      {
        slug: "pizza-spinach",
        code: "P-03 // COAL_FIRED",
        rangeSlug: "pizza",
        name: "Coal-Fired Spinach Pizza",
        shortName: "Spinach Pizza",
        description:
          "Coal-fired pizza topped with fresh spinach and whole milk mozzarella. A Brooklyn green slice.",
        weight: "17 OZ (482g)",
        sku: "180752",
        upc: "073490133732",
        image: "/products/pizza/180752 Large.png",
        angles: ["/products/pizza/073490133732_T1.jpg"],
        kosher: true,
        features: [
          "Coal-Fired Crust",
          "Fresh Spinach",
          "San Marzano Sauce",
          "Hand-Stretched Dough",
        ],
      },
      {
        slug: "pizza-caramelized-onion",
        code: "P-04 // COAL_FIRED",
        rangeSlug: "pizza",
        name: "Coal-Fired Caramelized Onion Pizza",
        shortName: "Caramelized Onion Pizza",
        description:
          "Sweet caramelized onions on our signature coal-fired crust. Rich, savory, and unforgettable.",
        weight: "15.5 OZ (439g)",
        sku: "180753",
        upc: "073490133749",
        image: "/products/pizza/073490133749_T1.jpg",
        angles: [],
        kosher: true,
        features: [
          "Coal-Fired Crust",
          "Caramelized Onions",
          "San Marzano Sauce",
          "Hand-Stretched Dough",
        ],
      },
    ],
  },
  {
    slug: "pickles",
    name: "Pickles & Gherkins",
    tagline:
      "Crunchy dill pickles and gherkins — brined the old-fashioned Brooklyn way.",
    code: "PROVISIONS",
    image: "/products/pickles/sketch_180767.png",
    products: [
      {
        slug: "dill-pickles",
        code: "P-01 // PROVISIONS",
        rangeSlug: "pickles",
        name: "Dill Pickles",
        shortName: "Dill Pickles",
        description:
          "Classic Brooklyn dill pickles, naturally fermented for maximum crunch and tangy flavor.",
        weight: "24 OZ (680g)",
        sku: "180767",
        upc: "073490134166",
        image: "/products/pickles/180767.png",
        angles: ["/products/pickles/073490134166_T1.jpg"],
        kosher: true,
        features: [
          "Classic Dill Recipe",
          "Naturally Fermented",
          "Crunchy Texture",
          "No Artificial Preservatives",
        ],
        variants: [
          {
            label: "24 oz",
            weight: "24 OZ (680g)",
            sku: "180767",
            upc: "073490134166",
            image: "/products/pickles/180767.png",
            angles: ["/products/pickles/073490134166_T1.jpg"],
          },
          {
            label: "57 oz",
            weight: "57.48 OZ (1.63kg)",
            sku: "180768",
            upc: "073490134173",
            image: "/products/pickles/180768.png",
            angles: [],
          },
        ],
      },
      {
        slug: "gherkins-dill-24oz",
        code: "P-02 // PROVISIONS",
        rangeSlug: "pickles",
        name: "Dill Gherkins",
        shortName: "Dill Gherkins 24oz",
        description:
          "Petite dill gherkins with the perfect snap. Brined the old-fashioned way.",
        weight: "24.3 OZ (689g)",
        sku: "180840",
        upc: "073490134388",
        image: "/products/pickles/180840.png",
        angles: ["/products/pickles/073490134388_T1.jpg"],
        kosher: true,
        features: [
          "Petite Dill Gherkins",
          "Naturally Fermented",
          "Perfect Crunch",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "gherkins-jumbo-57oz",
        code: "P-03 // PROVISIONS",
        rangeSlug: "pickles",
        name: "Jumbo Gherkins",
        shortName: "Jumbo Gherkins 57oz",
        description:
          "Jumbo-sized gherkins in a generous family jar. Big flavor, big crunch.",
        weight: "57.48 OZ (1.63kg)",
        sku: "180841",
        upc: "073490134395",
        image: "/products/pickles/180841.png",
        angles: ["/products/pickles/073490134395_T1.jpg"],
        kosher: true,
        features: [
          "Jumbo Size Gherkins",
          "Family Size Jar",
          "Naturally Fermented",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "gherkins-baby-24oz",
        code: "P-04 // PROVISIONS",
        rangeSlug: "pickles",
        name: "Baby Gherkins",
        shortName: "Baby Gherkins 24oz",
        description:
          "Adorable baby gherkins — tiny, crunchy, and packed with dill flavor.",
        weight: "24.3 OZ (689g)",
        sku: "180842",
        upc: "073490134579",
        image: "/products/pickles/180842.png",
        angles: ["/products/pickles/073490134579_T1.jpg"],
        kosher: true,
        features: [
          "Tiny Baby Gherkins",
          "Extra Crunchy",
          "Naturally Fermented",
          "No Artificial Preservatives",
        ],
      },
    ],
  },
  {
    slug: "salsa",
    name: "Salsa",
    tagline:
      "Brooklyn-made salsa — bold heat and fresh ingredients.",
    code: "PROVISIONS",
    image: "/products/salsa/image.png",
    products: [
      {
        slug: "salsa-hot",
        code: "P-01 // PROVISIONS",
        rangeSlug: "salsa",
        name: "Hot Salsa",
        shortName: "Hot Salsa 16oz",
        description:
          "Our hot salsa brings serious heat with fresh tomatoes, peppers, and Brooklyn attitude.",
        weight: "16 OZ (454g)",
        sku: "180838",
        upc: "073490134586",
        image: "/products/salsa/180838.png",
        angles: ["/products/salsa/073490134586_T1.jpg"],
        kosher: true,
        features: [
          "Hot Heat Level",
          "Fresh Ingredients",
          "Brooklyn Recipe",
          "No Artificial Preservatives",
        ],
      },
      {
        slug: "salsa-mild",
        code: "P-02 // PROVISIONS",
        rangeSlug: "salsa",
        name: "Mild Salsa",
        shortName: "Mild Salsa 16oz",
        description:
          "All the fresh flavor, easy on the heat. Our mild salsa is perfect for everyday snacking.",
        weight: "16 OZ (454g)",
        sku: "180839",
        upc: "073490134593",
        image: "/products/salsa/180839.png",
        angles: ["/products/salsa/073490134593_T1.jpg"],
        kosher: true,
        features: [
          "Mild Heat Level",
          "Fresh Ingredients",
          "Brooklyn Recipe",
          "No Artificial Preservatives",
        ],
      },
    ],
  },
];

export function getRangeBySlug(slug: string): ProductRange | undefined {
  return ranges.find((r) => r.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  for (const range of ranges) {
    const product = range.products.find((p) => p.slug === slug);
    if (product) return product;
  }
  return undefined;
}

export function getAllProductSlugs(): string[] {
  return ranges.flatMap((r) => r.products.map((p) => p.slug));
}

export function getAllRangeSlugs(): string[] {
  return ranges.filter((r) => r.products.length > 0).map((r) => r.slug);
}
