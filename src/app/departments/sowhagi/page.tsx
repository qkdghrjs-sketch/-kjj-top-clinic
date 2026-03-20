"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";

const diseases = [
  { name: "역류성식도염", desc: "식후 가슴이 타는 듯한 느낌이 드신다면 역류성식도염을 의심해보세요.\n위산이 식도로 역류하여 식도 점막을 손상시키는 질환입니다.\n적절한 치료 없이 방치하면 바렛식도, 식도암으로 진행될 수 있습니다." },
  { name: "위염·위궤양", desc: "상복부 통증, 식후 더부룩함, 구역감이 지속된다면 위염을 의심하세요.\n헬리코박터균 감염이 주요 원인이며 위내시경으로 정확히 진단합니다.\n조기 치료로 위암으로의 진행을 예방할 수 있습니다." },
  { name: "과민성장증후군", desc: "반복되는 복통, 설사와 변비가 번갈아 나타나신다면 과민성장증후군입니다.\n스트레스와 식이 요인이 주요 원인으로 생활습관 개선이 중요합니다.\n전문의 상담을 통해 맞춤형 치료 계획을 수립하세요." },
  { name: "대장용종", desc: "대장암의 90%는 용종에서 시작됩니다.\n초기에는 아무런 증상이 없어 정기적인 대장내시경만이 유일한 예방법입니다.\n발견 즉시 당일 절제가 가능하여 암으로의 진행을 막을 수 있습니다." },
];

export default function SowhagiPage() {
  return (
    <>
      <PageHeader
        title="소화기센터"
        subtitle="위장관 질환의 정확한 진단과 체계적인 치료를 제공합니다."
      />

      <WhyKimtop
        box="소화기, 왜 김정재탑내과일까?+"
        overlay="소화기내시경 세부전문의"
        description="소화기 질환의 정확한 진단과 치료를 위해 대학병원급 장비와 전문의가 함께합니다."
        features={["소화기내시경 세부전문의", "당일 내시경 가능", "용종 당일 절제", "수면내시경 시행"]}
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <CountUp end={100000} suffix="+" label="위내시경 시행" />
            <CountUp end={49} suffix="%" label="선종발견율" />
            <CountUp end={100} suffix="%" label="당일 용종절제" />
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
                  style={{ backgroundImage: "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/32aa67ccc2fad.jpeg')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-5">소화기 전문 진료</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{"위·장·간 질환의 정확한 진단과 치료를 제공합니다.\n김정재탑내과는 소화기내시경 세부전문의가 직접 진료합니다."}</p>
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
                <div className="bg-white rounded-2xl p-7 border border-gray-100 card-hover-glow h-full">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{d.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{d.desc}</p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {["위내시경", "대장내시경", "복부초음파", "헬리코박터 검사"].map((item, i) => (
              <ScrollReveal key={item} delay={i * 100}>
                <div className="text-center p-6 bg-navy-50 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-navy-900 font-semibold text-sm">{item}</p>
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
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                주의사항
              </h3>
              <ul className="space-y-3">
                {[
                  "위내시경 전날 밤 9시 이후 금식",
                  "대장내시경은 전날부터 장정결 필요",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-2 text-gray-700 text-sm">
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
            { q: "위내시경은 얼마나 자주 받아야 하나요?", a: "일반적으로 40세 이상은 2년마다, 위험군은 매년 권장합니다." },
            { q: "헬리코박터균이 있으면 꼭 치료해야 하나요?", a: "위궤양, 십이지장궤양, 위암 가족력이 있다면 치료를 권장합니다." },
            { q: "위내시경과 수면내시경 중 어떤 게 좋나요?", a: "검사에 대한 불안감이 있으시다면 수면내시경을 권장합니다." },
            { q: "역류성식도염은 완치가 가능한가요?", a: "생활습관 개선과 약물치료로 증상 조절이 가능합니다." },
            { q: "소화불량이 오래되면 꼭 내시경을 받아야 하나요?", a: "4주 이상 지속되거나 체중감소가 동반된다면 내시경 검사를 권장합니다." },
          ]} />
        </div>
      </section>
    </>
  );
}
