"use client"


import DeshboardLayout from "../../../../components/Deshboard/DeshboardLayout/DeshboardLayout";
import EtablissementSidebarNavigation from "../../../../components/Deshboard/modules/Etablissement/EtablissementSidebarNavigation";
export default function DashboardMainLayout({ children }) {


    return (
        <DeshboardLayout sidebar={<EtablissementSidebarNavigation />}>{children}</DeshboardLayout>
    )
}