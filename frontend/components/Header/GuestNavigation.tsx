import React from 'react';
import Link from "next/link";

const GuestNavigation = () => {
    return (
        <>
            <Link href="/login" className="text-fuchsia-50 hover:text-fuchsia-300">
                Login
            </Link>
            <Link href="/register" className="text-fuchsia-50 hover:text-fuchsia-300">
                Register
            </Link>
        </>
    );
};

export default GuestNavigation;