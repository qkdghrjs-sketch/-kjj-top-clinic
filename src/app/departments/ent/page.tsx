"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";

const diseases = [
  { name: "비염", desc: "코막힘, 재채기, 후비루로 일상이 불편하다면 이비인후과 진료가 필요합니다.\n원인 항원을 찾아 정확한 치료 계획을 수립합니다.\n약물치료와 면역치료를 병행하면 더욱 효과적입니다." },
  { name: "급성 편도염", desc: "심한 목 통증과 고열이 동반되는 편도 감염 질환입니다.\n적절한 항생제 치료로 빠른 회복이 가능합니다.\n반복적으로 발생한다면 편도 수술을 고려할 수 있습니다." },
  { name: "중이염", desc: "귀 통증과 청력 저하, 이명이 주요 증상입니다.\n소아에서 흔하며 적절한 치료 없이 만성화될 수 있습니다.\n항생제와 소염제로 치료하며 심한 경우 고막절개가 필요합니다." },
  { name: "어지럼증", desc: "갑작스러운 회전성 어지러움, 구역감이 있다면 이석증일 수 있습니다.\n이석 재위치술로 대부분 즉시 호전됩니다.\n지속적인 어지러움은 뇌 질환과의 감별이 필요합니다." },
];

export default function EntPage() {
  return (
    <>
      <PageHeader
        title="이비인후과"
        subtitle="귀, 코, 목 질환의 전문적인 진단과 치료를 제공합니다."
      />

      <WhyKimtop
        box="이비인후과, 왜 김정재탑내과일까?+"
        overlay="귀·코·목 전문 진료"
        description="내시경 비인두 검사부터 청력 검사까지 정밀한 이비인후과 진료를 제공합니다."
        features={["내시경 비인두 검사", "청력 검사", "현기증 정밀 평가", "전문의 직접 진료"]}
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">내시경 비인두 검사</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">정밀 비인두 관찰</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">청력 검사</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">정밀 청력 평가</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">현기증 정밀 평가</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">원인 감별 진단</p>
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
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-5">이비인후과 전문 진료</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{"귀·코·목 질환의 전문적인 진료를 제공합니다."}</p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {["내시경 비인두 검사", "청력 검사", "현기증 정밀 평가"].map((item, i) => (
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
                  "귀 자가 세척 금지",
                  "코 세척 시 생리식염수 사용 권장",
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
            { q: "귀가 먹먹하고 이명이 있는데 어떻게 해야 하나요?", a: "청력 검사와 이비인후과 진찰이 필요합니다." },
            { q: "코피가 자주 나면 어떻게 해야 하나요?", a: "앞으로 숙여 코를 잡고 5~10분 압박 후 호전 없으면 내원하세요." },
            { q: "이석증은 어떻게 치료하나요?", a: "이석 재위치술로 대부분 1~2회 시술로 호전됩니다." },
            { q: "만성 코막힘의 원인은 무엇인가요?", a: "비중격만곡증, 비염, 비용종 등 다양한 원인이 있습니다." },
            { q: "목소리가 쉬었을 때 언제 병원에 가야 하나요?", a: "2주 이상 지속되면 후두 내시경 검사를 권장합니다." },
          ]} />
        </div>
      </section>
    </>
  );
}
