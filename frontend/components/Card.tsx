'use client'
import React, { memo, FC } from 'react';
import Link from "next/link";
import { IProduct } from "@/lib/types/product";

interface ProductProps extends IProduct {
    link: string;
    image?: string;
}

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1560393464-5c69a73c5770?q=80&w=800";

const ARROW_ICON = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
);

const Card: FC<ProductProps> = memo(({ title, price, link, image }) => {
    const displayImage = image || DEFAULT_IMAGE;
    const displayTitle = title || "Untitled Product";
    const displayPrice = price ?? 0;

    return (
        <div className="group relative w-full flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20">
            <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                    src={displayImage}
                    alt={displayTitle}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="p-5 flex flex-col grow">

                <div className="grow">
                    <h3 className="mb-3 text-lg font-semibold tracking-tight text-slate-800 dark:text-slate-100 line-clamp-2 min-h-[3.5rem]">
                        {displayTitle}
                    </h3>

                    <div className="mb-5 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    ${displayPrice}
                </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">USD</span>
                    </div>
                </div>

                <Link
                    href={link || "#"}
                    className="flex items-center justify-center gap-2 w-full rounded-lg bg-blue-600 dark:bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 dark:hover:bg-blue-600 active:scale-95 cursor-pointer mt-auto"
                >
                    View Details
                    {ARROW_ICON}
                </Link>
            </div>
        </div>
    );
});

Card.displayName = 'Card';

export default Card;