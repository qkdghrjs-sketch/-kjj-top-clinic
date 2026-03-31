import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "골다공증",
  description: "김정재탑내과의원 골다공증 진료 안내. 골밀도 검사와 맞춤 치료로 골절 위험을 예방합니다.",
};

export default function OsteoporosisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
