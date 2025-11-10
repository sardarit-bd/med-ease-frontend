"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Banner from "@/components/modules/home/Banner";
import ConciergerieSection from "@/components/modules/home/ConciergerieSection";
import BeneficesRapidesSection from "@/components/modules/home/BeneficesRapidesSection";
import ServicesPersonnalisesSection from "@/components/modules/home/ServicesPersonnalisesSection";
import EtapesSimplesSection from "@/components/modules/home/EtapesSimplesSection";
import ContactFormSection from "@/components/modules/home/ContactFormSection";
import DirectCallBanner from "@/components/modules/home/DirectCallBanner";
import Footer from "@/components/modules/home/Footer";

export default function HomePage() {
  return (
    <>
      <Banner />
      <ConciergerieSection/>
      <BeneficesRapidesSection/>
      <ServicesPersonnalisesSection/>
      <EtapesSimplesSection/>
      <ContactFormSection/>
      <DirectCallBanner/>
      <Footer/>
    </>
  );
}
