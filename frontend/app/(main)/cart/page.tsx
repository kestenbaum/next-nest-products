"use client"
import React from 'react';
import Link from "next/link";
import { sizeConfig } from "@/config/size.config";

const Page = () => {
    return (
        <section
            className="min-h-screen bg-white dark:bg-gray-800 py-10"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-gray-900 dark:text-white mb-8"  style={{paddingTop: `calc(20px + ${sizeConfig.headerSize}px)`}}>
                    <h1 className="text-3xl font-extrabold border-b border-gray-200 dark:border-gray-700 pb-3">
                        Shopping Cart
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md flex items-center space-x-4">

                            <div className="w-24 h-24 flex-shrink-0">
                                <img
                                    src="https://via.placeholder.com/150x150?text=Product+A"
                                    alt="Product A"
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>

                            <div className="flex-grow grid grid-cols-3 md:grid-cols-5 items-center gap-4">

                                <div className="col-span-3 md:col-span-2">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                                        Stylish Product A
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Color: Blue
                                    </p>
                                </div>


                                <div className="col-span-1">
                                    <label htmlFor="qty-A" className="sr-only">Quantity</label>
                                    <input
                                        type="number"
                                        id="qty-A"
                                        name="quantity-A"
                                        defaultValue="1"
                                        min="1"
                                        className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white text-center"
                                        onChange={() => console.log('Update quantity logic here')}
                                    />
                                </div>

                                <p className="col-span-1 text-base font-semibold text-gray-900 dark:text-white text-right">
                                    $99.99
                                </p>

                                <div className="col-span-1 flex justify-end">
                                    <button
                                        className="text-red-500 hover:text-red-700 transition duration-150 p-1"
                                        onClick={() => console.log('Remove item logic here')}
                                        aria-label="Remove item"
                                    >
                                        &times; Remove
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md flex items-center space-x-4">
                            <div className="w-24 h-24 flex-shrink-0">
                                <img
                                    src="https://via.placeholder.com/150x150?text=Product+B"
                                    alt="Product B"
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                            <div className="flex-grow grid grid-cols-3 md:grid-cols-5 items-center gap-4">
                                <div className="col-span-3 md:col-span-2">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                                        Premium Product B
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Size: M
                                    </p>
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="qty-B" className="sr-only">Quantity</label>
                                    <input
                                        type="number"
                                        id="qty-B"
                                        name="quantity-B"
                                        defaultValue="2"
                                        min="1"
                                        className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white text-center"
                                        onChange={() => console.log('Update quantity logic here')}
                                    />
                                </div>
                                <p className="col-span-1 text-base font-semibold text-gray-900 dark:text-white text-right">
                                    $49.99
                                </p>
                                <div className="col-span-1 flex justify-end">
                                    <button
                                        className="text-red-500 hover:text-red-700 transition duration-150 p-1"
                                        onClick={() => console.log('Remove item logic here')}
                                        aria-label="Remove item"
                                    >
                                        &times; Remove
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link href="/products" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                                &larr; Continue Shopping
                            </Link>
                        </div>

                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-xl sticky top-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">
                                Order Summary
                            </h3>

                            <div className="space-y-3 mb-6 text-gray-900 dark:text-white">
                                <div className="flex justify-between">
                                    <span>Subtotal:</span>
                                    <span>$199.97</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping:</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between border-t border-gray-300 dark:border-gray-600 pt-3">
                                    <span className="text-lg font-bold">Order Total:</span>
                                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                $199.97
                            </span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-700"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Page;