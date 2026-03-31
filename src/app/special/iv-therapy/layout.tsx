import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "수액클리닉",
  description: "김정재탑내과의원 수액클리닉 안내. 피로 회복, 면역력 증진을 위한 맞춤 수액 치료를 제공합니다.",
};

export default function IvTherapyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
