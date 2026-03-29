"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";

const respiratoryDiseases = [
  { name: "천식", desc: "기도의 만성 염증으로 인해 호흡곤란, 쌕쌕거림이 반복되는 질환입니다.\n알레르기 항원, 찬 공기, 운동 등이 증상을 악화시킵니다.\n흡입기 치료로 증상을 효과적으로 조절할 수 있습니다." },
  { name: "COPD", desc: "흡연이 주요 원인인 만성 폐쇄성 폐질환으로 폐 기능이 점진적으로 감소합니다.\n초기에는 증상이 없다가 활동 시 호흡곤란으로 나타납니다.\n금연과 폐기능 검사로 진행을 늦출 수 있습니다." },
  { name: "폐렴", desc: "세균, 바이러스, 곰팡이 등에 의한 폐 감염 질환입니다.\n고열, 기침, 흉통이 주요 증상이며 노인과 면역저하자는 특히 주의가 필요합니다.\n조기 항생제 치료로 빠른 회복이 가능합니다." },
  { name: "기관지염", desc: "기관지에 염증이 생겨 기침, 가래, 미열이 지속되는 질환입니다.\n급성과 만성으로 나뉘며 만성 기관지염은 COPD로 진행될 수 있습니다.\n적절한 치료와 금연으로 증상을 관리합니다." },
];

const allergyDiseases = [
  { name: "알레르기 비염", desc: "재채기, 맑은 콧물, 코막힘이 반복된다면 알레르기 비염일 수 있습니다.\n집먼지진드기, 꽃가루, 동물털 등이 주요 원인입니다.\n항원 검사로 원인을 찾아 효과적으로 치료합니다." },
  { name: "상세불명의 두드러기", desc: "피부에 갑자기 붉은 팽진이 생기고 심한 가려움이 동반됩니다.\n음식, 약물, 스트레스 등 다양한 원인으로 발생합니다.\n원인 파악과 항히스타민제로 증상을 조절합니다." },
  { name: "식품 알레르기", desc: "특정 음식 섭취 후 두드러기, 복통, 구토가 나타납니다.\n혈액검사로 원인 식품을 정확히 파악할 수 있습니다.\n심한 경우 아나필락시스로 응급 상황이 될 수 있습니다." },
];

export default function HoheupgiPage() {
  return (
    <>
      <PageHeader
        title="호흡기·알레르기센터"
        subtitle="기관지와 폐 건강, 알레르기 질환의 정밀 진단과 맞춤 치료를 제공합니다."
      />

      <WhyKimtop
        box="호흡기·알레르기, 왜 김정재탑내과일까?+"
        overlay="폐·기도·알레르기 전문 진료"
        description="폐기능 검사부터 흉부 X-ray 당일 판독, 혈액 알레르기 검사까지 체계적인 진료를 제공합니다."
        features={["폐기능 검사", "흉부 X-ray 당일 판독", "혈액 알레르기 검사 176종", "전문의 직접 진료"]}
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">폐기능 검사</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">정밀 호흡 능력 측정</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">흉부 X-ray 당일 판독</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">빠른 결과 확인</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">혈액 알레르기 검사 176종</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">정밀 원인 항원 분석</p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms - Intro */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[320px]">
                <div
                  className="w-full h-full bg-cover bg-center img-zoom"
                  style={{ backgroundImage: "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/606377ba7d354.jpeg')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-5">이런 증상이 있다면 내원하세요</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{"기침, 가래가 오래 지속되거나 호흡곤란이 느껴지시나요?\n오래된 흡연으로 폐 건강이 걱정되시거나, 기침할 때 피가 섞여 나오시나요?\n알레르기 비염, 두드러기 등 알레르기 증상으로 불편하시다면\n김정재탑내과 호흡기·알레르기센터에서 정확한 진단과 치료를 받아보세요."}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Disease Cards - 호흡기 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              주요 진료 질환 — <span className="text-sky-500">호흡기</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {respiratoryDiseases.map((d, i) => (
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

      {/* Disease Cards - 알레르기 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              주요 진료 질환 — <span className="text-sky-500">알레르기</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allergyDiseases.map((d, i) => (
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
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              <span className="text-sky-500">검사</span> 방법
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {["문진", "혈액검사 (혈액 알레르기 검사 176종 포함)", "X-ray", "폐기능검사"].map((item, i) => (
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
      <section className="py-12 sm:py-16 md:py-20 bg-white">
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
                  "흡연자는 폐기능 검사 정기적 권장",
                  "독감 예방접종 매년 권장",
                  "고위험군은 폐렴구균 접종 권장",
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
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              자주 묻는 <span className="text-sky-500">질문</span>
            </h2>
          </ScrollReveal>
          <FAQ items={[
            { q: "기침이 8주 이상 지속되면 어떻게 해야 하나요?", a: "만성 기침의 원인은 다양하므로 정확한 검사가 필요합니다." },
            { q: "폐기능 검사는 어떻게 진행되나요?", a: "천식 의심 시 기도 확장 흡입기 사용 후 추가 검사 필요" },
            { q: "흡연자는 얼마나 자주 폐 검사를 받아야 하나요?", a: "무엇보다 금연이 우선입니다. 스스로 금연이 어려울 경우 금연 클리닉을 이용하세요" },
            { q: "알레르기 검사는 어떻게 진행되나요?", a: "혈액 채취로 176종 항원에 대한 반응을 확인합니다" },
          ]} />
        </div>
      </section>
    </>
  );
}
