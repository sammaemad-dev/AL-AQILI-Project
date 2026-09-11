import {
  loginApi,
  registerApi,
  refreshTokenApi,
  getCurrentUserApi,
  logoutApi,
} from "../api/authApi";

// =========================
// Register
// =========================
export const register = async (registerData) => {
  const response = await registerApi(registerData);

  return response.data;
};

// =========================
// Login
// =========================
export const login = async (loginData) => {
  const response = await loginApi(loginData);

  const data = response.data;

  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);

  localStorage.setItem(
    "user",
    JSON.stringify({
      userId: data.userId,
      email: data.email,
      fullName: data.fullName,
      role: data.role,
    })
  );

  return data;
};

// =========================
// Refresh Token
// =========================
export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    throw new Error("No refresh token available.");
  }

  const response = await refreshTokenApi({ refreshToken });
  const data = response.data;

  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);

  return data;
};

// =========================
// Current User (GET /auth/me)
// =========================
export const getCurrentUser = async () => {
  const response = await getCurrentUserApi();
  return response.data;
};

// =========================
// Logout
// =========================
export const logoutUser = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  try {
    if (refreshToken) {
      await logoutApi({ refreshToken });
    }
  } finally {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  }
};