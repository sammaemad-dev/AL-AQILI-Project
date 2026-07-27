import { useState, useMemo, useCallback, useEffect } from "react";
import "./Menu.css";
import MenuHeader from "./MenuHeader";
import MenuCard from "./MenuCard";
import { menuItems, categories } from "./MenuData";

export default function Menu({ cart, setCart }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery]       = useState("");
  const [toastItem, setToastItem]           = useState(null);
  const [toastVisible, setToastVisible]     = useState(false);

  const filteredItems = useMemo(() =>
    menuItems.filter((item) => {
      const matchCat    = activeCategory === "all" || item.category.includes(activeCategory);
      const matchSearch = !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    }),
    [activeCategory, searchQuery]
  );

  const totalCartItems = useMemo(
    () => Object.values(cart).reduce((s, q) => s + q, 0),
    [cart]
  );

  const handleAddToCart = useCallback((item) => {
    setCart((prev) => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }));
    setToastItem(item);
    setToastVisible(true);
  }, [setCart]);

  useEffect(() => {
    if (!toastVisible) return;
    const t = setTimeout(() => setToastVisible(false), 1800);
    return () => clearTimeout(t);
  }, [toastVisible, toastItem]);

  const sectionLabel = useMemo(() => {
    if (activeCategory === "all") return "All Coffees";
    return categories.find((c) => c.id === activeCategory)?.label || activeCategory;
  }, [activeCategory]);

  return (
    <div className="menu-page">
      <MenuHeader
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={totalCartItems}
      />

      <main className="menu-page__body">
        {filteredItems.length === 0 ? (
          <div className="menu-page__empty">
            <div className="menu-page__empty-icon">☕</div>
            <p className="menu-page__empty-text">No items found.</p>
          </div>
        ) : (
          <>
            <h2 className="menu-page__section-title">{sectionLabel}</h2>
            <div className="menu-page__grid">
              {filteredItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onAdd={handleAddToCart}
                  cartCount={cart[item.id] || 0}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <div className={`menu-toast${toastVisible ? " menu-toast--visible" : ""}`}>
        {toastItem ? `${toastItem.name} added to cart ☕` : ""}
      </div>
    </div>
  );
}