import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "순환기내과",
  description: "김정재탑내과의원 순환기내과 진료 안내. 고혈압, 부정맥, 심부전 등 심혈관 질환을 전문적으로 진료합니다.",
};

export default function SoonhwangiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
