import React, { FC } from 'react';
import Link from "next/link";

interface ILogo {
    children: string;
}

const Logo: FC<ILogo> = ({ children }) => {
    return (
        <Link href="/" className="text-fuchsia-100 hover:text-fuchsia-300 font-bold">
            {children}
        </Link>
    );
};

export default Logo;