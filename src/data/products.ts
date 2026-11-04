// Generated Nov 2026 from the original site data + the Kayco item master (read-only).
// Product facts (names, sizes, item #, UPC, kosher certification, storage) come from the item master;
// descriptions/features on the original 29 SKUs are the original site's copy. No prices or ratings.

export interface ProductVariant {
  label: string;
  weight: string;
  sku: string;
  upc: string;
  image: string;
  angles: string[];
  kosherCert?: string;
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
  /** Kosher certification as listed in the item master, e.g. "CRC · OU" */
  kosherCert?: string;
  /** Aisle from the item master temperature: Frozen | Refrigerated | Pantry */
  storage?: string;
  /** No product photo in the DAM yet: render the "photo coming soon" card */
  comingSoon?: boolean;
  /** Discontinued in the item master: hidden from listings + sitemap, page still resolves */
  discontinued?: boolean;
  isNew?: boolean;
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
    "slug": "smoked-fish",
    "name": "Smoked Fish",
    "tagline": "Cold-smoked Atlantic & Pacific selections, crafted in Brooklyn since 1892.",
    "code": "SMOKE_DEPT",
    "image": "/img/range-smoked-fish.webp",
    "products": [
      {
        "slug": "smoked-nova-salmon",
        "code": "P-01 // SMOKED_FISH",
        "rangeSlug": "smoked-fish",
        "name": "Smoked Nova Salmon",
        "shortName": "Nova Salmon",
        "description": "Classic cold-smoked Nova salmon, hand-sliced and ready to serve. The cornerstone of every Brooklyn brunch spread.",
        "weight": "4 OZ (113g)",
        "sku": "180714",
        "upc": "073490133220",
        "image": "/p/180714/01.webp",
        "angles": [
          "/p/180714/02.webp",
          "/p/180714/03.webp",
          "/p/180714/04.webp",
          "/p/180714/05.webp",
          "/p/180714/06.webp"
        ],
        "kosher": true,
        "features": [
          "Hand-Sliced Nova Style",
          "Cold-Smoked Over Fruitwood",
          "No Artificial Preservatives",
          "Ready to Serve"
        ],
        "variants": [
          {
            "label": "4 oz",
            "weight": "4 OZ (113g)",
            "sku": "180714",
            "upc": "073490133220",
            "image": "/p/180714/01.webp",
            "angles": [
              "/p/180714/02.webp",
              "/p/180714/03.webp",
              "/p/180714/04.webp",
              "/p/180714/05.webp",
              "/p/180714/06.webp"
            ]
          },
          {
            "label": "8 oz",
            "weight": "8 OZ (227g)",
            "sku": "180715",
            "upc": "073490133237",
            "image": "/p/180715/01.webp",
            "angles": [
              "/p/180715/02.webp",
              "/p/180715/03.webp",
              "/p/180715/04.webp",
              "/p/180715/05.webp",
              "/p/180715/06.webp"
            ]
          },
          {
            "label": "16 oz",
            "weight": "16 OZ (454g)",
            "sku": "180717",
            "upc": "073490133251",
            "image": "/p/180717/01.webp",
            "angles": [
              "/p/180717/02.webp",
              "/p/180717/03.webp",
              "/p/180717/04.webp",
              "/p/180717/05.webp",
              "/p/180717/06.webp"
            ]
          }
        ],
        "kosherCert": "OU · WS",
        "storage": "Refrigerated"
      },
      {
        "slug": "smoked-nova-tidbits-8oz",
        "code": "P-02 // SMOKED_FISH",
        "rangeSlug": "smoked-fish",
        "name": "Smoked Nova Salmon Tidbits",
        "shortName": "Nova Tidbits 8oz",
        "description": "Premium nova trimmings — perfect for salads, omelets, and pasta. All the flavor at a great value.",
        "weight": "8 OZ (227g)",
        "sku": "180716",
        "upc": "073490133244",
        "image": "/p/180716/01.webp",
        "angles": [
          "/p/180716/02.webp",
          "/p/180716/03.webp",
          "/p/180716/04.webp",
          "/p/180716/05.webp",
          "/p/180716/06.webp"
        ],
        "kosher": true,
        "features": [
          "Versatile Tidbit Cut",
          "Great for Cooking & Salads",
          "Cold-Smoked Premium Salmon",
          "No Artificial Preservatives"
        ],
        "kosherCert": "OU · WS",
        "storage": "Refrigerated"
      },
      {
        "slug": "smoked-pastrami-salmon-4oz",
        "code": "P-04 // SMOKED_FISH",
        "rangeSlug": "smoked-fish",
        "name": "Pastrami Style Smoked Salmon",
        "shortName": "Pastrami Style Salmon 4oz",
        "description": "A Brooklyn original — salmon cured with our pastrami spice blend. The perfect union of deli tradition and smoked fish craft.",
        "weight": "4 OZ (113g)",
        "sku": "180718",
        "upc": "073490133633",
        "image": "/p/180718/01.webp",
        "angles": [
          "/p/180718/02.webp",
          "/p/180718/03.webp",
          "/p/180718/04.webp",
          "/p/180718/05.webp",
          "/p/180718/06.webp"
        ],
        "kosher": true,
        "features": [
          "Pastrami Spice Crusted",
          "Brooklyn Original Recipe",
          "Cold-Smoked Premium Salmon",
          "No Artificial Preservatives"
        ],
        "kosherCert": "OU · WS",
        "storage": "Refrigerated"
      },
      {
        "slug": "smoked-everything-bagel-salmon-4oz",
        "code": "P-05 // SMOKED_FISH",
        "rangeSlug": "smoked-fish",
        "name": "Everything Bagel Smoked Salmon",
        "shortName": "Everything Bagel Salmon 4oz",
        "description": "Cold-smoked salmon crusted with our signature everything bagel seasoning. The bagel and lox experience in every bite.",
        "weight": "4 OZ (113g)",
        "sku": "180709",
        "upc": "073490134302",
        "image": "/p/180709/01.webp",
        "angles": [
          "/p/180709/02.webp",
          "/p/180709/03.webp",
          "/p/180709/04.webp",
          "/p/180709/05.webp"
        ],
        "kosher": true,
        "features": [
          "Everything Bagel Seasoning",
          "Cold-Smoked Premium Salmon",
          "Presliced & Ready to Eat",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · OU",
        "storage": "Refrigerated"
      },
      {
        "slug": "original-smoked-salmon",
        "code": "P-06 // SMOKED_FISH",
        "rangeSlug": "smoked-fish",
        "name": "Original Smoked Salmon",
        "shortName": "Original Smoked Salmon",
        "description": "Our classic hot-smoked salmon fillet. Rich, flaky, and full-flavored — the way it's been done since 1892.",
        "weight": "8 OZ (227g)",
        "sku": "180720",
        "upc": "",
        "image": "/p/180720/01.webp",
        "angles": [
          "/p/180720/02.webp",
          "/p/180720/03.webp"
        ],
        "kosher": true,
        "features": [
          "Traditional Hot-Smoked",
          "Whole Fillet",
          "Rich & Flaky Texture",
          "Original 1892 Recipe"
        ],
        "kosherCert": "OU · WS",
        "storage": "Refrigerated"
      },
      {
        "slug": "honey-maple-smoked-salmon",
        "code": "P-07 // SMOKED_FISH",
        "rangeSlug": "smoked-fish",
        "name": "Honey Maple Smoked Salmon",
        "shortName": "Honey Maple Salmon",
        "description": "Hot-smoked salmon glazed with pure honey and real maple syrup. A sweet and savory Brooklyn delicacy.",
        "weight": "8 OZ (227g)",
        "sku": "180721",
        "upc": "",
        "image": "/p/180721/01.webp",
        "angles": [
          "/p/180721/02.webp",
          "/p/180721/03.webp"
        ],
        "kosher": true,
        "features": [
          "Pure Honey & Maple Glaze",
          "Hot-Smoked Fillet",
          "Sweet & Savory Profile",
          "No Artificial Preservatives"
        ],
        "kosherCert": "OU · WS",
        "storage": "Refrigerated"
      },
      {
        "slug": "bbq-smoked-salmon",
        "code": "P-08 // SMOKED_FISH",
        "rangeSlug": "smoked-fish",
        "name": "BBQ Smoked Salmon",
        "shortName": "BBQ Smoked Salmon",
        "description": "Hot-smoked salmon with our signature Brooklyn BBQ rub. Bold, smoky, and unlike anything else in the deli case.",
        "weight": "8 OZ (227g)",
        "sku": "180722",
        "upc": "",
        "image": "/p/180722/01.webp",
        "angles": [
          "/p/180722/02.webp",
          "/p/180722/03.webp"
        ],
        "kosher": true,
        "features": [
          "Brooklyn BBQ Spice Rub",
          "Hot-Smoked Fillet",
          "Bold Smoky Flavor",
          "No Artificial Preservatives"
        ],
        "kosherCert": "OU · WS",
        "storage": "Refrigerated"
      },
      {
        "slug": "sesame-crusted-smoked-ahi-tuna",
        "code": "P-10 // SMOKED_FISH",
        "rangeSlug": "smoked-fish",
        "name": "Sesame Crusted Smoked Ahi Tuna",
        "shortName": "Smoked Ahi Tuna",
        "description": "Premium ahi tuna, sesame crusted and cold-smoked to perfection. Presliced and ready to eat — no artificial preservatives.",
        "weight": "3 OZ (85g)",
        "sku": "180725",
        "upc": "073490134319",
        "image": "/p/180725/01.webp",
        "angles": [
          "/p/180725/02.webp",
          "/p/180725/03.webp",
          "/p/180725/04.webp",
          "/p/180725/05.webp",
          "/p/180725/06.webp"
        ],
        "kosher": true,
        "features": [
          "Presliced & Ready to Eat",
          "No Artificial Preservatives",
          "Cold-Smoked Premium Ahi",
          "Sesame Crusted Finish"
        ],
        "kosherCert": "CRC · OU",
        "storage": "Refrigerated"
      },
      {
        "slug": "smoked-gravlax-4oz",
        "code": "",
        "rangeSlug": "smoked-fish",
        "name": "Smoked Gravlax",
        "shortName": "Gravlax 4oz",
        "description": "Old Williamsburg smoked gravlax in a 4 oz pack.",
        "weight": "4 OZ",
        "sku": "180719",
        "upc": "073490133640",
        "image": "/p/180719/01.webp",
        "angles": [],
        "kosher": false,
        "features": [],
        "kosherCert": "OU · WS",
        "storage": "Refrigerated",
        "isNew": true
      }
    ]
  },
  {
    "slug": "dried-meats",
    "name": "Dried Meats",
    "tagline": "Premium jerky and beef sticks — hand-trimmed, bold-flavored, and Brooklyn-made.",
    "code": "CURED_GOODS",
    "image": "/img/range-dried-meats.webp",
    "products": [
      {
        "slug": "jerky-smoky-bbq",
        "code": "P-01 // CURED_GOODS",
        "rangeSlug": "dried-meats",
        "name": "Beef Jerky Smoky Barbeque",
        "shortName": "Smoky Barbeque 2oz",
        "description": "Slow-smoked BBQ jerky made from hand-trimmed premium beef. Bold, smoky, and satisfying.",
        "weight": "2 OZ (57g)",
        "sku": "180771",
        "upc": "073490133893",
        "image": "/p/180771/01.webp",
        "angles": [
          "/p/180771/02.webp",
          "/p/180771/03.webp",
          "/p/180771/04.webp",
          "/p/180771/05.webp",
          "/p/180771/06.webp"
        ],
        "kosher": true,
        "features": [
          "Smoky BBQ Flavor",
          "Hand-Trimmed Beef",
          "High Protein Snack",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · MEAT",
        "storage": "Pantry"
      },
      {
        "slug": "jerky-pepper-crusted",
        "code": "P-02 // CURED_GOODS",
        "rangeSlug": "dried-meats",
        "name": "Beef Jerky Pepper Crusted",
        "shortName": "Pepper Crusted 2oz",
        "description": "Premium beef jerky crusted with cracked black pepper. A timeless classic with serious bite.",
        "weight": "2 OZ (57g)",
        "sku": "180772",
        "upc": "073490133909",
        "image": "/p/180772/01.webp",
        "angles": [
          "/p/180772/02.webp",
          "/p/180772/03.webp",
          "/p/180772/04.webp",
          "/p/180772/05.webp",
          "/p/180772/06.webp"
        ],
        "kosher": true,
        "features": [
          "Cracked Pepper Crust",
          "Hand-Trimmed Beef",
          "High Protein Snack",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · MEAT",
        "storage": "Pantry"
      },
      {
        "slug": "jerky-sweet-chipotle",
        "code": "P-03 // CURED_GOODS",
        "rangeSlug": "dried-meats",
        "name": "Beef Jerky Sweet Chipotle",
        "shortName": "Sweet Chipotle 2oz",
        "description": "Sweet meets smoky in our chipotle-glazed jerky. A perfect balance of heat and sweetness.",
        "weight": "2 OZ (57g)",
        "sku": "180773",
        "upc": "073490133923",
        "image": "/p/180773/01.webp",
        "angles": [
          "/p/180773/02.webp",
          "/p/180773/03.webp",
          "/p/180773/04.webp",
          "/p/180773/05.webp",
          "/p/180773/06.webp"
        ],
        "kosher": true,
        "features": [
          "Sweet Chipotle Glaze",
          "Hand-Trimmed Beef",
          "High Protein Snack",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · MEAT",
        "storage": "Pantry"
      },
      {
        "slug": "jerky-cherry-cola",
        "code": "P-04 // CURED_GOODS",
        "rangeSlug": "dried-meats",
        "name": "Beef Jerky Cherry Cola",
        "shortName": "Cherry Cola 2oz",
        "description": "Our most inventive flavor — premium beef jerky with a sweet cherry cola glaze. Brooklyn creativity at its finest.",
        "weight": "2 OZ (57g)",
        "sku": "180774",
        "upc": "073490133886",
        "image": "/p/180774/01.webp",
        "angles": [
          "/p/180774/02.webp",
          "/p/180774/03.webp",
          "/p/180774/04.webp",
          "/p/180774/05.webp",
          "/p/180774/06.webp"
        ],
        "kosher": true,
        "features": [
          "Cherry Cola Glaze",
          "Hand-Trimmed Beef",
          "High Protein Snack",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · MEAT",
        "storage": "Pantry"
      },
      {
        "slug": "jerky-teriyaki",
        "code": "P-05 // CURED_GOODS",
        "rangeSlug": "dried-meats",
        "name": "Beef Jerky Teriyaki",
        "shortName": "Teriyaki 2oz",
        "description": "Traditional teriyaki-glazed beef jerky. Sweet, savory, and impossibly tender.",
        "weight": "2 OZ (57g)",
        "sku": "180770",
        "upc": "073490133916",
        "image": "/p/180770/01.webp",
        "angles": [
          "/p/180770/02.webp",
          "/p/180770/03.webp",
          "/p/180770/04.webp",
          "/p/180770/05.webp",
          "/p/180770/06.webp"
        ],
        "kosher": true,
        "features": [
          "Classic Teriyaki Glaze",
          "Hand-Trimmed Beef",
          "High Protein Snack",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · MEAT",
        "storage": "Pantry"
      },
      {
        "slug": "beef-sticks-italian",
        "code": "P-06 // CURED_GOODS",
        "rangeSlug": "dried-meats",
        "name": "Craft Beef Sticks Italian",
        "shortName": "Italian Beef Sticks 3oz",
        "description": "Classic Italian-seasoned beef sticks made with premium cuts. A bold, savory snack rooted in Brooklyn tradition.",
        "weight": "3 OZ (85g)",
        "sku": "180785",
        "upc": "073490134067",
        "image": "/p/180785/01.webp",
        "angles": [
          "/p/180785/02.webp",
          "/p/180785/03.webp",
          "/p/180785/04.webp",
          "/p/180785/05.webp",
          "/p/180785/06.webp"
        ],
        "kosher": true,
        "features": [
          "Italian Seasoned",
          "Premium Beef",
          "Ready to Eat Snack",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · MEAT · OU",
        "storage": "Pantry",
        "discontinued": true
      },
      {
        "slug": "beef-sticks-kielbasa",
        "code": "P-07 // CURED_GOODS",
        "rangeSlug": "dried-meats",
        "name": "Craft Beef Sticks Kielbasa",
        "shortName": "Kielbasa Beef Sticks 3oz",
        "description": "Kielbasa-style beef sticks with a smoky, garlicky kick. Old-world flavor in every bite.",
        "weight": "3 OZ (85g)",
        "sku": "180786",
        "upc": "073490134074",
        "image": "/p/180786/01.webp",
        "angles": [
          "/p/180786/02.webp",
          "/p/180786/03.webp",
          "/p/180786/04.webp",
          "/p/180786/05.webp",
          "/p/180786/06.webp"
        ],
        "kosher": true,
        "features": [
          "Kielbasa Seasoned",
          "Premium Beef",
          "Ready to Eat Snack",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · MEAT · OU",
        "storage": "Pantry",
        "discontinued": true
      },
      {
        "slug": "beef-sticks-hot-spicy",
        "code": "P-08 // CURED_GOODS",
        "rangeSlug": "dried-meats",
        "name": "Craft Beef Sticks Hot 'N Spicy",
        "shortName": "Hot 'N Spicy Beef Sticks 3oz",
        "description": "Fiery beef sticks with our signature hot & spicy blend. For those who like it bold.",
        "weight": "3 OZ (85g)",
        "sku": "180787",
        "upc": "073490134081",
        "image": "/p/180787/01.webp",
        "angles": [
          "/p/180787/02.webp",
          "/p/180787/03.webp",
          "/p/180787/04.webp",
          "/p/180787/05.webp",
          "/p/180787/06.webp"
        ],
        "kosher": true,
        "features": [
          "Hot & Spicy Blend",
          "Premium Beef",
          "Ready to Eat Snack",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · MEAT · OU",
        "storage": "Pantry",
        "discontinued": true
      },
      {
        "slug": "beef-jerky-classic",
        "code": "",
        "rangeSlug": "dried-meats",
        "name": "Beef Jerky Classic",
        "shortName": "Classic 2oz",
        "description": "Old Williamsburg classic beef jerky in a 2 oz bag.",
        "weight": "2 OZ",
        "sku": "180740",
        "upc": "073490133817",
        "image": "",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · MEAT",
        "storage": "Pantry",
        "comingSoon": true,
        "isNew": true
      },
      {
        "slug": "jerky-bites-original-smokehouse",
        "code": "",
        "rangeSlug": "dried-meats",
        "name": "Jerky Bites Original Smokehouse",
        "shortName": "Original Smokehouse 2oz",
        "description": "Old Williamsburg jerky bites, Original Smokehouse flavor, 2 oz.",
        "weight": "2 OZ",
        "sku": "180820",
        "upc": "073490134500",
        "image": "",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · MEAT · OU",
        "storage": "Pantry",
        "comingSoon": true,
        "isNew": true
      },
      {
        "slug": "jerky-bites-ny-pastrami",
        "code": "",
        "rangeSlug": "dried-meats",
        "name": "Jerky Bites NY Pastrami",
        "shortName": "NY Pastrami 2oz",
        "description": "Old Williamsburg jerky bites, NY Pastrami flavor, 2 oz.",
        "weight": "2 OZ",
        "sku": "180821",
        "upc": "073490134517",
        "image": "",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · MEAT · OU",
        "storage": "Pantry",
        "comingSoon": true,
        "isNew": true
      },
      {
        "slug": "jerky-bites-korean-bbq",
        "code": "",
        "rangeSlug": "dried-meats",
        "name": "Jerky Bites Korean BBQ",
        "shortName": "Korean BBQ 2oz",
        "description": "Old Williamsburg jerky bites, Korean BBQ flavor, 2 oz.",
        "weight": "2 OZ",
        "sku": "180822",
        "upc": "073490134524",
        "image": "",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · MEAT · OU",
        "storage": "Pantry",
        "comingSoon": true,
        "isNew": true
      }
    ]
  },
  {
    "slug": "pizza",
    "name": "Pizza",
    "tagline": "Hand tossed, pizzeria style — made in New York.",
    "code": "COAL_FIRED",
    "image": "/img/range-pizza.webp",
    "products": [
      {
        "slug": "pizza-classic-8-slices",
        "code": "P-01 // COAL_FIRED",
        "rangeSlug": "pizza",
        "name": "Pizza Classic 8 Slices",
        "shortName": "Classic Pizza 8 Slices",
        "description": "Our classic cheese pizza — hand tossed, pizzeria style. Made in New York with 60% fruit juice mozzarella.",
        "weight": "34 OZ (964g)",
        "sku": "180750",
        "upc": "073490133718",
        "image": "/p/180750/01.webp",
        "angles": [
          "/p/180750/02.webp",
          "/p/180750/03.webp",
          "/p/180750/04.webp",
          "/p/180750/05.webp",
          "/p/180750/06.webp"
        ],
        "kosher": true,
        "features": [
          "Hand Tossed Crust",
          "Pizzeria Style",
          "8 Slices",
          "Made in New York"
        ],
        "kosherCert": "CRC · CY · Y",
        "storage": "Frozen"
      },
      {
        "slug": "pizza-white-whole-wheat",
        "code": "P-02 // COAL_FIRED",
        "rangeSlug": "pizza",
        "name": "Pizza White Whole Wheat",
        "shortName": "White Whole Wheat Pizza",
        "description": "Hand tossed, pizzeria style pizza made with white whole wheat crust. Made in New York.",
        "weight": "34 OZ (964g)",
        "sku": "180751",
        "upc": "073490133725",
        "image": "/p/180751/01.webp",
        "angles": [
          "/p/180751/02.webp",
          "/p/180751/03.webp",
          "/p/180751/04.webp",
          "/p/180751/05.webp"
        ],
        "kosher": true,
        "features": [
          "White Whole Wheat Crust",
          "Hand Tossed",
          "8 Slices",
          "Made in New York"
        ],
        "kosherCert": "CRC · CY · Y",
        "storage": "Frozen"
      },
      {
        "slug": "pizza-classic-4-slices",
        "code": "P-03 // COAL_FIRED",
        "rangeSlug": "pizza",
        "name": "Pizza Classic 4 Slices",
        "shortName": "Classic Pizza 4 Slices",
        "description": "Our classic cheese pizza in a convenient 4-slice size. Hand tossed, pizzeria style. Made in New York.",
        "weight": "17 OZ (482g)",
        "sku": "180752",
        "upc": "073490133732",
        "image": "/p/180752/01.webp",
        "angles": [
          "/p/180752/02.webp",
          "/p/180752/03.webp",
          "/p/180752/04.webp",
          "/p/180752/05.webp",
          "/p/180752/06.webp"
        ],
        "kosher": true,
        "features": [
          "Hand Tossed Crust",
          "Pizzeria Style",
          "4 Slices",
          "Made in New York"
        ],
        "kosherCert": "CRC · CY · Y",
        "storage": "Frozen"
      },
      {
        "slug": "mini-pizza-bagels",
        "code": "P-04 // COAL_FIRED",
        "rangeSlug": "pizza",
        "name": "Mini Pizza Bagels",
        "shortName": "Mini Pizza Bagels",
        "description": "12 mini pizza bagels, made in New York. Perfect for snacking or a quick bite.",
        "weight": "18.6 OZ (527g)",
        "sku": "180753",
        "upc": "073490133749",
        "image": "/p/180753/01.webp",
        "angles": [
          "/p/180753/02.webp",
          "/p/180753/03.webp",
          "/p/180753/04.webp",
          "/p/180753/05.webp",
          "/p/180753/06.webp"
        ],
        "kosher": true,
        "features": [
          "12 Mini Bagels",
          "Pizza Style",
          "Quick & Easy",
          "Made in New York"
        ],
        "kosherCert": "CRC · CY · Y",
        "storage": "Frozen"
      },
      {
        "slug": "pizza-dough-48oz",
        "code": "",
        "rangeSlug": "pizza",
        "name": "Pizza Dough",
        "shortName": "Pizza Dough 48oz",
        "description": "Old Williamsburg frozen pizza dough, 48 oz.",
        "weight": "48 OZ",
        "sku": "180757",
        "upc": "073490135101",
        "image": "/p/180757/01.webp",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · OU",
        "storage": "Frozen",
        "isNew": true
      }
    ]
  },
  {
    "slug": "pickles",
    "name": "Pickles & Gherkins",
    "tagline": "Crunchy dill pickles and gherkins — brined the old-fashioned Brooklyn way.",
    "code": "PROVISIONS",
    "image": "/img/range-pickles.webp",
    "products": [
      {
        "slug": "dill-pickles",
        "code": "P-01 // PROVISIONS",
        "rangeSlug": "pickles",
        "name": "Dill Pickles",
        "shortName": "Dill Pickles",
        "description": "Classic Brooklyn dill pickles, naturally fermented for maximum crunch and tangy flavor.",
        "weight": "24 OZ (680g)",
        "sku": "180767",
        "upc": "073490134166",
        "image": "/p/180767/01.webp",
        "angles": [
          "/p/180767/02.webp",
          "/p/180767/03.webp",
          "/p/180767/04.webp",
          "/p/180767/05.webp",
          "/p/180767/06.webp"
        ],
        "kosher": true,
        "features": [
          "Classic Dill Recipe",
          "Naturally Fermented",
          "Crunchy Texture",
          "No Artificial Preservatives"
        ],
        "variants": [
          {
            "label": "24 oz",
            "weight": "24 OZ (680g)",
            "sku": "180767",
            "upc": "073490134166",
            "image": "/p/180767/01.webp",
            "angles": [
              "/p/180767/02.webp",
              "/p/180767/03.webp",
              "/p/180767/04.webp",
              "/p/180767/05.webp",
              "/p/180767/06.webp"
            ]
          }
        ],
        "kosherCert": "CRC",
        "storage": "Pantry"
      },
      {
        "slug": "gherkins-dill-24oz",
        "code": "P-02 // PROVISIONS",
        "rangeSlug": "pickles",
        "name": "Gherkins",
        "shortName": "Gherkins 24oz",
        "description": "Petite dill gherkins with the perfect snap. Brined the old-fashioned way.",
        "weight": "24.3 OZ (689g)",
        "sku": "180840",
        "upc": "073490134388",
        "image": "/p/180840/01.webp",
        "angles": [
          "/p/180840/02.webp",
          "/p/180840/03.webp",
          "/p/180840/04.webp",
          "/p/180840/05.webp",
          "/p/180840/06.webp"
        ],
        "kosher": true,
        "features": [
          "Petite Dill Gherkins",
          "Naturally Fermented",
          "Perfect Crunch",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · P",
        "storage": "Pantry"
      },
      {
        "slug": "gherkins-jumbo-57oz",
        "code": "P-03 // PROVISIONS",
        "rangeSlug": "pickles",
        "name": "Jumbo Gherkins",
        "shortName": "Jumbo Gherkins 57oz",
        "description": "Jumbo-sized gherkins in a generous family jar. Big flavor, big crunch.",
        "weight": "57.48 OZ (1.63kg)",
        "sku": "180841",
        "upc": "073490134395",
        "image": "/p/180841/01.webp",
        "angles": [
          "/p/180841/02.webp",
          "/p/180841/03.webp",
          "/p/180841/04.webp",
          "/p/180841/05.webp",
          "/p/180841/06.webp"
        ],
        "kosher": true,
        "features": [
          "Jumbo Size Gherkins",
          "Family Size Jar",
          "Naturally Fermented",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · P",
        "storage": "Pantry"
      },
      {
        "slug": "gherkins-baby-24oz",
        "code": "P-04 // PROVISIONS",
        "rangeSlug": "pickles",
        "name": "Baby Gherkins",
        "shortName": "Baby Gherkins 24oz",
        "description": "Adorable baby gherkins — tiny, crunchy, and packed with dill flavor.",
        "weight": "24.3 OZ (689g)",
        "sku": "180842",
        "upc": "073490134579",
        "image": "/p/180842/01.webp",
        "angles": [
          "/p/180842/02.webp",
          "/p/180842/03.webp",
          "/p/180842/04.webp",
          "/p/180842/05.webp",
          "/p/180842/06.webp"
        ],
        "kosher": true,
        "features": [
          "Tiny Baby Gherkins",
          "Extra Crunchy",
          "Naturally Fermented",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · P",
        "storage": "Pantry"
      }
    ]
  },
  {
    "slug": "salsa",
    "name": "Salsa",
    "tagline": "Brooklyn-made salsa — bold heat and fresh ingredients.",
    "code": "PROVISIONS",
    "image": "/img/range-salsa.webp",
    "products": [
      {
        "slug": "salsa-hot",
        "code": "P-01 // PROVISIONS",
        "rangeSlug": "salsa",
        "name": "Hot Salsa",
        "shortName": "Hot Salsa 16oz",
        "description": "Our hot salsa brings serious heat with fresh tomatoes, peppers, and Brooklyn attitude.",
        "weight": "16 OZ (454g)",
        "sku": "180838",
        "upc": "073490134586",
        "image": "/p/180838/01.webp",
        "angles": [
          "/p/180838/02.webp",
          "/p/180838/03.webp",
          "/p/180838/04.webp",
          "/p/180838/05.webp",
          "/p/180838/06.webp"
        ],
        "kosher": true,
        "features": [
          "Hot Heat Level",
          "Fresh Ingredients",
          "Brooklyn Recipe",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · OU · P",
        "storage": "Pantry"
      },
      {
        "slug": "salsa-mild",
        "code": "P-02 // PROVISIONS",
        "rangeSlug": "salsa",
        "name": "Mild Salsa",
        "shortName": "Mild Salsa 16oz",
        "description": "All the fresh flavor, easy on the heat. Our mild salsa is perfect for everyday snacking.",
        "weight": "16 OZ (454g)",
        "sku": "180839",
        "upc": "073490134593",
        "image": "/p/180839/01.webp",
        "angles": [
          "/p/180839/02.webp",
          "/p/180839/03.webp",
          "/p/180839/04.webp",
          "/p/180839/05.webp",
          "/p/180839/06.webp"
        ],
        "kosher": true,
        "features": [
          "Mild Heat Level",
          "Fresh Ingredients",
          "Brooklyn Recipe",
          "No Artificial Preservatives"
        ],
        "kosherCert": "CRC · OU · P",
        "storage": "Pantry"
      }
    ]
  },
  {
    "slug": "sauces",
    "name": "Sauces & Mustards",
    "tagline": "Mustards, mayos and BBQ sauces for the whole spread.",
    "code": "",
    "image": "",
    "products": [
      {
        "slug": "volcano-sauce",
        "code": "",
        "rangeSlug": "sauces",
        "name": "Volcano Sauce",
        "shortName": "Volcano 12oz",
        "description": "Old Williamsburg Volcano Sauce, 12 oz.",
        "weight": "12 OZ",
        "sku": "180830",
        "upc": "073490134531",
        "image": "",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · OU",
        "storage": "Pantry",
        "comingSoon": true,
        "isNew": true
      },
      {
        "slug": "rotev-pizza-sauce",
        "code": "",
        "rangeSlug": "sauces",
        "name": "Rotev Pizza Sauce",
        "shortName": "Rotev Pizza 12oz",
        "description": "Old Williamsburg Rotev Pizza Sauce, 12 oz.",
        "weight": "12 OZ",
        "sku": "180831",
        "upc": "073490134548",
        "image": "/p/180831/01.webp",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · OU",
        "storage": "Pantry",
        "isNew": true
      },
      {
        "slug": "spicy-mayo",
        "code": "",
        "rangeSlug": "sauces",
        "name": "Spicy Mayo",
        "shortName": "Spicy Mayo 12oz",
        "description": "Old Williamsburg Spicy Mayo, 12 oz.",
        "weight": "12 OZ",
        "sku": "180832",
        "upc": "073490134555",
        "image": "/p/180832/01.webp",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · OU",
        "storage": "Pantry",
        "isNew": true
      },
      {
        "slug": "garlic-mayo",
        "code": "",
        "rangeSlug": "sauces",
        "name": "Garlic Mayo",
        "shortName": "Garlic Mayo 12oz",
        "description": "Old Williamsburg Garlic Mayo, 12 oz.",
        "weight": "12 OZ",
        "sku": "180833",
        "upc": "073490134562",
        "image": "/p/180833/01.webp",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · OU",
        "storage": "Pantry",
        "isNew": true
      },
      {
        "slug": "stone-ground-mustard",
        "code": "",
        "rangeSlug": "sauces",
        "name": "Stone Ground Mustard",
        "shortName": "Stone Ground 10oz",
        "description": "Old Williamsburg Stone Ground Mustard, 10 oz.",
        "weight": "10 OZ",
        "sku": "180850",
        "upc": "073490134616",
        "image": "/p/180850/01.webp",
        "angles": [
          "/p/180850/02.webp",
          "/p/180850/03.webp",
          "/p/180850/04.webp"
        ],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC",
        "storage": "Pantry",
        "isNew": true
      },
      {
        "slug": "sweet-hot-mustard",
        "code": "",
        "rangeSlug": "sauces",
        "name": "Sweet Hot Mustard",
        "shortName": "Sweet Hot 10oz",
        "description": "Old Williamsburg Sweet Hot Mustard, 10 oz.",
        "weight": "10 OZ",
        "sku": "180851",
        "upc": "073490134623",
        "image": "/p/180851/01.webp",
        "angles": [
          "/p/180851/02.webp"
        ],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC",
        "storage": "Pantry",
        "isNew": true
      },
      {
        "slug": "craft-beer-mustard",
        "code": "",
        "rangeSlug": "sauces",
        "name": "Craft Beer Mustard",
        "shortName": "Craft Beer 10oz",
        "description": "Old Williamsburg Craft Beer Mustard, 10 oz.",
        "weight": "10 OZ",
        "sku": "180852",
        "upc": "073490134630",
        "image": "/p/180852/01.webp",
        "angles": [
          "/p/180852/02.webp"
        ],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC",
        "storage": "Pantry",
        "isNew": true
      },
      {
        "slug": "bbq-sauce-original",
        "code": "",
        "rangeSlug": "sauces",
        "name": "BBQ Sauce Original",
        "shortName": "Original BBQ 18oz",
        "description": "Old Williamsburg BBQ Sauce Original, 18 oz.",
        "weight": "18 OZ",
        "sku": "180855",
        "upc": "073490134647",
        "image": "/p/180855/01.webp",
        "angles": [
          "/p/180855/02.webp"
        ],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · OU",
        "storage": "Pantry",
        "isNew": true
      },
      {
        "slug": "bbq-sauce-bourbon",
        "code": "",
        "rangeSlug": "sauces",
        "name": "BBQ Sauce Bourbon",
        "shortName": "Bourbon BBQ 18oz",
        "description": "Old Williamsburg BBQ Sauce Bourbon, 18 oz.",
        "weight": "18 OZ",
        "sku": "180856",
        "upc": "073490134654",
        "image": "/p/180856/01.webp",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · OU",
        "storage": "Pantry",
        "isNew": true
      },
      {
        "slug": "bbq-sauce-cherry",
        "code": "",
        "rangeSlug": "sauces",
        "name": "BBQ Sauce Cherry",
        "shortName": "Cherry BBQ 18oz",
        "description": "Old Williamsburg BBQ Sauce Cherry, 18 oz.",
        "weight": "18 OZ",
        "sku": "180857",
        "upc": "073490134661",
        "image": "/p/180857/01.webp",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · OU",
        "storage": "Pantry",
        "isNew": true
      },
      {
        "slug": "bbq-sauce-chipotle",
        "code": "",
        "rangeSlug": "sauces",
        "name": "BBQ Sauce Chipotle",
        "shortName": "Chipotle BBQ 18oz",
        "description": "Old Williamsburg BBQ Sauce Chipotle, 18 oz.",
        "weight": "18 OZ",
        "sku": "180858",
        "upc": "073490134678",
        "image": "/p/180858/01.webp",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · OU",
        "storage": "Pantry",
        "isNew": true
      }
    ]
  },
  {
    "slug": "kugels-knishes",
    "name": "Kugels & Knishes",
    "tagline": "Lukshen and potato kugels, plus potato knishes from the freezer aisle.",
    "code": "",
    "image": "",
    "products": [
      {
        "slug": "yerushalmi-lukshen-kugel",
        "code": "",
        "rangeSlug": "kugels-knishes",
        "name": "Yerushalmi Lukshen Kugel",
        "shortName": "Yerushalmi 14.1oz",
        "description": "Old Williamsburg Yerushalmi Lukshen Kugel, 14.1 oz.",
        "weight": "14.1 OZ",
        "sku": "180680",
        "upc": "073490134845",
        "image": "",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC",
        "storage": "Refrigerated",
        "comingSoon": true,
        "isNew": true
      },
      {
        "slug": "sweet-lukshen-kugel",
        "code": "",
        "rangeSlug": "kugels-knishes",
        "name": "Sweet Lukshen Kugel",
        "shortName": "Sweet Lukshen 14.1oz",
        "description": "Old Williamsburg Sweet Lukshen Kugel, 14.1 oz.",
        "weight": "14.1 OZ",
        "sku": "180681",
        "upc": "073490134852",
        "image": "",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC",
        "storage": "Refrigerated",
        "comingSoon": true,
        "isNew": true
      },
      {
        "slug": "potato-kugel",
        "code": "",
        "rangeSlug": "kugels-knishes",
        "name": "Potato Kugel",
        "shortName": "Potato Kugel 14.1oz",
        "description": "Old Williamsburg Potato Kugel, 14.1 oz.",
        "weight": "14.1 OZ",
        "sku": "180682",
        "upc": "073490134869",
        "image": "",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC",
        "storage": "Refrigerated",
        "comingSoon": true,
        "isNew": true,
        "variants": [
          {
            "label": "Year-round",
            "weight": "14.1 OZ",
            "sku": "180682",
            "upc": "073490134869",
            "image": "",
            "angles": [],
            "kosherCert": "CRC"
          },
          {
            "label": "Passover",
            "weight": "14.1 OZ",
            "sku": "180685",
            "upc": "073490134876",
            "image": "",
            "angles": [],
            "kosherCert": "CRC · P"
          }
        ]
      },
      {
        "slug": "potato-knishes",
        "code": "",
        "rangeSlug": "kugels-knishes",
        "name": "Potato Knishes",
        "shortName": "Potato Knishes 19oz",
        "description": "Old Williamsburg Potato Knishes, 19 oz.",
        "weight": "19 OZ",
        "sku": "180690",
        "upc": "073490134821",
        "image": "",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC",
        "storage": "Frozen",
        "comingSoon": true,
        "isNew": true
      },
      {
        "slug": "mini-potato-knishes",
        "code": "",
        "rangeSlug": "kugels-knishes",
        "name": "Mini Potato Knishes",
        "shortName": "Mini Knishes 12.7oz",
        "description": "Old Williamsburg Mini Potato Knishes, 12.7 oz.",
        "weight": "12.7 OZ",
        "sku": "180691",
        "upc": "073490134838",
        "image": "",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC",
        "storage": "Frozen",
        "comingSoon": true,
        "isNew": true
      }
    ]
  },
  {
    "slug": "cold-brew",
    "name": "Cold Brew Coffee",
    "tagline": "Cold brew coffee in 48 oz bottles: medium roast, dark roast and vanilla.",
    "code": "",
    "image": "",
    "products": [
      {
        "slug": "cold-brew-medium-roast",
        "code": "",
        "rangeSlug": "cold-brew",
        "name": "Cold Brew Coffee Medium Roast",
        "shortName": "Medium Roast 48oz",
        "description": "Old Williamsburg Cold Brew Coffee Medium Roast, 48 oz.",
        "weight": "48 OZ",
        "sku": "180815",
        "upc": "073490134333",
        "image": "/p/180815/01.webp",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · OU",
        "storage": "Refrigerated",
        "isNew": true
      },
      {
        "slug": "cold-brew-dark-roast",
        "code": "",
        "rangeSlug": "cold-brew",
        "name": "Cold Brew Coffee Dark Roast",
        "shortName": "Dark Roast 48oz",
        "description": "Old Williamsburg Cold Brew Coffee Dark Roast, 48 oz.",
        "weight": "48 OZ",
        "sku": "180816",
        "upc": "073490134340",
        "image": "/p/180816/01.webp",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · OU",
        "storage": "Refrigerated",
        "isNew": true
      },
      {
        "slug": "cold-brew-vanilla",
        "code": "",
        "rangeSlug": "cold-brew",
        "name": "Cold Brew Coffee Vanilla",
        "shortName": "Vanilla 48oz",
        "description": "Old Williamsburg Cold Brew Coffee Vanilla, 48 oz.",
        "weight": "48 OZ",
        "sku": "180817",
        "upc": "073490134357",
        "image": "",
        "angles": [],
        "kosher": true,
        "features": [],
        "kosherCert": "CRC · OU",
        "storage": "Refrigerated",
        "comingSoon": true,
        "isNew": true
      }
    ]
  }
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

/** Products shown in listings (discontinued items stay reachable by URL only). */
export function listed(products: Product[]): Product[] {
  return products.filter((p) => !p.discontinued);
}

export const allProducts: Product[] = ranges.flatMap((r) => r.products);
