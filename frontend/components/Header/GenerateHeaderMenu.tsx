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
        <div className="flex items-center gap-6">
            <Link
                href="/products"
                className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-indigo-600"
            >
                Products
            </Link>

            <div className="flex items-center">
                {isReady ? (
                    isAuth ? (
                        <AuthNavigation
                            handleLogout={handleLogout}
                            isAdmin={isAdmin}
                            isAuth={isAuth}
                        />
                    ) : (
                        <div className="flex items-center gap-3">
                            <GuestNavigation />
                        </div>
                    )
                ) : (
                    <div className="flex h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-indigo-600" />
                )}
            </div>
        </div>
    );
};

export default GenerateHeaderMenu;