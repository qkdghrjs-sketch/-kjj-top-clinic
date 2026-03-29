"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

const hours = [
  { day: "월요일", time: "08:00 - 19:00", note: "13:00 - 14:00 휴게시간", dayNum: 1 },
  { day: "화요일", time: "08:00 - 19:00", note: "13:00 - 14:00 휴게시간", dayNum: 2 },
  { day: "수요일", time: "08:00 - 19:00", note: "13:00 - 14:00 휴게시간", dayNum: 3 },
  { day: "목요일", time: "08:00 - 19:00", note: "13:00 - 14:00 휴게시간", dayNum: 4 },
  { day: "금요일", time: "08:00 - 19:00", note: "13:00 - 14:00 휴게시간", dayNum: 5 },
  { day: "토요일", time: "09:00 - 14:00", note: "", dayNum: 6 },
  { day: "일요일·공휴일", time: "매월 1, 3번째 주 일요일은 예약검진을 진행합니다", note: "", dayNum: 0 },
];

export default function HoursPage() {
  const today = new Date().getDay();

  return (
    <>
      <PageHeader title="진료시간" subtitle="김정재탑내과의원 진료시간 안내" />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-widest">
              Office Hours
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mt-2 mb-2">
              진료시간
            </h2>
            <div className="w-12 h-0.5 bg-gold-400 mb-8"></div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-100">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-navy-800 to-navy-700 text-white">
                    <th className="px-6 py-4 text-left font-semibold">요일</th>
                    <th className="px-6 py-4 text-left font-semibold">진료시간</th>
                    <th className="px-6 py-4 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {hours.map((h) => {
                    const isToday = h.dayNum === today;
                    const isClosed = h.time === "정기휴무";

                    return (
                      <tr
                        key={h.day}
                        className={`transition-colors ${
                          isToday
                            ? "bg-sky-50 ring-2 ring-inset ring-sky-400"
                            : isClosed
                              ? "bg-red-50/50"
                              : "hover:bg-navy-50"
                        }`}
                      >
                        <td className={`px-6 py-4 font-medium ${isToday ? "text-sky-700 font-bold" : isClosed ? "text-red-500" : "text-navy-800"}`}>
                          {h.day}
                          {isToday && (
                            <span className="ml-2 inline-block px-1.5 py-0.5 bg-sky-500 text-white text-[10px] font-bold rounded">
                              TODAY
                            </span>
                          )}
                        </td>
                        <td className={`px-6 py-4 ${isClosed ? "text-red-500 font-semibold" : isToday ? "text-sky-700 font-semibold" : "text-gray-700"}`}>
                          {h.time}
                        </td>
                        <td className={`px-6 py-4 ${isToday ? "text-sky-600" : "text-gray-400"}`}>
                          {h.note || (isClosed ? "-" : "")}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-6 bg-gradient-to-r from-navy-50 to-sky-50 border-l-4 border-gold-400 p-5 rounded-r-xl">
              <p className="text-sm text-navy-700">
                <strong className="text-navy-900">안내:</strong> 내시경 검사는
                사전 예약제로 운영됩니다. 전화(
                <a href="tel:02-6798-8880" className="text-sky-600 font-semibold hover:underline">
                  02-6798-8880
                </a>
                )로 미리 예약해 주시기 바랍니다.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-4 bg-sky-50 rounded-xl p-4">
              <p className="text-sky-700 text-sm">
                <strong>※</strong> 매월 1, 3번째 주 일요일은 예약검진을 진행합니다.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
