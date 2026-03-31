import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "고지혈증",
  description: "김정재탑내과의원 고지혈증 진료 안내. 콜레스테롤 관리와 심혈관 질환 예방을 위한 치료를 제공합니다.",
};

export default function HyperlipidemiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
