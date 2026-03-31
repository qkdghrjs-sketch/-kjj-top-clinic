import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "심폐기능검사",
  description: "김정재탑내과의원 심폐기능검사 안내. 심전도, 폐기능 검사 등으로 심장과 폐 건강 상태를 정밀 진단합니다.",
};

export default function CardiopulmonaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
