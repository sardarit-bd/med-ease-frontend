import Image from "next/image";

export default function CTABanner() {
    return (
        <section className="my-10 mx-10">
            {/* Floating Icons */}
            <div className="max-w-7xl relative overflow-hidden mx-auto rounded-2xl bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white py-16 px-6 md:px-12">
                <Image
                    src="/images/Blood Pressure.png"
                    alt="Blood Pressure Monitor"
                    width={70}
                    height={70}
                    className="absolute top-6 left-10 animate-float-slow hidden md:block"
                />
                <Image
                    src="/images/Stetoscope.png"
                    alt="Stethoscope"
                    width={70}
                    height={70}
                    className="absolute top-8 right-12 animate-float-slow hidden md:block"
                />
                <Image
                    src="/images/first_aid_2.png"
                    alt="First Aid Box"
                    width={70}
                    height={70}
                    className="absolute bottom-10 left-14 animate-float-slow hidden md:block"
                />
                <Image
                    src="/images/pills.png"
                    alt="Pills"
                    width={70}
                    height={70}
                    className="absolute bottom-10 right-14 animate-float-slow hidden md:block"
                />

                {/* Text Content */}
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Notre leitmotiv
                    </h2>
                    <p className="text-white text-center justify-center flex gap-2 items-center font-medium mt-2">
                        Votre confort <div className="bg-[#61D0BF] rounded-full p-2 inline-block"><Image src='/philosophy/kitBox.png' width={25} height={25} alt="philosophykitbox" /></div> Votre bien-être.
                    </p>
                    <p className="text-white font-medium mt-2">
                        Notre engagement.
                    </p>
                </div>
            </div>
        </section>
    )
}
