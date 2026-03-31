import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "치매검진",
  description: "김정재탑내과의원 치매검진 안내. 인지기능 검사와 조기 진단으로 치매 예방과 관리를 지원합니다.",
};

export default function DementiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
