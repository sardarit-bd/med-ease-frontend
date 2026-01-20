"use client"

import DeshBordHeaderWrper from "@/components/Deshboard/DeshbaordHeader/DeshboardHeaderWrper";
import DeshboradSidebarWrper from "@/components/Deshboard/DeshboardSidebar/DeshboradSidebarWrper";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";


function DashboardLayout({ header, sidebar, children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Mobile overlay */}
            {sidebarOpen && (
                <>
                    <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" style={{ zIndex: "50" }} onClick={() => setSidebarOpen(false)} >
                        <button className="top-5 right-5 absolute shadow-2xl rounded-full bg-white w-8 h-8 text-black text-3xl flex items-center justify-center cursor-pointer hover:rotate-180 transition-all duration-300">
                            <RxCross2 className="text-2xl" />
                        </button>
                    </div>

                </>
            )}

            <DeshboradSidebarWrper sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
                {sidebar}
            </DeshboradSidebarWrper>

            <div className="flex-1 flex flex-col overflow-hidden">
                <DeshBordHeaderWrper sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="p-4 md:p-6 mt-[73px]">
                    {children}
                </div>
            </div>
        </div >
    )
}

export default DashboardLayout;