"use client";
import Image from "next/image";
import Gagnez from "../../../../public/icons/Gagnez.png";
import Prenez from "../../../../public/icons/Prenez.png";
import Réduisez from "../../../../public/icons/Réduisez.png";



export default function BeneficesRapidesSection() {
  const cards = [
    {
      icon: Gagnez,
      title: "Gagnez du temps :",
      text: "Laissez-nous faire les recherches et les démarches complexes.",
      badgeColor: "from-pink-500 to-fuchsia-700",
      border: false,
    },
    {
      icon: Réduisez,
      title: "Réduisez le stress :",
      text: "Finis les doutes et l’anxiété liés aux parcours de soins.",
      badgeColor: "from-fuchsia-500 to-purple-700",
      border: true,
    },
    {
      icon: Prenez,
      title: "Prenez les bonnes décisions :",
      text: "Des informations fiables pour un choix éclairé.",
      badgeColor: "from-yellow-400 to-purple-600",
      border: false,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#f8fdfd]">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
        Bénéfices{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
          rapides:
        </span>
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-5 2xl:px-0">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`relative bg-white rounded-md p-6 transition-all duration-300 customboxshadow`}
          >
            <Image src={card.icon} alt={card.title} />

            {/* Title */}
            <h3 className="font-semibold text-lg text-gray-900 mb-2 mt-2">
              {card.title}
            </h3>

            {/* Text */}
            <p className="text-gray-600">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
