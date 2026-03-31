import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이비인후과",
  description: "김정재탑내과의원 이비인후과 진료 안내. 비염, 후두염, 편도염 등 이비인후과 질환을 진료합니다.",
};

export default function EntLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
