"use client"
import React from 'react';
import { useAuth } from "@/context/authContext";
import { useLogout } from "@/lib/hooks/useLogout";
import { useAdminStatus } from "@/lib/hooks/useAdminStatus";
import Logo from "@/components/Logo";
import GenerateHeaderMenu from "@/components/Header/GenerateHeaderMenu";


const Header = () => {
    const { isAuth } = useAuth();
    const { isAdmin, isLoading } = useAdminStatus();
    const isReady = !isAuth || !isLoading;
    const handleLogout = useLogout();

    return (
        <header className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-3.5">
                <div className="flex items-center justify-between h-[60px]">
                    <Logo>Home</Logo>
                    <GenerateHeaderMenu isReady={isReady} isAuth={isAuth} isAdmin={isAdmin} handleLogout={handleLogout} />
                </div>
            </div>
        </header>
    );
};

export default Header;