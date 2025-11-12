"use client"

import { useState } from "react";
import Sidebar from "../../../components/modules/dashboard/Dasboardsidebar";
import Header from "../../../components/modules/dashboard/DesboardHeader";


export default function DashboardLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Mobile overlay */}
            {sidebarOpen && (
                <>
                    <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" style={{ zIndex: "50" }} onClick={() => setSidebarOpen(false)} >
                        <button className="top-5 right-5 absolute shadow-2xl rounded-full bg-white w-10 h-10 text-black text-3xl">X</button>
                    </div>

                </>
            )}

            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {children}
            </div>
        </div>
    )
}