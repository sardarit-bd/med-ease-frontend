"use client";

import { Calendar, Home, Info, Map, MessageSquare, UsersIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard/patient/tableau" },
    { icon: Calendar, label: "Health Record", href: "/dashboard/patient/carnet" },
    { icon: Map, label: "Medical Expenses", href: "/dashboard/patient/depenses" },
    { icon: Info, label: "My Prescriptions", href: "/dashboard/patient/mes" },
    { icon: UsersIcon, label: "Virtual Pharmacy", href: "/dashboard/patient/pharmacie" },
    { icon: MessageSquare, label: "Virtual Pill Organizer", href: "/dashboard/patient/pilulier" },

];

export default function PatientSidebarNavigation({ isOpen, setIsOpen }) {


    const pathname = usePathname();



    return (

        <>
            {menuItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                    <Link
                        href={item.href}
                        key={idx}
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        className={`flex items-center gap-3 px-4 py-3 text-sm font-medium cursor-pointer rounded-full transition-all duration-200 ${item?.href === pathname ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-md"
                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <Icon size={20} className="flex-shrink-0" />
                        <span className="truncate">{item.label}</span>
                    </Link>
                );
            })}
        </>
    );
}
