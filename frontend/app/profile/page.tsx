import React from 'react';
import { sizeConfig } from "@/config/size.config";
import Image from "next/image";

const Page = () => {
    return (
        <section
            className="min-h-screen bg-white dark:bg-gray-800 py-10"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-gray-900 dark:text-white mb-8" style={{paddingTop: `calc(20px + ${sizeConfig.headerSize}px)`}}>
                    <h1 className="text-3xl font-extrabold border-b border-gray-200 dark:border-gray-700 pb-3">
                        My Profile
                    </h1>
                </div>

                <div className="space-y-8">
                    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600">
                                <img
                                    src={"https://via.placeholder.com/150"}
                                    alt="User Avatar"
                                    className="w-full h-full object-cover"
                                    width={300}
                                    height={300}
                                />
                            </div>

                            <div>
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                    User Name
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    User ID: 12345
                                </p>
                            </div>
                        </div>

                        <form
                            action="/api/profile/avatar"
                            method="POST"
                            encType="multipart/form-data"
                            className="mt-4 md:mt-0"
                        >
                            <label
                                htmlFor="avatar_upload"
                                className="cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md transition duration-150 inline-block text-center"
                            >
                                Upload Avatar
                            </label>
                            <input
                                type="file"
                                id="avatar_upload"
                                name="avatar"
                                accept="image/*"
                                className="hidden"
                            />
                        </form>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">
                            Personal Information
                        </h3>
                        <dl className="divide-y divide-gray-200 dark:divide-gray-600">
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    John Doe
                                </dd>
                            </div>
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    john.doe@example.com
                                </dd>
                            </div>
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Registration Date</dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    December 10, 2025
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">
                            Change Password
                        </h3>

                        <form action="/api/profile/change-password" method="POST" className="space-y-4">
                            <input
                                type="password"
                                name="current_password"
                                placeholder="Current Password"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                                required
                            />
                            <input
                                type="password"
                                name="new_password"
                                placeholder="New Password"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                                required
                            />
                            <input
                                type="password"
                                name="confirm_password"
                                placeholder="Confirm New Password"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-150"
                            >
                                Save New Password
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Page;