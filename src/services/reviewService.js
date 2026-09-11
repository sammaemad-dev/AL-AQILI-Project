import { createReviewApi, getReviewsApi, deleteReviewApi } from "../api/reviewApi";

// NOTE: the Postman collection has no saved example response for
// /reviews, so the exact field names coming back from the API aren't
// confirmed. This maps a few likely shapes into what the UI needs.
// If the real response uses different keys, adjust the lookups below.
function mapReview(raw) {
  return {
    id: raw.id ?? raw.reviewId,
    name:
      raw.userName ??
      raw.customerName ??
      raw.fullName ??
      raw.user?.fullName ??
      "Anonymous",
    review: raw.comment ?? raw.text ?? raw.review ?? "",
    rating: raw.rating ?? 0,
    createdAt: raw.createdAt ?? raw.date ?? null,
  };
}

// =========================
// Get Reviews (paginated)
// =========================
export const getReviews = async ({
  productId = "",
  page = 1,
  pageSize = 20,
} = {}) => {
  const response = await getReviewsApi({ productId, page, pageSize });
  const data = response.data;

  // Handle either a plain array or a wrapped/paginated object.
  const rawList = Array.isArray(data)
    ? data
    : data.items ?? data.data ?? data.reviews ?? [];

  return rawList.map(mapReview);
};

// =========================
// Create Review
// =========================
export const createReview = async ({ productId = null, rating, comment }) => {
  const response = await createReviewApi({ productId, rating, comment });
  return mapReview(response.data);
};

// =========================
// Delete Review
// =========================
export const deleteReview = async (id) => {
  await deleteReviewApi(id);
  return id;
};