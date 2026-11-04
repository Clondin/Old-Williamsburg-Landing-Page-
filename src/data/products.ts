// Generated Nov 2026 from the original site data + the Kayco item master (read-only).
// Product facts (names, sizes, item #, UPC, kosher certification, storage) come from the item master;
// descriptions/features: the original site's copy, tightened Nov 2026 (no new claims). No prices or ratings.

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
    "tagline": "Nova, gravlax, hot-smoked fillets and smoked ahi. In Brooklyn since 1892.",
    "code": "SMOKE_DEPT",
    "image": "/img/range-smoked-fish.webp",
    "products": [
      {
        "slug": "smoked-nova-salmon",
        "code": "P-01 // SMOKED_FISH",
        "rangeSlug": "smoked-fish",
        "name": "Smoked Nova Salmon",
        "shortName": "Nova Salmon",
        "description": "Cold-smoked Nova salmon, hand-sliced and ready to serve. Made for the bagel.",
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
          "Hand-sliced, Nova style",
          "Cold-smoked over fruitwood",
          "No artificial preservatives",
          "Ready to serve"
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
        "description": "Nova trimmings for salads, omelets and pasta. Same smoked salmon, better value.",
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
          "Tidbit cut",
          "Cold-smoked salmon",
          "No artificial preservatives"
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
        "description": "Salmon cured with our pastrami spice blend, then cold-smoked.",
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
          "Pastrami spice crust",
          "Cold-smoked salmon",
          "No artificial preservatives"
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
        "description": "Cold-smoked salmon crusted with everything bagel seasoning. Presliced.",
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
          "Everything bagel seasoning",
          "Presliced, ready to eat",
          "No artificial preservatives"
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
        "description": "A whole hot-smoked salmon fillet. Rich and flaky. Our original 1892 recipe.",
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
          "Hot-smoked",
          "Whole fillet",
          "Original 1892 recipe"
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
        "description": "Hot-smoked salmon fillet glazed with honey and maple syrup.",
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
          "Honey and maple glaze",
          "Hot-smoked fillet",
          "No artificial preservatives"
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
        "description": "Hot-smoked salmon fillet with our BBQ spice rub.",
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
          "BBQ spice rub",
          "Hot-smoked fillet",
          "No artificial preservatives"
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
        "description": "Ahi tuna, crusted in sesame and cold-smoked. Presliced and ready to eat.",
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
          "Sesame crust",
          "Cold-smoked ahi",
          "Presliced, ready to eat",
          "No artificial preservatives"
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
        "description": "Smoked gravlax, 4 oz. Find it in the refrigerated fish case.",
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
    "tagline": "Beef jerky in six flavors, cut from hand-trimmed beef, plus jerky bites in three.",
    "code": "CURED_GOODS",
    "image": "/img/range-dried-meats.webp",
    "products": [
      {
        "slug": "jerky-smoky-bbq",
        "code": "P-01 // CURED_GOODS",
        "rangeSlug": "dried-meats",
        "name": "Beef Jerky Smoky Barbeque",
        "shortName": "Smoky Barbeque 2oz",
        "description": "Hand-trimmed beef jerky, slow-smoked with a BBQ glaze.",
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
          "Smoky BBQ",
          "Hand-trimmed beef",
          "High protein",
          "No artificial preservatives"
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
        "description": "Hand-trimmed beef jerky crusted with cracked black pepper.",
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
          "Cracked black pepper",
          "Hand-trimmed beef",
          "High protein",
          "No artificial preservatives"
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
        "description": "Beef jerky with a sweet chipotle glaze. Some heat, some sweet.",
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
          "Sweet chipotle glaze",
          "Hand-trimmed beef",
          "High protein",
          "No artificial preservatives"
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
        "description": "Hand-trimmed beef jerky with a cherry cola glaze.",
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
          "Cherry cola glaze",
          "Hand-trimmed beef",
          "High protein",
          "No artificial preservatives"
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
        "description": "Hand-trimmed beef jerky with a teriyaki glaze. Sweet and savory.",
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
          "Teriyaki glaze",
          "Hand-trimmed beef",
          "High protein",
          "No artificial preservatives"
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
        "description": "Beef sticks with Italian seasoning.",
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
          "Italian seasoning",
          "Ready to eat",
          "No artificial preservatives"
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
        "description": "Kielbasa-style beef sticks, smoky with garlic.",
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
          "Kielbasa seasoning",
          "Ready to eat",
          "No artificial preservatives"
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
        "description": "Beef sticks with a hot and spicy blend.",
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
          "Hot and spicy",
          "Ready to eat",
          "No artificial preservatives"
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
        "description": "Classic beef jerky in a 2 oz bag.",
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
        "description": "Bite-size beef jerky, Original Smokehouse flavor. 2 oz bag.",
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
        "description": "Bite-size beef jerky, NY Pastrami flavor. 2 oz bag.",
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
        "description": "Bite-size beef jerky, Korean BBQ flavor. 2 oz bag.",
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
    "tagline": "Hand-tossed, pizzeria-style frozen pizza made in New York, plus pizza bagels and dough.",
    "code": "COAL_FIRED",
    "image": "/img/range-pizza.webp",
    "products": [
      {
        "slug": "pizza-classic-8-slices",
        "code": "P-01 // COAL_FIRED",
        "rangeSlug": "pizza",
        "name": "Pizza Classic 8 Slices",
        "shortName": "Classic Pizza 8 Slices",
        "description": "Classic cheese pizza, hand-tossed and pizzeria style. Eight slices. Made in New York.",
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
          "Hand-tossed crust",
          "8 slices",
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
        "description": "Hand-tossed, pizzeria-style cheese pizza on a white whole wheat crust. Made in New York.",
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
          "White whole wheat crust",
          "8 slices",
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
        "description": "The classic cheese pizza in a four-slice size. Hand-tossed, pizzeria style. Made in New York.",
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
          "Hand-tossed crust",
          "4 slices",
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
        "description": "Twelve mini pizza bagels for snacks and quick lunches. Made in New York.",
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
          "12 mini bagels",
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
        "description": "Frozen pizza dough for homemade pies, 48 oz. Pairs with Rotev Pizza Sauce.",
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
    "tagline": "Naturally fermented dill pickles and gherkins, from baby to jumbo.",
    "code": "PROVISIONS",
    "image": "/img/range-pickles.webp",
    "products": [
      {
        "slug": "dill-pickles",
        "code": "P-01 // PROVISIONS",
        "rangeSlug": "pickles",
        "name": "Dill Pickles",
        "shortName": "Dill Pickles",
        "description": "Dill pickles, naturally fermented for crunch and tang.",
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
          "Dill",
          "Naturally fermented",
          "No artificial preservatives"
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
        "description": "Petite dill gherkins with a clean snap, brined the old-fashioned way.",
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
          "Petite dill gherkins",
          "Naturally fermented",
          "No artificial preservatives"
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
        "description": "Jumbo dill gherkins in a family-size jar.",
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
          "Jumbo size",
          "Family-size jar",
          "Naturally fermented",
          "No artificial preservatives"
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
        "description": "Baby gherkins: tiny, crunchy and full of dill.",
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
          "Baby gherkins",
          "Naturally fermented",
          "No artificial preservatives"
        ],
        "kosherCert": "CRC · P",
        "storage": "Pantry"
      }
    ]
  },
  {
    "slug": "salsa",
    "name": "Salsa",
    "tagline": "Hot and mild, 16 oz each.",
    "code": "PROVISIONS",
    "image": "/img/range-salsa.webp",
    "products": [
      {
        "slug": "salsa-hot",
        "code": "P-01 // PROVISIONS",
        "rangeSlug": "salsa",
        "name": "Hot Salsa",
        "shortName": "Hot Salsa 16oz",
        "description": "Hot salsa made with tomatoes and peppers. It has real heat.",
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
          "Hot",
          "No artificial preservatives"
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
        "description": "Mild salsa with tomatoes and peppers. Easy on the heat.",
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
          "Mild",
          "No artificial preservatives"
        ],
        "kosherCert": "CRC · OU · P",
        "storage": "Pantry"
      }
    ]
  },
  {
    "slug": "sauces",
    "name": "Sauces & Mustards",
    "tagline": "Three mustards, two mayos, four BBQ sauces, pizza sauce and Volcano Sauce.",
    "code": "",
    "image": "",
    "products": [
      {
        "slug": "volcano-sauce",
        "code": "",
        "rangeSlug": "sauces",
        "name": "Volcano Sauce",
        "shortName": "Volcano 12oz",
        "description": "Volcano Sauce, 12 oz.",
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
        "description": "Pizza sauce for homemade pies, 12 oz. Pairs with our frozen pizza dough.",
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
        "description": "Spicy mayo, 12 oz. For sandwiches, fries and dipping.",
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
        "description": "Garlic mayo, 12 oz. For sandwiches, burgers and dipping.",
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
        "description": "Stone ground mustard, 10 oz.",
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
        "description": "Sweet hot mustard, 10 oz.",
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
        "description": "Craft beer mustard, 10 oz.",
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
        "description": "Original BBQ sauce, 18 oz.",
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
        "description": "Bourbon BBQ sauce, 18 oz.",
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
        "description": "Cherry BBQ sauce, 18 oz.",
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
        "description": "Chipotle BBQ sauce, 18 oz.",
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
    "tagline": "Yerushalmi, sweet lukshen and potato kugels. Potato knishes, regular and mini.",
    "code": "",
    "image": "",
    "products": [
      {
        "slug": "yerushalmi-lukshen-kugel",
        "code": "",
        "rangeSlug": "kugels-knishes",
        "name": "Yerushalmi Lukshen Kugel",
        "shortName": "Yerushalmi 14.1oz",
        "description": "Yerushalmi lukshen kugel, 14.1 oz. In the refrigerated case.",
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
        "description": "Sweet lukshen kugel, 14.1 oz. In the refrigerated case.",
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
        "description": "Potato kugel, 14.1 oz. In the refrigerated case.",
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
        "description": "Potato knishes, 19 oz. In the freezer aisle.",
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
        "description": "Mini potato knishes, 12.7 oz. In the freezer aisle.",
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
    "tagline": "Medium roast, dark roast and vanilla, in 48 oz bottles.",
    "code": "",
    "image": "",
    "products": [
      {
        "slug": "cold-brew-medium-roast",
        "code": "",
        "rangeSlug": "cold-brew",
        "name": "Cold Brew Coffee Medium Roast",
        "shortName": "Medium Roast 48oz",
        "description": "Medium roast cold brew coffee in a 48 fl oz bottle. Keep refrigerated.",
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
        "description": "Dark roast cold brew coffee in a 48 fl oz bottle. Keep refrigerated.",
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
        "description": "Vanilla cold brew coffee in a 48 fl oz bottle. Keep refrigerated.",
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
