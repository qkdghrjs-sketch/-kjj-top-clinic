"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";

const checkupCards = [
  { title: "일반검진", desc: "혈압, 혈당, 콜레스테롤, 간기능 등을 확인합니다.\n만 20세 이상 직장가입자 및 세대주가 대상입니다.\n2년에 1회 무료로 받을 수 있습니다." },
  { title: "구강검진", desc: "치아 및 잇몸 건강을 확인합니다.\n충치, 치주질환, 구강암 등을 조기에 발견합니다." },
  { title: "암검진", desc: "위암, 대장암, 간암, 폐암 검진을 시행합니다.\n연령과 성별에 따라 검진 항목이 다릅니다." },
  { title: "생애전환기 검진", desc: "40세, 66세 대상 추가 검진을 시행합니다.\n심뇌혈관질환 위험 평가와 골밀도 검사가 포함됩니다." },
];

const steps = [
  { num: "01", title: "건강보험공단 확인" },
  { num: "02", title: "예약" },
  { num: "03", title: "검진" },
  { num: "04", title: "결과 통보" },
];

const faqItems = [
  { q: "국가검진 대상자인지 어떻게 확인하나요?", a: "건강보험공단 홈페이지 또는 1577-1000으로 확인 가능합니다." },
  { q: "검진 전 준비사항이 있나요?", a: "검진 전 8시간 금식이 필요합니다." },
  { q: "검진 결과는 어떻게 받나요?", a: "검진 후 약 2주 내 우편 또는 내원 상담으로 안내합니다." },
  { q: "국가검진에서 이상 소견이 나오면?", a: "추가 정밀검사를 안내하며 전문의 상담을 받으실 수 있습니다." },
  { q: "검진 당일 소요시간은 얼마인가요?", a: "일반검진 기준 약 30~40분 정도 소요됩니다." },
];

export default function NationalScreeningPage() {
  return (
    <>
      <PageHeader
        title="국가검진"
        subtitle="국민건강보험공단 건강검진 프로그램"
      />
      <WhyKimtop
        box="국가검진, 왜 김정재탑내과일까?+"
        overlay="국민건강보험 지정기관"
        description="국가건강검진부터 성·연령별 맞춤 검진까지 체계적으로 진행합니다."
        features={["국가검진 지정기관", "당일 결과 안내", "전문의 직접 판독", "원스톱 진료"]}
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
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">2년마다</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">무료 검진</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">당일</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">결과 안내</p>
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
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                체계적인 <span className="text-sky-500">국가건강검진</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                {"국가건강검진부터 성·연령별 맞춤 검진까지 체계적으로 진행합니다.\n건강보험공단에서 대상자 여부를 확인 후 예약하세요."}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 국가검진 항목 카드 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                국가검진 항목
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
