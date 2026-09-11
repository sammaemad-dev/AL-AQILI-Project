import apiClient from "./apiClient";

export const loginApi = (data) => {
  return apiClient.post("/auth/login", data);
};

export const registerApi = (data) => {
  return apiClient.post("/auth/register", data);
};

export const refreshTokenApi = (data) => {
  return apiClient.post("/auth/refresh-token", data);
};

export const getCurrentUserApi = () => {
  return apiClient.get("/auth/me");
};

export const logoutApi = (data) => {
  return apiClient.post("/auth/logout", data);
};