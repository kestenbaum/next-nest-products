import { useAuth } from "@/context/authContext";
import { useEffect, useState } from "react";
import { userService } from "@/api/service/user";

interface IAdminStatus {
    isAdmin: boolean;
    isLoading: boolean;
    error: string | null;
}

export const useAdminStatus = (): IAdminStatus => {
    const { isAuth } = useAuth();
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isAuth) {
            setIsLoading(false);
            setError(null);
            return;
        }
        const checkStatus = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const admin = await userService.isAdmin();
                if (admin) setIsAdmin(true);
            } catch (e) {
                const errorMessage = (e instanceof Error) ? e.message : "unknown error";
                setError(errorMessage);
                setIsAdmin(false);
            } finally {
                setIsLoading(false);
            }
        }

        checkStatus()
    }, [isAuth]);

    return { isAdmin, isLoading, error };
}