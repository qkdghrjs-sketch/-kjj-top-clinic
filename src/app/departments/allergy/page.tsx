"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";

const diseases = [
  { name: "알레르기 비염", desc: "재채기, 맑은 콧물, 코막힘이 반복된다면 알레르기 비염일 수 있습니다.\n집먼지진드기, 꽃가루, 동물털 등이 주요 원인입니다.\n항원 검사로 원인을 찾아 효과적으로 치료합니다." },
  { name: "두드러기", desc: "피부에 갑자기 붉은 팽진이 생기고 심한 가려움이 동반됩니다.\n음식, 약물, 스트레스 등 다양한 원인으로 발생합니다.\n원인 파악과 항히스타민제로 증상을 조절합니다." },
  { name: "아토피 피부염", desc: "만성 재발성 습진으로 심한 가려움과 피부 건조가 특징입니다.\n어린 시절부터 시작되는 경우가 많으며 성인에서도 나타납니다.\n보습 관리와 항원 회피가 치료의 기본입니다." },
  { name: "식품 알레르기", desc: "특정 음식 섭취 후 두드러기, 복통, 구토가 나타납니다.\n혈액검사로 원인 식품을 정확히 파악할 수 있습니다.\n심한 경우 아나필락시스로 응급 상황이 될 수 있습니다." },
];

export default function AllergyPage() {
  return (
    <>
      <PageHeader
        title="알레르기센터"
        subtitle="알레르기 질환의 정확한 원인 분석과 맞춤 치료를 제공합니다."
      />

      <WhyKimtop
        box="알레르기, 왜 김정재탑내과일까?+"
        overlay="알레르기 원인 분석"
        description="혈액 알레르기 검사로 원인 항원을 정확히 찾아 근본적으로 치료합니다."
        features={["혈액 알레르기 검사", "원인 항원 분석", "면역치료 연계", "전문의 직접 진료"]}
      />

      {/* Stats Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-2">혈액 알레르기 검사</p>
              <p className="text-sky-300 text-sm font-medium">100여 가지 항원 분석</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-2">원인 항원 분석</p>
              <p className="text-sky-300 text-sm font-medium">정밀 원인 파악</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-2">면역치료 연계</p>
              <p className="text-sky-300 text-sm font-medium">근본적 치료 가능</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[320px]">
                <div
                  className="w-full h-full bg-cover bg-center img-zoom"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&auto=format&fit=crop')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-5">알레르기 전문 진료</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{"알레르기 원인을 정확히 찾아 근본적으로 치료합니다."}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Disease Cards */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              <span className="text-sky-500">검사</span> 방법
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {["혈액 알레르기 검사", "피부반응 검사", "원인 항원 분석"].map((item, i) => (
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
      <section className="py-16 md:py-20 bg-gray-50">
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
                  "원인 항원 노출 최소화",
                  "항히스타민제 상비 권장",
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              자주 묻는 <span className="text-sky-500">질문</span>
            </h2>
          </ScrollReveal>
          <FAQ items={[
            { q: "알레르기 검사는 어떻게 진행되나요?", a: "혈액 채취로 100여 가지 항원에 대한 반응을 확인합니다." },
            { q: "알레르기는 완치가 가능한가요?", a: "면역치료로 근본적인 치료가 가능한 경우도 있습니다." },
            { q: "음식 알레르기가 있으면 평생 못 먹나요?", a: "전문의 지도하에 면역치료로 내성을 키울 수 있습니다." },
            { q: "두드러기가 갑자기 생겼을 때 어떻게 해야 하나요?", a: "원인 물질 회피 후 항히스타민제 복용, 심하면 즉시 내원하세요." },
            { q: "알레르기 비염과 감기는 어떻게 구분하나요?", a: "알레르기는 맑은 콧물과 재채기가 주증상이며 발열이 없습니다." },
          ]} />
        </div>
      </section>
    </>
  );
}
