"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";

export default function HypertensionPage() {
  return (
    <>
      <PageHeader
        title="고혈압"
        subtitle="체계적인 혈압 관리로 합병증을 예방합니다"
      />
      <WhyKimtop
        box="고혈압, 왜 김정재탑내과일까?+"
        overlay="고혈압 전문 클리닉"
        description="고혈압은 꾸준한 관리가 치료입니다. 전문의와 함께 체계적으로 관리하세요."
        features={["전문의 직접 진료", "개인별 맞춤 관리", "정기적 모니터링", "합병증 예방 관리"]}
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            <CountUp end={1200} suffix="만명" label="국내 고혈압 환자" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">1위</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">뇌졸중 원인</p>
            </div>
            <CountUp end={95} suffix="%+" label="약물치료 효과" />
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
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop"
                  alt="고혈압 관리"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                  고혈압이란?
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                  {"고혈압은 조용한 살인자입니다.\n증상 없이 진행되다가 뇌졸중·심근경색으로 이어질 수 있습니다.\n국내 성인 3명 중 1명이 앓고 있는 매우 흔한 만성질환입니다."}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Risk Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                고혈압 합병증
              </h2>
              <p className="text-gray-500">
                고혈압을 방치하면 다양한 합병증이 발생할 수 있습니다
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "뇌졸중",
                desc: "뇌혈관이 막히거나 터져 반신마비, 언어장애가 발생합니다.\n고혈압은 뇌졸중의 가장 큰 위험인자입니다.",
              },
              {
                title: "심근경색",
                desc: "심장혈관이 막혀 생명을 위협하는 응급 상황이 됩니다.\n흉통과 호흡곤란이 나타나면 즉시 응급실을 방문하세요.",
              },
              {
                title: "신부전",
                desc: "신장 혈관 손상으로 투석이 필요한 상태가 됩니다.\n고혈압 관리로 신장 보호가 가능합니다.",
              },
              {
                title: "망막병증",
                desc: "눈의 혈관 손상으로 시력을 잃을 수 있습니다.\n정기적인 안과 검진이 필요합니다.",
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

      {/* Management Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                생활습관 관리
              </h2>
              <p className="text-gray-500">
                고혈압 관리를 위한 5가지 생활습관
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {["저염식이", "규칙적 운동", "체중 관리", "금주·금연", "약물 복용"].map(
              (item, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="bg-gray-50 rounded-2xl shadow-md p-6 text-center h-full card-hover-glow">
                    <span className="inline-flex items-center justify-center w-12 h-12 bg-sky-500 text-white rounded-full font-bold text-lg mb-4">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-navy-900">
                      {item}
                    </h3>
                  </div>
                </ScrollReveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* Cautions */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-sky-500">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                고혈압 관리 시 주의사항
              </h2>
              <div className="space-y-4">
                {[
                  "혈압약 임의 중단 절대 금지",
                  "가정용 혈압계로 매일 측정 권장",
                  "염분 하루 6g 이하 섭취",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed pt-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                자주 묻는 질문
              </h2>
              <p className="text-gray-500">
                고혈압에 대해 환자분들이 자주 묻는 질문입니다
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ
              items={[
                { q: "혈압약을 먹으면 평생 먹어야 하나요?", a: "대부분 꾸준한 복용이 필요하지만 생활습관 개선으로 줄일 수도 있습니다." },
                { q: "혈압이 조금 높은데 바로 약을 먹어야 하나요?", a: "경계성 고혈압은 생활습관 개선을 먼저 시도합니다." },
                { q: "가정에서 혈압 측정 시 주의사항은?", a: "안정 후 5분 뒤, 같은 팔, 같은 자세로 측정하세요." },
                { q: "고혈압 약의 부작용은 없나요?", a: "약의 종류에 따라 다르며 부작용 시 다른 약으로 교체 가능합니다." },
                { q: "고혈압에 좋은 식품은 무엇인가요?", a: "바나나, 고구마, 등푸른 생선, 견과류 등이 도움이 됩니다." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
