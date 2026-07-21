import type { Metadata } from "next";
import { Taviraj, Sarabun } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LineButton } from "@/components/layout/LineButton";
import { business } from "@/lib/business";
import "./globals.css";

const taviraj = Taviraj({
  variable: "--font-taviraj",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} | ${business.nameEn}`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${taviraj.variable} ${sarabun.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LineButton />
      </body>
    </html>
  );
}
