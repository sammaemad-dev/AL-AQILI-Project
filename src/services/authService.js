import { loginApi, registerApi } from "../api/authApi";

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