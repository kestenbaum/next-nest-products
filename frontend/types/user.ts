export interface IUserProfile {
    id: string;
    email: string;
    name: string;
    role: string;
    cartId: string;
}

export interface IUserToken {
    email: string;
    sub: number | string;
    role: string;
    exp: number;
}