"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const diseases = [
  {
    title: "고혈압",
    desc: "증상 없이 진행되어 뇌졸중·심근경색을 유발합니다. 꾸준한 관리가 필수입니다.",
  },
  {
    title: "당뇨",
    desc: "혈당 조절 실패 시 신장·눈·신경 등 전신 합병증이 발생할 수 있습니다.",
  },
  {
    title: "고지혈증",
    desc: "콜레스테롤 상승은 동맥경화·심혈관 질환의 주요 위험 요인입니다.",
  },
  {
    title: "골다공증",
    desc: "뼈 밀도 감소로 골절 위험이 높아지며 조기 검진으로 예방이 가능합니다.",
  },
];

const faqItems = [
  { q: "만성질환은 완치가 가능한가요?", a: "대부분의 만성질환은 완치보다 꾸준한 관리가 중요합니다. 약물 치료와 생활습관 개선으로 정상적인 생활이 가능합니다." },
  { q: "약을 평생 먹어야 하나요?", a: "질환과 상태에 따라 다릅니다. 생활습관 개선으로 약물을 줄이거나 조절할 수 있으므로 전문의와 상담하세요." },
  { q: "정기 검진은 얼마나 자주 받아야 하나요?", a: "일반적으로 3~6개월마다 정기 검진을 권장하며, 상태에 따라 전문의가 주기를 조절합니다." },
  { q: "만성질환이 여러 개인 경우 어떻게 관리하나요?", a: "고혈압, 당뇨, 고지혈증 등이 함께 있는 경우가 많습니다. 통합적으로 관리하여 합병증을 예방합니다." },
];

export default function ChronicDiseasePage() {
  return (
    <>
      <PageHeader
        title="만성질환센터"
        subtitle="고혈압, 당뇨, 고지혈증 등 만성질환의 체계적인 관리를 제공합니다."
      />
      <WhyKimtop
        box="만성질환, 왜 김정재탑내과일까?+"
        overlay="만성질환 전문 클리닉"
        description="만성질환은 한 번의 치료보다 꾸준한 관리가 중요합니다. 전문의와 함께 체계적으로 관리하세요."
        features={["전문의 직접 진료", "개인별 맞춤 관리", "정기적 모니터링", "합병증 예방 관리"]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/cc44d338606ae.jpeg"
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">성인 3명 중 1명</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">만성질환 보유</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">통합 관리</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">복합 만성질환 동시 관리</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">맞춤 치료</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">개인별 약물·생활습관 처방</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="relative w-full h-60 sm:h-80 rounded-2xl overflow-hidden shadow-lg img-zoom">
                <Image
                  src="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/6e42bd7e1ead4.jpeg"
                  alt="만성질환 관리"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                  만성질환이란?
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg whitespace-pre-line">
                  {"만성질환은 고혈압, 당뇨, 고지혈증, 골다공증 등\n오랜 기간에 걸쳐 서서히 진행되는 질환입니다.\n\n대부분 초기 증상이 없어 방치하기 쉽지만,\n적절한 관리 없이는 뇌졸중, 심근경색 등\n심각한 합병증으로 이어질 수 있습니다."}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disease Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                주요 진료 <span className="text-sky-500">질환</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {diseases.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-4 sm:p-7 border border-gray-100 card-hover-glow h-full">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{d.title}</h3>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed whitespace-pre-line">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                만성질환 <span className="text-sky-500">관리 원칙</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {["정기 검진", "약물 관리", "식이 조절", "운동 습관", "금주·금연"].map(
              (item, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="bg-gray-50 rounded-2xl shadow-md p-6 text-center h-full card-hover-glow">
                    <span className="inline-flex items-center justify-center w-12 h-12 bg-sky-500 text-white rounded-full font-bold text-lg mb-4">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-navy-900">
                      {item}
                    </h3>
                  </div>
                </ScrollReveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                자주 묻는 <span className="text-sky-500">질문</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
