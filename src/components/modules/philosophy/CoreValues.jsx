import StepCard from "./StepCard";

export const philosophySteps = [
    {
        id: 1,
        titleFirstLine: "Comprendre avant",
        titleSecondLine: "d’agir",
        content:
            "Nous analysons, nous écoutons, nous observons. Parce qu’un parcours de soin efficace commence par une compréhension fine de chaque situation, notre technologie s’adapte au contexte, aux besoins réels et aux données disponibles.",
    },
    {
        id: 2,
        titleFirstLine: "Accompagner avec constance",
        titleSecondLine: "et proximité",
        content:
            "Nous ne sommes pas juste une plateforme, nous sommes un compagnon de santé : disponible, réactif, fiable. Nous restons au plus près des patients, des professionnels et des établissements pour les aider à chaque étape.",
    },
    {
        id: 3,
        titleFirstLine: "Faciliter la vie",
        titleSecondLine: "de chacun",
        content:
            "Notre objectif est clair : moins de stress, plus de confort. Nous mettons tout en œuvre pour simplifier l’accès aux soins, réduire les frictions, et apporter des solutions pratiques, fluides et accessibles à tous.",
    },
    {
        id: 4,
        titleFirstLine: "Allier innovation et",
        titleSecondLine: "responsabilité",
        content:
            "Notre technologie s’appuie sur l’intelligence artificielle de pointe, mais toujours dans une logique d’utilité, de sécurité et de respect des personnes. Nous croyons à une innovation éthique, transparente et utile à tous les acteurs de santé.",
    },
    {
        id: 5,
        titleFirstLine: "Construire ensemble,",
        titleSecondLine: "durablement",
        content:
            "Nous avançons main dans la main avec les professionnels de santé, les institutions, les patients et les aidants. Chaque retour compte. Chaque expérience alimente notre démarche d’amélioration continue. Nous co-construisons l’avenir de la santé.",
    },
];

const bgColors = ["#C8EEE9", "#DFEFFF"];
export default function CoreValues() {
    return (
        <div className="max-w-7xl py-20 px-6 md:px-12 mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
                Nos valeurs
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
                    fondamentales
                </span>
            </h2>
            <div>
                {philosophySteps.map((step, index) => (
                    <StepCard
                        key={step.id}
                        id={step.id}
                        titleFirstLine={step.titleFirstLine}
                        titleSecondLine={step.titleSecondLine}
                        content={step.content}
                        bgColor={bgColors[index % 2]}
                    />
                ))}
            </div>
        </div>
    )
}
