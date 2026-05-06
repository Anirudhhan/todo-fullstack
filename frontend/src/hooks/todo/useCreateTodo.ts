import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo, type CreateTodoPayload } from "../../api/todo";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateTodoPayload) => createTodo(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
