'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserRegisterData } from "@/lib/types/user";
import { authService } from "@/api/service/auth";

interface AuthContextType {
    isAuth: boolean;
    login: (token: string) => void;
    logout: () => void;
    register: (data: UserRegisterData) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsAuth(true);
        }
    }, []);

    const login = (token: string) => {
        localStorage.setItem('access_token', token);
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        setIsAuth(false);
    };

    const register = async (data: UserRegisterData) => {
        try {
            const response = await authService.register(data);
            if (response.access_token) {
                login(response.access_token)
            }
        } catch (error) {
           throw error;
        }
    }

    return (
        <AuthContext.Provider value={{ isAuth, login, logout, register }}>
            {children}
        </AuthContext.Provider>
);
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};