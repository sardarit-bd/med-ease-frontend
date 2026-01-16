"use client";

import { LogOut } from "lucide-react";


export default function DeshboradSidebarWrper({ sidebarOpen, setSidebarOpen, children }) {

    return (
        <>
            {/* Fixed Sidebar */}
            <aside
                className={`fixed lg:sticky top-0 left-0 h-screen w-60 z-50 bg-white shadow-sm border-r border-gray-100 text-gray-700 overflow-y-auto transition-transform duration-300 scrollbar-hide ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                <nav className="flex flex-col gap-1 px-3 py-4 pt-[95px]">

                    <div className="h-[75vh] overflow-y-scroll scrollbar-hide">
                        {children}
                    </div>

                    <button
                        onClick={() => {
                            setSidebarOpen(false);
                        }}
                        className={`absolute bottom-7 w-[88%] flex items-center gap-3 px-4 py-3 text-sm font-medium cursor-pointer rounded-full transition-all duration-200 ${true
                            ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-md"
                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <LogOut size={20} className="flex-shrink-0" />
                        <span className="truncate">Logout</span>
                    </button>
                </nav>
            </aside >
        </>
    );
}
