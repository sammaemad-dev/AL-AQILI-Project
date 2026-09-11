import {
  getAllProductsApi,
  getProductByIdApi,
  addProductApi,
  updateProductApi,
  deleteProductApi,
} from "../api/productApi";

// NOTE: the Postman collection has no saved example response for the
// products endpoints, so the exact field names coming back from the
// API aren't confirmed. This maps the fields seen in the request
// bodies (name, subtitle, description, price, imageUrl, categoryId,
// averageRating) plus a few likely variants into the shape the UI
// components expect (id, name, price, image, rating, category...).
// Adjust the lookups below if the real API uses different keys.
function mapProduct(raw) {
  if (!raw) return null;

  return {
    id: raw.id ?? raw.productId,
    name: raw.name ?? "",
    subtitle: raw.subtitle ?? "",
    description: raw.description ?? "",
    price: raw.price ?? 0,
    image: raw.imageUrl ?? raw.image ?? "",
    rating: Math.round(raw.averageRating ?? raw.rating ?? 0),
    averageRating: raw.averageRating ?? raw.rating ?? 0,
    categoryId: raw.categoryId ?? raw.category?.id ?? null,
    category: raw.category?.name ?? raw.categoryName ?? "",
  };
}

function unwrapList(data) {
  return Array.isArray(data)
    ? data
    : data?.items ?? data?.data ?? data?.products ?? [];
}

// =========================
// Get All Products
// =========================
export const getAllProducts = async () => {
  const response = await getAllProductsApi();
  return unwrapList(response.data).map(mapProduct);
};

// =========================
// Get Product By Id
// =========================
export const getProductById = async (id) => {
  const response = await getProductByIdApi(id);
  return mapProduct(response.data);
};

// =========================
// Add Product
// =========================
export const addProduct = async ({
  name,
  subtitle,
  description,
  price,
  imageUrl,
  categoryId,
}) => {
  const response = await addProductApi({
    name,
    subtitle,
    description,
    price,
    imageUrl,
    categoryId,
  });

  return mapProduct(response.data);
};

// =========================
// Update Product
// =========================
export const updateProduct = async ({
  id,
  name,
  subtitle,
  description,
  price,
  imageUrl,
  averageRating,
  categoryId,
}) => {
  const response = await updateProductApi({
    id,
    name,
    subtitle,
    description,
    price,
    imageUrl,
    averageRating,
    categoryId,
  });

  return mapProduct(response.data);
};

// =========================
// Delete Product
// =========================
export const deleteProduct = async (id) => {
  await deleteProductApi(id);
  return id;
};
