import Header from "@/components/shared/header";

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