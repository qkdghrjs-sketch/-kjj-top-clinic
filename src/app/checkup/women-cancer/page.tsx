"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";

const whyItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    title: "여성암 조기 진단",
    desc: "유방암, 자궁경부암, 난소암, 갑상선암 등 여성 고위험 암종 정밀 검사",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    title: "뇌혈관 질환 (뇌졸중 등)",
    desc: "뇌 MRI/MRA 및 경동맥 초음파로 뇌혈관 이상 조기 발견",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "from-sky-500 to-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    title: "심장 질환 (심근경색 등)",
    desc: "관상동맥 CT 및 심장초음파를 통한 심혈관 이상 확인",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    title: "소화기 암 (위암·대장암 등)",
    desc: "수면 위/대장 내시경, 복부 초음파, 복부 CT로 정밀 진단",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    color: "from-amber-500 to-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    title: "폐암",
    desc: "저선량 폐 CT를 통한 정밀 진단으로 폐암 조기 발견",
  },
];

const programs = [
  {
    tier: "CLASSIC",
    color: "border-sky-400",
    headerBg: "bg-gradient-to-br from-sky-500 to-sky-600",
    badge: "bg-sky-500",
    badgeText: "실속형",
    composition: "BASIC 검진 + 폐기능검사 + 선택검사 2종",
    feature: "실속 있고 체계적인 기본 여성 특화 검진",
    note: "※ 대장내시경 선택 제외",
    items: [
      "BASIC 검진 전 항목",
      "폐기능검사",
      "선택검사 2종",
    ],
    highlight: false,
  },
  {
    tier: "VIP",
    color: "border-violet-400",
    headerBg: "bg-gradient-to-br from-violet-500 to-violet-700",
    badge: "bg-violet-500",
    badgeText: "심화형",
    composition: "BASIC 검진 + 폐기능검사 + MRI 또는 MRA 또는 선택검사 3종 중 택 1",
    feature: "뇌혈관 질환 또는 특화 항목을 집중적으로 검사할 수 있는 심화 프로그램",
    note: "",
    items: [
      "BASIC 검진 전 항목",
      "폐기능검사",
      "MRI (뇌) 또는",
      "MRA (뇌혈관) 또는",
      "선택검사 3종",
    ],
    highlight: true,
  },
  {
    tier: "VVIP",
    color: "border-gold-400",
    headerBg: "bg-gradient-to-br from-gold-400 to-gold-600",
    badge: "bg-gold-400",
    badgeText: "프리미엄",
    composition: "BASIC 검진 + 폐기능검사 + [MRI+선택 1종 또는 MRA+선택 1종 또는 선택검사 4종 중 택 1] + 생체나이검사(Bio-age)",
    feature: "뇌혈관 정밀 진단과 다양한 선택검사, 신체 노화도까지 확인하는 최고급 프리미엄 프로그램",
    note: "",
    items: [
      "BASIC 검진 전 항목",
      "폐기능검사",
      "MRI + 선택검사 1종 또는",
      "MRA + 선택검사 1종 또는",
      "선택검사 4종",
      "생체나이검사 (Bio-age)",
    ],
    highlight: false,
  },
];

const optionalItems = [
  {
    category: "저선량 CT",
    icon: "🔬",
    desc: "뇌, 폐, 요추, 경추 중 선택하여 정밀 CT 촬영",
    detail: "방사선 피폭을 최소화한 저선량 CT로 뇌·폐·척추 부위를 정밀하게 촬영합니다.",
  },
  {
    category: "특수 초음파",
    icon: "🩻",
    desc: "유방 초음파 또는 경동맥 초음파 선택",
    detail: "유방 초음파: 유방 멍울, 낭종, 종양 등 정밀 확인 / 경동맥 초음파: 동맥경화·혈관 협착 여부 확인",
  },
  {
    category: "대장내시경 (수면)",
    icon: "💉",
    desc: "수면 상태에서 진행하는 대장 정밀 검사",
    detail: "대장암, 대장 용종 등을 조기에 발견할 수 있으며, 수면 마취로 편안하게 진행됩니다.",
  },
  {
    category: "종양표지자 검사",
    icon: "🧬",
    desc: "혈액 반응을 이용한 암 조기검사",
    detail: "간암(AFP), 대장암(CEA), 소화기암(CA19-9), 난소암(CA125) 등 주요 암종 표지자를 혈액으로 확인합니다.",
  },
  {
    category: "생체나이검사 (Bio-age)",
    icon: "⏱",
    desc: "신진대사 및 생체 나이 측정 (VVIP 기본 포함)",
    detail: "실제 나이와 비교하여 신체의 생물학적 노화 정도와 신진대사 상태를 측정합니다. VVIP 프로그램에 기본 포함됩니다.",
  },
];

const basicCategories = [
  {
    title: "여성 특화 검사",
    color: "border-rose-300",
    bg: "bg-rose-50",
    titleColor: "text-rose-700",
    icon: "👩‍⚕️",
    items: ["유방 촬영", "자궁 초음파", "자궁경부 세포진 검사", "골다공증"],
  },
  {
    title: "정밀 영상 및 기기 검사",
    color: "border-sky-300",
    bg: "bg-sky-50",
    titleColor: "text-sky-700",
    icon: "🏥",
    items: ["위 내시경 (수면)", "복부 초음파", "갑상선 초음파", "심전도 검사 (EKG)", "흉부 X-선 촬영"],
  },
  {
    title: "기본 검사",
    color: "border-emerald-300",
    bg: "bg-emerald-50",
    titleColor: "text-emerald-700",
    icon: "📋",
    items: ["신체계측 및 체성분", "청력 검사", "시력 / 안압 검사"],
  },
  {
    title: "정밀 진단 검사",
    color: "border-amber-300",
    bg: "bg-amber-50",
    titleColor: "text-amber-700",
    icon: "🔭",
    items: ["소변 / 대변 검사", "종합 혈액 검사"],
  },
  {
    title: "종합 혈액 검사 상세",
    color: "border-violet-300",
    bg: "bg-violet-50",
    titleColor: "text-violet-700",
    icon: "🧪",
    items: [
      "일반혈액", "전해질", "염증성", "간기능",
      "A형간염", "B형간염", "C형간염", "췌장기능",
      "혈중지질", "당뇨", "관절염", "신장기능",
      "통풍", "성병", "갑상선기능",
    ],
  },
];

function OptionalAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {optionalItems.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 text-left"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span>
                  <span className="text-navy-900 font-semibold text-sm sm:text-base block">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-xs sm:text-sm">{item.desc}</span>
                </span>
              </span>
              <svg
                className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? "300px" : "0", opacity: isOpen ? 1 : 0 }}
            >
              <div className="px-4 pb-4 sm:px-6 sm:pb-5 pl-14 sm:pl-20">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.detail}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function WomenCancerPage() {
  return (
    <>
      <PageHeader
        title="여성암검진"
        subtitle={"여성의 건강한 내일을 위한 맞춤형 정밀 검진"}
      />

      <WhyKimtop
        box="여성암검진, 왜 김정재탑내과일까?+"
        overlay="여성 특화 정밀검진"
        description={`성인 여성을 위한 프로그램으로 주요 장기의 기능 진단,\n성인병 예방과 주요 장기의 조기암 진단 및 예방을 목적으로 실시하는 정밀 건강검진입니다.`}
        features={[
          { title: "여성 고위험 암종 정밀 검사", sub: "유방암·자궁경부암·난소암·갑상선암" },
          { title: "뇌혈관·심장 정밀 진단", sub: "MRI/MRA, 관상동맥 CT" },
          "소화기내시경 세부전문의",
          "1:1 맞춤 프로그램 설계",
        ]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/2e2eeda0b29c9.jpeg"
      />

      {/* Section 1: 왜 여성 정밀 검진이 필요한가 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-sm sm:text-base text-sky-600 font-semibold uppercase tracking-widest mb-2">
                Why Women&#39;s Check-up
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                왜 여성 정밀 검진이 필요할까요?
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto mb-5" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                100세 시대, 생명을 위협하는 심각한 질환은 <strong className="text-navy-900">조기 발견이 가장 중요</strong>합니다.
                한국인의 주요 사망 원인인 암, 뇌혈관질환, 심장질환을 비롯해 여성에게 발생하기 쉬운 주요 암종을 체계적으로 검사합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className={`rounded-2xl border-2 ${item.border} bg-white overflow-hidden h-full card-hover-glow`}>
                  <div className={`${item.bg} px-5 py-4 flex items-center gap-3`}>
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shrink-0`}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-navy-900 text-sm sm:text-base">{item.title}</h3>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: 여성 검진 프로그램 안내 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-sm sm:text-base text-sky-600 font-semibold uppercase tracking-widest mb-2">
                Program Guide
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                여성 검진 프로그램 안내
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <ScrollReveal key={prog.tier} delay={i * 120}>
                <div
                  className={`relative rounded-2xl border-2 ${prog.color} bg-white overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    prog.highlight ? "shadow-lg ring-2 ring-violet-300" : "shadow-md"
                  }`}
                >
                  {prog.highlight && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-violet-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        인기
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className={`${prog.headerBg} px-6 py-6 text-center`}>
                    <span className="inline-block text-white/80 text-xs font-semibold tracking-widest uppercase mb-1">
                      {prog.badgeText}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      여성 {prog.tier}
                    </h3>
                  </div>

                  {/* Composition */}
                  <div className="px-5 py-4 bg-gray-50 border-b border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium mb-1">구성</p>
                    <p className="text-navy-900 text-sm sm:text-base font-semibold leading-relaxed">
                      {prog.composition}
                    </p>
                    {prog.note && (
                      <p className="text-amber-600 text-xs mt-1 font-medium">{prog.note}</p>
                    )}
                  </div>

                  {/* Items */}
                  <div className="px-5 py-4 flex-1">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium mb-3">포함 항목</p>
                    <ul className="space-y-2">
                      {prog.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                          <svg className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feature */}
                  <div className="px-5 pb-5">
                    <div className="rounded-xl bg-navy-900/5 px-4 py-3">
                      <p className="text-navy-800 text-xs sm:text-sm leading-relaxed font-medium">
                        {prog.feature}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: 선택 검사 항목 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-sm sm:text-base text-sky-600 font-semibold uppercase tracking-widest mb-2">
                Optional Examinations
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                선택 검사 항목
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto mb-5" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                VIP 및 VVIP 프로그램에서 <strong className="text-navy-900">건강 상태와 가족력에 맞춰</strong> 선택할 수 있는 정밀 검사 항목입니다.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <OptionalAccordion />
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: BASIC 검진 항목 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-sm sm:text-base text-sky-600 font-semibold uppercase tracking-widest mb-2">
                Basic Examination Items
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                BASIC 검진 항목 상세
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto mb-5" />
              <p className="text-gray-600 text-sm sm:text-base">
                모든 여성 검진 프로그램(CLASSIC·VIP·VVIP)에 기본으로 포함되는 항목입니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {basicCategories.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 80}>
                <div className={`rounded-2xl border-2 ${cat.color} bg-white overflow-hidden h-full card-hover-glow`}>
                  <div className={`${cat.bg} px-5 py-4 flex items-center gap-2 border-b ${cat.color}`}>
                    <span className="text-xl">{cat.icon}</span>
                    <h3 className={`font-bold text-sm sm:text-base ${cat.titleColor}`}>{cat.title}</h3>
                  </div>
                  <div className="px-5 py-4">
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-gold-400 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              지금 바로 여성 정밀검진을 예약하세요
            </h2>
            <p className="text-navy-200 text-sm sm:text-base mb-8 leading-relaxed">
              전문의 상담을 통해 나에게 맞는 검진 프로그램을 설계해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:02-2698-8880"
                className="inline-flex items-center justify-center gap-2 bg-gold-400 text-navy-900 font-bold px-8 py-3.5 rounded-xl hover:bg-gold-500 hover:-translate-y-0.5 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                전화 예약: 02-2698-8880
              </a>
              <a
                href="https://pf.kakao.com/_GdEZX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-[#3C1E1E] font-bold px-8 py-3.5 rounded-xl hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#3C1E1E">
                  <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.52 6.6-.2.72-.72 2.6-.82 3 0 0-.02.16.08.22.1.06.22.02.22.02.3-.04 3.42-2.26 3.96-2.64.64.1 1.32.14 2.04.14 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
                </svg>
                카카오톡 상담
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
