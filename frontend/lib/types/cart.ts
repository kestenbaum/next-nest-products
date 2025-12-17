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