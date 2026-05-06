import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo, type UpdateTodoPayload } from "../../api/todo";

interface UpdateTodoMutationPayload {
  todoID: string;
  payload: UpdateTodoPayload;
}

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ todoID, payload }: UpdateTodoMutationPayload) =>
      updateTodo(todoID, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
