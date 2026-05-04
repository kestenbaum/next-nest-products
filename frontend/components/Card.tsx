'use client'
import React, { FC } from 'react';
import Link from "next/link";
import { IProduct } from "@/lib/types/product";

interface ProductProps extends IProduct {
    link: string;
    image?: string;
}

const Card: FC<ProductProps> = ({ title, price, link, image }) => {
    return (
        <div className="group relative w-full overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">
            <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                <img
                    src={image || "https://images.unsplash.com/photo-1560393464-5c69a73c5770?q=80&w=800"}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <div className="p-5">
                <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-800 line-clamp-1">
                        {title || "Untitled Product"}
                    </h3>
                </div>

                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-slate-900">${price}</span>
                    <span className="text-sm text-slate-400 font-medium">USD</span>
                </div>

                <div className="mt-5">
                    <Link
                        href={link || "#"}
                        className="flex items-center justify-center gap-2 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-600 active:scale-95"
                    >
                        View Details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;