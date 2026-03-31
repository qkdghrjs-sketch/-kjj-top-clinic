import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "당뇨",
  description: "김정재탑내과의원 당뇨 진료 안내. 혈당 조절과 합병증 예방을 위한 맞춤 치료를 제공합니다.",
};

export default function DiabetesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
