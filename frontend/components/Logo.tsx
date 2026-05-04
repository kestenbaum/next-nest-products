import React, { FC } from 'react';
import Link from "next/link";

interface ILogo {
    children: string;
}

const Logo: FC<ILogo> = ({ children }) => {
    return (
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
            {children}
        </Link>
    );
};

export default Logo;