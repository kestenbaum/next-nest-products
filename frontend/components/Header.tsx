"use client"
import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/authContext";

const Header = () => {
    const { isAuth, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    return (
        <header className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-3.5">
                <div className="flex items-center justify-between h-[60px]">
                    <Link href="/" className="text-fuchsia-100 hover:text-fuchsia-300 font-bold">
                        Home
                    </Link>

                    <div className="flex gap-4 items-center">
                        <Link href="/products" className="text-fuchsia-50 hover:text-fuchsia-300">
                            Products
                        </Link>

                        {isAuth ? (
                            <>
                                <Link href="/profile" className="text-fuchsia-50 hover:text-fuchsia-300">
                                    Profile
                                </Link>
                                <Link href="/cart" className="text-fuchsia-50 hover:text-fuchsia-300">
                                    Cart
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="text-red-400 hover:text-red-200 ml-2"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="text-fuchsia-50 hover:text-fuchsia-300">
                                    Login
                                </Link>
                                <Link href="/register" className="text-fuchsia-50 hover:text-fuchsia-300">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;