import { UserAPI } from "@/api";
import { TUser, TUserQueryParams } from "@/types";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

type THookProps = {
  params: TUserQueryParams;
} & Omit<UseQueryOptions<TUser[]>, "queryKey" | "queryFn">;

type THookResult = {
  users: TUser[];
} & Omit<UseQueryResult<TUser[]>, "data">;

export const useUsers = ({
  params,
  ...queryProps
}: THookProps): THookResult => {
  const { data: users, ...queryResults } = useQuery<TUser[]>({
    queryKey: ["users-key"],
    queryFn: () => UserAPI.getUsers(params),
    ...queryProps,
  });

  return {
    users: users || [],
    ...queryResults,
  };
};
