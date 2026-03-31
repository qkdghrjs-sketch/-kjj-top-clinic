import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "탈모클리닉",
  description: "김정재탑내과의원 탈모클리닉 안내. 탈모 원인 분석과 맞춤 치료로 건강한 모발을 되찾도록 돕습니다.",
};

export default function HairLossLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
