"use client"
import React, { useState } from 'react';
import Link from "next/link";

const Header = () => {
    const [auth, setAuth] = useState(true);

    return (
        <header className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-3.5">
                <div className="flex items-center justify-between h-[60px]">
                    <Link href="/" className="text-fuchsia-100 hover:text-fuchsia-300">Home</Link>
                    <menu className="flex gap-2.5">
                        <Link href="/products" className="text-fuchsia-50 hover:text-fuchsia-300">Product</Link>
                        <Link href="/profile" className="text-fuchsia-50 hover:text-fuchsia-300">Profile</Link>
                        {auth
                            ? <Link
                                className={"text-fuchsia-50 hover:text-fuchsia-300"}
                                href="/"
                                onClick={() => {setAuth(false)}}
                            >
                                Logout
                        </Link>
                            : <menu className="flex gap-2.5">
                                <Link href="/login" className="text-fuchsia-50 hover:text-fuchsia-300">Login</Link>
                                <Link href="/register" className="text-fuchsia-50 hover:text-fuchsia-300">Register</Link>
                            </menu>}
                    </menu>
                </div>
            </div>
        </header>
    );
};

export default Header;