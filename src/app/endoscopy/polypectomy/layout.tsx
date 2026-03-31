import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "용종절제술",
  description: "김정재탑내과의원 용종절제술 안내. 대장 용종을 안전하게 제거하여 대장암을 예방하는 시술을 시행합니다.",
};

export default function PolypectomyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
