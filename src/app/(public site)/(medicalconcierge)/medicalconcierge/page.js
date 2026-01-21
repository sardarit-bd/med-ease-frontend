"use client";
import Banner from "@/components/modules/home/Banner";
import BeneficesRapidesSection from "@/components/modules/home/BeneficesRapidesSection";
import ConciergerieSection from "@/components/modules/home/ConciergerieSection";
import ContactFormSection from "@/components/modules/home/ContactFormSection";
import DirectCallBanner from "@/components/modules/home/DirectCallBanner";
import EtapesSimplesSection from "@/components/modules/home/EtapesSimplesSection";
import Footer from "@/components/modules/home/Footer";
import ServicesPersonnalisesSection from "@/components/modules/home/ServicesPersonnalisesSection";

const { Divide } = require("lucide-react")

const Page = () => {
    return (
        <div>
            <Banner />
            <ConciergerieSection />
            <BeneficesRapidesSection />
            <ServicesPersonnalisesSection />
            <EtapesSimplesSection />
            <ContactFormSection />
            <DirectCallBanner />
            <Footer />
        </div>
    )
}

export default Page;