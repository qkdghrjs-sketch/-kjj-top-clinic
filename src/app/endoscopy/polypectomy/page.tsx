"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";

const whyRemoveCards = [
  { name: "대장암과의 연관성", desc: "대장암의 90%는 용종에서 시작됩니다. 선종성 용종을 제거하면 대장암 발생을 90% 이상 예방할 수 있으며, 크기가 작을수록 제거가 쉽고 안전합니다." },
  { name: "무증상이 더 위험합니다", desc: "대부분의 용종은 아무런 증상이 없습니다. 증상이 나타났을 때는 이미 진행된 경우가 많아 정기적인 대장내시경이 유일한 조기 발견 방법입니다." },
  { name: "당일 즉시 제거 가능", desc: "김정재탑내과는 검사 중 발견된 용종을 당일 즉시 제거합니다. 별도 예약이나 재방문 없이 한 번의 검사로 해결됩니다." },
];

const methods = [
  { num: "01", title: "용종생검술", desc: "0.1~0.3cm 이하의 용종을 생검겸자로 제거합니다." },
  { num: "02", title: "점막절제술(EMR)", desc: "올가미로 잡아 전기로 절제합니다." },
  { num: "03", title: "냉올가미 용종 절제술", desc: "전기 사용 없이 올가미로 절제합니다." },
];

const postCare = [
  { label: "당일", desc: "죽이나 미음 등 부드러운 음식을 드세요." },
  { label: "1~3일", desc: "자극적인 음식, 과식을 피해주세요." },
  { label: "1주일", desc: "음주, 흡연, 과격한 운동을 금지합니다." },
  { label: "이상 증상", desc: "복통, 혈변, 발열 시 즉시 내원하세요." },
  { label: "조직검사 결과", desc: "1~2주 후 확인 가능합니다." },
];

const faqItems = [
  { q: "용종 절제 후 흉터가 남나요?", a: "내시경으로 절제하므로 외부 흉터는 전혀 없습니다." },
  { q: "절제한 용종이 재발할 수 있나요?", a: "같은 자리에 재발하지는 않지만 새로운 용종이 생길 수 있습니다. 정기적인 추적 검사가 반드시 필요합니다." },
  { q: "용종 절제 후 언제부터 운동할 수 있나요?", a: "용종 크기와 절제 방법에 따라 다르나 보통 1주일 후부터 가벼운 운동이 가능합니다." },
  { q: "용종이 악성인지 어떻게 알 수 있나요?", a: "절제 후 조직검사로 확인합니다. 결과는 1~2주 후 확인 가능하며 악성인 경우 추가 치료를 안내해 드립니다." },
  { q: "용종 절제는 아프지 않나요?", a: "수면 상태에서 진행하므로 통증이 없습니다. 시술 후 가벼운 복부 불편감이 있을 수 있으나 곧 호전됩니다." },
  { q: "용종 절제 후 언제부터 식사할 수 있나요?", a: "용종의 크기와 개수에 따라 다르지만 보통 6시간 후 복통이나 혈변이 없다면 가능합니다." },
];

export default function PolypectomyPage() {
  return (
    <>
      <PageHeader
        title="용종절제술"
        subtitle="검사 중 발견된 용종을 당일 안전하게 제거합니다"
      />

      <WhyKimtop
        box="용종절제술, 왜 김정재탑내과일까?+"
        overlay="당일 용종절제 가능"
        description="검사 당일 용종을 즉시 제거하는 원스톱 서비스를 제공합니다."
        features={["검사 당일 절제 가능", "소화기내시경 세부전문의", "안전한 시술", "빠른 회복"]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/91c253c9fee17.jpeg"
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <CountUp end={5000} suffix="례+" label="용종 절제 시술 건수" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">당일 절제</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">당일 용종 절제</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">안전 시술</p>
              <p className="text-sky-300 text-sm sm:text-base font-medium">합병증 없는 시술</p>
            </div>
          </div>
        </div>
      </section>

      {/* 용종이란 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[200px] sm:h-[280px] md:h-[320px]">
                <div
                  className="w-full h-full bg-cover bg-center img-zoom"
                  style={{ backgroundImage: "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/3ba604da11869.jpeg')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-5">대장암 예방의 첫걸음, 용종을 조기에</h2>
              <p className="text-gray-600 leading-relaxed mb-4">용종은 대장 점막에서 혹처럼 돌출된 조직으로 대부분 무증상이라 발견이 어렵습니다.</p>
              <p className="text-gray-600 leading-relaxed mb-4">선종성 용종은 방치할 경우 5~10년 내 대장암으로 진행될 수 있어 조기 제거가 매우 중요합니다.</p>
              <p className="text-gray-600 leading-relaxed">김정재탑내과는 검사와 동시에 당일 즉시 절제가 가능하여 별도의 입원 없이 원스톱으로 치료합니다.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 왜 제거해야 하나요 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              왜 <span className="text-sky-500">제거</span>해야 하나요?
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {whyRemoveCards.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-4 sm:p-7 border border-gray-100 card-hover-glow h-full">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 절제 방법 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-4">
              절제 <span className="text-sky-500">방법</span>
            </h2>
            <p className="text-gray-500 text-center mb-12">용종 크기와 종류에 따라 최적의 방법으로 제거합니다</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {methods.map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 100}>
                <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 card-hover-glow h-full">
                  <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.num}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 시술 후 관리 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              시술 후 <span className="text-sky-500">관리</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 sm:p-8">
              <ul className="space-y-4">
                {postCare.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700"><strong>{item.label}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              자주 묻는 <span className="text-sky-500">질문</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
