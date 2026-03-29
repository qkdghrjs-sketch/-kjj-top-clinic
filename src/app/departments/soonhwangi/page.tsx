"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";

const diseases = [
  { name: "고혈압", desc: "혈압이 지속적으로 140/90mmHg 이상인 상태로, 대부분 증상이 없어 모르고 지내다 뇌졸중, 심근경색으로 이어질 수 있습니다. 정기적인 혈압 측정과 약물 치료로 합병증을 예방하세요." },
  { name: "부정맥", desc: "심장이 불규칙하게 뛰며 두근거림, 어지러움, 실신이 나타날 수 있습니다. 심전도와 심장초음파로 정확한 진단이 가능하며 조기 치료가 중요합니다." },
  { name: "협심증", desc: "관상동맥이 좁아져 발생하는 질환으로, 운동 시 가슴 통증과 압박감이 느껴진다면 즉시 검사가 필요합니다. 방치 시 심근경색으로 진행될 수 있습니다." },
  { name: "심부전", desc: "심장 펌프 기능이 저하되어 호흡곤란, 다리 부종, 피로감이 나타납니다. 적절한 약물치료와 생활습관 관리로 증상 개선이 가능합니다." },
];

export default function SoonhwangiPage() {
  return (
    <>
      <PageHeader
        title="순환기센터"
        subtitle="심장과 혈관 건강을 위한 전문적인 진단과 치료를 제공합니다."
      />

      <WhyKimtop
        box="순환기, 왜 김정재탑내과일까?+"
        overlay="심장·혈관 전문 진료"
        description="고혈압, 심장질환의 정밀 진단과 체계적인 관리를 제공합니다."
        features={["정밀 혈액검사", "정밀 심장초음파", "24시간 혈압/심전도 모니터링", "전문의 직접 진료"]}
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">24시간 심전도 검사</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">정밀 심장 리듬 분석</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">24시간 혈압 검사</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">일상 속 혈압 추적</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">정밀 심장초음파</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">전문 자격 보유</p>
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
                  style={{ backgroundImage: "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/2e2eeda0b29c9.jpeg')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-5">순환기 전문 진료</h2>
              <p className="text-gray-600 leading-relaxed">호흡곤란, 다리부종, 알 수 없는 두근거림으로 불안하셨나요? 혼자 고민하지 마시고 김정재탑내과 순환기센터를 찾아주세요. 정밀 검사와 전문 상담으로 원인을 파악하고 맞춤 치료를 도와드리겠습니다.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Disease Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              주요 진료 <span className="text-sky-500">질환</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {diseases.map((d, i) => (
              <ScrollReveal key={d.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-4 sm:p-7 border border-gray-100 card-hover-glow h-full">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{d.name}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnosis */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              <span className="text-sky-500">검사</span> 방법
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {["문진", "혈액검사", "24시간 혈압/심전도", "동맥경화도 검사", "심장초음파"].map((item, i) => (
              <ScrollReveal key={item} delay={i * 100}>
                <div className="text-center p-6 bg-navy-50 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-navy-900 font-semibold text-base">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cautions */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 sm:p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                주의사항
              </h3>
              <ul className="space-y-3">
                {[
                  "고혈압 약은 임의 중단 금지",
                  "정기적 혈압 측정 권장",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-2 text-gray-700 text-base">
                    <span className="text-sky-500 font-bold mt-0.5">※</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              자주 묻는 <span className="text-sky-500">질문</span>
            </h2>
          </ScrollReveal>
          <FAQ items={[
            { q: "혈압약은 평생 먹어야 하나요?", a: "대부분의 경우 꾸준한 복용이 필요하며 임의 중단은 위험합니다." },
            { q: "가정에서 혈압을 측정하는 올바른 방법은?", a: "아침 기상 후 30분 이내, 저녁 취침 전 측정을 권장합니다." },
            { q: "심전도 검사는 얼마나 걸리나요?", a: "약 5~10분으로 간단하게 받으실 수 있습니다." },
            { q: "두근거림이 있으면 바로 병원에 가야 하나요?", a: "지속적이거나 실신이 동반된다면 즉시 내원하세요." },
            { q: "고혈압에 좋은 음식은 무엇인가요?", a: "저염식, 채소, 과일, 통곡물 위주의 식단을 권장합니다." },
          ]} />
        </div>
      </section>
    </>
  );
}
