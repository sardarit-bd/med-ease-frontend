"use client";

export default function DirectCallBanner() {
  return (
    <section className="py-16 px-5 2xl:px-0 bg-[#61D0BF0F] flex items-center justify-center">
      <div className="relative max-w-7xl w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-xl text-white text-center py-14 shadow-md overflow-hidden">
        {/* Floating Icons (decorative) */}
        <div className="hidden md:block absolute top-16 left-20 text-4xl animate-bounce">👨‍⚕️</div>
        <div className="hidden md:block absolute bottom-14 left-32 text-4xl animate-ping">🩺</div>
        <div className="hidden md:block absolute top-16 right-20 text-4xl animate-spin">💊</div>
        <div className="hidden md:block absolute bottom-16 right-32 text-4xl animate-bounce">🩹</div>

        {/* Text */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          Vous préférez parler directement <br /> à un coordinateur ?
        </h2>
        <p className="text-white/80 text-sm mb-5">Appelez-nous au :</p>

        {/* Phone Number */}
        <a
          href="tel:061741867"
          className="inline-block bg-white text-[var(--brandColor,#04d2f0)] font-semibold px-6 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all"
        >
          06 17 41 86 7
        </a>
      </div>
    </section>
  );
}
