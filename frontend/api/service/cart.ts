import { AxiosInstance } from "axios";
import { apiInstance } from "@/api";
import { ICart } from "@/lib/types/cart";

export class Cart {
    private axios: AxiosInstance = apiInstance;

    public async getCartItems(): Promise<ICart> {
        const response = await this.axios.get<ICart>('/cart');
        return response.data;
    }

    public async addItemsToCart(productId: string, quantity: number): Promise<ICart> {
        const response = await this.axios.post<ICart>(`/cart/add`, { productId, quantity });
        return response.data;
    }
}