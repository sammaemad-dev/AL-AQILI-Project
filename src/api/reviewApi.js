import apiClient from "./apiClient";

export const createReviewApi = (data) => {
  return apiClient.post("/reviews", data);
};

export const getReviewsApi = (params = {}) => {
  return apiClient.get("/reviews", { params });
};

export const deleteReviewApi = (id) => {
  return apiClient.delete(`/reviews/${id}`);
};