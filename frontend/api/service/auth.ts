import { AxiosInstance } from "axios";
import { apiInstance } from "@/api";
import { UserRegister } from "@/types/user";

interface ILoginRequest {
    email: string;
    password: string;
}

interface ILoginResponse {
    access_token: string;
}

export class AuthService {
    private axios: AxiosInstance = apiInstance;

    public async login(data: ILoginRequest): Promise<ILoginResponse> {
        const response = await this.axios.post<ILoginResponse>('/auth/login', data);
        return response.data;
    }

    public async register(data: UserRegister): Promise<UserRegister> {
        const response = await this.axios.post<UserRegister>('/auth/register', data);
        return response.data
    }
}

export const authService = new AuthService();