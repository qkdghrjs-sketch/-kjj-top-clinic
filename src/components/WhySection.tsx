"use client";

import { useState, useEffect, useCallback } from "react";

const tabs = [
  {
    title: "대학병원급 내시경 프로토콜",
    image:
      "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/5fa93cc54b985.jpeg",
    desc: "내시경은 장비+숙련도+프로세스가 함께 작동해야 정확해집니다. 준비–검사–회복–안내까지 흐름을 표준화해 흔들림 없는 검사 경험을 지향합니다.",
  },
  {
    title: "5대암 건강검진 설계",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    desc: "연령·가족력·생활습관을 기반으로 꼭 필요한 항목을 우선순위로 구성합니다. 많이 하는 검진이 아니라 내게 맞는 검진을 목표로 합니다.",
  },
  {
    title: "숙련된 전문의 직접 진료",
    image:
      "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/b76181769ad45.jpeg",
    desc: "증상만 보지 않고 검사 결과의 맥락까지 함께 해석합니다. 진단–치료–추적관리의 연결을 끊지 않는 진료를 지향합니다.",
  },
  {
    title: "원스톱 진료 동선",
    image:
      "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/79e90c01190d6.jpeg",
    desc: "당일 진료부터 검사, 시술, 결과 안내, 추후 관리까지 한 흐름으로 연결합니다. 불필요한 이동과 대기 시간을 줄이고 치료 결정을 빠르게 돕습니다.",
  },
  {
    title: "멸균·감염관리 표준화",
    image:
      "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/64d10a5e4bfdc.jpeg",
    desc: "기구 관리, 세척·소독, 검사실 준비까지 체크리스트 기반으로 운영합니다. 검사 결과만큼 중요한 검사실의 준비 수준을 기본으로 삼습니다.",
  },
];

export default function WhySection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % tabs.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + tabs.length) % tabs.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[340px_1fr] min-h-[400px] lg:min-h-[480px] rounded-2xl overflow-hidden shadow-xl">
          {/* Left/Top - Tabs */}
          <div className="bg-white flex flex-col">
            {/* Header */}
            <div className="bg-navy-900 px-4 py-4 lg:px-6 lg:py-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">WHY</h2>
              <p className="text-navy-300 text-xs lg:text-sm mt-1">
                그래서 김정재탑내과의원입니다.
              </p>
            </div>

            {/* Tab list - horizontal scroll on mobile, vertical on desktop */}
            <div className="flex lg:flex-col lg:flex-1 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`flex items-center gap-2 lg:gap-3 lg:justify-between px-4 py-3 lg:px-6 lg:py-4 text-left text-xs lg:text-sm font-medium border-b border-gray-100 transition-all duration-300 whitespace-nowrap shrink-0 ${
                    i === current
                      ? "bg-navy-800 text-white"
                      : "bg-white text-gray-500 hover:bg-navy-50 hover:text-navy-700"
                  }`}
                >
                  <span className="flex items-center gap-2 lg:gap-3">
                    <span
                      className={`w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center text-[10px] lg:text-xs font-bold shrink-0 ${
                        i === current
                          ? "bg-sky-400 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {tab.title}
                  </span>
                  <svg
                    className={`w-4 h-4 shrink-0 transition-colors hidden lg:block ${
                      i === current ? "text-sky-400" : "text-gray-300"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Slide */}
          <div className="relative overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-0">
            {tabs.map((tab, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-700"
                style={{
                  opacity: i === current ? 1 : 0,
                  zIndex: i === current ? 1 : 0,
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s]"
                  style={{
                    backgroundImage: `url('${tab.image}')`,
                    transform: i === current ? "scale(1)" : "scale(1.1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-navy-900/20" />

                {/* Label */}
                <div className="absolute top-5 right-5 z-10">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-medium">
                    KJ TOP INTERNAL MEDICINE
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {tab.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
                    {tab.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Arrow buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              aria-label="이전"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              aria-label="다음"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
