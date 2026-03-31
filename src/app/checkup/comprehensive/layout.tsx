import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "종합건강검진",
  description: "김정재탑내과의원 종합건강검진 안내. 기본부터 정밀 검진까지 맞춤형 종합건강검진 프로그램을 제공합니다.",
};

export default function ComprehensiveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
