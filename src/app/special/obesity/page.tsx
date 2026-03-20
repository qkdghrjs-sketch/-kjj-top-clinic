"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";

export default function ObesityPage() {
  return (
    <>
      <PageHeader
        title="비만클리닉"
        subtitle="건강한 체중 관리를 위한 의학적 접근"
      />
      <WhyKimtop
        box="비만클리닉, 왜 김정재탑내과일까?+"
        overlay="비만 전문 클리닉"
        description="전문의가 직접 진료하는 체계적인 비만 관리 프로그램을 제공합니다."
        features={["전문의 직접 진료", "개인 맞춤 처방", "체성분 분석", "안전한 시술"]}
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            <CountUp end={25} suffix="+" label="BMI 비만 판정" />
            <CountUp end={50} suffix="%" label="합병증 위험 감소" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">3개월</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">집중 프로그램</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:gap-12 items-center">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop"
                  alt="비만클리닉 소개"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                  비만클리닉 소개
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                  {"비만은 단순한 외모 문제가 아닌 질병입니다.\n전문의 처방으로 안전하고 효과적인 체중 감량을 도와드립니다.\n고혈압, 당뇨, 고지혈증, 수면무호흡증 등 다양한 질환의 원인입니다."}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Complication Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                비만 합병증
              </h2>
              <p className="text-gray-500">
                비만을 방치하면 다양한 합병증이 발생할 수 있습니다
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "대사증후군",
                desc: "혈압, 혈당, 콜레스테롤이 동시에 나빠집니다.\n비만은 대사증후군의 가장 큰 위험인자입니다.",
              },
              {
                title: "관절 질환",
                desc: "무릎, 고관절에 과부하가 걸려 퇴행성 관절염이 빨라집니다.\n체중 감량으로 관절 부담을 줄일 수 있습니다.",
              },
              {
                title: "수면무호흡증",
                desc: "목 주변 지방으로 기도가 좁아져 수면 중 호흡이 멈춥니다.\n낮 시간 졸음과 피로감의 원인이 됩니다.",
              },
              {
                title: "지방간",
                desc: "간에 지방이 쌓여 간경화로 진행될 수 있습니다.\n체중의 5~10%만 감량해도 개선됩니다.",
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl shadow-md p-8 h-full card-hover-glow">
                  <h3 className="text-lg font-bold text-navy-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                치료 과정
              </h2>
              <p className="text-gray-500">
                체계적인 5단계 프로세스로 진행됩니다
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "체성분 분석" },
              { step: "02", title: "원인 파악" },
              { step: "03", title: "맞춤 식단·운동 처방" },
              { step: "04", title: "약물치료(필요시)" },
              { step: "05", title: "정기 모니터링" },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="relative bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <span className="text-5xl font-black text-sky-500/20">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-navy-900 mt-2">
                    {item.title}
                  </h3>
                  {idx < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-sky-500 text-2xl">
                      →
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                자주 묻는 질문
              </h2>
              <p className="text-gray-500">
                비만클리닉에 대해 환자분들이 자주 묻는 질문입니다
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ
              items={[
                { q: "다이어트 약은 안전한가요?", a: "전문의 처방하에 적절히 사용하면 안전하고 효과적입니다." },
                { q: "단기간에 살을 빼면 요요가 오나요?", a: "급격한 체중 감량은 요요 위험이 높아 천천히 감량하는 것이 중요합니다." },
                { q: "비만클리닉은 보험이 되나요?", a: "일부 검사는 보험 적용이 되나 치료비는 대부분 비급여입니다." },
                { q: "비만치료 효과는 언제부터 나타나나요?", a: "개인마다 다르나 보통 1~2개월 후 효과가 나타납니다." },
                { q: "지방흡입과 비만클리닉 치료의 차이는 무엇인가요?", a: "비만클리닉은 내과적 치료로 전신 건강을 함께 관리합니다." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
