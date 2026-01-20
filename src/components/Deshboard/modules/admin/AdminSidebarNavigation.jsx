"use client";

import { Calendar, Home, Info, Map, UsersIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [

    { icon: Home, label: "Dashboard", href: "/dashboard/admin" },
    { icon: Calendar, label: "Calendrier", href: "/dashboard/admin/calendar" },
    { icon: Map, label: "Cartographie", href: "/dashboard/bed-manager" },
    { icon: Info, label: "Offer de soins", href: "/dashboard/bed-manager/1" },
    { icon: UsersIcon, label: "Virtual Pharmacy", href: "/dashboard/bed-manager/1" },
    { icon: Map, label: "Lits", href: "/dashboard/bed-manager/1" },
    { icon: Info, label: "My Prescriptions", href: "/dashboard/bed-manager/1" },
    { icon: UsersIcon, label: "Bioc", href: "/dashboard/bed-manager/1" },
    { icon: Map, label: "Transport", href: "/dashboard/bed-manager/1" },
    { icon: Info, label: "Pharmaceutiques", href: "/dashboard/bed-manager/1" },
    { icon: UsersIcon, label: "Studio", href: "/dashboard/bed-manager/1" },
    { icon: Map, label: "Messagerie", href: "/dashboard/bed-manager/1" },
    { icon: Info, label: "Qualite", href: "/dashboard/bed-manager/1" },
    { icon: UsersIcon, label: "Virtual Pharmacy", href: "/dashboard/bed-manager/1" },
    { icon: Map, label: "Statiques", href: "/dashboard/bed-manager/1" },
];

export default function AdminSidebarNavigation({ isOpen, setIsOpen }) {


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
