export interface IUserProfile {
    id: string;
    email: string;
    name: string;
    role: string;
    cartId: string;
}

export interface UserRegisterData {
    email: string;
    name: string;
    password: string;
}

export interface UserRegister {
    user: UserRegisterData,
    access_token: string,
}

export interface IUserToken {
    email: string;
    sub: number | string;
    role: string;
    exp: number;
}