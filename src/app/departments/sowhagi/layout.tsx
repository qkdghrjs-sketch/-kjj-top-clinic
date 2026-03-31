import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소화기내과",
  description: "김정재탑내과의원 소화기내과 진료 안내. 위염, 역류성식도염, 장염 등 소화기 질환을 전문적으로 진료합니다.",
};

export default function SowhagiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
