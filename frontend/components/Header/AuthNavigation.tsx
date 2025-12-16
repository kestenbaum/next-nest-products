import React, { FC } from 'react';
import Link from "next/link";

interface IAuthNavigation {
    isAuth: boolean;
    isAdmin: boolean;
    handleLogout: () => void;
}

const AuthNavigation: FC<IAuthNavigation> = ({ isAuth, isAdmin, handleLogout }) => {
    return (
        isAuth &&
            <>
                <Link href="/profile" className="text-fuchsia-50 hover:text-fuchsia-300">
                    Profile
                </Link>
                <Link href="/cart" className="text-fuchsia-50 hover:text-fuchsia-300">
                    Cart
                </Link>
                {isAdmin &&
                    <Link href="/panel" className="text-fuchsia-50 hover:text-fuchsia-300">
                        Panel
                    </Link>}
                <button
                    onClick={handleLogout}
                    className="text-red-400 hover:text-red-200 ml-2"
                >
                    Logout
                </button>
            </>
    )
};

export default AuthNavigation;