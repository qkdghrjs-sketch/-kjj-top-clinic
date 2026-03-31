import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "채용건강검진",
  description: "김정재탑내과의원 채용건강검진 안내. 입사 및 채용에 필요한 건강검진을 신속하고 정확하게 시행합니다.",
};

export default function EmploymentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
