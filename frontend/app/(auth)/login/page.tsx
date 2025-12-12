import React from 'react';
import { sizeConfig } from "@/config/size.config";

const Page = () => {
    return (
        <section
            className="h-screen bg-white dark:bg-gray-800 flex items-center justify-center"
        >
            <div className="max-w-5xl mx-auto px-3.5">
                <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-xl">
                    <h2
                        className="text-2xl font-bold text-gray-900 dark:text-white text-center"
                    >
                        Login
                    </h2>

                    <form>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-700"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Page;