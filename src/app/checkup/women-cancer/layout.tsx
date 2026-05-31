import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "여성암검진",
  description: "김정재탑내과의원 여성 특화 정밀검진. 유방암, 자궁경부암, 난소암, 갑상선암 등 여성 고위험 암종과 뇌혈관·심장·소화기 질환을 체계적으로 검사합니다.",
};

export default function WomenCancerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
