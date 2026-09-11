import apiClient from "./apiClient";

export const getAllProductsApi = () => {
  return apiClient.post("/products/Get/All/Products");
};

export const getProductByIdApi = (id) => {
  return apiClient.post(`/products/Get/Product/By/${id}`);
};

export const addProductApi = (data) => {
  return apiClient.post("/products/Add/Product", data);
};

export const updateProductApi = (data) => {
  return apiClient.put("/products/Update/Product", data);
};

export const deleteProductApi = (id) => {
  return apiClient.delete(`/products/Delete/Product/${id}`);
};
