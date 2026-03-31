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
  title: {
    default: "김정재탑내과의원 | 내과 전문 진료",
    template: "%s | 김정재탑내과의원",
  },
  description:
    "김정재탑내과의원 - 내과 전문의가 직접 진료하는 신뢰할 수 있는 병원입니다. 위내시경, 대장내시경, 건강검진, 만성질환 관리",
  keywords: [
    "김정재탑내과", "내과", "위내시경", "대장내시경", "건강검진",
    "고혈압", "당뇨", "고지혈증", "비만클리닉", "수액클리닉",
    "강서구내과", "화곡동내과", "용종절제술", "수면내시경",
  ],
  openGraph: {
    title: "김정재탑내과의원 | 내과 전문 진료",
    description: "내과 전문의가 직접 진료하는 신뢰할 수 있는 병원. 위내시경, 대장내시경, 건강검진, 만성질환 관리",
    type: "website",
    locale: "ko_KR",
    siteName: "김정재탑내과의원",
    images: [
      {
        url: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/91c253c9fee17.jpeg",
        width: 1200,
        height: 630,
        alt: "김정재탑내과의원",
      },
    ],
  },
  verification: {
    other: {
      "naver-site-verification": "9f7032cfb002c88d7faa6eac2dd6e9669ab79d2c",
    },
  },
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
