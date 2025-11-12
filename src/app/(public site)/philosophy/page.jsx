import Footer from "@/components/modules/home/Footer";
import Banner from "@/components/modules/philosophy/Banner";
import ContactSection from "@/components/modules/philosophy/ContactSection";
import CoreValues from "@/components/modules/philosophy/CoreValues";
import CTABanner from "@/components/modules/philosophy/CTABanner";
import MedEaseCircle from "@/components/modules/philosophy/MedEaseCircle";

export default function philosophy() {
    return (
        <div>
            <Banner />
            <MedEaseCircle />
            <CoreValues />
            <CTABanner />
            <ContactSection />
            <Footer />
        </div>
    )
}
