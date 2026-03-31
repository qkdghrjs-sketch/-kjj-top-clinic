import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "고혈압",
  description: "김정재탑내과의원 고혈압 진료 안내. 혈압 관리와 합병증 예방을 위한 체계적인 치료를 제공합니다.",
};

export default function HypertensionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
