export const categories = [
  { id: "all", label: "All" },
  { id: "hot", label: "Hot Coffee" },
  { id: "cold", label: "Cold Coffee" },
  { id: "espresso", label: "Espresso" },
  { id: "cappuccino", label: "Cappuccino" },
  { id: "latte", label: "Latte" },
  { id: "americano", label: "Americano" },
];

export const menuItems = [
  // ── HOT COFFEE ──────────────────────────────────────────
  { id: 1,  name: "Cappuccino",   subtitle: "with Chocolate",    price: 400, rating: 4.8, category: ["all","cappuccino","hot"],  image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=85" },
  { id: 2,  name: "Cappuccino",   subtitle: "with Oat Milk",     price: 450, rating: 4.6, category: ["all","cappuccino","hot"],  image: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=600&q=85" },
  { id: 3,  name: "Macchiato",    subtitle: "with Caramel",      price: 420, rating: 4.7, category: ["all","hot"],               image: "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=600&q=85" },
  { id: 4,  name: "Flat White",   subtitle: "Rich & Velvety",    price: 430, rating: 4.6, category: ["all","hot"],               image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&q=85" },
  { id: 5,  name: "Mocha",        subtitle: "Dark Chocolate",    price: 490, rating: 4.8, category: ["all","hot"],               image: "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?w=600&q=85" },
  { id: 6,  name: "Cortado",      subtitle: "Balanced & Smooth", price: 370, rating: 4.5, category: ["all","hot"],               image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=85" },

  // ── COLD COFFEE ─────────────────────────────────────────
  { id: 7,  name: "Iced Latte",   subtitle: "with Vanilla",      price: 480, rating: 4.6, category: ["all","latte","cold"],      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=85" },
  { id: 8,  name: "Iced Mocha",   subtitle: "with Chocolate",    price: 500, rating: 4.8, category: ["all","cold"],              image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=85" },
  { id: 9,  name: "Cold Brew",    subtitle: "Slow Steeped",      price: 460, rating: 4.7, category: ["all","cold"],              image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=85" },
  { id: 10, name: "Frappuccino",  subtitle: "Blended Caramel",   price: 520, rating: 4.7, category: ["all","cold"],              image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=85" },
  { id: 11, name: "Iced Americano", subtitle: "Pure & Crisp",    price: 380, rating: 4.5, category: ["all","cold","americano"],  image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=85" },
  { id: 12, name: "Nitro Cold Brew", subtitle: "Smooth & Bold",  price: 540, rating: 4.9, category: ["all","cold"],             image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=600&q=85" },

  // ── ESPRESSO ────────────────────────────────────────────
  { id: 13, name: "Espresso",     subtitle: "Strong & Bold",     price: 300, rating: 4.5, category: ["all","espresso","hot"],    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=85" },
  { id: 14, name: "Double Shot",  subtitle: "Extra Intense",     price: 340, rating: 4.7, category: ["all","espresso","hot"],    image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=600&q=85" },
  { id: 15, name: "Ristretto",    subtitle: "Short & Concentrated", price: 320, rating: 4.6, category: ["all","espresso","hot"], image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=85" },
  { id: 16, name: "Lungo",        subtitle: "Long Pull",         price: 310, rating: 4.4, category: ["all","espresso","hot"],    image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&q=85" },
  { id: 17, name: "Affogato",     subtitle: "Espresso & Gelato", price: 450, rating: 4.9, category: ["all","espresso"],          image: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?w=600&q=85" },
  { id: 18, name: "Cortado Shot", subtitle: "Milk Balanced",     price: 360, rating: 4.5, category: ["all","espresso","hot"],    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=600&q=85" },

  // ── CAPPUCCINO ──────────────────────────────────────────
  { id: 19, name: "Classic Cappuccino", subtitle: "Velvety Foam",   price: 400, rating: 4.8, category: ["all","cappuccino","hot"], image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=85" },
  { id: 20, name: "Dry Cappuccino",     subtitle: "Less Milk",       price: 390, rating: 4.5, category: ["all","cappuccino","hot"], image: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=600&q=85" },
  { id: 21, name: "Wet Cappuccino",     subtitle: "Extra Creamy",    price: 410, rating: 4.6, category: ["all","cappuccino","hot"], image: "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=600&q=85" },
  { id: 22, name: "Iced Cappuccino",    subtitle: "Chilled Foam",    price: 440, rating: 4.7, category: ["all","cappuccino","cold"], image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=85" },
  { id: 23, name: "Cinnamon Cap",       subtitle: "Spiced Warmth",   price: 430, rating: 4.6, category: ["all","cappuccino","hot"], image: "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?w=600&q=85" },
  { id: 24, name: "Hazelnut Cap",       subtitle: "Nutty & Rich",    price: 450, rating: 4.8, category: ["all","cappuccino","hot"], image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=85" },

  // ── LATTE ───────────────────────────────────────────────
  { id: 25, name: "Latte",         subtitle: "Smooth & Creamy",  price: 430, rating: 4.7, category: ["all","latte","hot"],       image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=600&q=85" },
  { id: 26, name: "Vanilla Latte", subtitle: "Sweet & Silky",    price: 460, rating: 4.8, category: ["all","latte","hot"],       image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&q=85" },
  { id: 27, name: "Caramel Latte", subtitle: "Golden Sweet",     price: 470, rating: 4.7, category: ["all","latte","hot"],       image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=85" },
  { id: 28, name: "Matcha Latte",  subtitle: "Green & Earthy",   price: 490, rating: 4.6, category: ["all","latte","hot"],       image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=85" },
  { id: 29, name: "Oat Latte",     subtitle: "Plant-Based Silk", price: 480, rating: 4.5, category: ["all","latte","hot"],       image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=85" },
  { id: 30, name: "Rose Latte",    subtitle: "Floral & Warm",    price: 500, rating: 4.8, category: ["all","latte","hot"],       image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=85" },

  // ── AMERICANO ───────────────────────────────────────────
  { id: 31, name: "Americano",       subtitle: "Classic Black",    price: 350, rating: 4.5, category: ["all","americano","hot"],  image: "https://images.unsplash.com/photo-1534687941688-651ccaafbff8?w=600&q=85" },
  { id: 32, name: "Long Black",      subtitle: "Espresso on Water",price: 360, rating: 4.6, category: ["all","americano","hot"],  image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=85" },
  { id: 33, name: "White Americano", subtitle: "Dash of Cream",    price: 380, rating: 4.5, category: ["all","americano","hot"],  image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=85" },
  { id: 34, name: "Iced Americano",  subtitle: "Pure & Crisp",     price: 380, rating: 4.6, category: ["all","americano","cold"], image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=600&q=85" },
  { id: 35, name: "Honey Americano", subtitle: "Subtle Sweetness", price: 400, rating: 4.7, category: ["all","americano","hot"],  image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=600&q=85" },
  { id: 36, name: "Spiced Americano",subtitle: "Cinnamon Kick",    price: 390, rating: 4.5, category: ["all","americano","hot"],  image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=85" },
];