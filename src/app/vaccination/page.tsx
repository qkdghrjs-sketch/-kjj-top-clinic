"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";

const vaccinations = [
  {
    name: "독감 (인플루엔자)",
    desc: "인플루엔자 바이러스를 예방합니다.\n고위험군은 매년 접종 권장, 접종 후 약 2주 후 면역 형성됩니다.",
    target: "전 연령",
  },
  {
    name: "폐렴구균",
    desc: "폐렴, 수막염 등 심각한 감염을 예방합니다.\n65세 이상, 만성질환자는 13가·23가 백신 접종을 권장합니다.",
    target: "65세 이상, 만성질환자",
  },
  {
    name: "대상포진",
    desc: "수두 바이러스 재활성화로 발생하는 대상포진을 예방합니다.\n극심한 신경통 동반 가능, 50세 이상 접종을 권장합니다.",
    target: "50세 이상",
  },
  {
    name: "A형간염",
    desc: "오염된 음식·물을 통해 전파되는 A형간염을 예방합니다.\n항체 미보유 성인은 2회 접종으로 평생 면역이 가능합니다.",
    target: "항체 미보유 성인",
  },
  {
    name: "B형간염",
    desc: "혈액·체액을 통해 전파되는 B형간염을 예방합니다.\n만성 간질환·간암의 주요 원인, 항체 없는 경우 3회 접종 권장합니다.",
    target: "항체 미보유자",
  },
  {
    name: "HPV (자궁경부암)",
    desc: "인유두종 바이러스(HPV) 감염을 예방합니다.\n자궁경부암 등 다양한 암 예방 가능, 남녀 모두 조기 접종 권장합니다.",
    target: "9~45세 남녀",
  },
];

const faqItems = [
  { q: "예방접종 전 준비사항이 있나요?", a: "특별한 준비사항은 없으나 컨디션이 좋은 날 방문하시는 것을 권장합니다. 발열이나 급성 질환이 있는 경우 접종을 미룰 수 있습니다." },
  { q: "접종 후 주의사항은 무엇인가요?", a: "접종 후 20~30분간 병원에서 경과를 관찰하며, 당일 과격한 운동과 음주를 삼가해 주세요. 접종 부위의 가벼운 통증이나 미열은 정상 반응입니다." },
  { q: "여러 백신을 동시에 접종할 수 있나요?", a: "일부 백신은 동시 접종이 가능하지만, 백신 종류에 따라 일정 간격을 두어야 하는 경우도 있습니다. 전문의 상담 후 결정합니다." },
  { q: "예방접종 비용은 어떻게 되나요?", a: "백신 종류에 따라 비용이 다르며, 일부 백신은 국가예방접종 지원 대상입니다. 자세한 비용은 내원 시 안내해 드립니다." },
  { q: "예약 없이 접종이 가능한가요?", a: "대부분의 예방접종은 예약 없이 가능하나, 일부 백신은 재고 확인이 필요할 수 있으므로 사전 문의를 권장합니다." },
];

export default function VaccinationPage() {
  return (
    <>
      <PageHeader
        title="예방접종"
        subtitle="질병 예방을 위한 다양한 예방접종 서비스를 제공합니다"
      />

      <WhyKimtop
        box="예방접종, 왜 김정재탑내과일까?+"
        overlay="안전하고 체계적인 예방접종"
        description="전문의 상담을 통해 개인별 맞춤 예방접종 계획을 수립하고, 안전하게 접종합니다."
        features={["전문의 직접 상담", "개인별 맞춤 접종", "접종 후 경과 관찰", "국가예방접종 지정기관"]}
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">성인 예방접종</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">맞춤 백신 상담</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">국가예방접종</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">지정의료기관</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">접종 후 관리</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">이상반응 모니터링</p>
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
                  style={{ backgroundImage: "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/993b4f8749e43.jpeg')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                건강을 지키는 <span className="text-sky-500">첫걸음</span>, 예방접종
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                예방접종은 감염병으로부터 나와 가족을 보호하는 가장 효과적인 방법입니다. 김정재탑내과에서는 성인에게 필요한 다양한 예방접종을 제공하며, 전문의 상담을 통해 개인의 건강 상태에 맞는 접종 계획을 수립합니다.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vaccination Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                주요 <span className="text-sky-500">예방접종</span> 안내
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaccinations.map((v, i) => (
              <ScrollReveal key={v.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-4 sm:p-7 border border-gray-100 card-hover-glow h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900">{v.name}</h3>
                  </div>
                  <p className="text-gray-500 text-base leading-relaxed mb-4 whitespace-pre-line">{v.desc}</p>
                  <div className="mt-auto">
                    <span className="inline-block bg-sky-50 text-sky-600 text-sm font-semibold px-3 py-1.5 rounded-full">
                      {v.target}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                접종 진행 순서
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: "01", title: "접수 및 문진" },
                { num: "02", title: "전문의 상담" },
                { num: "03", title: "예방접종 시행" },
                { num: "04", title: "접종 후 경과 관찰" },
              ].map((step, i) => (
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

      {/* Cautions */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 sm:p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                접종 전 주의사항
              </h3>
              <ul className="space-y-3">
                {[
                  "발열이나 급성 질환이 있는 경우 접종을 미루어 주세요",
                  "이전 접종에서 심한 알레르기 반응이 있었다면 반드시 알려주세요",
                  "임신 중이거나 임신 계획이 있는 경우 사전에 상담해 주세요",
                  "현재 복용 중인 약물이 있다면 접종 전 알려주세요",
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
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                자주 묻는 <span className="text-sky-500">질문</span>
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
