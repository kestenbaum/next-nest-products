import React, { memo, FC } from 'react';
import Link from "next/link";

interface AuthNavigationProps {
    isAuth: boolean;
    isAdmin: boolean;
    handleLogout: () => void;
}

const AuthNavigation: FC<AuthNavigationProps> = memo(({ isAuth, isAdmin, handleLogout }) => {
    if (!isAuth) return null;

    return (
        <div className="flex items-center gap-5">
            <div className="flex items-center gap-4 border-r border-slate-200 dark:border-slate-700 pr-5">
                <Link
                    href="/profile"
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                    Profile
                </Link>

                <Link
                    href="/cart"
                    className="relative text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                    Cart
                    <span className="absolute -right-2 -top-1 flex h-2 w-2 rounded-full bg-blue-500" />
                </Link>

                {isAdmin && (
                    <Link
                        href="/panel"
                        className="rounded-md bg-amber-50 dark:bg-amber-900/20 px-2 py-1 text-xs font-semibold text-amber-700 dark:text-amber-400 ring-1 ring-inset ring-amber-600/20 dark:ring-amber-500/30 transition-colors hover:bg-amber-100 dark:hover:bg-amber-900/30"
                    >
                        Admin Panel
                    </Link>
                )}
            </div>

            <button
                onClick={handleLogout}
                className="text-sm font-medium text-red-500 dark:text-red-400 transition-all duration-200 hover:text-red-700 dark:hover:text-red-300 active:scale-95 cursor-pointer"
            >
                Logout
            </button>
        </div>
    );
});

AuthNavigation.displayName = 'AuthNavigation';

export default AuthNavigation;