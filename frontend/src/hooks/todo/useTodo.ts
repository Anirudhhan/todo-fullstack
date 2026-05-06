import { useQuery } from "@tanstack/react-query";
import { getTodoByID } from "../../api/todo";

export const useTodo = (todoID: string) => {
  return useQuery({
    queryKey: ["todo", todoID],
    queryFn: () => getTodoByID(todoID),
    enabled: !!todoID,
  });
};
