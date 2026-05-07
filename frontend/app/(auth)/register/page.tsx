'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from "@/context/authContext";
import { UserRegisterData } from "@/lib/types/user";
import { useRouter } from "next/navigation";

const Page = () => {
    const { register } = useAuth();
    const router = useRouter();
    const [user, setUser] = useState<UserRegisterData>({
        email: '',
        password: '',
        name: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(user);
            router.push("/profile");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 flex items-center justify-center py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
                <div className="max-w-md mx-auto">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                Create Account
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400">
                                Join us and start shopping
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your full name"
                                    value={user.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-colors duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={user.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-colors duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={user.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-colors duration-200"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center"
                            >
                                Create Account
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;