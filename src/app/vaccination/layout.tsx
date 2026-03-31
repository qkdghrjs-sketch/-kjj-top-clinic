import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "예방접종",
  description: "김정재탑내과의원 예방접종 안내. 독감, 폐렴, 대상포진 등 성인 예방접종을 안전하게 시행합니다.",
};

export default function VaccinationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
