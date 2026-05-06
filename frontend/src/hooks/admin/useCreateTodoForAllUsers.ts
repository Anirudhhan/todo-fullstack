import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateTodoPayload } from "../../api/todo";
import { createTodoForAllUsers } from "../../api/admin";

export const useCreateTodoForAllUsers = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateTodoPayload) => createTodoForAllUsers(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-todos"],
      });

      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
