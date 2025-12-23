// Brand mapping per category folder
const BRAND_MAP = {
  CategoryOne: "Brand A",
  CategoryTwo: "Brand Q",
  CategoryThree: "Brand X",
  CategoryFour: "Brand B",
  CategoryFive: "Brand Book",
  CategorySix: "Brand Tech",
  CategorySeven: "Brand Home",
};

// Optional store / seller
const STORE_NAME = "GoCart";

// Dynamically generate products from assets folders
const makeProducts = (categoryFolder, count = 12) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${categoryFolder}-${i + 1}`,
    image: new URL(
      `../assets/${categoryFolder}/Pic${i + 1}.png`,
      import.meta.url
    ).href,
    name: `Product ${i + 1}`,
    brand: BRAND_MAP[categoryFolder] || "Unknown Brand", // ✅ FIX
    store: STORE_NAME, // ✅ separated from brand
    price: Number((Math.random() * 100 + 10).toFixed(2)),
  }));

export const productsByCategory = {
  "Food and Drinks": makeProducts("CategoryOne"),
  "Fashion and Clothing": makeProducts("CategoryTwo"),
  Accessory: makeProducts("CategoryThree"),
  "Skincare and Beauty": makeProducts("CategoryFour"),
  Books: makeProducts("CategoryFive"),
  Electronics: makeProducts("CategorySix"),
  Household: makeProducts("CategorySeven"),
};
