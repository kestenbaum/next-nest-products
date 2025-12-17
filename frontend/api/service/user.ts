import { AxiosInstance } from "axios";
import { apiInstance } from "@/api";
import { IUserProfile } from "@/lib/types/user";

export class UserService {
    private axios: AxiosInstance = apiInstance;

    public async getUser () {
        const response = await this.axios.get<IUserProfile>("/user/profile");
        return response.data;
    }

    public async isAdmin () {
        try {
            const user = await this.getUser();
            return user.role === "admin";
        } catch (e) {
            console.error(e);
            return false;
        }
    }
}

export const userService = new UserService();