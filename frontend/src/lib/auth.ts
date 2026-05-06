export const ACCESS_TOKEN_KEY = "access_token";
export const SESSION_ID_KEY = "session_id";
export const USER_ROLE_KEY = "user_role";

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const getSessionID = () => {
  return localStorage.getItem(SESSION_ID_KEY);
};

export const getUserRole = () => {
  return localStorage.getItem(USER_ROLE_KEY);
};

export const isAuthenticated = () => {
  return !!getAccessToken();
};

export const clearAuthStorage = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(SESSION_ID_KEY);
  localStorage.removeItem(USER_ROLE_KEY);
};
