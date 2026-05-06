import { useQuery } from "@tanstack/react-query";
import { getAllUsersAdmin, type GetUsersParams } from "../../api/admin";

export const useUsersAdmin = (params?: GetUsersParams) => {
  return useQuery({
    queryKey: ["admin-users", params],
    queryFn: () => getAllUsersAdmin(params),
  });
};
