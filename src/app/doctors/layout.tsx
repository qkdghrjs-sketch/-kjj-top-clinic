import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "의료진 소개",
  description: "김정재탑내과의원 의료진을 소개합니다. 내과 전문의가 직접 진료하여 정확한 진단과 치료를 제공합니다.",
};

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
