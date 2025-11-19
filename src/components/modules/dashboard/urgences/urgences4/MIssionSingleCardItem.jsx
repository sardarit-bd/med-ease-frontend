import Image from "next/image";

const MissionSingleCardItem = ({ img, name, ans, diplome, profil, satisfaction, fidelite }) => {


    return (
        <div className="flex justify-between items-center mb-8">
            {/* Left Info */}
            <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                        src={img}
                        width={48}
                        height={48}
                        className="object-cover"
                        alt="avatar"
                    />
                </div>

                <div>
                    <p className="font-semibold text-gray-800">{name}</p>
                    <p className="text-sm text-gray-600">{ans}</p>
                    <p className="text-sm text-gray-600">{diplome}</p>
                </div>
            </div>

            <div>
                <p><span className="font-semibold">Profil :</span>{profil}</p>
                <p>
                    <span className="font-semibold">Satisfaction : </span>
                    <span className={satisfaction == "Verte" ? "text-green-500" : "text-orange-500"}>
                        {satisfaction}
                    </span>
                </p>
                <p><span className="font-semibold">Fidélité : </span> {fidelite}</p>
            </div>

            {/* Right Info */}
            <div className="text-right text-sm text-gray-700">

                <button className="mt-3 bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white px-5 py-2 rounded-full shadow">
                    Détails
                </button>
            </div>
        </div>
    )
}

export default MissionSingleCardItem;