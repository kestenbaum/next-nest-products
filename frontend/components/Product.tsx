'use client'
import React from 'react';
import Link from 'next/link';
import { sizeConfig } from "@/config/size.config";
import { useGetItemById } from "@/lib/hooks/useGetItemById";
import { productService } from "@/api/service/products";
import { useAuth } from "@/context/authContext";

interface Props {
    id: string;
}

const Product = ({ id }: Props) => {
    const { data, error, loading } = useGetItemById(id, (itemId) => productService.getProduct(itemId));
    const { isAuth } = useAuth();

    const displayImage = "https://images.unsplash.com/photo-1560393464-5c69a73c5770?q=80&w=1200";

    return (
        <section className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {loading && (
                    <div className="space-y-6">
                        <div
                            style={{ paddingTop: `calc(20px + ${sizeConfig.headerSize}px)` }}
                            className="h-8 bg-slate-200 dark:bg-slate-800 rounded animate-pulse w-1/3"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="aspect-square w-full bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse" />
                            <div className="space-y-4">
                                <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-3/4 animate-pulse" />
                                <div className="space-y-2">
                                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6 animate-pulse" />
                                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-4/6 animate-pulse" />
                                </div>
                                <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded animate-pulse w-1/3 mt-6" />
                                <div className="h-12 bg-blue-200 dark:bg-blue-900/30 rounded-lg animate-pulse mt-8" />
                            </div>
                        </div>
                    </div>
                )}

                {error && !loading && (
                    <div className="flex flex-col items-center justify-center py-24">
                        <div className="rounded-full bg-red-50 dark:bg-red-900/20 p-6 mb-6">
                            <svg className="w-16 h-16 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4v2m0 0v2m0-6v-2m0 0V7a2 2 0 012-2h6.586a2 2 0 011.414.586l4.414 4.414a2 2 0 01.586 1.414V17a2 2 0 01-2 2h-6.586a2 2 0 01-1.414-.586l-4.414-4.414A2 2 0 012 11.414V5a2 2 0 012-2h6" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            Product not found
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-center">
                            {error.message || "The product you're looking for doesn't exist or has been removed."}
                        </p>
                        <Link
                            href="/products"
                            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Products
                        </Link>
                    </div>
                )}

                {!loading && !error && data && (
                    <div className="animate-in fade-in duration-500">
                        <div className="mb-6 flex items-center gap-2 text-sm">
                            <Link href="/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors cursor-pointer">
                                Home
                            </Link>
                            <span className="text-slate-400">/</span>
                            <Link href="/products" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors cursor-pointer">
                                Products
                            </Link>
                            <span className="text-slate-400">/</span>
                            <span className="text-slate-600 dark:text-slate-400">{data.title}</span>
                        </div>

                        <h1
                            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8"
                            style={{ paddingTop: `calc(20px + ${sizeConfig.headerSize}px)` }}
                        >
                            {data.title}
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex items-center justify-center">
                                <div className="relative w-full aspect-square bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg overflow-hidden group">
                                    <img
                                        src={displayImage}
                                        alt={data.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>

                            <div className="flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">
                                        About this product
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                        {data.description || "No description available"}
                                    </p>

                                    <div className="mb-8 p-4 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                            Price
                                        </p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-bold text-slate-900 dark:text-white">
                                                ${data.price}
                                            </span>
                                            <span className="text-lg text-slate-500 dark:text-slate-400">
                                                USD
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mb-6">
                                        <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full" />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            In Stock
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {isAuth ? (
                                        <button
                                            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            Add to Cart
                                        </button>
                                    ) : (
                                        <Link
                                            href="/login"
                                            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                            </svg>
                                            Sign In to Add to Cart
                                        </Link>
                                    )}
                                    <Link
                                        href="/products"
                                        className="w-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Back to Products
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Product;