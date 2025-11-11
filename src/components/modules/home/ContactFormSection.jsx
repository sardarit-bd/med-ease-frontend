"use client";
import SpinLoader from "@/components/shared/SpinLoader";
import Image from "next/image";
import { useState } from "react";
import Vector_Plus from "../../../../public/icons/Vector_Plus.png";


export default function ContactFormSection() {



  const [isLoading, setIsLoading] = useState(false);




  return (
    <section className="relative py-20 bg-[#61D0BF0F] overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 2xl:px-0">

        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
          Prêt à être Accompagné(e)?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
            Contactez-nous !
          </span>
        </h2>


        <div className="flex items-center justify-between gap-1 px-0 md:px-5">


          <div className="hidden md:flex items-center gap-8 flex-col">
            <span className="pl-20">
              <Image className="w-12 h-auto" src={Vector_Plus} alt="Vector_Plus" />
            </span>
            <span className=" ">
              <Image className="w-20 h-auto" src={Vector_Plus} alt="Vector_Plus" />
            </span>
          </div>





          {/* Form Container */}
          <div className="w-full md:max-w-lg w-full mx-auto bg-white rounded-lg p-8 customboxshadow">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Prénom"
                className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brandColor,#04d2f0)] text-gray-700"
              />
              <input
                type="text"
                placeholder="Nom"
                className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brandColor,#04d2f0)] text-gray-700"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brandColor,#04d2f0)] text-gray-700"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brandColor,#04d2f0)] text-gray-700"
              />
              <select
                className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brandColor,#04d2f0)] text-gray-700"
              >
                <option>Besoin principal</option>
                <option>Orientation médicale</option>
                <option>Transport médical</option>
                <option>Aide administrative</option>
                <option>Téléconsultation</option>
              </select>
              <textarea
                rows={3}
                placeholder="Message"
                className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brandColor,#04d2f0)] text-gray-700 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-md text-white font-medium shadow-md transition-transform hover:scale-[1.02] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white flex items-center justify-center gap-3"
              >
                {isLoading && <SpinLoader />}
                Envoyer ma Demande
              </button>
            </form>
          </div>




          <div className="hidden md:flex items-center gap-8 flex-col">
            <span className="pr-20">
              <Image className="w-12 h-auto" src={Vector_Plus} alt="Vector_Plus" />
            </span>
            <span className="">
              <Image className="w-20 h-auto" src={Vector_Plus} alt="Vector_Plus" />
            </span>
          </div>


        </div>

      </div>


    </section>
  );
}
