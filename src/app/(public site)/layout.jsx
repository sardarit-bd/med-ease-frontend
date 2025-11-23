import Header from "@/components/shared/Header";

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