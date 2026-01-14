"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useAuthStore from "../../../store/useAuthStore";
import HeaderActionBtn from "../publicHeader/ActionBtnAndFromWrper";


const services = [
  { name: "Offre de soins", link: "/services/offre-de-soins" },
  { name: "Maps de Santé", link: "/services/cartographie" },
  { name: "Symptom Checker", link: "/services/lits-d-aval" },
  { name: "Transports Sanitaires", link: "/services/sas" },
  { name: "Lits d'hospitalisation", link: "/services/rh" },
  { name: "Télémedecine", link: "/services/telemedecine" },
  { name: "Conciergerie Médicale", link: "/services/conciergerie-medicale" },
];


export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const { setisopenActionForm } = useAuthStore();

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50 border-b border-[var(--light-background)]">
      <div className="max-w-7xl px-5 2xl:px-0 mx-auto flex items-center justify-between py-3">
        {/* Logo + Left side */}
        <div className="flex items-center gap-2">
          <Link href={'/'}>
            <Image
              src="/logos/headLogo.png"
              alt="Med'ease Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
          <Link
            href="#"
            className="hidden md:inline text-[var(--text-dark)] font-medium hover:text-[var(--primary)] transition"
          >
            Patient
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[var(--text-dark)] font-medium">
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              Services <ChevronDown size={16} />
            </div>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:flex flex-col bg-white border border-gray-100 rounded-md shadow-md mt-0 w-[220px] py-4">
              {
                services?.map((item, index) => {
                  return (
                    <Link key={index} href={item?.link} className="px-6 py-2 hover:bg-[var(--light-background)] text-nowrap text-[14px] font-medium w-full">
                      {item.name}
                    </Link>
                  )
                })
              }
            </div>
          </div>

          <Link href="/about" className="hover:text-[var(--primary)] transition">
            About Us
          </Link>

          <Link href="/contactus" className="hover:text-[var(--primary)] transition">
            Contact Us
          </Link>


          <HeaderActionBtn>
            <button onClick={() => { setisopenActionForm(true) }} className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold hover:opacity-90 transition cursor-pointer">
              J'agis
            </button>
          </HeaderActionBtn>
        </nav>

        {/* Mobile menu icon */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="cursor-pointer" size={24} /> : <Menu size={24} />}
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

          <HeaderActionBtn />

        </div>
      )}
    </header>
  );
}
