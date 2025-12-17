import { AxiosInstance } from "axios";
import { apiInstance } from "@/api";

export interface ICartItem {
    id: string;
    quantity: number;
    product: {
        id: string;
        name: string;
        price: number;
        imageUrl?: string;
    };
}

export interface ICart {
    id: string;
    total: number;
    items: ICartItem[];
}

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