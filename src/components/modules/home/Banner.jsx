"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import herodoctorthapistopok from "../../../../public/icons/herodoctorthapistopok.png";

export default function Banner() {
  return (
    <section
      className="relative w-full md:h-screen bg-cover bg-center flex items-center overflow-hidden pt-16 md:pt-0"
      style={{ backgroundImage: `url('/images/bannerBg.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(226,249,246,0.74)] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 2xl:px-0 w-full">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-4 text-[var(--text-dark)] py-10">
          <p className="text-xs text-[var(--primary)] font-medium px-5 flex items-center gap-2 py-2 mt-2 rounded-full bg-white font-semibold w-fit flex items-center gap-3">
            <Image src={herodoctorthapistopok} alt="herodoctorthapistopok" />
            <span>Med’ease : Votre santé simplifiée</span>
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-center md:text-left">
            Votre santé simplifiée : <br />
            <span className="text-[var(--secondary)]">
              La conciergerie Médicale Med'ease
            </span>{" "}
            vous accompagne à chaque étape, pas à pas, de votre parcours de soins.
          </h1>

          <button className="px-5 flex items-center gap-2 py-2 mt-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold w-fit cursor-pointer">
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

            <Image src={"/icons/heroBox.png"}
              alt="heroBox_icons"
              width={200}
              height={200}
              className="absolute top-[50%] -left-[50px] z-30 object-contain" />

            <Image src={"/icons/heroIcon.png"}
              alt="heroIcon"
              width={200}
              height={200}
              className="absolute -top-25 left-10 z-30 object-contain" />

            <Image src={"/icons/heroCampus.png"}
              alt="heroCampus"
              width={200}
              height={200}
              className="absolute top-0 -right-[50px] z-30 object-contain" />

          </div>
        </div>
      </div>
    </section>
  );
}
