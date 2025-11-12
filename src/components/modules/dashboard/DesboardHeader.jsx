"use client"

import { Bell, ChevronDown, MapPin, Menu, Search, X } from "lucide-react"
import { useState } from "react"

export default function DesboardHeader({ sidebarOpen, setSidebarOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const navButtons = ["Régulation", "Informations", "Coordination", "Orientation", "Agenda", "Senior"]

  return (
    <>
      {/* Main Header - Single Row Mobile, Full on Desktop */}
      <header className="bg-white border-b border-slate-200 z-40 shadow-sm sticky top-0 w-full">
        <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
            {/* Left: Logo/Menu */}
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
                aria-label="Toggle sidebar"
              >
                {sidebarOpen ? (
                  <X size={20} className="text-slate-700" />
                ) : (
                  <Menu size={20} className="text-slate-700" />
                )}
              </button>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-xs sm:text-lg font-medium">06 NOV, 2025</span>
            </div>

            {/* Center: Navigation - Responsive Buttons */}
            <div className="hidden md:flex items-center justify-center gap-1 sm:gap-2">
              {/* Desktop: Show all 6 buttons */}
              <div className="hidden md:flex items-center gap-2">
                {navButtons.map((btn) => (
                  <button
                    key={btn}
                    className="px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 whitespace-nowrap"
                  >
                    {btn}
                  </button>
                ))}
              </div>

              {/* Tablet: Show first 4, then dropdown */}
              <div className="md:hidden flex items-center gap-1 sm:gap-2">
                {navButtons.slice(0, 3).map((btn) => (
                  <button
                    key={btn}
                    className="px-2 sm:px-3 py-2 rounded-full bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium transition-all duration-200 active:scale-95 whitespace-nowrap"
                  >
                    {btn}
                  </button>
                ))}
                <div className="relative group">
                  <button className="px-2 sm:px-3 py-2 rounded-full bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium transition-all duration-200 flex items-center gap-1 whitespace-nowrap">
                    <span>+{navButtons.length - 3}</span>
                    <ChevronDown size={14} />
                  </button>
                  <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-slate-200 p-2 hidden group-hover:flex flex-col gap-1 z-50">
                    {navButtons.slice(3).map((btn) => (
                      <button
                        key={btn}
                        className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors w-full text-left whitespace-nowrap"
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile: Show dropdown menu only */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xs:hidden px-3 py-2 rounded-full bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium transition-all flex items-center gap-1 whitespace-nowrap"
              >
                Menu
                <ChevronDown size={14} className={`transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Right: Search, Location, Bell */}
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
              {/* Desktop Search Input */}
              <div className="hidden lg:flex items-center bg-slate-50 rounded-lg border border-slate-200 px-3 py-2 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-transparent transition-all">
                <Search size={16} className="text-slate-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="ml-2 bg-transparent text-sm outline-none text-slate-900 placeholder:text-slate-400 w-32"
                />
              </div>

              {/* Mobile/Tablet Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              {/* Location Button - Hidden on small mobile */}
              <button
                className="hidden sm:flex p-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-full transition-colors active:scale-95 cursor-pointer"
                aria-label="Location"
              >
                <MapPin size={18} />
              </button>

              {/* Notification Button */}
              <button
                className="p-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-full transition-colors relative active:scale-95 cursor-pointer"
                aria-label="Notifications"
              >
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="xs:hidden bg-white border-t border-slate-200 px-3 py-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {navButtons.map((btn) => (
              <button
                key={btn}
                className="px-3 py-2 rounded-full bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium transition-all flex-1 sm:flex-initial active:scale-95"
              >
                {btn}
              </button>
            ))}
          </div>
        )}

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="lg:hidden border-t border-slate-200 px-3 py-3 bg-slate-50">
            <div className="flex items-center bg-white rounded-lg border border-slate-200 px-3 py-2">
              <Search size={16} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 flex-1 bg-transparent text-sm outline-none text-slate-900 placeholder:text-slate-400"
                autoFocus
              />
            </div>
          </div>
        )}
      </header>
    </>
  )
}
