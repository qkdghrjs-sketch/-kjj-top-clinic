import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "대장내시경",
  description: "김정재탑내과의원 대장내시경 검사 안내. 대장암, 용종, 대장염 등을 조기에 발견하는 정밀 검사를 시행합니다.",
};

export default function ColonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
