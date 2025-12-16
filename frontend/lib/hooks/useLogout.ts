import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

export const useLogout = () => {
    const router = useRouter();
    const { logout } = useAuth();

    const logoutHandler = () => {
        logout();
        router.push("/login");
    }

    return logoutHandler;
};