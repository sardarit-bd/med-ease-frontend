"use client"


import DeshboardLayout from "../../../../components/Deshboard/DeshboardLayout/DeshboardLayout";
import AdminSidebarNavigation from "../../../../components/Deshboard/modules/admin/AdminSidebarNavigation";

export default function DashboardMainLayout({ children }) {


    return (
        <DeshboardLayout sidebar={<AdminSidebarNavigation />}>{children}</DeshboardLayout>
    )
}