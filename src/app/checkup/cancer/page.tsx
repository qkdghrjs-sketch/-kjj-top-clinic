"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";

const screeningCards = [
  { title: "위암", desc: "위내시경으로 검진합니다.\n만 40세 이상, 2년마다 검진 대상입니다.\n소화기내시경 세부전문의가 직접 시행합니다." },
  { title: "대장암", desc: "분변잠혈검사 + 대장내시경으로 검진합니다.\n만 50세 이상이 대상이며 용종 발견 시 당일 절제 가능합니다." },
  { title: "간암", desc: "복부초음파 + 혈액검사(AFP)로 검진합니다.\n간경변, B형·C형 간염 등 고위험군 대상, 6개월마다 시행합니다." },
  { title: "폐암", desc: "저선량 흉부CT로 검진합니다.\n만 54~74세 흡연력 30갑년 이상 고위험군이 대상입니다." },
];

const steps = [
  { num: "01", title: "예약" },
  { num: "02", title: "검진 당일 내원" },
  { num: "03", title: "검사 진행" },
  { num: "04", title: "결과 상담" },
];

const faqItems = [
  { q: "5대암 검진은 무료인가요?", a: "국민건강보험 적용으로 본인부담금이 최소화됩니다." },
  { q: "어떤 암이 5대암에 포함되나요?", a: "위암, 대장암, 간암, 폐암, 유방암(여성), 자궁경부암(여성)입니다." },
  { q: "검진 주기는 어떻게 되나요?", a: "암 종류별로 다르며 1~2년 주기로 시행합니다." },
  { q: "검진 결과는 언제 확인할 수 있나요?", a: "검사 항목에 따라 당일 또는 2주 내 결과를 안내합니다." },
  { q: "가족력이 있으면 더 자주 검진받아야 하나요?", a: "네, 가족력이 있는 경우 일반 권장 연령보다 일찍, 더 자주 받는 것을 권장합니다." },
];

export default function CancerScreeningPage() {
  return (
    <>
      <PageHeader
        title="5대암검진"
        subtitle="국가암검진으로 암을 조기에 발견하고 예방합니다"
      />
      <WhyKimtop
        box="5대암검진, 왜 김정재탑내과일까?+"
        overlay="국가 5대암 조기발견"
        description="국민건강보험 지정기관으로 5대암을 조기에 발견하고 안전하게 치료합니다."
        features={["국가검진 지정기관", "소화기내시경 세부전문의", "당일 용종절제 가능", "원스톱 진료"]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/f71e11c2c9add.jpeg"
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <CountUp end={5} suffix="대암" label="국가 암검진" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">조기발견</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">완치율 90%+</p>
            </div>
            <CountUp end={100} suffix="%" label="보험 적용" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[320px]">
                <div
                  className="w-full h-full bg-cover bg-center img-zoom"
                  style={{ backgroundImage: "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/e0e484a028ec0.jpeg')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                5대암 <span className="text-sky-500">조기발견</span> 프로그램
              </h2>
              <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                {"국민건강보험 지정기관으로 5대암을 조기에 발견하고 안전하게 치료합니다.\n조기 발견 시 완치율이 90% 이상으로 매우 높습니다."}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5대암 검진 항목 카드 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                5대암 검진 항목
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {screeningCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <div className="bg-white rounded-2xl shadow-md p-6 h-full card-hover-glow">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 검진 진행 순서 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                검진 진행 순서
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <div key={step.num} className="relative">
                  <div className="border-2 border-gray-200 rounded-2xl p-6 text-center h-full hover:border-sky-400 hover:-translate-y-1 transition-all duration-300">
                    <span className="text-3xl font-black text-sky-500 block mb-3">{step.num}</span>
                    <h4 className="text-navy-900 font-bold text-base">{step.title}</h4>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                자주 묻는 질문
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
