import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationSection from "@/components/LocationSection";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김정재탑내과의원 | 내과 전문 진료",
  description:
    "김정재탑내과의원 - 내과 전문의가 직접 진료하는 신뢰할 수 있는 병원입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} antialiased`}>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen pt-20 sm:pt-36 md:pt-48">{children}</main>
        <LocationSection />
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
