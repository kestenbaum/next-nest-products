import React, { memo, FC } from 'react';
import Link from "next/link";
import AuthNavigation from "@/components/Header/AuthNavigation";
import GuestNavigation from "@/components/Header/GuestNavigation";

interface GenerateHeaderMenuProps {
    isReady: boolean;
    isAuth: boolean;
    isAdmin: boolean;
    handleLogout: () => void;
}

const GenerateHeaderMenu: FC<GenerateHeaderMenuProps> = memo(({
    isAuth,
    isReady,
    handleLogout,
    isAdmin
}) => {
    return (
        <div className="flex items-center gap-6">
            <Link
                href="/products"
                className="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
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
                        <GuestNavigation />
                    )
                ) : (
                    <div className="flex h-5 w-5 animate-spin rounded-full border-2 border-slate-200 dark:border-slate-700 border-t-blue-600" />
                )}
            </div>
        </div>
    );
});

GenerateHeaderMenu.displayName = 'GenerateHeaderMenu';

export default GenerateHeaderMenu;