"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

const nonCoveredItems = [
  { name: "일반 건강검진 (기본)", price: "80,000" },
  { name: "종합 건강검진 (프리미엄)", price: "250,000" },
  { name: "위 내시경 (수면)", price: "120,000" },
  { name: "대장 내시경 (수면)", price: "200,000" },
  { name: "위·대장 내시경 동시 (수면)", price: "280,000" },
  { name: "복부 초음파", price: "80,000" },
  { name: "갑상선 초음파", price: "70,000" },
  { name: "경동맥 초음파", price: "80,000" },
  { name: "독감 예방접종", price: "35,000" },
  { name: "폐렴 예방접종", price: "120,000" },
  { name: "대상포진 예방접종", price: "150,000" },
  { name: "진단서 발급", price: "10,000" },
  { name: "영문 진단서 발급", price: "20,000" },
  { name: "채용검진", price: "40,000" },
];

export default function MedicalInfoPage() {
  return (
    <>
      <PageHeader title="진료안내" subtitle="진료시간 및 비급여 항목 안내입니다." />

      {/* 비급여 항목 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-widest">
              Non-Covered Items
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mt-2 mb-2">
              비급여 항목 안내
            </h2>
            <div className="w-12 h-0.5 bg-gold-400 mb-4"></div>
            <p className="text-gray-400 text-sm mb-8">
              아래 비용은 변동될 수 있으며, 정확한 비용은 병원으로 문의해 주시기
              바랍니다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-100">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-gradient-to-r from-navy-800 to-navy-700 text-white">
                    <th className="px-6 py-4 text-left font-semibold">항목</th>
                    <th className="px-6 py-4 text-right font-semibold">
                      비용 (원)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {nonCoveredItems.map((item, i) => (
                    <tr
                      key={item.name}
                      className={`hover:bg-navy-50 transition-colors ${
                        i % 2 === 1 ? "bg-gray-50/50" : ""
                      }`}
                    >
                      <td className="px-6 py-3.5 text-navy-800">{item.name}</td>
                      <td className="px-6 py-3.5 text-right font-semibold text-navy-700">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-4 text-xs text-gray-400">
              * 상기 금액은 부가세 포함 금액이며, 의료보험 적용 여부에 따라
              달라질 수 있습니다.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
