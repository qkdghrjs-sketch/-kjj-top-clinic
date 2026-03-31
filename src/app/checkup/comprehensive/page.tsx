"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";

const programCards = [
  { title: "기본 종합검진", desc: "혈액, 소변, 심전도, 흉부X-ray를 포함하여 기본 건강 상태를 빠르게 확인합니다." },
  { title: "정밀 종합검진", desc: "기본 항목에 복부초음파와 위내시경을 추가하여 소화기 질환을 조기에 발견합니다." },
  { title: "프리미엄 검진", desc: "정밀 항목에 대장내시경과 갑상선초음파를 추가하여 더 꼼꼼하게 확인합니다." },
  { title: "VIP 검진", desc: "프리미엄 항목에 CT와 골밀도 검사를 추가한 최고 수준의 종합 건강평가입니다." },
];

const steps = [
  { num: "01", title: "사전 상담" },
  { num: "02", title: "맞춤 설계" },
  { num: "03", title: "검진 시행" },
  { num: "04", title: "종합검진결과서 발급" },
  { num: "05", title: "결과 상담" },
];

const faqItems = [
  { q: "종합검진은 보험이 되나요?", a: "일부 항목은 보험 적용이 되나 대부분 비급여입니다. 내원 시 상세 안내해 드립니다." },
  { q: "검진 전 준비사항은?", a: "검진 전날 밤 9시 이후 금식이 필요합니다. 복용 중인 약은 전문의와 상담하세요." },
  { q: "검진 소요시간은 얼마나 되나요?", a: "프로그램에 따라 1~3시간 정도 소요됩니다." },
  { q: "여성 검진 시 주의사항이 있나요?", a: "생리 기간을 피해 예약하시고, 검사 전까지 소변을 참아주세요." },
  { q: "검진 결과 이상이 나오면?", a: "전문의가 직접 결과를 설명하고 필요시 추가 검사를 안내합니다." },
];

export default function ComprehensiveCheckupPage() {
  return (
    <>
      <PageHeader
        title="종합검진"
        subtitle="정밀 종합건강검진으로 건강을 체계적으로 관리합니다"
      />
      <WhyKimtop
        box="종합검진, 왜 김정재탑내과일까?+"
        overlay="1:1 맞춤형 종합검진"
        description="개인 맞춤형 검진 프로그램으로 정확하고 효율적인 건강검진을 제공합니다."
        features={["1:1 맞춤 설계", "대학병원급 장비", "전문의 직접 판독", "종합검진결과서 발급"]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/2e2eeda0b29c9.jpeg"
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">1:1</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">검진 상담</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">대학병원급</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">의료 장비</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">검진 후</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">지속 관리</p>
            </div>
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
                  style={{ backgroundImage: "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/232af9f1a11e8.jpeg')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                개인 맞춤형 <span className="text-sky-500">종합검진</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {"개인 맞춤형 검진 프로그램으로 정확하고 효율적인 건강검진을 제공합니다.\n연령, 가족력, 생활습관을 기반으로 꼭 필요한 항목을 설계합니다."}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 종합검진 프로그램 카드 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                종합검진 프로그램
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programCards.map((card, i) => {
              const tiers = [
                { color: "border-sky-400", bg: "bg-sky-50", badge: "bg-sky-500", icon: "🩺" },
                { color: "border-emerald-400", bg: "bg-emerald-50", badge: "bg-emerald-500", icon: "🔬" },
                { color: "border-amber-400", bg: "bg-amber-50", badge: "bg-amber-500", icon: "⭐" },
                { color: "border-violet-400", bg: "bg-violet-50", badge: "bg-violet-500", icon: "👑" },
              ];
              const t = tiers[i];
              return (
                <ScrollReveal key={card.title} delay={i * 100}>
                  <div className={`rounded-2xl border-2 ${t.color} overflow-hidden h-full card-hover-glow bg-white`}>
                    <div className={`${t.bg} px-5 py-4 text-center`}>
                      <span className="text-2xl block mb-1">{t.icon}</span>
                      <h3 className="text-lg font-bold text-navy-900">{card.title}</h3>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-gray-600 text-base leading-relaxed">{card.desc}</p>
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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
              {steps.map((step, i) => (
                <div key={step.num} className="relative">
                  <div className="border-2 border-gray-200 rounded-2xl p-4 sm:p-6 text-center h-full hover:border-sky-400 hover:-translate-y-1 transition-all duration-300">
                    <span className="text-2xl sm:text-3xl font-black text-sky-500 block mb-2 sm:mb-3">{step.num}</span>
                    <h4 className="text-navy-900 font-bold text-sm sm:text-base">{step.title}</h4>
                  </div>
                  {i < 4 && (
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
