import { useMutation } from "@tanstack/react-query";
import { loginUser, type LoginUserPayload } from "../../api/auth";

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginUserPayload) => loginUser(payload),
  });
};
