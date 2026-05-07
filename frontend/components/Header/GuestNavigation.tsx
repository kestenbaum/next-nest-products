import React, { memo } from 'react';
import Link from "next/link";

const GuestNavigation = memo(() => {
    return (
        <div className="flex items-center gap-4">
            <Link
                href="/login"
                className="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
                Login
            </Link>

            <Link
                href="/register"
                className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm shadow-blue-200 dark:shadow-blue-900/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-md dark:hover:shadow-lg active:scale-95 cursor-pointer"
            >
                Register
            </Link>
        </div>
    );
});

GuestNavigation.displayName = 'GuestNavigation';

export default GuestNavigation;