import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는 길",
  description: "김정재탑내과의원 오시는 길 안내. 주소, 교통편, 주차 정보를 확인하고 편리하게 방문하세요.",
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
