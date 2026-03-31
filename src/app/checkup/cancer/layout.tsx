import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "국가암검진",
  description: "김정재탑내과의원 국가암검진 안내. 위암, 대장암, 간암 등 국가 지원 암검진을 정확하고 편안하게 시행합니다.",
};

export default function CancerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
