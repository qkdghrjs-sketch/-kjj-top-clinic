"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";

export default function DiabetesPage() {
  return (
    <>
      <PageHeader
        title="당뇨"
        subtitle="혈당 관리의 시작, 정확한 진단과 맞춤 치료"
      />
      <WhyKimtop
        box="당뇨, 왜 김정재탑내과일까?+"
        overlay="당뇨 전문 클리닉"
        description="당뇨는 꾸준한 관리가 치료입니다. 전문의와 함께 체계적으로 관리하세요."
        features={["전문의 직접 진료", "혈당 맞춤 관리", "정기적 모니터링", "합병증 예방 관리"]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/cc44d338606ae.jpeg"
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            <CountUp end={600} suffix="만명+" label="국내 당뇨 환자" />
            <CountUp end={60} suffix="%+" label="합병증 예방율" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">7% 미만</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">당화혈색소 목표</p>
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
                  src="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/3cd9af90d6fd6.jpeg"
                  alt="당뇨 관리"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                  당뇨병이란?
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg whitespace-pre-line">
                  {"당뇨병은 꾸준한 관리가 가장 중요한 치료입니다.\n합병증 예방을 위해 전문의와 함께 관리하세요.\n한국인의 경우 비만과 운동 부족이 주요 위험인자입니다."}
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
                당뇨 합병증
              </h2>
              <p className="text-gray-500">
                당뇨를 방치하면 다양한 합병증이 발생할 수 있습니다
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "망막병증",
                desc: "시력 저하, 실명으로 이어질 수 있습니다.\n매년 안과 정기검진이 필수입니다.",
              },
              {
                title: "신장병증",
                desc: "신기능 저하로 투석이 필요할 수 있습니다.\n소변 검사와 혈액 검사로 조기 발견합니다.",
              },
              {
                title: "신경병증",
                desc: "발 저림, 감각 저하로 당뇨발 위험이 증가합니다.\n매일 발을 점검하고 관리하세요.",
              },
              {
                title: "심혈관 질환",
                desc: "심근경색, 뇌졸중 위험이 2~4배 높아집니다.\n정기적인 심장 검진이 필요합니다.",
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
                당뇨 관리를 위한 5가지 생활습관
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {["규칙적 식사", "탄수화물 조절", "식후 걷기", "자가 혈당 측정", "약물 치료"].map(
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
                당뇨 관리 시 주의사항
              </h2>
              <div className="space-y-4">
                {[
                  "공복혈당 126 이상 시 즉시 진료",
                  "저혈당 증상 대비 사탕 상비",
                  "발 상처 매일 점검",
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
                당뇨에 대해 환자분들이 자주 묻는 질문입니다
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ
              items={[
                { q: "당뇨전단계도 치료가 필요한가요?", a: "생활습관 개선으로 당뇨로의 진행을 50% 이상 예방할 수 있습니다." },
                { q: "당뇨 식이요법에서 완전히 금지해야 하는 음식이 있나요?", a: "완전 금지보다 양 조절이 중요합니다.\n전문 영양 상담을 권장합니다." },
                { q: "인슐린 주사를 맞으면 중독되나요?", a: "인슐린은 중독성이 없으며 혈당 조절을 위한 필수 치료입니다." },
                { q: "당뇨가 있으면 운동을 조심해야 하나요?", a: "저혈당에 주의하며 규칙적인 운동을 권장합니다." },
                { q: "당화혈색소란 무엇인가요?", a: "최근 2~3개월간의 평균 혈당을 반영하는 지표입니다.\n7% 미만을 목표로 합니다." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
