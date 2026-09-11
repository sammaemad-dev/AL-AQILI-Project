import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";
import { getAllCategories } from "../services/categoryService";

// Fetches all products + categories from the real API, then narrows the
// products down to the ones belonging to `categoryLabel` (e.g. "Wall Lights").
// Matching is done by name (case-insensitive, partial) since we don't know
// the exact category names/ids the backend uses ahead of time.
export function useCategoryProducts(categoryLabel) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        setLoading(true);
        setError("");

        const [allProducts, allCategories] = await Promise.all([
          getAllProducts(),
          getAllCategories(),
        ]);

        const label = categoryLabel.toLowerCase();

        const matchedCategory = allCategories.find((c) => {
          const name = (c?.name || "").toLowerCase();
          return name.includes(label) || label.includes(name);
        });

        const filtered = matchedCategory
          ? allProducts.filter((p) => p.categoryId === matchedCategory.id)
          : allProducts;

        if (isMounted) setProducts(filtered);
      } catch (err) {
        console.error("Get Category Products Error:", err);

        if (isMounted) {
          setError(
            err.response?.data?.message || "Failed to load products."
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [categoryLabel]);

  return { products, loading, error };
}
