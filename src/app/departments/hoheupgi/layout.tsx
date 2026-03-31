import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "호흡기내과",
  description: "김정재탑내과의원 호흡기내과 진료 안내. 천식, COPD, 폐렴 등 호흡기 질환을 전문적으로 진료합니다.",
};

export default function HoheupgiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
