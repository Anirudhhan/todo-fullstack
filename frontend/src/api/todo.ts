import { api } from "./axios";

export type TodoStatus = "completed" | "pending" | "incomplete";

export interface Todo {
  id: string;
  user_id: string;
  name: string;
  description: string;
  pending_at: string | null;
  completed_at: string | null;
  created_at: string;
  archived_at?: string | null;
}

export interface CreateTodoPayload {
  name: string;
  description?: string;
  pending_at?: string | null;
}

export interface UpdateTodoPayload {
  name?: string;
  description?: string;
  pending_at?: string | null;
  completed_at?: string | null;
}

export interface GetTodosParams {
  status?: TodoStatus;
  search?: string;
  page?: number;
  limit?: number;
}

export interface GetTodosResponse {
  page: number;
  limit: number;
  todos: Todo[];
}

export const getTodos = async (
  params?: GetTodosParams,
): Promise<GetTodosResponse> => {
  const response = await api.get("/todo", {
    params,
  });

  return response.data;
};

export const getTodoByID = async (todoID: string): Promise<Todo> => {
  const response = await api.get(`/todo/${todoID}`);

  return response.data;
};

export const createTodo = async (payload: CreateTodoPayload) => {
  const response = await api.post("/todo", payload);

  return response.data;
};

export const updateTodo = async (
  todoID: string,
  payload: UpdateTodoPayload,
) => {
  const response = await api.put(`/todo/${todoID}`, payload);

  return response.data;
};

export const deleteTodo = async (todoID: string) => {
  const response = await api.delete(`/todo/${todoID}`);

  return response.data;
};

export const markTodoCompleted = async (todoID: string) => {
  return updateTodo(todoID, {
    completed_at: new Date().toISOString(),
  });
};

export const markTodoPending = async (todoID: string) => {
  return updateTodo(todoID, {
    completed_at: null,
  });
};
