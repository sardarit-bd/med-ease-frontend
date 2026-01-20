"use client";

import { Calendar, Home, Info, Map, UsersIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [

    { icon: Home, label: "Home", href: "/dashboard/bed-manager" },
    { icon: Calendar, label: "Calendrier", href: "/dashboard/bed-manager/1" },
    { icon: Map, label: "Services Informations", href: "/dashboard/bed-manager/1" },
    { icon: Info, label: "Cartographie", href: "/dashboard/bed-manager/1" },
    { icon: UsersIcon, label: "Partenaires", href: "/dashboard/bed-manager/1" },
    { icon: Map, label: "Messagerie", href: "/dashboard/bed-manager/1" },
    { icon: UsersIcon, label: "Commercial", href: "/dashboard/bed-manager/1" },
    { icon: Info, label: "Qualite", href: "/dashboard/bed-manager/1" },
    { icon: UsersIcon, label: "Documents", href: "/dashboard/bed-manager/1" },
    { icon: Calendar, label: "Statistiques", href: "/dashboard/bed-manager/1" },
];

export default function BedManagerSidebarNavigation({ isOpen, setIsOpen }) {


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
