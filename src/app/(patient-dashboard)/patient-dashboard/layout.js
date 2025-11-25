import NavBottom from "@/components/modules/pateint-dashboard/NavBottom";
import Navigation from "@/components/modules/pateint-dashboard/Navigation";

export default function DashboardLayout({ children }) {
    return (
        <html lang="fr">
            <body className="min-h-screen bg-[#F4F7FB]">

                {/* Dashboard Navigation */}
                <Navigation />
                <NavBottom />

                {/* Page Content */}
                <main className="max-w-7xl mx-auto px-4 py-6">
                    {children}
                </main>
            </body>
        </html>
    );
}
