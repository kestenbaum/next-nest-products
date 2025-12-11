import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-3.5">
                <div className="flex items-center justify-between h-[60px]">
                    <Link href="/" className="text-fuchsia-100 hover:text-fuchsia-300">Home</Link>
                    <menu>
                        <Link href="/products" className="text-fuchsia-50 hover:text-fuchsia-300">Product</Link>
                    </menu>
                </div>
            </div>
        </header>
    );
};

export default Header;