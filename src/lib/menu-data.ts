/**
 * Menu — single source of truth, ported verbatim from the printed menu
 * (Downloads/menus.html). Prices in NPR. ★ = "Most Loved".
 */

export type Dish = {
  name: string;
  price?: string; // omitted = "ask"/seasonal
  fav?: boolean;
  note?: string;
};

export type GridRow = {
  name: string;
  fav?: boolean;
  cells: string[];
};

export type MenuSection =
  | {
      id: string;
      title: string;
      kind: "list";
      columns?: 1 | 2;
      note?: string;
      items: Dish[];
    }
  | {
      id: string;
      title: string;
      kind: "grid";
      note?: string;
      headers: string[];
      rows: GridRow[];
    };

/** Signature sekuwa, grilled to order — by the skewer (jir) or by weight. */
export const sekuwaColumns = ["Meat", "1 Jir", "Half Kg", "1 Kg"] as const;
export const sekuwaPricing: {
  meat: string;
  jir: string;
  half: string;
  full: string;
  fav?: boolean;
}[] = [
  { meat: "Chicken", jir: "80", half: "600", full: "1100", fav: true },
  { meat: "Buff", jir: "80", half: "600", full: "1100" },
  { meat: "Mutton", jir: "150", half: "1000", full: "1800", fav: true },
  { meat: "Pork", jir: "90", half: "700", full: "1300" },
];

/** The six "Most Loved · Chef's Signatures" for the highlight strip. */
export const signatures: (Dish & { blurb: string; img: string })[] = [
  { name: "Chicken Sekuwa", price: "600 / half", fav: true, blurb: "Charcoal-grilled, timur-marinated — our flagship.", img: "/food/sekuwa-chicken.jpg" },
  { name: "Buff Chhoila", price: "300", fav: true, blurb: "Smoked buff tossed in mustard oil & fire-spice.", img: "/food/chhoila.jpg" },
  { name: "Mutton Sekuwa", price: "1000 / half", fav: true, blurb: "Tender mutton, low over the coals.", img: "/food/sekuwa-mutton.jpg" },
  { name: "Buff Sukuti", price: "300", fav: true, blurb: "Dry-cured, chewy, deeply savoury.", img: "/food/sukuti.jpg" },
  { name: "Chicken Momo", price: "150", fav: true, blurb: "Hand-folded steamed dumplings.", img: "/food/momo.jpg" },
  { name: "Mutton Pakku", price: "550", fav: true, blurb: "Slow-cooked, rich and aromatic.", img: "/food/pakku.jpg" },
];

export const menu: MenuSection[] = [
  {
    id: "non-veg",
    title: "Non-Veg",
    kind: "list",
    columns: 2,
    items: [
      { name: "Chicken Roast", price: "300" },
      { name: "Chicken Chilly", price: "300" },
      { name: "Chicken Boil", price: "250" },
      { name: "Chicken Boil / Fry Sadeko", price: "270" },
      { name: "Chicken Sadeko", price: "250" },
      { name: "Chicken Sausage", price: "80" },
      { name: "Crispy Chicken", price: "300" },
      { name: "Buff Chilly", price: "300" },
      { name: "Buff Chhoila", price: "300", fav: true },
      { name: "Buff Sukuti", price: "300", fav: true },
      { name: "Buff Sadeko", price: "250" },
      { name: "Buff Sausage", price: "80" },
      { name: "Pork Chilly", price: "300" },
      { name: "Pork Tawa", price: "350" },
      { name: "Mutton Bhuttan", price: "300" },
      { name: "Mutton Tas", price: "550" },
      { name: "Mutton Pakku", price: "550", fav: true },
    ],
  },
  {
    id: "veg",
    title: "Veg",
    kind: "list",
    columns: 2,
    items: [
      { name: "Bhatmas Sadeko", price: "150" },
      { name: "French Fry", price: "220" },
      { name: "French Fries Chilly", price: "250" },
      { name: "Fruit Salad", price: "350" },
      { name: "Nepali Green Salad", price: "250" },
      { name: "Paneer Pakoda", price: "250" },
      { name: "Paneer Chilly", price: "300" },
      { name: "Mushroom Chilly", price: "250" },
      { name: "Peanut Sadeko", price: "200" },
      { name: "Plain Peanuts", price: "100" },
      { name: "WaiWai Sadeko", price: "150" },
      { name: "Soyabean Chhoila", price: "180" },
      { name: "Jira Aalu", price: "150" },
      { name: "Timur Aalu", price: "200" },
      { name: "Lasun Poleko", price: "100" },
      { name: "Onion Pakoda", price: "180" },
      { name: "Papad", price: "100" },
      { name: "Sweet Corn", price: "200" },
      { name: "Veg Boiled", price: "250" },
    ],
  },
  {
    id: "momo",
    title: "Momo",
    kind: "grid",
    headers: ["Type", "Steam", "Fry", "Jhol", "Kothe", "C-Momo"],
    rows: [
      { name: "Chicken", cells: ["150", "170", "180", "210", "220"] },
      { name: "Buff", cells: ["150", "170", "180", "210", "220"] },
    ],
  },
  {
    id: "fried-rice",
    title: "Fried Rice",
    kind: "list",
    items: [
      { name: "Veg", price: "220" },
      { name: "Chicken", price: "300" },
      { name: "Egg", price: "250 / 280", note: "single / double" },
      { name: "Buff", price: "300" },
      { name: "Mix", price: "350" },
    ],
  },
  {
    id: "chowmein",
    title: "Chowmein",
    kind: "list",
    items: [
      { name: "Veg", price: "150" },
      { name: "Buff", price: "170" },
      { name: "Chicken", price: "200" },
    ],
  },
  {
    id: "noodles-eggs",
    title: "Noodles & Eggs",
    kind: "list",
    columns: 2,
    items: [
      { name: "Plain Omelet", price: "50" },
      { name: "Masala Omelet", price: "80" },
      { name: "Plain Maggie Noodle", price: "100" },
      { name: "Egg Maggie Noodle", price: "150 / 180", note: "single / double" },
      { name: "Sausage Egg Maggie Noodle", price: "230", note: "single" },
      { name: "Plain Current Noodle", price: "100", fav: true },
      { name: "Egg Current Noodle", price: "150 / 180", note: "single / double" },
      { name: "Sausage Egg Current Noodle", price: "230", note: "single" },
    ],
  },
  {
    id: "khaja-set",
    title: "Khaja Set",
    kind: "list",
    items: [
      { name: "Chicken / Buff / Pork Sekuwa Khaja Set", price: "250" },
      { name: "Veg Khaja Set", price: "280" },
      { name: "Buff Khaja Set", price: "300" },
      { name: "Chicken Khaja Set", price: "300" },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    kind: "list",
    items: [
      { name: "Black Tea", price: "30" },
      { name: "Lemon Tea", price: "35" },
      { name: "Milk Tea", price: "40" },
      { name: "Hot Lemon", price: "50" },
      { name: "Hot Lemon w/ Honey / Ginger", price: "120 / 130" },
      { name: "Black Coffee", price: "80" },
      { name: "Milk Coffee", price: "120" },
    ],
  },
  {
    id: "lassi-mocktails",
    title: "Lassi & Mocktails",
    kind: "list",
    items: [
      { name: "Plain Lassi", price: "120" },
      { name: "Special Lassi", price: "180" },
      { name: "Virgin Mojito", price: "180" },
      { name: "Blue Lagoon", price: "220" },
    ],
  },
  {
    id: "cold-drinks",
    title: "Cold Drinks",
    kind: "list",
    items: [
      { name: "Fanta / Coke / Dew", price: "100 / glass" },
      { name: "Xtreme", price: "200" },
      { name: "Redbull Original (small)", price: "200" },
      { name: "Redbull Original (big)", price: "300" },
      { name: "Water", price: "30 / bottle" },
    ],
  },
  {
    id: "alcohol",
    title: "Alcohol",
    kind: "list",
    items: [
      { name: "Gorkha Beer", price: "450" },
      { name: "Tuborg Beer", price: "500" },
      { name: "8848 Vodka", price: "2800" },
      { name: "Old Durbar Whisky", price: "3500" },
    ],
  },
  {
    id: "cigarette",
    title: "Cigarette",
    kind: "list",
    items: [
      { name: "Shikhar Ice", price: "25" },
      { name: "Surya", price: "30" },
    ],
  },
];

/** Category chips for the sticky menu nav. */
export const menuCategories = menu.map((s) => ({ id: s.id, title: s.title }));
