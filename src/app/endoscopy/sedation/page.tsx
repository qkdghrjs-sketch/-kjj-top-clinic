"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";

const advantages = [
  { name: "통증 없음", desc: "수면 유도제 효과로 검사 중 아무런 통증과\n불편감을 느끼지 않습니다.\n내시경 공포증이 있는 분도 편안하게 받을 수 있습니다." },
  { name: "더 정확한 검사", desc: "환자의 움직임이 없어 의사가 더 꼼꼼하게\n관찰할 수 있습니다.\n작은 병변도 놓치지 않는 정밀한 검사가 가능합니다." },
  { name: "빠른 검사", desc: "협조가 잘 되어 일반 내시경보다\n검사 시간이 단축됩니다.\n위내시경은 5~10분, 대장내시경은 15~30분이면 완료됩니다." },
  { name: "심리적 안정", desc: "내시경 검사에 대한 두려움으로\n미루고 계셨다면 수면내시경을 선택하세요.\n검사 후 \"생각보다 편했다\"고 하시는 분이 대부분입니다." },
];

const safetySteps = [
  { num: "01", title: "전문 의료진 투여", desc: "전문 교육을 받은 의료진이 투여합니다." },
  { num: "02", title: "활력징후 모니터링", desc: "투여 전후 혈압, 맥박, 산소포화도를 지속 측정합니다." },
  { num: "03", title: "개인 맞춤 용량", desc: "체중, 나이, 건강 상태에 따라 적정 용량을 조절합니다." },
  { num: "04", title: "완전 각성 확인", desc: "완전히 깨어난 것을 확인 후 귀가를 안내합니다." },
];

const cautions = [
  { label: "보호자 동반 필수", desc: "혼자 오시면 검사가 불가능합니다" },
  { label: "검사 당일 운전 절대 금지", desc: "대중교통 또는 보호자 차량 이용" },
  { label: "검사 당일 음주, 중요한 계약·결정 금지", desc: "" },
  { label: "고령자, 비만, 수면무호흡증 환자는 사전 상담 필수", desc: "" },
  { label: "임산부, 특정 약물 복용자는 사전 상담 필수", desc: "" },
];

const faqItems = [
  { q: "수면내시경 후 바로 운전할 수 없나요?", a: "당일 운전은 절대 불가합니다.\n수면 유도제가 완전히 깨어난 것처럼 느껴지더라도\n판단력에 영향을 줄 수 있어 보호자 동반이 필수입니다." },
  { q: "수면에서 깨어나는 데 얼마나 걸리나요?", a: "보통 30~60분 후 완전히 각성됩니다.\n회복실에서 충분히 쉬신 후 귀가하실 수 있습니다." },
  { q: "수면내시경을 못 받는 경우가 있나요?", a: "임산부, 수면 유도제 알레르기가 있는 분, 특정 약물 복용자,\n뇌, 심장, 폐질환, 급성 호흡기질환 감염 되신 분은\n사전 상담이 필요합니다." },
  { q: "검사 중에 깨어날 수도 있나요?", a: "드물게 각성되는 경우가 있으나 추가 투여로 조절 가능합니다.\n검사 내용은 기억하지 못하는 것이 정상입니다." },
  { q: "수면내시경 비용은 얼마인가요?", a: "보험 적용 여부에 따라 다릅니다.\n자세한 비용은 내원 시 또는 전화 상담으로 안내해 드립니다." },
];

export default function SedationEndoscopyPage() {
  return (
    <>
      <PageHeader
        title="수면내시경"
        subtitle="편안하고 고통 없는 수면 내시경 검사"
      />

      <WhyKimtop
        box="수면내시경, 왜 김정재탑내과일까?+"
        overlay="편안한 수면내시경"
        description="대학병원급의 바이탈 사인 감시를 통해, 사고 없는 안전한 수면내시경을 진행합니다."
        features={["기도 흡입 예방", "안전한 수면 약물 사용", "바이탈 사인 감시", "편안한 회복실"]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/1d607a8a37a8d.jpeg"
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">대학병원급</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">최신 대학병원급 내시경실</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">충분한 회복</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">충분한 회복 시간</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">안전 내시경</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">안전한 내시경</p>
            </div>
          </div>
        </div>
      </section>

      {/* 수면내시경이란 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[320px]">
                <div
                  className="w-full h-full bg-cover bg-center img-zoom"
                  style={{ backgroundImage: "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/4d8aa5f4e327a.jpeg')" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-5">통증 없이 편안하게, 더 정확하게 검사합니다</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{"수면내시경은 안전한 수면 유도제를 사용하여\n검사 중 의식이 없는 상태에서 진행하는 내시경입니다.\n\n검사 중 아무런 불편감을 느끼지 못하며\n검사 내용을 기억하지 못하는 것이 정상입니다.\n\n일반 내시경보다 환자의 협조가 잘 되어\n더 꼼꼼하고 정확한 검사가 가능합니다."}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 수면내시경의 장점 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              수면내시경의 <span className="text-sky-500">장점</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {advantages.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 card-hover-glow h-full">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 수면 유도제 안전성 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              <span className="text-sky-500">안전</span>하게 관리됩니다
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetySteps.map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 100}>
                <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 card-hover-glow h-full">
                  <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.num}
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 주의사항 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
              수면내시경 <span className="text-sky-500">주의사항</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-8">
              <ul className="space-y-4">
                {cautions.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      <strong>{item.label}</strong>{item.desc ? ` (${item.desc})` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 경고 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-red-50 border-2 border-red-400 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <p className="text-red-700 font-semibold leading-relaxed">
                  수면내시경은 심장과 호흡 중추를 억제하는 전신마취제를 사용하는 시술로 특정 고위험군에서는 사망으로 이어질 수 있습니다. 시술 전 수면내시경 결정을 위해 의료진과 충분한 상담 및 검사가 필요합니다.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
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
