import { useQuery } from "@tanstack/react-query";
import { getTodos, type GetTodosParams } from "../../api/todo";

export const useTodos = (params?: GetTodosParams) => {
  return useQuery({
    queryKey: ["todos", params],
    queryFn: () => getTodos(params),
  });
};
