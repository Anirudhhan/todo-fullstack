import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../../api/todo";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todoID: string) => deleteTodo(todoID),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
