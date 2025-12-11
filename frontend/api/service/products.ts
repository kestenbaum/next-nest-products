import { AxiosInstance } from "axios";
import { apiInstance } from "@/api";
import { IProduct } from "@/types/product";

class ProductService {
    private axios: AxiosInstance = apiInstance;

    public async getAllProducts(): Promise<IProduct[]> {
        const response = await this.axios.get('/products')
        return response.data;
    }

    public async getProduct(id: number): Promise<IProduct> {
        const response = await this.axios.get(`/products/${id}`);
        return response.data;
    }
}

export const productService = new ProductService();