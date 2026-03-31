import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "국가건강검진",
  description: "김정재탑내과의원 국가건강검진 안내. 일반검진, 구강검진 등 국민건강보험 지원 검진을 시행합니다.",
};

export default function NationalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
