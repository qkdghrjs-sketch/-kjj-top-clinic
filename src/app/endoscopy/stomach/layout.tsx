import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "위내시경",
  description: "김정재탑내과의원 위내시경 검사 안내. 위암, 위염, 위궤양 등을 조기에 발견하는 정밀 내시경 검사를 시행합니다.",
};

export default function StomachLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
