import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <section className="bg-[url('/images/bg.png')] bg-cover bg-center min-h-[80vh] flex items-center">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-8 py-10">

                {/* Left content */}
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-[#3074B5]">
                        Réinventez la Santé{" "}
                        <Image
                            src="/images/firstaid.png"
                            alt="first aid"
                            width={50}
                            height={50}
                            className="bg-[#61d0bf] object-cover rounded-full p-2 align-middle ml-2 hidden md:inline-block"
                        />{" "}
                        Soignez l’Avenir de Millions de Vies :<br />
                        La Médecine 3.0
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        Multipliez votre impact, optimisez vos opérations et bonifiez votre
                        prise en charge. <span className="font-semibold">Découvrez les solutions qui transforment votre
                            expertise en performance exceptionnelle.</span>
                    </p>

                    <Link
                        href="/register"
                        className="inline-block px-6 py-3 rounded-full text-white font-semibold 
                       bg-gradient-to-r from-[#3074B5] to-[#61D0BF] 
                       hover:opacity-90 transition duration-300 shadow-md"
                    >
                        Innovez et soignez
                    </Link>
                </div>

                {/* Right visual */}
                <div className="md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right mt-10">
                    <Image
                        src="/images/hero.png"
                        alt="doctor"
                        width={520}
                        height={520}
                        className="object-cover"
                    />
                    <h1 className="mt-6 text-xl md:text-3xl font-semibold bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-transparent bg-clip-text">
                        Votre Excellence, notre Engagement
                    </h1>
                </div>
            </div>
        </section>
    );
}
