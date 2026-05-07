'use client'
import { sizeConfig } from "@/config/size.config";
import { productService } from "@/api/service/products";
import { useGetAllItems } from "@/lib/hooks/useGetAllItems";
import ProductList from "@/components/ProductList";
import Link from "next/link";

export default function Home() {
    const { data, loading, error } = useGetAllItems(() => productService.getAllProducts());

    const featuredProducts = data?.slice(0, 4) || [];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <section
                className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
                style={{ paddingTop: `calc(40px + ${sizeConfig.headerSize}px)` }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center py-16 md:py-24">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Welcome to{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                                Home
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Discover amazing products at unbeatable prices. Quality, style, and convenience all in one place.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                Shop Now
                            </Link>

                            <Link
                                href="/register"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-md active:scale-95"
                            >
                                Join Us
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-xl opacity-30" />
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-xl opacity-30" />
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Featured Products
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Check out our most popular items that customers love
                        </p>
                    </div>

                    {loading && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 animate-pulse">
                                        <div className="aspect-square" />
                                        <div className="p-5 space-y-3">
                                            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
                                            <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
                                            <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {error && !loading && (
                        <div className="text-center py-12">
                            <p className="text-slate-600 dark:text-slate-400">
                                Unable to load featured products at the moment.
                            </p>
                        </div>
                    )}

                    {!loading && !error && featuredProducts.length > 0 && (
                        <div className="animate-in fade-in duration-500">
                            <ProductList data={featuredProducts} />
                            <div className="text-center mt-12">
                                <Link
                                    href="/products"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold rounded-lg transition-all duration-200 hover:bg-slate-800 dark:hover:bg-slate-200 hover:shadow-lg active:scale-95"
                                >
                                    View All Products
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Why Choose Us?
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            We&#39;re committed to providing the best shopping experience
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                                Quality Products
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Carefully selected items from trusted suppliers
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                                Best Prices
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Competitive pricing with great value for money
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                                Fast Delivery
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Quick and reliable shipping to your doorstep
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
