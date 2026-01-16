import Header from "@/components/publicSite/publicHeader/Header";

export default function PublicLayout({
  children,
}) {
  return (
    <>
      <Header />
      <main className="min-h-dvh">{children}</main>
    </>
  );
}