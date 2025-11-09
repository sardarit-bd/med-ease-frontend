"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 border-b border-[var(--light-background)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-3">
        {/* Logo + Left side */}
        <div className="flex items-center gap-2">
          <Image
            src="/logos/headLogo.png"
            alt="Med'ease Logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <Link
            href="#"
            className="hidden md:inline text-[var(--text-dark)] font-medium hover:text-[var(--primary)] transition"
          >
            Professionnel
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[var(--text-dark)] font-medium">
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              Services <ChevronDown size={16} />
            </div>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:flex flex-col bg-white border border-gray-100 rounded-md shadow-md mt-2 w-40">
              <Link href="#" className="px-4 py-2 hover:bg-[var(--light-background)] text-sm">
                Service 1
              </Link>
              <Link href="#" className="px-4 py-2 hover:bg-[var(--light-background)] text-sm">
                Service 2
              </Link>
            </div>
          </div>

          <Link href="#" className="hover:text-[var(--primary)] transition">
            Votre santé
          </Link>

          <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold hover:opacity-90 transition">
            J'agis
          </button>
        </nav>

        {/* Mobile menu icon */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--light-background)] flex flex-col items-start px-6 py-4 space-y-3 shadow-md">
          <Link
            href="#"
            className="text-[var(--text-dark)] font-medium hover:text-[var(--primary)]"
          >
            Professionnel
          </Link>

          <details className="w-full">
            <summary className="cursor-pointer flex items-center justify-between font-medium">
              Services <ChevronDown size={16} />
            </summary>
            <div className="flex flex-col pl-4 mt-2 space-y-1">
              <Link href="#" className="text-sm hover:text-[var(--primary)]">
                Service 1
              </Link>
              <Link href="#" className="text-sm hover:text-[var(--primary)]">
                Service 2
              </Link>
            </div>
          </details>

          <Link href="#" className="font-medium hover:text-[var(--primary)]">
            Votre santé
          </Link>

          <button className="px-5 py-2 mt-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold w-full">
            J'agis
          </button>
        </div>
      )}
    </header>
  );
}
