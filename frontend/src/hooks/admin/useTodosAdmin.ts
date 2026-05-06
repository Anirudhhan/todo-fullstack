import { useQuery } from "@tanstack/react-query";
import type { GetTodosParams } from "../../api/todo";
import { getTodosAdmin } from "../../api/admin";

export const useTodosAdmin = (params?: GetTodosParams) => {
  return useQuery({
    queryKey: ["admin-todos", params],
    queryFn: () => getTodosAdmin(params),
  });
};
