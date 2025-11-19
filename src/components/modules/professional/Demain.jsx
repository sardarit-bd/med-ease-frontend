import Image from "next/image";
import Link from "next/link";
export default function Demain() {
    return (
        <>
            <section className="max-w-7xl mx-auto py-10 px-4 md:px-8">
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-700 leading-snug mt-[-10px] mb-18">
                    La Santé de{" "}
                    <span className="text-[#3074B5]">Demain</span> se coordonne <br />
                    <span className="text-[#3074B5]">Aujourd’hui</span>
                </h1>

                {/* All Cards */}
                <div className="mt-10 grid md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="relative h-[250px] bg-[#B9E8E1] rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                        <div className="absolute -top-10 left-6">
                            <Image
                                src="/images/EmergencyCall.png"
                                alt="Urgences"
                                width={100}
                                height={100}
                                className="drop-shadow-md"
                            />
                        </div>
                        <div className="mt-10">
                            <h3 className="text-xl bg-gray-100 p-2 rounded-r-full font-bold text-gray-800 inline-block">
                                Urgences saturées ?
                            </h3><br />
                            <p className="text-gray-700 text-lg mt-2  bg-gray-100 p-2 rounded-r-full inline-block mt-[-20px] text-lg">
                                Orientez en temps réel grâce au
                            </p><br />
                            <p className="text-gray-700 text-lg mt-2  bg-gray-100 p-2 rounded-r-full inline-block mt-[-20px] text-lg">
                                télétriage intelligent et
                            </p><br />
                            <p className="text-gray-700 text-lg mt-2  bg-gray-100 p-2 rounded-r-full inline-block mt-[-20px] text-lg">
                                désengorgez vos services.
                            </p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div>
                        <p className="bg-[#dfefff] inline-block p-1 text-gray-600 cornerCut text-2xl font-semibold">Anticiper les besoins</p><br />
                        <p className="bg-[#dfefff] inline-block p-1 text-gray-600 cornerCut text-2xl font-semibold mt-[-5px]">en lits ?</p>
                        <div>
                            <div className="h-[50px] rounded-lg w-[62%] bg-[#dfefff] float-right"></div><br />
                            <div className="p-3 bg-[#dfefff] mt-[-5px] rounded-lg">
                                <p className="text-gray-600 text-xl">Notre IA prédit les flux, vous <br /> planifiez sereinement.</p>
                                <div className="mt-2 flex items-center justify-around">
                                    <Image src="/images/vector.png" alt="arrow" width={100} height={100} />
                                    <Image src="/images/bed.png" alt="arrow" width={100} height={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="relative h-[250px] bg-[#B9E8E1] rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                        <div className="absolute -top-8 left-6">
                            <Image
                                src="/images/note.png"
                                alt="Optimiser les lits"
                                width={100}
                                height={100}
                                className="drop-shadow-md"
                            />
                        </div>
                        <div className="mt-10">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Optimiser les lits et réduire les coûts ?
                            </h3>
                            <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                                Notre plateforme coordonne les sorties et maximise l’occupation.
                            </p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="mt-[-30px]">
                        <p className="bg-[#dfefff] inline-block p-1 text-gray-600 cornerCut text-2xl font-semibold">Anticiper les besoins</p><br />
                        <p className="bg-[#dfefff] inline-block p-1 text-gray-600 cornerCut text-2xl font-semibold mt-[-5px]">en lits ?</p>
                        <div>
                            <div className="h-[50px] rounded-lg w-[62%] bg-[#dfefff] float-right"></div><br />
                            <div className="p-3 bg-[#dfefff] mt-[-5px] rounded-lg">
                                <p className="text-gray-600 text-xl">Notre IA prédit les flux, vous planifiez sereinement.</p>
                                <div className="mt-2 flex items-center justify-around">
                                    <Image src="/images/vector.png" alt="arrow" width={120} height={120} />
                                    <Image src="/images/laptop.png" alt="arrow" width={150} height={150} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div className="relative h-[250px] bg-[#B9E8E1] mt-[40px] rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                        <div className="absolute -top-10 left-6">
                            <Image
                                src="/images/doctor.png"
                                alt="Urgences"
                                width={100}
                                height={100}
                                className="drop-shadow-md"
                            />
                        </div>
                        <div className="mt-10">
                            <h3 className="text-xl bg-gray-100 p-2 rounded-r-full font-bold text-gray-800 inline-block">
                                Urgences saturées ?
                            </h3><br />
                            <p className="text-gray-700 text-lg mt-2  bg-gray-100 p-2 rounded-r-full inline-block mt-[-20px] text-lg">
                                Orientez en temps réel grâce au
                            </p><br />
                            <p className="text-gray-700 text-lg mt-2  bg-gray-100 p-2 rounded-r-full inline-block mt-[-20px] text-lg">
                                télétriage intelligent et
                            </p><br />
                            <p className="text-gray-700 text-lg mt-2  bg-gray-100 p-2 rounded-r-full inline-block mt-[-20px] text-lg">
                                désengorgez vos services.
                            </p>
                        </div>
                    </div>
                    {/* card 6  */}
                    <div className="mt-[-20px]">
                        <p className="bg-[#dfefff] inline-block p-1 text-gray-600 cornerCut text-2xl font-semibold">Anticiper les besoins</p><br />
                        <p className="bg-[#dfefff] inline-block p-1 text-gray-600 cornerCut text-2xl font-semibold mt-[-5px]">en lits ?</p>
                        <div>
                            <div className="h-[50px] rounded-lg w-[62%] bg-[#dfefff] float-right"></div><br />
                            <div className="p-3 bg-[#dfefff] mt-[-5px] rounded-lg">
                                <p className="text-gray-600 text-xl">Notre IA prédit les flux, vous planifiez sereinement.</p>
                                <div className="mt-2 flex items-center justify-around">
                                    <Image src="/images/vector.png" alt="arrow" width={120} height={120} />
                                    <Image src="/images/people.png" alt="arrow" width={150} height={150} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 7 */}
                    <div className="relative h-[250px] bg-[#B9E8E1] mt-[40px] rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                        <div className="absolute -top-10 left-6">
                            <Image
                                src="/images/sthetecope.png"
                                alt="Urgences"
                                width={150}
                                height={150}
                                className="drop-shadow-md"
                            />
                        </div>
                        <div className="mt-10">
                            <h3 className="text-xl bg-gray-100 p-2 rounded-r-full font-bold text-gray-800 inline-block">
                                Urgences saturées ?
                            </h3><br />
                            <p className="text-gray-700 text-lg mt-2  bg-gray-100 p-2 rounded-r-full inline-block mt-[-20px] text-lg">
                                Orientez en temps réel grâce au
                            </p><br />
                            <p className="text-gray-700 text-lg mt-2  bg-gray-100 p-2 rounded-r-full inline-block mt-[-20px] text-lg">
                                télétriage intelligent et
                            </p><br />
                            <p className="text-gray-700 text-lg mt-2  bg-gray-100 p-2 rounded-r-full inline-block mt-[-20px] text-lg">
                                désengorgez vos services.
                            </p>
                        </div>
                    </div>
                    {/* card 8 */}
                    <div className="mt-[40px]">
                        <p className="bg-[#dfefff] inline-block p-1 text-gray-600 cornerCut text-2xl font-semibold">Anticiper les besoins</p><br />
                        <p className="bg-[#dfefff] inline-block p-1 text-gray-600 cornerCut text-2xl font-semibold mt-[-5px]">en lits ?</p>
                        <div>
                            <div className="h-[50px] rounded-lg w-[62%] bg-[#dfefff] float-right"></div><br />
                            <div className="p-3 bg-[#dfefff] mt-[-5px] rounded-lg">
                                <p className="text-gray-600 text-xl">Notre IA prédit les flux, vous planifiez sereinement.</p>
                                <div className="mt-2 flex items-center justify-around">
                                    <Image src="/images/vector.png" alt="arrow" width={120} height={120} />
                                    <Image src="/images/people.png" alt="arrow" width={150} height={150} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 9 */}
                    <div className="relative h-[250px] bg-[#B9E8E1] mt-[40px] rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                        <div className="absolute -top-10 left-6">
                            <Image
                                src="/images/padbook.png"
                                alt="Urgences"
                                width={100}
                                height={100}
                                className="drop-shadow-md"
                            />
                        </div>
                        <div className="mt-10">
                            <h3 className="text-xl bg-gray-100 p-2 rounded-r-full font-bold text-gray-800 inline-block">
                                Urgences saturées ?
                            </h3><br />
                            <p className="text-gray-700 text-lg mt-2  bg-gray-100 p-2 rounded-r-full inline-block mt-[-20px] text-lg">
                                Orientez en temps réel grâce au
                            </p><br />
                            <p className="text-gray-700 text-lg mt-2  bg-gray-100 p-2 rounded-r-full inline-block mt-[-20px] text-lg">
                                télétriage intelligent et
                            </p><br />
                            <p className="text-gray-700 text-lg mt-2  bg-gray-100 p-2 rounded-r-full inline-block mt-[-20px] text-lg">
                                désengorgez vos services.
                            </p>
                        </div>
                    </div>
                </div>

                {/* head line after cards */}
                <div className="my-30 text-center">
                    <h1 className="text-2xl md:text-3xl md:text-3xl font-bold text-gray-800 leading-snug flex items-center gap-2 justify-center flex-wrap">
                        <Image
                            src="/images/Defibrillator.png"
                            alt="Defibrillator Icon"
                            width={40}
                            height={40}
                            className="inline-block object-contain"
                        />
                        <span className="uppercase bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-transparent bg-clip-text">Libérez votre expertise des contraintes opérationnelles</span>
                    </h1>
                </div>

                {/* cta section  */}

                <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white py-16 px-6 md:px-12 my-10">
                    {/* Floating Icons */}
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
                        src="/images/FirstAid1.png"
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
                            Avec <span className="text-white">Med’ease</span>, votre partenaire opérationnel, rien n’est laissé au hasard !
                        </h2>
                        <p className="text-white/90 text-base md:text-lg">
                            Chaque détail compte, chaque étape du soin aussi
                        </p>
                        <p className="text-white font-medium mt-2">
                            Nous sommes là pour accompagner, alléger, et rendre possible ce qui compte vraiment : <span className="font-semibold">soigner.</span>
                        </p>

                        <div className="flex justify-center mt-8">
                            <Link
                                href="/soignez"
                                className="inline-block px-8 py-3 rounded-full bg-white font-semibold shadow-md 
                            hover:shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                <span className="bg-gradient-to-r from-[#3074B5] to-[#61D0BF] bg-clip-text text-transparent">
                                    Innovez et Soignez
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
            </section>
            {/* ULTIMATE banner section  */}
            <section className="bg-[#F9FEFD] relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 relative">
                    {/* Left side — Doctors Image */}
                    <div className="relative flex justify-around w-full md:w-1/2">
                        <Image
                            src="/images/asian-young-main-group-hospital-professional.png"
                            alt="medical-team"
                            width={550}
                            height={500}
                            className="object-contain"
                        />

                        {/* Plus icons */}
                        <Image
                            src="/images/plus.png"
                            alt="plus-icon"
                            width={40}
                            height={40}
                            className="absolute top-[15%] right-[20%] md:top-[10%] md:right-[10%] hidden md:block"
                        />
                        <Image
                            src="/images/plus.png"
                            alt="plus-icon"
                            width={50}
                            height={50}
                            className="absolute top-[45%] right-[20%] md:top-[35%] md:right-[5%] hidden md:block"
                        />
                    </div>

                    {/* Right side — Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2937] mb-3">
                            Toujours plus proche de{" "}
                            <span className="text-[#3074B5]">Vous</span>
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Notre équipe experte est toujours disponible pour échanger avec vous.
                        </p>
                        <a
                            href="#"
                            className="inline-block px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#3074B5] to-[#61D0BF] shadow-md hover:scale-105 transition-transform duration-300"
                        >
                            À votre écoute
                        </a>
                    </div>
                </div>
                <Image
                    src="/images/Frame 1000002001.png"
                    alt="plus-icon"
                    width={200}
                    height={200}
                    className="absolute bottom-0 right-0 md:bottom-0 md:right-0"
                />
            </section>
        </>
    );
}
