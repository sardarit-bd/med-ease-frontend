'use client'


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const TempNavigator = () => {


    const [isshow, setIsShow] = useState(false);

    const PathName = usePathname();


    const navigate = [
        {
            name: "Landing",
            link: '/'
        },
        {
            name: "Sign In",
            link: '/auth/signin'
        },
        {
            name: "Sign Up",
            link: '/auth/signup'
        },
        {
            name: "About",
            link: '/about'
        },
        {
            name: "About2",
            link: '/about2'
        },
        {
            name: "Patient",
            link: '/patient'
        },
        {
            name: "Rendez",
            link: '/rendez'
        },
        {
            name: "Home",
            link: '/home'
        },
        {
            name: "Home 2",
            link: '/home/2'
        },
        {
            name: "Innovations",
            link: '/innovations'
        },
        {
            name: "Inscription",
            link: '/inscription'
        },
        {
            name: "mvp-home",
            link: '/mvp-home'
        },
        {
            name: "Philosophy",
            link: '/philosophy'
        },
        {
            name: "Thematique",
            link: '/thematique'
        },
        {
            name: "Resultant",
            link: '/resultant'
        },
        {
            name: "Resultant Home",
            link: '/resultant/resultant-home'
        },
        {
            name: "Transport",
            link: '/transport'
        },
        {
            name: "Chronologie",
            link: '/chronologie'
        },
        {
            name: "Dashboard Admin",
            link: '/dashboard/admin'
        },
        {
            name: "Dashboard Bed Manager",
            link: '/dashboard/bed-manager'
        },
        {
            name: "Dashboard Bioc",
            link: '/dashboard/bioc'
        },
        {
            name: "Dashboard Bioc Urgencees",
            link: '/dashboard/bioc/urgencees'
        },
        {
            name: "Dashboard Conciergerie",
            link: '/dashboard/conciergerie'
        },

        {
            name: "Dashboard Establishment",
            link: '/dashboard/establishment'
        },

        {
            name: "Dashboard Urgences",
            link: '/dashboard/urgences'
        },
        {
            name: "Dashboard Urgences Urgences",
            link: '/dashboard/urgences/urgences'
        },
        {
            name: "Dashboard Urgences, Accueil-urgences",
            link: '/dashboard/urgences/accueil-urgences'
        },
        {
            name: "Dashboard Urgences ,Urgences1",
            link: '/dashboard/urgences/urgences1'
        },
        {
            name: "Dashboard Urgences,Urgences2",
            link: '/dashboard/urgences/urgences2'
        },
        {
            name: "Dashboard Urgences,Urgences4",
            link: '/dashboard/urgences/urgences4'
        },

        {
            name: "Medical Dashboard",
            link: '/dashboard/medical'
        },

        {
            name: "Medical Dashboard Slot Request",
            link: '/dashboard/medical/slot-request'
        },

        {
            name: "Medical Dashboard BedAvailabilitySearch",
            link: '/dashboard/medical/bedavailabilitysearch'
        },

        {
            name: "Medical Dashboard BedManagement Dashboard Table",
            link: '/dashboard/medical/bedmanagementdashboardtable'
        },

        {
            name: "Medical Dashboard Hospital Profile",
            link: '/dashboard/medical/hospitalprofile'
        },

        {
            name: "Medical Dashboard Tableau de bord Professionnel",
            link: '/dashboard/medical/professionaldashboard'
        },

        {
            name: "Medical Dashboard Demandes de transport disponibles",
            link: '/dashboard/medical/medicaltransportrequests'
        },
        {
            name: "Tableau de Board Transport - Fleet Manager",
            link: '/dashboard/medical/fleetmanager'
        },
        {
            name: "Offre de soins",
            link: '/dashboard/medical/offredesoins'
        },
        {
            name: "Filtres & Résultats",
            link: '/dashboard/medical/filtresresultats'
        },
        {
            name: "Bloc opératoire",
            link: '/dashboard/medical/blocoperatoire'
        },
        {
            name: "Transport sanitaire - Gestion centralisée",
            link: '/dashboard/medical/gestioncentralisee'
        },

    ]




    return (
        <div className="fixed right-0 top-[220px] z-50">
            <div onClick={() => { setIsShow(true) }} className="w-10 h-10 bg-white rounded-l-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold w-fit cursor-pointer flex items-center justify-center text-white shadow-xl">
                <MdKeyboardArrowLeft className="text-4xl" />
            </div>




            {
                isshow && <div className="w-screen h-screen z-50 fixed left-0 top-0 flex items-center justify-center">

                    <div onClick={() => { setIsShow(false) }} className="bg-gray-900 opacity-50 h-screen w-full">

                    </div>
                    <div className="bg-white h-screen w-[400px] p-4 overflow-y-scroll">
                        <h2 className="text-xl font-semibold text-gray-600">Teamporary Navigation:</h2>
                        <span className="font-thin text-[13px] leading-3 text-gray-400">Don't worry, This is a Teamporary Navigation</span>

                        <div className="mt-7">

                            {
                                navigate?.map((item, index) => {
                                    return (
                                        <div key={index} className="flex items-center gap-2 py-1">
                                            <span>{index + 1}</span>
                                            <Link onClick={() => { setIsShow(false) }} className={`${PathName == item?.link ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold w-fit cursor-pointer p-2 rounded-full" : "underline underline-offset-2"}`} href={item?.link}>{item?.name}</Link>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            }



        </div>
    )

}

export default TempNavigator;