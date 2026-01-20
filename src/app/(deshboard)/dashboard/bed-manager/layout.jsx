"use client"


import DeshboardLayout from "../../../../components/Deshboard/DeshboardLayout/DeshboardLayout";
import BedManagerSidebarNavigation from "../../../../components/Deshboard/modules/bedmanager/BedManagerSidebarNavigation";

export default function DashboardMainLayout({ children }) {


    return (
        <DeshboardLayout sidebar={<BedManagerSidebarNavigation />}>{children}</DeshboardLayout>
    )
}