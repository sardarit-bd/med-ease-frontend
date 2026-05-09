"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useAuthStore from "../../../../store/useAuthStore";
import HeaderActionBtn from "../publicHeader/ActionBtnAndFromWrper";
const servicesforPatient = [
  { name: "Offre de soins", link: "/services/offre-de-soins" },
  { name: "Maps de Santé", link: "/services/cartographie" },
  { name: "Symptom Checker", link: "/services/lits-d-aval" },
  { name: "Transports Sanitaires", link: "/transport" },
  { name: "Lits d'hospitalisation", link: "/services/rh" },
  { name: "Télémedecine", link: "/services/telemedecine" },
  { name: "Conciergerie Médicale", link: "/medicalconcierge" },
];

const servicesforProfessional = [
  { name: "Offre de soins", link: "/services/offre-de-soins" },
  { name: "Cartographie", link: "/services/cartographie" },
  { name: "Lits d’aval", link: "/services/lits-d-aval" },
  { name: "SAS", link: "/services/sas" },
  { name: "Transports Sanitaires", link: "/transport" },
  { name: "RH", link: "/services/telemedecine" },
  { name: "Télémédecine", link: "/services/conciergerie-medicale" },
  { name: "Pharma", link: "/services/rh" },
  { name: "Studio", link: "/services/telemedecine" },
  { name: "Conciergerie Médicale", link: "/medicalconcierge" },
];

export default function Header() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { setisopenActionForm } = useAuthStore();

  const services =
    pathName === "/"
      ? servicesforPatient
      : pathName === "/professional"
        ? servicesforProfessional
        : pathName === "/medicalconcierge"
          ? servicesforProfessional
          : servicesforPatient;

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50 border-b border-(--light-background)">
      <div className="max-w-7xl px-5 2xl:px-0 mx-auto flex items-center justify-between py-3">
        {/* Logo + Left side */}
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image
              src="/logos/headLogo.png"
              alt="Med'ease Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
          <div className="flex items-center gap-5 ml-6">
            {pathName == "/" || pathName == "/medicalconcierge" ? (
              <Link
                href="/professional"
                className="hidden md:inline text-(--text-dark) font-medium hover:text-(--primary) transition"
              >
                Professional
              </Link>
            ) : (
              <Link
                href="/"
                className="hidden md:inline text-(--text-dark) font-medium hover:text-(--primary) transition"
              >
                Patient
              </Link>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-(--text-dark) font-medium">
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              Services <ChevronDown size={16} />
            </div>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:flex flex-col bg-white border border-gray-100 rounded-md shadow-md mt-0 w-[220px] py-4">
              {services?.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item?.link}
                    className="px-6 py-2 hover:bg-(--light-background) text-nowrap text-[14px] font-medium w-full"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <Link href="/about" className="hover:text-(--primary) transition">
            About Us
          </Link>

          <Link
            href="/philosophy"
            className="hover:text-(--primary) transition"
          >
            Our Philosophy
          </Link>

          <Link
            href="/chronologie"
            className="hover:text-(--primary) transition"
          >
            Origins
          </Link>

          <Link href="/contactus" className="hover:text-(--primary) transition">
            Contact Us
          </Link>

          <HeaderActionBtn>
            <button
              onClick={() => {
                setisopenActionForm(true);
              }}
              className="px-5 py-2.5 rounded-full bg-(--primary) to-(--secondary) text-white font-semibold hover:opacity-90 transition cursor-pointer"
            >
              J'agis
            </button>
          </HeaderActionBtn>
        </nav>

        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="cursor-pointer" size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-(--light-background) flex flex-col items-start px-6 py-4 space-y-3 shadow-md">
          <Link
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            href="/"
            className="text-[var(--text-dark)] font-medium hover:text-[var(--primary)]"
          >
            Patient
          </Link>

          <details className="w-full">
            <summary className="cursor-pointer flex items-center justify-between font-medium py-2">
              Services <ChevronDown size={16} />
            </summary>
            <div className="flex flex-col pl-4 mt-2 space-y-1">
              {services?.map((item, index) => {
                return (
                  <Link
                    onClick={() => setMenuOpen(!menuOpen)}
                    key={index}
                    href={item?.link}
                    className="py-2 text-sm hover:text-[var(--primary)]"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </details>

          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            href="/about"
            className="font-medium py-2 hover:text-[var(--primary)]"
          >
            About Us
          </Link>

          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            href="/philosophy"
            className="font-medium py-2 hover:text-[var(--primary)]"
          >
            Our Philosophy
          </Link>

          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            href="/contactus"
            className="font-medium hover:text-[var(--primary)]"
          >
            Contact Us
          </Link>

          <HeaderActionBtn />
        </div>
      )}
    </header>
  );
}
