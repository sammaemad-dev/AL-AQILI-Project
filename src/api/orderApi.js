import apiClient from "./apiClient";

// =========================
// Customer Orders
// =========================
export const addOrderApi = (data) => {
  return apiClient.post("/orders", data);
};

export const getOrdersApi = (params = {}) => {
  return apiClient.get("/orders", { params });
};

export const getOrderByIdApi = (id) => {
  return apiClient.get(`/orders/${id}`);
};

// =========================
// Admin Orders
// =========================
export const getAdminOrdersApi = (params = {}) => {
  return apiClient.get("/admin/orders", { params });
};

export const updateOrderStatusApi = (id, newStatus) => {
  return apiClient.patch(`/admin/orders/${id}/status`, { newStatus });
};
