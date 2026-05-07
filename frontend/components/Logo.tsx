import React, { memo, FC } from 'react';
import Link from "next/link";

interface LogoProps {
    children: string;
}

const Logo: FC<LogoProps> = memo(({ children }) => {
    return (
        <Link
            href="/"
            className="group flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-all duration-200 hover:scale-105"
        >
            <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
            </svg>

            <span className="bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                {children}
            </span>

            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 transition-colors duration-200 group-hover:bg-blue-700 dark:group-hover:bg-blue-300" />
        </Link>
    );
});

Logo.displayName = 'Logo';

export default Logo;