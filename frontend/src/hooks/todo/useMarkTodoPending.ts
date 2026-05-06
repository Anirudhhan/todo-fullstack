import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markTodoPending } from "../../api/todo";

export const useMarkTodoPending = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todoID: string) => markTodoPending(todoID),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
