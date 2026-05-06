import { api } from "./axios";
import type {
  CreateTodoPayload,
  GetTodosParams,
  GetTodosResponse,
} from "./todo";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  created_at: string;
  archived_at: string | null;
  suspended_at: string | null;
}

export interface GetUsersParams {
  search?: string;
  page?: number;
  limit?: number;
}

export interface GetUsersResponse {
  page: number;
  limit: number;
  total: number;
  users: User[];
}

export interface ToggleUserSuspensionPayload {
  suspended: boolean;
}

export const getAllUsersAdmin = async (
  params?: GetUsersParams,
): Promise<GetUsersResponse> => {
  const response = await api.get("/admin/users", {
    params,
  });

  return response.data;
};

export const updateUserSuspensionAdmin = async (
  userID: string,
  payload: ToggleUserSuspensionPayload,
) => {
  const response = await api.patch(`/admin/user/${userID}`, payload);

  return response.data;
};

export const getTodosAdmin = async (
  params?: GetTodosParams,
): Promise<GetTodosResponse> => {
  const response = await api.get("/admin/todos", {
    params,
  });

  return response.data;
};

export const createTodoForUserAdmin = async (
  userID: string,
  payload: CreateTodoPayload,
) => {
  const response = await api.post(`/admin/users/${userID}/todos`, payload);

  return response.data;
};

export const createTodoForAllUsers = async (payload: CreateTodoPayload) => {
  const response = await api.post("/admin/todos/all", payload);

  return response.data;
};
