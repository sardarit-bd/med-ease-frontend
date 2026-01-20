"use client"


import DeshboardLayout from "../../../../components/Deshboard/DeshboardLayout/DeshboardLayout";
import MedicalSidebarNavigation from "../../../../components/Deshboard/modules/medical/MedicalSidebarNavigation";

export default function DashboardMainLayout({ children }) {


    return (
        <DeshboardLayout sidebar={<MedicalSidebarNavigation />}>{children}</DeshboardLayout>
    )
}