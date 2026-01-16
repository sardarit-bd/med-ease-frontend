import Header from "@/components/publicSite/publicHeader/Header";

export default function ProfessionalLayout({
    children,
}) {
    return (
        <>
            <Header />
            <main className="min-h-dvh">{children}</main>
        </>
    );
}