import { getAllCategoriesApi, getCategoryByIdApi } from "../api/categoryApi";

// NOTE: same as productService - the collection has no saved example
// response for the categories endpoints, so field names are guessed
// from common conventions. Adjust if the real API differs.
function mapCategory(raw) {
  if (!raw) return null;

  return {
    id: raw.id ?? raw.categoryId,
    name: raw.name ?? raw.categoryName ?? "",
  };
}

function unwrapList(data) {
  return Array.isArray(data)
    ? data
    : data?.items ?? data?.data ?? data?.categories ?? [];
}

// =========================
// Get All Categories
// =========================
export const getAllCategories = async () => {
  const response = await getAllCategoriesApi();
  return unwrapList(response.data).map(mapCategory);
};

// =========================
// Get Category By Id
// =========================
export const getCategoryById = async (id) => {
  const response = await getCategoryByIdApi(id);
  return mapCategory(response.data);
};
