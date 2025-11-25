"use client";

import { FileText, LayoutDashboard, Notebook, Pill, ShoppingBag, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { label: "Tableau de Bord", href: "/patient-dashboard/tableau", icon: LayoutDashboard },
    { label: "Pilulier Virtuel", href: "/patient-dashboard/pilulier", icon: Pill },
    { label: "Pharmacie Virtuelle", href: "/patient-dashboard/pharmacie", icon: ShoppingBag },
    { label: "Mes Ordonnances", href: "/patient-dashboard/mes", icon: FileText },
    { label: "Dépenses Médicales", href: "/patient-dashboard/depenses", icon: Wallet },
    { label: "Carnet de Santé", href: "/patient-dashboard/carnet", icon: Notebook },
];

export default function DashboardTopMenu() {
    const pathname = usePathname();

    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-1 py-3 flex items-center gap-4 overflow-x-auto no-scrollbar">

                {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full mx-auto text-sm font-medium whitespace-nowrap transition-all
                ${active
                                    ? "text-white shadow-md bg-gradient-to-r from-[#0076BC] to-[#A066FF]"
                                    : "text-[#05314A]"
                                }
              `}
                        >
                            <Icon
                                size={14}
                                className={active ? "text-white" : "text-[var(--brandColor)]"}
                            />
                            {item.label}
                        </Link>
                    );
                })}

            </div>
        </div>
    );
}
