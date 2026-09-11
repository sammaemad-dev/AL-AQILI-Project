import apiClient from "./apiClient";

export const getAllCategoriesApi = () => {
  return apiClient.post("/categories/Get/All/Categories");
};

export const getCategoryByIdApi = (id) => {
  return apiClient.post(`/categories/Get/Category/By/${id}`);
};
