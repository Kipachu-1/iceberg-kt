import { TUser, TUserQueryParams } from "@/types";
import axios from "axios";

const BASE_URL = "https://dummyjson.com/users";
export class UserAPI {
  static async getUsers(
    options: TUserQueryParams = { limit: 5, skip: 10 }
  ): Promise<TUser[]> {
    const response = await axios.get(BASE_URL, {
      params: options,
    });
    return response.data.users;
  }
}
