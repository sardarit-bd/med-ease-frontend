"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <section
      className="relative w-full h-[900px] md:h-screen bg-cover bg-center flex items-center overflow-hidden"
      style={{ backgroundImage: `url('/images/bannerBg.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(226,249,246,0.74)] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 w-full">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 flex flex-col items-start justify-center space-y-4 text-[var(--text-dark)] py-10">
          <p className="text-sm text-[var(--primary)] font-medium">
            Med’ease : Votre santé simplifiée
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
            Votre santé simplifiée : <br />
            <span className="text-[var(--secondary)]">
              La conciergerie Médicale Med'ease
            </span>{" "}
            vous accompagne à chaque étape, pas à pas, de votre parcours de soins.
          </h1>

          <button className="mt-6 flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary)] text-white font-medium hover:bg-[var(--secondary)] transition-all">
            Être accompagné(e) <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="relative md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          {/* Center point container */}
          <div className="relative bottom-0 w-[400px] md:w-[620px] h-[300px] md:h-[420px] flex justify-center items-center">
            {/* Main illustration */}
            <Image
              src="/images/bannerImage.png"
              alt="Conciergerie Médicale"
              fill
              className="object-contain z-20"
            />

            {/* Ellipses centered behind */}
            <Image
              src="/images/Ellipse1.png"
              alt="Ellipse 1"
              width={480}
              height={480}
              className="absolute z-10 object-contain"
            />
            <Image
              src="/images/Ellipse2.png"
              alt="Ellipse 2"
              width={550}
              height={550}
              className="absolute z-0 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
