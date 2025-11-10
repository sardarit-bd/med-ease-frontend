import Image from "next/image";

export default function MissionSection() {
    const missions = [
        "Réduire les inégalités d’accès aux soins et Défendre les droits à la santé pour tous",
        "Simplifier et Fluidifier le parcours de santé",
        "Opérer pour une meilleure santé",
        "Embellir le quotidien des acteurs de santé",
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                        Nos missions
                    </h2>

                    <ul className="space-y-4">
                        {missions.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm md:text-base leading-relaxed">
                                <Image src={'/icons/tick-circle.png'} alt="tickIcon" width={20} height={20} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/images/Businessmission.png" // 👉 Replace with your actual illustration
                        alt="Missions Illustration"
                        width={450}
                        height={350}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
