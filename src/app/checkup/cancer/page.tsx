"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";

const screeningCards = [
  { title: "위암", 대상: "40세 이상", 주기: "2년마다 1회", 방법: "위내시경 검사" },
  { title: "대장암", 대상: "50세 이상", 주기: "1년마다 1회", 방법: "분변잠혈검사 (이상 시 대장내시경으로 진행)" },
  { title: "간암", 대상: "40세 이상 고위험군", 주기: "6개월마다 1회", 방법: "간초음파 + AFP (혈청알파태아단백검사)" },
  { title: "유방암", 대상: "40세 이상 여성", 주기: "2년마다 1회", 방법: "유방촬영 검사" },
  { title: "자궁경부암", 대상: "20세 이상 여성", 주기: "2년마다 1회", 방법: "자궁경부세포 검사" },
];

const steps = [
  { num: "01", title: "예약 및 공단 검진 항목 확인" },
  { num: "02", title: "검진 당일 공복으로 내원" },
  { num: "03", title: "검사 진행" },
  { num: "04", title: "결과 상담" },
];

const faqItems = [
  { q: "5대암 검진은 무료인가요?", a: "국민건강보험 적용으로 본인부담금이 최소화됩니다." },
  { q: "어떤 암이 5대암에 포함되나요?", a: "위암, 대장암, 간암, 유방암, 자궁경부암 총 5가지 암 검진을 시행합니다." },
  { q: "검진 주기는 어떻게 되나요?", a: "생애 주기 검사 항목에 맞춰 나이대별로 검진 종류가 다르게 시행됩니다." },
  { q: "검진 결과는 언제 확인할 수 있나요?", a: "검사 항목에 따라 당일 또는 2주 내 결과를 안내합니다." },
  { q: "가족력이 있으면 더 자주 검진받아야 하나요?", a: "1촌 이내 암 가족력이 있다면 국가 검진보다 더 자주 받는 것을 권장합니다." },
];

export default function CancerScreeningPage() {
  return (
    <>
      <PageHeader
        title="5대암국가검진"
        subtitle="국민건강보험공단 건강검진 프로그램으로, 암을 조기에 발견하고 예방합니다"
      />
      <WhyKimtop
        box="5대암국가검진, 왜 김정재탑내과일까?+"
        overlay="국가 5대암 조기발견"
        description="국민건강보험 지정기관으로 5대암을 조기에 발견하고 안전하게 치료합니다."
        features={[
          { title: "5대암", sub: "위/대장내시경, 복부초음파, 유방/자궁 검진" },
          { title: "검사 주기 평균 2년", sub: "연령별, 위험도별 상이" },
          "소화기내시경 세부전문의",
          "원스톱 진료",
        ]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/6ffce631e5978.jpeg"
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
              <p className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">조기발견</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">완치율 90%+</p>
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
              <div className="rounded-2xl overflow-hidden shadow-lg h-[200px] sm:h-[280px] md:h-[320px]">
                <div
                  className="w-full h-full bg-cover bg-center img-zoom"
                  style={{ backgroundImage: "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/91c253c9fee17.jpeg')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                5대암 <span className="text-sky-500">조기발견</span> 프로그램
              </h2>
              <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                {"질병 발생 전 예방을 목적으로, 5대암 검진을 통해 조기암이 발견될 경우\n완치율이 90% 이상으로 높아집니다."}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {screeningCards.map((card, i) => {
              const colors = [
                "from-sky-500 to-sky-600",
                "from-emerald-500 to-emerald-600",
                "from-amber-500 to-amber-600",
                "from-rose-500 to-rose-600",
                "from-violet-500 to-violet-600",
                "from-navy-700 to-navy-800",
              ];
              const icons = ["🔬", "🩺", "🫁", "💗", "🩻", "🫁"];
              return (
                <ScrollReveal key={card.title} delay={i * 100}>
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full card-hover-glow group">
                    {/* 상단 컬러 헤더 */}
                    <div className={`bg-gradient-to-r ${colors[i]} px-6 py-4 flex items-center justify-between`}>
                      <h3 className="text-xl font-bold text-white">{card.title}</h3>
                      <span className="text-2xl">{icons[i]}</span>
                    </div>
                    {/* 정보 영역 */}
                    <div className="px-6 py-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="shrink-0 w-14 text-sm font-bold text-white bg-navy-900 rounded-md px-2 py-1 text-center">대상</span>
                        <span className="text-base text-gray-700 pt-0.5">{card.대상}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="shrink-0 w-14 text-sm font-bold text-white bg-sky-500 rounded-md px-2 py-1 text-center">주기</span>
                        <span className="text-base text-gray-700 pt-0.5">{card.주기}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="shrink-0 w-14 text-sm font-bold text-white bg-emerald-500 rounded-md px-2 py-1 text-center">방법</span>
                        <span className="text-base text-gray-700 pt-0.5">{card.방법}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <div key={step.num} className="relative">
                  <div className="border-2 border-gray-200 rounded-2xl p-4 sm:p-6 text-center h-full hover:border-sky-400 hover:-translate-y-1 transition-all duration-300">
                    <span className="text-2xl sm:text-3xl font-black text-sky-500 block mb-2 sm:mb-3">{step.num}</span>
                    <h4 className="text-navy-900 font-bold text-sm sm:text-base">{step.title}</h4>
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
