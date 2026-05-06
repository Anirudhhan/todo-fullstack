import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateUserSuspensionAdmin,
  type ToggleUserSuspensionPayload,
} from "../../api/admin";

interface ToggleSuspensionMutationPayload {
  userID: string;
  payload: ToggleUserSuspensionPayload;
}

export const useToggleUserSuspension = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userID, payload }: ToggleSuspensionMutationPayload) =>
      updateUserSuspensionAdmin(userID, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-users"],
      });
    },
  });
};
