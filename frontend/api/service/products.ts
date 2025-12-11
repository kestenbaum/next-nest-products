import { AxiosInstance } from "axios";
import { apiInstance } from "@/api";

interface IProduct {
    id: number;
    title: string;
    description: string;
}

class ProductService {
    private axios: AxiosInstance = apiInstance;

    public async getAllProducts(): Promise<IProduct[]> {
        const response = await this.axios.get('/products')
        return response.data;
    }
}

export const productService = new ProductService();