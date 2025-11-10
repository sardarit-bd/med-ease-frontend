"use client";

export default function ServicesPersonnalisesSection() {
  const services = [
    {
      title: "Analyse Besoins Santé",
      text: "Nous évaluons vos besoins pour vous orienter vers les solutions les plus adaptées.",
      emoji: "💖",
      bg: "bg-[#e8f8f4]",
    },
    {
      title: "Écoute & Orientation Personnalisée",
      text: "Un interlocuteur unique à votre écoute pour vous guider pas à pas dans les méandres du système de santé.",
      emoji: "🎧",
      bg: "bg-[#eaf3fc]",
    },
    {
      title: "Transport Médical",
      text: "Aide à l’organisation et à la réservation de vos transports sanitaires pour vos rendez-vous et/ou vos transferts.",
      emoji: "🚑",
      bg: "bg-[#f9f3f1]",
    },
    {
      title: "Services de Télémédecine",
      text: "Information et orientation vers les solutions de télémédecine adaptées à vos besoins.",
      emoji: "💻",
      bg: "bg-[#eef8fd]",
    },
    {
      title: "Aide Administrative",
      text: "Simplifiez vos démarches : nous vous aidons à comprendre et à remplir vos documents médicaux et administratifs.",
      emoji: "📋",
      bg: "bg-[#f9f7f2]",
    },
    {
      title: "Recherche & Orientation Médicale",
      text: "Nous trouvons pour vous les établissements, les spécialistes et/ou les services de soins pertinents où que vous soyez.",
      emoji: "🔍",
      bg: "bg-[#f7fcff] border border-[var(--brandColor,#04d2f0)]",
    },
    {
      title: "Accompagnement & Soutien",
      text: "Un soutien humain pour vous et vos aidants tout au long de votre parcours.",
      emoji: "🤝",
      bg: "bg-[#fff7f4]",
    },
    {
      title: "Conseils Santé",
      text: "Accédez à des informations fiables et des conseils pratiques pour une meilleure compréhension de votre santé.",
      emoji: "💡",
      bg: "bg-[#f2f9ff]",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Nous sommes là pour vous :
        </h2>
        <h2 className="text-3xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] mt-1">
          Nos Services Personnalisés
        </h2>
      </div>

      {/* Cards Container */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((item, i) => (
          <div
            key={i}
            className={`relative ${item.bg} rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300`}
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{item.emoji}</div>

            {/* Title */}
            <h4 className="font-semibold text-lg text-gray-900 mb-2">
              {item.title}
            </h4>

            {/* Text */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

