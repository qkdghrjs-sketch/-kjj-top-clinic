import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "수면내시경",
  description: "김정재탑내과의원 수면내시경 안내. 수면 유도 하에 통증 없이 편안하게 내시경 검사를 받으실 수 있습니다.",
};

export default function SedationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
