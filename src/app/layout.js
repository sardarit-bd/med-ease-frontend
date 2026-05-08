import TempNavigator from "@/components/shared/TempNavigator";
import ReduxProvider from "@/state/provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Med'ease pour les patients – Une prise en charge optimisée",
  description:
    "Med'ease aide les patients et leurs proches à naviguer simplement dans le parcours de soins : informations centralisées, suivi en temps réel des rendez-vous, rappels personnalisés, et bien plus encore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          {children}
          <TempNavigator />
        </ReduxProvider>
      </body>
    </html>
  );
}
