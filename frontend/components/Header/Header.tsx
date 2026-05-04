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
        <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-md shadow-sm">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <Logo>
                            Home
                        </Logo>
                    </div>
                    <nav className="flex items-center gap-4 text-sm font-medium text-slate-600">
                        <GenerateHeaderMenu
                            isReady={isReady}
                            isAuth={isAuth}
                            isAdmin={isAdmin}
                            handleLogout={handleLogout}
                        />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;