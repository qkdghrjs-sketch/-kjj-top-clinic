"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";

const stdCards = [
  { title: "매독 검사", desc: "혈액검사(RPR, TPHA)를 통해 매독 감염 여부를 확인합니다." },
  { title: "에이즈(HIV) 검사", desc: "혈액검사를 통해 HIV 감염 여부를 확인하며, 익명 검사도 가능합니다." },
  { title: "클라미디아/임질 검사", desc: "소변 또는 분비물 검사로 확인하며, 무증상 감염이 많아 정기 검사가 중요합니다." },
  { title: "헤르페스 검사", desc: "혈액검사로 HSV-1, HSV-2 항체를 확인하며, 무증상이어도 검사 가능합니다." },
  { title: "B형간염/C형간염", desc: "혈액검사로 간염 바이러스 감염 여부를 확인합니다. 성접촉으로도 전파 가능합니다." },
  { title: "HPV 검사", desc: "자궁경부암 등의 원인이 되는 인유두종 바이러스 감염 여부를 확인합니다." },
];

const faqItems = [
  { q: "성병검사는 익명으로 가능한가요?", a: "네, 익명 검사가 가능하며 개인정보 보호를 철저히 준수합니다." },
  { q: "성병검사 결과는 얼마나 걸리나요?", a: "검사 항목에 따라 당일~3일 정도 소요되며, 결과는 개별 안내해 드립니다." },
  { q: "금식이 필요한가요?", a: "혈액검사가 포함되므로 8시간 금식을 권장합니다." },
  { q: "예약 없이 방문해도 되나요?", a: "예약 없이 방문 가능하나, 대기시간 단축을 위해 예약을 권장합니다." },
];

export default function OtherCheckupPage() {
  return (
    <>
      <PageHeader
        title="기타 검진"
        subtitle="성병검사 등 다양한 검진 서비스를 제공합니다"
      />

      <WhyKimtop
        box="기타 검진, 왜 김정재탑내과일까?+"
        overlay="정확하고 신속한 검진"
        description="전문의가 직접 판독하며, 프라이버시를 철저히 보호합니다."
        features={["전문의 직접 판독", "프라이버시 보호", "신속한 결과 안내", "당일 검사 가능"]}
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">성병검사</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">익명 검사 가능</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">당일 검사</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">신속한 결과 안내</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">전문의 판독</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">정확한 진단</p>
            </div>
          </div>
        </div>
      </section>

      {/* 성병검사 Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[200px] sm:h-[280px] md:h-[320px]">
                <div
                  className="w-full h-full bg-cover bg-center img-zoom"
                  style={{ backgroundImage: "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/d9257da62dfc1.jpeg')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                정확하고 신뢰할 수 있는 <span className="text-sky-500">성병검사</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
{"성병(성매개감염)은 초기 증상이 없는 경우가 많아 정기 검사가 중요합니다.\n프라이버시를 철저히 보호하며 정확한 검사와 신속한 결과\n안내를 제공합니다. 익명 검사도 가능하오니 부담 없이 방문해 주세요."}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 성병검사 항목 카드 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                성병검사 <span className="text-sky-500">항목</span>
              </h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stdCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-4 sm:p-7 border border-gray-100 card-hover-glow h-full">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{card.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed whitespace-pre-line">{card.desc}</p>
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
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 sm:p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                검진 전 주의사항
              </h3>
              <ul className="space-y-3">
                {[
                  "혈액검사가 포함되므로 8시간 금식을 권장합니다",
                  "성병검사 시 소변검사가 필요할 수 있으므로 검사 전 소변을 참아주세요",
                  "복용 중인 약물이 있다면 사전에 알려주세요",
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
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
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
