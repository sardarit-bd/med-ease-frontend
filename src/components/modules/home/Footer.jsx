"use client";

import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-4 px-5 2xl:px-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side */}
        <p className="text-sm text-gray-600">
          © Med’ease. All rights reserved
        </p>

        {/* Right Side - Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white flex items-center justify-center text-white hover:opacity-90 transition-all"
            aria-label="Twitter"
          >
            <FaXTwitter size={14} />
          </a>

          <a
            href="#"
            className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white flex items-center justify-center text-white hover:opacity-90 transition-all"
            aria-label="Instagram"
          >
            <FaInstagram size={14} />
          </a>

          <a
            href="#"
            className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white flex items-center justify-center text-white hover:opacity-90 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
