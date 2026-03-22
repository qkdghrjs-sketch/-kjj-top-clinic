"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";

const checkupCards = [
  { title: "기본 신체검사", desc: "신장, 체중, 시력, 혈압을 측정합니다.\n기본적인 신체 상태를 확인합니다." },
  { title: "혈액검사", desc: "빈혈, 간기능, 혈당, 콜레스테롤을 확인합니다.\n주요 건강 지표를 한 번에 확인할 수 있습니다." },
  { title: "소변검사", desc: "단백뇨, 혈뇨, 당뇨를 확인합니다.\n신장 기능과 당뇨 여부를 확인합니다." },
  { title: "흉부 X-ray", desc: "폐결핵, 심장비대를 확인합니다.\n흉부 질환을 빠르게 스크리닝합니다." },
];

const steps = [
  { num: "01", title: "접수(신분증 지참)" },
  { num: "02", title: "검사(20~25분)" },
  { num: "03", title: "결과 확인(당일)" },
  { num: "04", title: "서류 발급" },
];

const faqItems = [
  { q: "채용검진에 필요한 서류는?", a: "신분증만 지참하시면 됩니다." },
  { q: "결과지는 당일 받을 수 있나요?", a: "대부분 당일 수령 가능하며 일부 항목은 익일 가능합니다." },
  { q: "채용검진 비용은 얼마인가요?", a: "검진 항목에 따라 다르며 내원 시 안내해 드립니다." },
  { q: "예약 없이 방문해도 되나요?", a: "예약 없이 방문 가능하나 대기시간 단축을 위해 예약을 권장합니다." },
  { q: "금식이 필요한가요?", a: "혈액검사가 포함되므로 8시간 금식을 권장합니다." },
];

export default function EmploymentCheckupPage() {
  return (
    <>
      <PageHeader
        title="채용검진"
        subtitle="빠르고 정확한 채용건강검진 서비스를 제공합니다"
      />
      <WhyKimtop
        box="채용검진, 왜 김정재탑내과일까?+"
        overlay="빠르고 정확한 채용검진"
        description="20-25분 내 빠른 검진 완료, 당일 결과 확인 가능합니다."
        features={["당일 결과 확인", "20-25분 신속 검진", "전문의 직접 판독", "국가검진 지정기관"]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/f71e11c2c9add.jpeg"
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">20~25분</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">신속 검진</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">당일</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">결과 확인</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">전문의</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">직접 판독</p>
            </div>
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
                  style={{ backgroundImage: "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/d9257da62dfc1.jpeg')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                빠르고 정확한 <span className="text-sky-500">채용검진</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                {"20-25분 내 빠른 검진 완료, 당일 결과 확인 가능합니다.\n취업, 이직 시 필요한 채용검진을 빠르고 정확하게 제공합니다."}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 채용검진 항목 카드 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                채용검진 항목
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {checkupCards.map((card, i) => (
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
