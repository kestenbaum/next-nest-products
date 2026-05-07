"use client"
import React, { useEffect, useState, memo } from 'react';
import { sizeConfig } from "@/config/size.config";
import { IUserProfile } from "@/lib/types/user";
import { userService } from "@/api/service/user";
import { useRouter } from "next/navigation";

const ProfilePage = memo(() => {
    const [user, setUser] = useState<IUserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (!token) {
            router.push("/login");
            return;
        }

        const fetchUser = async () => {
            try {
                const data = await userService.getUser();
                setUser(data);
            } catch (err) {
                console.error('Failed to fetch user:', err);
                router.push("/login");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [router]);

    if (loading) {
        return (
            <section className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="animate-pulse space-y-8">
                        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-1/3 mx-auto" />
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 space-y-6">
                            <div className="flex items-center space-x-6">
                                <div className="w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                <div className="space-y-2">
                                    <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-48" />
                                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-32" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded" />
                                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (!user) {
        return (
            <section className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl border border-red-200 dark:border-red-800">
                        <svg className="w-16 h-16 text-red-600 dark:text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4v2m0 0v2m0-6v-2m0 0V7a2 2 0 012-2h6.586a2 2 0 011.414.586l4.414 4.414a2 2 0 01.586 1.414V17a2 2 0 01-2 2h-6.586a2 2 0 01-1.414-.586l-4.414-4.414A2 2 0 012 11.414V5a2 2 0 012-2h6" />
                        </svg>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            Profile Not Found
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Unable to load your profile information.
                        </p>
                        <button
                            onClick={() => router.push("/login")}
                            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                        >
                            Go to Login
                        </button>
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
                        My Profile
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Manage your account information and preferences
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Profile Header Card */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center space-x-6">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-300 dark:border-slate-600 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                        <svg className="w-12 h-12 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-slate-950" />
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                        {user.name}
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full" />
                                        {user.role}
                                    </p>
                                    <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                                        ID: {user.id}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl">
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Personal Information Card */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Personal Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    Full Name
                                </label>
                                <p className="text-lg text-slate-900 dark:text-white font-medium">
                                    {user.name}
                                </p>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    Email Address
                                </label>
                                <p className="text-lg text-slate-900 dark:text-white font-medium">
                                    {user.email}
                                </p>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    Role
                                </label>
                                <p className="text-lg text-slate-900 dark:text-white font-medium capitalize">
                                    {user.role}
                                </p>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    User ID
                                </label>
                                <p className="text-lg text-slate-900 dark:text-white font-medium font-mono">
                                    {user.id}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Security Card */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Security Settings
                        </h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                        Current Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter current password"
                                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-colors duration-200"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter new password"
                                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-colors duration-200"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm new password"
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-colors duration-200"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Update Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
});

ProfilePage.displayName = 'ProfilePage';

export default ProfilePage;