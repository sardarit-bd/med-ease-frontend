"use client";

export default function ConciergerieSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center px-5 2xl:px-0">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Qu&apos;est-ce que la
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
            Conciergerie Médicale Med&apos;ease ?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-700 text-center mb-3 font-medium text-center">
          Med&apos;ease, c&apos;est votre service d&apos;accompagnement personnalisé
          pour naviguer plus facilement dans le système de santé.
        </p>

        {/* Bold line */}
        <p className="text-center font-semibold text-gray-800 mb-2">
          Plus besoin de chercher seul(e) :
        </p>

        {/* Description */}
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12">
          Nous sommes votre interlocuteur unique, disponible pour toutes vos
          questions et vos démarches liées à votre santé ou celle de vos proches.
        </p>

        {/* Feature points */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-20 text-left pt-5">
          {/* Left Column */}
          <div className="relative text-[2.5rem] font-extrabold text-gray-100 uppercase leading-tight tracking-tight flex flex-col gap-1 items-center md:items-start w-full md:w-fit">
            <span className="block text-gray-200 text-outline-brand">Notre</span>
            <span className="block text-gray-200 text-outline-brand">Conciergerie</span>
            <span className="block text-gray-200 text-outline-brand">Médicale</span>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 md:max-w-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">💖</span>
              <div>
                <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
                  SIMPLIFIE ET FLUIDIFIE VOTRE ACCÈS À L&apos;OFFRE DE SOINS
                </h3>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>

            <div className="flex items-start gap-3">
              <span className="text-3xl">💖</span>
              <div>
                <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
                  OPTIMISE ET PERSONNALISE VOTRE PRISE EN CHARGE
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
