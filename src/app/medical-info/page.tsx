import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "진료안내 | 김정재탑내과의원",
};

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
      {/* 페이지 헤더 */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">진료안내</h1>
          <p className="text-primary-200">
            진료시간 및 비급여 항목 안내입니다.
          </p>
        </div>
      </section>

      {/* 진료시간 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">진료시간</h2>
          <div className="w-12 h-1 bg-primary-500 mb-8"></div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-6 py-3 text-left font-semibold">요일</th>
                  <th className="px-6 py-3 text-left font-semibold">
                    진료시간
                  </th>
                  <th className="px-6 py-3 text-left font-semibold">비고</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">월요일 ~ 금요일</td>
                  <td className="px-6 py-4">09:00 - 18:00</td>
                  <td className="px-6 py-4 text-gray-500">
                    점심시간 13:00 - 14:00
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">토요일</td>
                  <td className="px-6 py-4">09:00 - 13:00</td>
                  <td className="px-6 py-4 text-gray-500">
                    점심시간 없이 진료
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-red-500">
                    일요일 · 공휴일
                  </td>
                  <td className="px-6 py-4 text-red-500">휴진</td>
                  <td className="px-6 py-4 text-gray-500">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>안내:</strong> 내시경 검사는 사전 예약제로 운영됩니다.
              전화(02-1234-5678)로 미리 예약해 주시기 바랍니다.
            </p>
          </div>
        </div>
      </section>

      {/* 비급여 항목 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            비급여 항목 안내
          </h2>
          <div className="w-12 h-1 bg-primary-500 mb-4"></div>
          <p className="text-gray-500 text-sm mb-8">
            아래 비용은 변동될 수 있으며, 정확한 비용은 병원으로 문의해 주시기
            바랍니다.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-6 py-3 text-left font-semibold">항목</th>
                  <th className="px-6 py-3 text-right font-semibold">
                    비용 (원)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {nonCoveredItems.map((item) => (
                  <tr key={item.name} className="hover:bg-gray-50">
                    <td className="px-6 py-3">{item.name}</td>
                    <td className="px-6 py-3 text-right font-medium">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            * 상기 금액은 부가세 포함 금액이며, 의료보험 적용 여부에 따라 달라질
            수 있습니다.
          </p>
        </div>
      </section>
    </>
  );
}
