import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markTodoCompleted } from "../../api/todo";

export const useMarkTodoCompleted = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todoID: string) => markTodoCompleted(todoID),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
