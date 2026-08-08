import apiClient from "./apiClient";

export const loginApi = (data) => {
  return apiClient.post("/auth/login", data);
};

export const registerApi = (data) => {
  return apiClient.post("/auth/register", data);
};