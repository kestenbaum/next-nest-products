import { AxiosInstance } from "axios";
import { apiInstance } from "@/api";
import { IProduct, ProductProps, UpdateProductProps } from "@/types/product";

class ProductService {
    private axios: AxiosInstance = apiInstance;

    public async getAllProducts(): Promise<IProduct[]> {
        const response = await this.axios.get('/products')
        return response.data;
    }

    public async getProduct(id: string): Promise<IProduct> {
        const response = await this.axios.get(`/products/${id}`);
        return response.data;
    }

    public async deleteProductById(id: string) {
        const response = await this.axios.delete(`/products/${id}`);
        return response.data;
    }

    public async createProduct(data: ProductProps): Promise<ProductProps> {
        const response = await this.axios.post(`/products`, data);
        return response.data;
    }

    public async updateProduct(id: string, data: IProduct): Promise<IProduct> {
        const response = await this.axios.patch(`/products/${id}`, data);
        return response.data;
    }
}

export const productService = new ProductService();