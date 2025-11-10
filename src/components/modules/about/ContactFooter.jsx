import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function ContactFooter() {
    const socials = [
        { icon: <Facebook size={18} />, href: "#" },
        { icon: <Twitter size={18} />, href: "#" },
        { icon: <Instagram size={18} />, href: "#" },
        { icon: <Linkedin size={18} />, href: "#" },
    ];

    return (
        <footer className="bg-[#F8FCFB] py-16 text-center">
            {/* Heading */}
            <h3 className="text-xl md:text-2xl font-semibold text-[#3074B5] mb-2 italic">
                Toujours plus proche de Vous
            </h3>
            <p className="text-gray-600 mb-8 text-sm md:text-base">
                Notre équipe experte est toujours disponible pour échanger avec vous.
            </p>

            {/* Contact Button */}
            <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white px-6 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300"
            >
                Contactez–nous
            </a>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-8">
                {socials.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white hover:scale-105 transition-transform"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </footer>
    );
}
