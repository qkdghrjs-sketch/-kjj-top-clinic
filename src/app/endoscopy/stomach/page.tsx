"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";

export default function StomachEndoscopyPage() {
  return (
    <>
      <PageHeader
        title="위내시경"
        subtitle="정확한 진단을 위한 정밀 위내시경 검사"
      />

      <WhyKimtop
        box="위내시경, 왜 김정재탑내과일까?+"
        overlay="위내시경 전문 클리닉"
        description="내시경 세부전문의가 직접 시행하는 안전하고 정확한 위내시경 검사입니다."
        features={["내시경 세부전문의", "수면/비수면내시경 시행", "당일 용종절제 가능", "멸균 소독 철저"]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/91c253c9fee17.jpeg"
      />

      {/* 통계 배너 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <CountUp end={10000} suffix="+" label="위내시경 시행" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">10분~15분</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">검사 소요시간</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">당일 가능</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">용종절제, 조직검사</p>
            </div>
          </div>
        </div>
      </section>

      {/* 위내시경이란 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[200px] sm:h-[280px] md:h-[320px]">
                <div
                  className="w-full h-full bg-cover bg-center img-zoom"
                  style={{ backgroundImage: "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/5fa93cc54b985.jpeg')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-5">
                  소화기내시경 세부전문의가 직접
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
                  {"위내시경은 내시경 카메라를 입을 통해 삽입하여\n식도, 위, 십이지장을 직접 관찰하는 검사입니다."}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
                  {"육안으로는 확인이 불가능한 위 점막의 이상 변화를 실시간으로\n관찰하여 정확한 진단이 가능합니다."}
                </p>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {"김정재탑내과는 내시경 세부전문의가 철저한 검사로\n조기 위암 소견을 발견합니다."}
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-8 sm:mb-12">
              이런 증상이 있다면 <span className="text-sky-500">위내시경</span>을 받아보세요
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                name: "속쓰림·역류",
                desc: "식후 가슴이 타는 듯한 느낌이나 신물이 올라온다면 역류성식도염을 의심해보세요. 방치하면 바렛식도, 식도암으로 진행될 수 있어 조기 검사가 중요합니다.",
              },
              {
                name: "상복부 통증",
                desc: "식전이나 식후에 상복부가 쓰리거나 압박감이 느껴진다면 위염·위궤양을 의심하세요. 헬리코박터균 감염이 주요 원인이며 내시경으로 직접 확인할 수 있습니다.",
              },
              {
                name: "소화불량",
                desc: "더부룩함, 조기 포만감 등 소화불량이 4주 이상 지속된다면 검사가 필요합니다. 기능성 소화불량과 기질적 원인을 내시경으로 정확히 감별합니다.",
              },
              {
                name: "혈변·흑변",
                desc: "검은색 변이나 혈변이 나온다면 즉시 내시경 검사가 필요합니다. 위장관 출혈의 위치와 원인을 내시경으로 정확히 확인합니다.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-4 sm:p-7 border border-gray-100 card-hover-glow h-full">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{item.name}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 검사 준비 안내 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-8 sm:mb-12">
              검사 전 이렇게 <span className="text-sky-500">준비</span>하세요
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {[
              { step: "검사 전날", detail: "저녁 9시 이후 금식 (물 포함)" },
              { step: "검사 당일", detail: "아침 공복 상태로 내원" },
              { step: "수면내시경", detail: "보호자 동반 필수, 당일 운전 불가" },
              { step: "약 복용", detail: "혈압약은 소량의 물로 복용 가능, 당뇨약은 중단" },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 80}>
                <div className="flex items-start gap-4 bg-navy-50 rounded-xl p-5">
                  <div className="w-10 h-10 rounded-full bg-sky-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-bold text-base mb-1">{item.step}</h4>
                    <p className="text-gray-600 text-base">{item.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 검사 후 주의사항 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 sm:p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-5 flex items-center gap-2">
                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                검사 후 주의사항
              </h3>
              <ul className="space-y-3">
                {[
                  "일반 내시경: 30분 후 식사 가능",
                  "조직검사 시: 2시간 후 식사 가능",
                  "수면내시경: 당일 운전·음주·중요 결정 금지",
                  "이상 증상: 극심한 복통, 혈변 시 즉시 내원",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-8 sm:mb-12">
              자주 묻는 <span className="text-sky-500">질문</span>
            </h2>
          </ScrollReveal>
          <FAQ
            items={[
              { q: "위내시경은 얼마나 자주 받아야 하나요?", a: "40세 이상은 2년마다, 위험군(위암 가족력, 헬리코박터 감염)은 매년 권장합니다." },
              { q: "헬리코박터균이 있으면 꼭 치료해야 하나요?", a: "위궤양, 십이지장궤양, 위암 가족력이 있다면 치료를 강력히 권장합니다." },
              { q: "위내시경과 수면내시경 중 어떤 게 좋나요?", a: "검사에 대한 불안감이 있으시다면 수면내시경을 권장합니다. 수면 중 검사하므로 통증과 불편감이 없습니다." },
              { q: "역류성식도염은 완치가 가능한가요?", a: "생활습관 개선(취침 전 2시간 금식, 과식 금지)과 약물치료로 증상 조절이 가능합니다." },
              { q: "소화불량이 오래되면 꼭 내시경을 받아야 하나요?", a: "4주 이상 지속되거나 체중감소, 연하곤란이 동반된다면 내시경 검사를 강력히 권장합니다." },
            ]}
          />
        </div>
      </section>
    </>
  );
}
