"use client";

import {
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle,
  FileText,
  HelpCircle,
  Home,
  Info,
  LogOut,
  Map,
  MessageSquare,
  Settings,
  ShoppingBag,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import logo from "../../../../public/logos/headLogo.png";

const menuItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Calendar, label: "Calendrier", href: "#" },
  { icon: Map, label: "Cartographie", href: "#" },
  { icon: Info, label: "Services Informations", href: "#" },
  { icon: UsersIcon, label: "Partenaires", href: "#" },
  { icon: MessageSquare, label: "Messagerie", href: "#" },
  { icon: ShoppingBag, label: "Commercial", href: "#" },
  { icon: CheckCircle, label: "Qualité", href: "#" },
  { icon: BookOpen, label: "Studio", href: "#" },
  { icon: FileText, label: "Dictionnaire médical", href: "#" },
  { icon: FileText, label: "Documents", href: "#" },
  { icon: BarChart3, label: "Statistiques", href: "#" },
  { icon: HelpCircle, label: "Compte", href: "#" },
  { icon: Settings, label: "Aide", href: "#" },
  { icon: Settings, label: "Paramètres", href: "#" },
  { icon: Bell, label: "Notification", href: "#" },
  { icon: LogOut, label: "Déconnexion", href: "#" },
];

export default function DashboardSidebar({ isOpen, setIsOpen }) {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <>
      {/* Fixed Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-60 z-50 bg-white shadow-sm border-r border-gray-100 text-gray-700 overflow-y-auto transition-transform duration-300 scrollbar-hide ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        {/* === Logo Section === */}
        <div className="sticky top-0 bg-white flex items-center justify-center py-5 border-gray-100">
          <Image
            src={logo}
            alt="MedEase Logo"
            width={160}
            height={40}
            className="object-contain"
          />
        </div>

        {/* === Menu Items === */}
        <nav className="flex flex-col gap-1 px-3 py-4">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                  ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <Icon size={20} className="flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
