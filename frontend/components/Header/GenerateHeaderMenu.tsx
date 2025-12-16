import React, { FC } from 'react';
import Link from "next/link";
import AuthNavigation from "@/components/Header/AuthNavigation";
import GuestNavigation from "@/components/Header/GuestNavigation";

interface Props {
    isReady: boolean;
    isAuth: boolean;
    isAdmin: boolean;
    handleLogout: () => void;
}

const GenerateHeaderMenu: FC<Props> = ({ isAuth, isReady, handleLogout, isAdmin }) => {
    return (
        <div className="flex gap-4 items-center">
            <Link href="/products" className="text-fuchsia-50 hover:text-fuchsia-300">
                Products
            </Link>
            {isReady ? (
                isAuth ? (
                    <AuthNavigation
                        handleLogout={handleLogout}
                        isAdmin={isAdmin}
                        isAuth={isAuth}
                    />
                ) : (
                    <GuestNavigation />
                )
            ) : (
                <span className="text-gray-400">Loading...</span>
            )}
        </div>
    );
};

export default GenerateHeaderMenu;