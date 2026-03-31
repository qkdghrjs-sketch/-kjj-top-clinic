import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비만클리닉",
  description: "김정재탑내과의원 비만클리닉 안내. 체계적인 체중 관리와 맞춤 식단, 운동 처방을 제공합니다.",
};

export default function ObesityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
