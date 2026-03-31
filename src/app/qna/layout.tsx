import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description: "김정재탑내과의원 자주 묻는 질문 안내. 진료, 검사, 예약 등에 관한 궁금증을 해결해 드립니다.",
};

export default function QnaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
