"use client"


import DeshboardLayout from "../../../../components/Deshboard/DeshboardLayout/DeshboardLayout";
import PatientSidebarNavigation from "../../../../components/Deshboard/modules/patient/PatientSidebarNavigation";

export default function DashboardMainLayout({ children }) {


    return (
        <DeshboardLayout sidebar={<PatientSidebarNavigation />}>{children}</DeshboardLayout>
    )
}