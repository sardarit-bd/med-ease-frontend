"use client"


import PatientSidebarNavigation from "../../../../components/Deshboard/modules/patient/PatientSidebarNavigation";
import DeshboardLayout from "../../../../components/shared/DeshboardLayout/DeshboardLayout";

export default function DashboardMainLayout({ children }) {


    return (
        <DeshboardLayout sidebar={<PatientSidebarNavigation />}>{children}</DeshboardLayout>
    )
}