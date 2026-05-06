import { useMutation } from "@tanstack/react-query";
import { registerUser, type RegisterUserPayload } from "../../api/auth";

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: RegisterUserPayload) => registerUser(payload),
  });
};
