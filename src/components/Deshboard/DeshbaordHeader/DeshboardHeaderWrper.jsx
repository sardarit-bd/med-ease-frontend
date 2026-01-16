"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useAuthStore from "../../../../store/useAuthStore";
import DeshboardHeaderUser from "./DeshboardHeaderUser";



function DeshBordHeaderWrper({ sidebarOpen, setSidebarOpen, children }) {

    const { setisopenActionForm } = useAuthStore();


    // today date 
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const formattedDate = `${day} ${month}, ${year}`;

    return (
        <header className="w-full bg-white fixed top-0 left-0 z-50 border-b border-[var(--light-background)]">
            <div className="w-full px-5 mx-auto flex items-center justify-between py-3">
                {/* Logo + Left side */}
                <div className="flex items-center gap-2">

                    <div className="block lg:hidden">
                        {
                            sidebarOpen ? (
                                <X onClick={() => { setSidebarOpen(!sidebarOpen) }} className="cursor-pointer text-gray-900" size={30} />
                            ) : (
                                <Menu onClick={() => { setSidebarOpen(!sidebarOpen) }} className="cursor-pointer text-gray-900" size={30} />
                            )
                        }
                    </div>


                    <div className="flex items-center gap-7">
                        <Link href={'/'}>
                            <Image
                                src="/logos/headLogo.png"
                                alt="Med'ease Logo"
                                width={120}
                                height={50}
                                className="object-contain"
                            />
                        </Link>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-xl font-semibold">{formattedDate}</span>
                    </div>
                </div>

                <div className="flex items-center gap-6">

                    {children}

                    <DeshboardHeaderUser />
                </div>
            </div>
        </header>
    );
}



export default DeshBordHeaderWrper;