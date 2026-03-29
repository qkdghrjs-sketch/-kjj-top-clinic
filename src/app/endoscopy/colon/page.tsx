"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";

export default function ColonEndoscopyPage() {
  return (
    <>
      <PageHeader
        title="대장내시경"
        subtitle="대장 질환의 조기 발견과 예방을 위한 정밀 검사"
      />

      <WhyKimtop
        box="대장내시경, 왜 김정재탑내과일까?+"
        overlay="대장내시경 전문 클리닉"
        description="대장암 조기발견을 위한 정밀 대장내시경 검사를 제공합니다."
        features={["내시경 세부전문의", "당일 용종절제 가능", "수면/비수면내시경 시행", "최고 사양 올림푸스 내시경"]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/1d607a8a37a8d.jpeg"
      />

      {/* 통계 배너 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <CountUp end={5000} suffix="례+" label="용종 절제 시술 건수" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">입원 치료 없는</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">용종 절제</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">먹기 편한</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">장 정결제</p>
            </div>
          </div>
        </div>
      </section>

      {/* 대장내시경이란 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[320px]">
                <div
                  className="w-full h-full bg-cover bg-center img-zoom"
                  style={{ backgroundImage: "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/747e8bf1cb3a3.jpeg')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-5">
                  대장암 조기발견의 가장 확실한 방법입니다
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {"대장내시경은 항문을 통해 내시경을 삽입하여\n대장 전체를 직접 관찰하는 검사입니다.\n\n대장암의 90%는 용종에서 시작되며,\n용종 단계에서 발견하면 당일 즉시 제거가 가능합니다.\n\n김정재탑내과는 선종발견율 49%의 숙련된 전문의가\n모든 대장내시경을 직접 시행합니다."}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 이런 증상이 있다면 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              이런 증상이 있다면 <span className="text-sky-500">대장내시경</span>을 받아보세요
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                name: "혈변·점액변",
                desc: "변에 선홍색 피가 묻거나 점액이 섞여 나온다면\n즉시 대장내시경이 필요합니다.\n대장용종, 대장염, 대장암의 초기 증상일 수 있습니다.",
              },
              {
                name: "변비·설사 반복",
                desc: "변비와 설사가 번갈아 나타나거나 체중감소가 동반된다면\n과민성장증후군이나 대장염을 의심하세요.\n정확한 원인 파악을 위해 대장내시경으로\n직접 확인이 필요합니다.",
              },
              {
                name: "복통·복부 팽만",
                desc: "식후 또는 특정 음식 섭취 후 심한 복통이 지속된다면\n검사가 필요합니다.\n대장 내부를 직접 관찰하여\n정확한 원인을 찾습니다.",
              },
              {
                name: "대장암 가족력",
                desc: "직계 가족 중 대장암 환자가 있다면\n40세 이전부터 정기 검진을 강력히 권장합니다.\n조기 발견 시 완치율이 매우 높습니다.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 card-hover-glow h-full">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{item.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 장정결 안내 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              검사 전 이렇게 <span className="text-sky-500">준비</span>하세요
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {[
              { step: "검사 이틀 전", detail: "섬유질/씨/껍질/잡곡/견과류 등 찌꺼기 남는 음식 지양" },
              { step: "검사 전날 점심", detail: "죽" },
              { step: "검사 전날 저녁", detail: "장정결제 1차 복용 시작" },
              { step: "검사 당일 새벽", detail: "장정결제 2차 복용" },
              { step: "완료 기준", detail: "맑은 물 같은 변이 나올 때까지" },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 80}>
                <div className="flex items-start gap-4 bg-navy-50 rounded-xl p-5">
                  <div className="w-10 h-10 rounded-full bg-sky-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-bold text-base mb-1">{item.step}</h4>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <div className="mt-6 bg-sky-50 border border-sky-200 rounded-xl p-5">
              <p className="text-gray-700 text-sm whitespace-pre-line">
                {"장정결이 불충분하면 재검사가 필요합니다.\n충분한 장정결이 정확한 검사의 핵심입니다."}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 검사 후 주의사항 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-5 flex items-center gap-2">
                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                검사 후 주의사항
              </h3>
              <ul className="space-y-3">
                {[
                  "검사 직후: 복부 팽만감이 있을 수 있으나 곧 호전됩니다.",
                  "식사: 검사 1~2시간 후 가벼운 식사 가능합니다.",
                  "용종 절제 시: 2~3일 죽 식이, 1주일 음주·운동 금지합니다.",
                  "이상 증상: 심한 복통, 혈변 시 즉시 내원하세요.",
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
          <FAQ
            items={[
              { q: "장정결이 너무 힘든데 더 쉬운 방법이 있나요?", a: "맛이 개선된 다양한 장정결제가 있습니다.\n내원 시 상담을 통해 가장 편한 방법을 선택하실 수 있습니다." },
              { q: "대장내시경은 얼마나 자주 받아야 하나요?", a: "이상 없으면 5년마다, 용종 제거 후에는 1~3년마다 권장합니다.\n가족력이 있다면 더 자주 검사가 필요합니다." },
              { q: "용종을 제거하면 대장암이 예방되나요?", a: "선종성 용종 제거로 대장암 발생을 90% 이상 예방할 수 있습니다.\n정기적인 추적 검사가 매우 중요합니다." },
              { q: "비수면 내시경도 가능한가요?", a: "비수면도 가능하지만, 대장내시경 특성상 복통이 동반되므로 수면을 권장드립니다" },
              { q: "대장내시경 중 용종이 발견되면 바로 제거하나요?", a: "사전에 검사자/수검자간 동의된 사항에 맞춰 용종을 제거해 드립니다" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
