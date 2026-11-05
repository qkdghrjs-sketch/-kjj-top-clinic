import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "채용검진·성병검사·마약검사·보건증",
  description: "김정재탑내과의원 채용건강검진·성병검사·마약검사·보건증(건강진단결과서) 안내. 입사 및 채용에 필요한 검사를 신속하고 정확하게 시행합니다.",
};

export default function EmploymentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
