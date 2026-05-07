"use client"
import React, { memo, useState } from 'react';
import Link from "next/link";
import { sizeConfig } from "@/config/size.config";

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    variant?: string;
}

const Page = memo(() => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: '1',
            name: 'Stylish Product A',
            price: 99.99,
            quantity: 1,
            image: 'https://via.placeholder.com/150x150?text=Product+A',
            variant: 'Color: Blue'
        },
        {
            id: '2',
            name: 'Premium Product B',
            price: 49.99,
            quantity: 2,
            image: 'https://via.placeholder.com/150x150?text=Product+B',
            variant: 'Size: M'
        }
    ]);

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity < 1) return;
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeItem = (id: string) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 9.99;
    const total = subtotal + shipping;

    if (cartItems.length === 0) {
        return (
            <section className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 flex items-center justify-center py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-12 rounded-2xl border border-slate-200 dark:border-slate-700">
                        <svg className="w-24 h-24 text-slate-400 dark:text-slate-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            Your cart is empty
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                            Looks like you haven&#39;t added any items to your cart yet.
                        </p>
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Start Shopping
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div
                    className="mb-8"
                    style={{ paddingTop: `calc(20px + ${sizeConfig.headerSize}px)` }}
                >
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                        Shopping Cart
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-200"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex-grow min-w-0">
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white truncate mb-1">
                                            {item.name}
                                        </h3>
                                        {item.variant && (
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                                {item.variant}
                                            </p>
                                        )}

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                    Qty:
                                                </label>
                                                <div className="flex items-center border border-slate-300 dark:border-slate-600 rounded-lg">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="px-3 py-1 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-l-lg transition-colors"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        −
                                                    </button>
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                                        className="w-12 px-2 py-1 text-center border-0 bg-transparent text-slate-900 dark:text-white focus:ring-0"
                                                        min="1"
                                                    />
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-3 py-1 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-r-lg transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="text-right">
                                                <p className="text-xl font-bold text-slate-900 dark:text-white">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </p>
                                                {item.quantity > 1 && (
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                                        ${item.price.toFixed(2)} each
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
                                        aria-label="Remove item"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="mt-8">
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                Continue Shopping
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 sticky top-4">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                Order Summary
                            </h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                                    <span className="font-semibold text-slate-900 dark:text-white">
                                        ${subtotal.toFixed(2)}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600 dark:text-slate-400">Shipping</span>
                                    <span className={`font-semibold ${shipping === 0 ? 'text-green-600 dark:text-green-400' : 'text-slate-900 dark:text-white'}`}>
                                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                                    </span>
                                </div>

                                {shipping > 0 && (
                                    <p className="text-xs text-slate-500 dark:text-slate-500">
                                        Add ${(100 - subtotal).toFixed(2)} more for free shipping
                                    </p>
                                )}

                                <div className="border-t border-slate-300 dark:border-slate-600 pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-slate-900 dark:text-white">Total</span>
                                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                            ${total.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Proceed to Checkout
                            </button>

                            <div className="mt-4 text-center">
                                <p className="text-xs text-slate-500 dark:text-slate-500">
                                    Secure checkout powered by industry-standard encryption
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

Page.displayName = 'CartPage';

export default Page;