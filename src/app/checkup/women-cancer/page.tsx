"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";

const cancerItems = [
  {
    icon: "💗",
    color: "from-rose-500 to-rose-600",
    border: "border-rose-200",
    title: "유방암 검진",
    method: "유방촬영 + 유방 초음파",
    target: "40세 이상 여성 (국가검진 지원)",
    desc: "유방촬영기를 이용한 정밀 촬영으로 미세석회화 및 종양을 조기에 발견합니다.",
  },
  {
    icon: "🩺",
    color: "from-violet-500 to-violet-600",
    border: "border-violet-200",
    title: "자궁경부암 검진",
    method: "자궁경부세포 검사 (PAP)",
    target: "20세 이상 여성 (국가검진 지원)",
    desc: "자궁경부 세포진 검사로 자궁경부암 및 전구병변을 조기에 발견합니다.",
  },
  {
    icon: "🦋",
    color: "from-sky-500 to-sky-600",
    border: "border-sky-200",
    title: "갑상선암 검진",
    method: "갑상선 초음파",
    target: "증상 또는 가족력이 있는 경우",
    desc: "갑상선 초음파로 갑상선 결절 및 이상 소견을 정밀하게 확인합니다.",
  },
];

const steps = [
  { num: "01", title: "예약 및 검진 항목 확인" },
  { num: "02", title: "검진 당일 내원" },
  { num: "03", title: "검사 진행" },
  { num: "04", title: "결과 상담" },
];

const faqItems = [
  { q: "유방촬영은 아프지 않나요?", a: "압박 시 약간의 불편함이 있을 수 있지만, 검사 시간이 짧아 금방 끝납니다. 불편하신 점은 검사 전 말씀해 주세요." },
  { q: "자궁경부암 검진은 어떻게 진행되나요?", a: "전용 도구로 자궁경부 세포를 채취하는 간단한 검사로, 통증이 거의 없고 5분 내외로 완료됩니다." },
  { q: "국가암검진과 자체 검진의 차이는 무엇인가요?", a: "국가암검진은 건강보험이 적용되어 무료 또는 본인부담금이 최소화됩니다. 자체 검진은 더 다양한 항목을 포함한 정밀 검진입니다." },
  { q: "검진 결과는 언제 확인할 수 있나요?", a: "대부분의 결과는 1~2주 내에 안내드리며, 이상 소견 시 빠른 상담을 진행합니다." },
  { q: "가족력이 있으면 더 자주 검진받아야 하나요?", a: "1촌 이내 암 가족력이 있다면 국가 검진 주기보다 더 자주 받는 것을 권장합니다. 전문의 상담을 통해 맞춤 주기를 안내해 드립니다." },
];

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
        description={`성인 여성을 위한 맞춤형 여성암 검진을 실시합니다.\n유방암·자궁경부암·갑상선암 등 여성에게 발생하기 쉬운 주요 암종을\n전문 장비로 정밀 검사하여 조기에 발견하고 예방합니다.`}
        features={[
          { title: "여성암 조기 진단", sub: "유방암·자궁경부암·갑상선암 정밀 검사" },
          { title: "전문 검진 장비 직접 보유", sub: "유방촬영기·PAP 검사기 운영" },
          "소화기내시경 세부전문의",
          "원스톱 여성 특화 검진",
        ]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/2e2eeda0b29c9.jpeg"
      />

      {/* Section 1: 여성암 검진 항목 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-sm sm:text-base text-sky-600 font-semibold uppercase tracking-widest mb-2">
                Women&apos;s Cancer Screening
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                여성암 검진을 실시합니다
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto mb-5" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                조기 발견이 곧 완치입니다. 김정재탑내과에서는 여성에게 발생하기 쉬운 주요 암종에 대한
                <strong className="text-navy-900"> 정밀 검진을 직접 시행</strong>합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cancerItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className={`rounded-2xl border-2 ${item.border} bg-white overflow-hidden h-full card-hover-glow`}>
                  <div className={`bg-gradient-to-r ${item.color} px-6 py-4 flex items-center gap-3`}>
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <div className="px-5 py-4 space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="shrink-0 text-xs font-bold text-white bg-navy-900 rounded-md px-2 py-1">방법</span>
                      <span className="text-sm text-gray-700 pt-0.5">{item.method}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="shrink-0 text-xs font-bold text-white bg-sky-500 rounded-md px-2 py-1">대상</span>
                      <span className="text-sm text-gray-700 pt-0.5">{item.target}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: 전문 검진 장비 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-sm sm:text-base text-sky-600 font-semibold uppercase tracking-widest mb-2">
                Examination Equipment
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                전문 검진 장비
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto mb-5" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                김정재탑내과는 여성암 검진을 위한{" "}
                <strong className="text-navy-900">전문 장비를 직접 보유·운영</strong>합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md card-hover-glow h-full">
                <div className="h-64 sm:h-72 overflow-hidden">
                  <img
                    src="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/da52c66ce9629.jpeg"
                    alt="유방촬영기"
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
                <div className="px-6 py-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                    <h3 className="text-lg font-bold text-navy-900">유방촬영기</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    유방암 조기 발견을 위한 전용 촬영 장비입니다. 미세석회화 및 종양을 정밀하게 촬영하여
                    육안으로 확인하기 어려운 초기 병변까지 발견할 수 있습니다.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md card-hover-glow h-full">
                <div className="h-64 sm:h-72 overflow-hidden">
                  <img
                    src="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/d6aafb9e52411.jpeg"
                    alt="PAP 검사기기"
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
                <div className="px-6 py-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                    <h3 className="text-lg font-bold text-navy-900">자궁경부 세포진 검사기기 (PAP)</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    자궁경부암 및 전구병변 조기 발견을 위한 세포진 검사 장비입니다.
                    간단한 검사로 빠르고 정확하게 자궁경부의 이상 소견을 확인합니다.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: 검진 진행 순서 */}
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

      {/* CTA Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-gold-400 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              지금 바로 여성암검진을 예약하세요
            </h2>
            <p className="text-navy-200 text-sm sm:text-base mb-8 leading-relaxed">
              전문의 상담을 통해 나에게 맞는 검진을 안내해 드립니다.
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
