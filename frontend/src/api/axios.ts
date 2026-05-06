import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const sessionID = localStorage.getItem("session_id");

        if (!sessionID) {
          throw new Error("missing session");
        }

        const response = await axios.post(
          "http://localhost:8080/v1/refresh",
          {},
          {
            headers: {
              "X-Session-ID": sessionID,
            },
          },
        );

        const newAccessToken = response.data.token;

        localStorage.setItem("access_token", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("session_id");

        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
