import { AxiosInstance } from "axios";
import { apiInstance } from "@/api";
import { IUserProfile } from "@/types/user";

export class UserService {
    private axios: AxiosInstance = apiInstance;

    public async getUser () {
        const response = await this.axios.get<IUserProfile>("/user/profile");
        return response.data;
    }
}

export const userService = new UserService();