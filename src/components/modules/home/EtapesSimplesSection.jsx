"use client";
import Image from "next/image";
import Emergency from "../../../../public/icons/EmergencyCall.png";
import Exprimez from "../../../../public/icons/Exprimez.png";
import Recevez from "../../../../public/icons/Recevez.png";
import swipeArrow from "../../../../public/icons/swipeArrow.png";



export default function EtapesSimplesSection() {
  const steps = [
    {
      emoji: Emergency,
      title: "Contactez-nous",
      text: "Remplissez le formulaire en ligne ou appelez-nous directement.",
    },
    {
      emoji: Exprimez,
      title: "Exprimez Votre Besoin",
      text: "Un coordinateur dédié vous écoute et évalue votre situation et vos besoins.",
    },
    {
      emoji: Recevez,
      title: "Recevez Votre Solution",
      text: "Nous vous apportons les informations, les contacts ou l’aide nécessaire.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
        Votre Accompagnement en{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
          3 Étapes Simples!
        </span>
      </h2>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center lg:translate-x-12">
        {steps.map((step, index) => (

          <div key={index} className="flex items-center justify-center">
            <div
              className="flex flex-col items-center justify-center px-6"
            >
              {/* Icon */}
              <Image src={step.emoji} alt="icons" />

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 text-sm max-w-xs">{step.text}</p>
            </div>
            <Image src={swipeArrow} alt="swipeArrow" className={index < 2 ? "hidden lg:block visible" : "hidden lg:block invisible"} />

          </div>
        ))}
      </div>
    </section>
  );
}
