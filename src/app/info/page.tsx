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
  { day: "일요일", time: "정기휴무", note: "", dayNum: 0 },
];

export default function InfoPage() {
  const today = new Date().getDay();

  return (
    <>
      <PageHeader
        title="진료시간 및 오시는 길"
        subtitle="김정재탑내과의원 방문 안내"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10">
              {/* 좌측 - 지도 */}
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-4">오시는 길</h2>
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8+%EA%B0%95%EC%84%9C%EA%B5%AC+%ED%99%94%EA%B3%A1%EB%A1%9C+135&output=embed&hl=ko"
                    width="100%"
                    height="360"
                    style={{ border: 0, borderRadius: "12px" }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* 네이버지도 / 카카오맵 버튼 */}
                <div className="flex gap-3 mt-4">
                  <a
                    href="https://map.naver.com/search/%EA%B9%80%EC%A0%95%EC%9E%AC%ED%83%91%EB%82%B4%EA%B3%BC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition-colors shadow-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    네이버지도
                  </a>
                  <a
                    href="https://map.kakao.com/link/search/%EA%B9%80%EC%A0%95%EC%9E%AC%ED%83%91%EB%82%B4%EA%B3%BC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold hover:brightness-95 transition-all shadow-sm"
                    style={{ backgroundColor: "#FEE500", color: "#191919" }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    카카오맵
                  </a>
                </div>
              </div>

              {/* 우측 - 정보 */}
              <div>
                {/* 병원 정보 */}
                <h2 className="text-xl font-bold text-navy-900 mb-4">병원 정보</h2>
                <div className="bg-navy-50 rounded-2xl p-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-navy-900 font-semibold text-sm">주소</p>
                        <p className="text-gray-600 text-sm mt-0.5">서울 강서구 화곡로 135 상원빌딩 3,4층</p>
                        <p className="text-gray-400 text-xs mt-0.5">김정재탑내과</p>
                      </div>
                    </div>

                    <div className="border-t border-navy-100"></div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-navy-900 font-semibold text-sm">대표전화</p>
                        <a href="tel:02-6798-8880" className="text-sky-600 hover:underline font-bold text-lg">
                          02-6798-8880
                        </a>
                      </div>
                    </div>

                    <div className="border-t border-navy-100"></div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-navy-900 font-semibold text-sm">안내</p>
                        <p className="text-gray-600 text-sm mt-0.5">진료 및 예약 문의는 대표전화로 안내받으실 수 있습니다.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 진료시간 */}
                <h2 className="text-xl font-bold text-navy-900 mb-4">진료시간</h2>
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-navy-900 text-white">
                        <th className="px-5 py-3 text-left text-sm font-semibold">요일</th>
                        <th className="px-5 py-3 text-left text-sm font-semibold">진료시간</th>
                        <th className="px-5 py-3 text-left text-sm font-semibold">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hours.map((h) => {
                        const isToday = h.dayNum === today;
                        const isSunday = h.dayNum === 0;
                        const isWeekday = h.dayNum >= 1 && h.dayNum <= 5;

                        return (
                          <tr
                            key={h.day}
                            className={`border-b border-gray-100 transition-colors ${
                              isToday
                                ? "bg-sky-50 ring-2 ring-inset ring-sky-400"
                                : isSunday
                                  ? "bg-gray-50"
                                  : isWeekday
                                    ? "bg-blue-50/30"
                                    : "bg-white"
                            }`}
                          >
                            <td className={`px-5 py-3 text-sm font-medium ${isToday ? "text-sky-700 font-bold" : isSunday ? "text-gray-400" : "text-navy-900"}`}>
                              {h.day}
                              {isToday && (
                                <span className="ml-2 inline-block px-1.5 py-0.5 bg-sky-500 text-white text-[10px] font-bold rounded">
                                  TODAY
                                </span>
                              )}
                            </td>
                            <td className={`px-5 py-3 text-sm ${isSunday ? "text-gray-400 font-semibold" : isToday ? "text-sky-700 font-semibold" : "text-gray-700"}`}>
                              {h.time}
                            </td>
                            <td className={`px-5 py-3 text-sm ${isToday ? "text-sky-600" : "text-gray-400"}`}>
                              {h.note}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 bg-sky-50 rounded-xl p-3.5">
                  <p className="text-sky-700 text-sm">
                    <strong>※</strong> 매월 1, 3번째 주 일요일은 예약검진을 진행합니다.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
