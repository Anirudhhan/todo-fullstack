import { api } from "./axios";

export interface RegisterUserPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  session_id: string;
}

export const registerUser = async (payload: RegisterUserPayload) => {
  const response = await api.post("/register", payload);

  return response.data;
};

export const loginUser = async (
  payload: LoginUserPayload,
): Promise<AuthResponse> => {
  const response = await api.post("/login", payload);

  const data = response.data;

  localStorage.setItem("access_token", data.token);
  localStorage.setItem("session_id", data.session_id);

  return data;
};

export const logoutUser = async () => {
  await api.put("/logout");

  localStorage.removeItem("access_token");
  localStorage.removeItem("session_id");
};

export const refreshAccessToken = async () => {
  const sessionID = localStorage.getItem("session_id");

  const response = await api.post(
    "/refresh",
    {},
    {
      headers: {
        Authorization: sessionID,
      },
    },
  );

  const token = response.data.token;

  localStorage.setItem("access_token", token);

  return token;
};
