import React, { FC } from 'react';
import Link from "next/link";

interface IAuthNavigation {
    isAuth: boolean;
    isAdmin: boolean;
    handleLogout: () => void;
}

const AuthNavigation: FC<IAuthNavigation> = ({ isAuth, isAdmin, handleLogout }) => {
    return (
        isAuth && (
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-4 border-r border-slate-200 pr-5">
                    <Link
                        href="/profile"
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
                    >
                        Profile
                    </Link>

                    <Link
                        href="/cart"
                        className="relative text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
                    >
                        Cart
                        <span className="absolute -right-2 -top-1 flex h-2 w-2 rounded-full bg-indigo-500"></span>
                    </Link>

                    {isAdmin && (
                        <Link
                            href="/panel"
                            className="rounded-md bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-600/20 transition-colors hover:bg-amber-100"
                        >
                            Admin Panel
                        </Link>
                    )}
                </div>

                <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-rose-500 transition-all hover:text-rose-700 active:scale-95"
                >
                    Logout
                </button>
            </div>
        )
    )
};

export default AuthNavigation;