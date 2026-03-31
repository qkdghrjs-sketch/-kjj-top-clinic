import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "진료시간",
  description: "김정재탑내과의원 진료시간 안내. 평일, 토요일, 점심시간 등 진료 시간을 확인하실 수 있습니다.",
};

export default function HoursLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
