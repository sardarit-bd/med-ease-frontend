"use client"

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
]

export default function Dasboardsidebar({ isOpen, setIsOpen }) {
  const [activeItem, setActiveItem] = useState("Home")

  return (
    <>
      {/* Mobile sidebar - fixed overlay */}
      <div
        className={`sticky lg:relative top-0 left-0 h-screen z-50 w-56 bg-white text-gray-700 transition-transform duration-300 overflow-y-auto scrollbar-hide ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        {/* Logo */}
        <div className="sticky top-0 flex items-center gap-3 bg-white">
          <Image src={logo} alt="Logo" width={1000} height={1000} className="w-[160px]" />
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-1 px-3 py-4">
          {menuItems.map((item, idx) => {
            const Icon = item.icon
            const isActive = activeItem === item.label
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveItem(item.label)
                  setIsOpen(false)
                }}
                className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 w-full text-left cursor-pointer ${isActive ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-4xl shadow-lg" : "text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
                  }`}
              >
                <Icon size={20} className="flex-shrink-0" />
                <span className="text-sm font-medium truncate">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </>
  )
}
