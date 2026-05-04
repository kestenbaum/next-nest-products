import React from 'react';
import Link from "next/link";

const GuestNavigation = () => {
    return (
        <div className="flex items-center gap-4">
            <Link
                href="/login"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
            >
                Login
            </Link>

            <Link
                href="/register"
                className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-md active:scale-95"
            >
                Register
            </Link>
        </div>
    );
};

export default GuestNavigation;