import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateTodoPayload } from "../../api/todo";
import { createTodoForUserAdmin } from "../../api/admin";

interface CreateTodoForUserPayload {
  userID: string;
  payload: CreateTodoPayload;
}

export const useCreateTodoForUserAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userID, payload }: CreateTodoForUserPayload) =>
      createTodoForUserAdmin(userID, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-todos"],
      });
    },
  });
};
