'use client'
import { productService } from "@/api/service/products";
import { useGetAllItems } from "@/lib/hooks/useGetAllItems";
import Title from "@/components/Title";
import ProductList from "@/components/ProductList";

const Page = () => {
    const { data, loading, error } = useGetAllItems(() => productService.getAllProducts())

    return (
        <section className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <Title>Products</Title>

                {loading && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[...Array(8)].map((_, i) => (
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
                    <div className="flex flex-col items-center justify-center py-12">
                        <div className="rounded-full bg-red-50 dark:bg-red-900/20 p-4 mb-4">
                            <svg className="w-12 h-12 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4v2m0 0v2m0-6v-2m0 0V7a2 2 0 012-2h6.586a2 2 0 011.414.586l4.414 4.414a2 2 0 01.586 1.414V17a2 2 0 01-2 2h-6.586a2 2 0 01-1.414-.586l-4.414-4.414A2 2 0 012 11.414V5a2 2 0 012-2h6" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                            Unable to load products
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            {error.message || "Please try again later"}
                        </p>
                    </div>
                )}

                {!loading && !error && data && (
                    <div className="animate-in fade-in duration-500">
                        {data.length > 0 ? (
                            <>
                                <div className="mb-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full" />
                                    {data.length} product{data.length !== 1 ? 's' : ''} available
                                </div>
                                <ProductList data={data} />
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12">
                                <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-4 mb-4">
                                    <svg className="w-12 h-12 text-slate-400 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                                    No products found
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    Check back soon!
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Page;