"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function ObesityPage() {
  return (
    <>
      <PageHeader
        title="비만클리닉"
        subtitle="건강한 체중 관리를 위한 의학적 접근"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 비만이란 */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                비만이란?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                비만은 체내에 지방이 과도하게 축적된 상태를 말합니다. 단순한
                체중 증가가 아닌, 다양한 대사질환의 원인이 되는 만성 질환으로
                체계적인 의학적 관리가 필요합니다. 비만은 유전적 요인, 생활습관,
                호르몬 불균형, 약물 부작용 등 복합적인 원인에 의해 발생합니다.
              </p>
            </div>
          </ScrollReveal>

          {/* BMI 기준 */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                BMI 기준에 따른 비만 분류
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    label: "정상 체중",
                    range: "BMI 18.5 ~ 22.9",
                    color: "bg-green-50 border-green-200",
                    textColor: "text-green-700",
                  },
                  {
                    label: "과체중 (비만 전단계)",
                    range: "BMI 23.0 ~ 24.9",
                    color: "bg-yellow-50 border-yellow-200",
                    textColor: "text-yellow-700",
                  },
                  {
                    label: "1단계 비만",
                    range: "BMI 25.0 ~ 29.9",
                    color: "bg-orange-50 border-orange-200",
                    textColor: "text-orange-700",
                  },
                  {
                    label: "2단계 비만",
                    range: "BMI 30.0 ~ 34.9",
                    color: "bg-red-50 border-red-200",
                    textColor: "text-red-700",
                  },
                  {
                    label: "3단계 비만 (고도비만)",
                    range: "BMI 35.0 이상",
                    color: "bg-red-100 border-red-300",
                    textColor: "text-red-800",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`${item.color} border rounded-xl p-5`}
                  >
                    <p className={`font-semibold ${item.textColor}`}>
                      {item.label}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">{item.range}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * 대한비만학회 기준 (아시아-태평양 기준)
              </p>
            </div>
          </ScrollReveal>

          {/* 비만 관련 질환 */}
          <ScrollReveal delay={200}>
            <div className="bg-navy-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                비만으로 인한 합병증
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    name: "당뇨병 (제2형)",
                    desc: "인슐린 저항성 증가로 혈당 조절 장애 발생",
                  },
                  {
                    name: "고혈압",
                    desc: "체중 증가에 따른 심혈관 부담 가중",
                  },
                  {
                    name: "이상지질혈증",
                    desc: "콜레스테롤 및 중성지방 수치 이상",
                  },
                  {
                    name: "지방간",
                    desc: "간에 지방이 축적되어 간 기능 저하",
                  },
                  {
                    name: "수면무호흡증",
                    desc: "기도 주변 지방 축적으로 호흡 장애",
                  },
                  {
                    name: "관절질환",
                    desc: "과도한 체중으로 인한 무릎, 허리 관절 손상",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5">
                    <p className="font-semibold text-navy-900">{item.name}</p>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 치료 접근법 */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                김정재탑내과의 비만 치료 접근법
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                단순한 체중 감량이 아닌, 근본적인 원인을 파악하고 환자 개개인에
                맞춘 맞춤형 치료 프로그램을 운영합니다.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "체성분 분석",
                    desc: "인바디(InBody) 검사를 통해 체지방률, 근육량, 내장지방 수준을 정밀 분석하여 현재 상태를 정확히 파악합니다.",
                    icon: "📊",
                  },
                  {
                    title: "맞춤 식이상담",
                    desc: "환자의 식습관과 생활패턴을 분석하여 실천 가능한 식이요법을 제시합니다. 극단적인 식이제한이 아닌 지속 가능한 식단을 추천합니다.",
                    icon: "🥗",
                  },
                  {
                    title: "운동처방",
                    desc: "체력 수준과 건강 상태에 맞는 운동 종류, 강도, 빈도를 처방합니다. 유산소 운동과 근력 운동의 최적 비율을 안내합니다.",
                    icon: "🏃",
                  },
                  {
                    title: "약물치료",
                    desc: "의학적으로 필요한 경우, 안전하고 효과적인 비만 치료 약물을 처방합니다. 정기적인 모니터링을 통해 부작용을 최소화합니다.",
                    icon: "💊",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 프로그램 개요 */}
          <ScrollReveal delay={400}>
            <div className="bg-navy-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                비만 관리 프로그램 과정
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "초기 상담 및 검사",
                    desc: "기본 건강검진, 체성분 분석, 혈액검사(갑상선, 호르몬, 대사 지표)를 통해 비만의 원인을 파악합니다.",
                  },
                  {
                    step: "02",
                    title: "맞춤 치료 계획 수립",
                    desc: "검사 결과를 바탕으로 개인별 목표 체중과 감량 속도를 설정하고, 식이·운동·약물치료 계획을 수립합니다.",
                  },
                  {
                    step: "03",
                    title: "집중 관리 (4~12주)",
                    desc: "2주 간격으로 내원하여 체중, 체지방, 근육량 변화를 모니터링하고 치료 계획을 조정합니다.",
                  },
                  {
                    step: "04",
                    title: "유지 관리",
                    desc: "목표 달성 후에도 월 1회 정기 방문을 통해 요요 현상을 예방하고 건강한 체중을 유지합니다.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-white rounded-xl p-5"
                  >
                    <span className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-bold text-navy-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 예상 타임라인 */}
          <ScrollReveal delay={500}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                예상 치료 기간
              </h2>
              <div className="bg-navy-50 rounded-2xl p-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sky-500 font-bold text-3xl mb-2">
                      4~8주
                    </p>
                    <p className="font-semibold text-navy-900">초기 감량기</p>
                    <p className="text-gray-600 text-sm mt-1">
                      체중의 3~5% 감량 목표
                    </p>
                  </div>
                  <div>
                    <p className="text-sky-500 font-bold text-3xl mb-2">
                      8~16주
                    </p>
                    <p className="font-semibold text-navy-900">집중 감량기</p>
                    <p className="text-gray-600 text-sm mt-1">
                      체중의 5~10% 감량 목표
                    </p>
                  </div>
                  <div>
                    <p className="text-sky-500 font-bold text-3xl mb-2">
                      6~12개월
                    </p>
                    <p className="font-semibold text-navy-900">유지 관리기</p>
                    <p className="text-gray-600 text-sm mt-1">
                      감량 체중 유지 및 생활습관 정착
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 상담 안내 */}
          <ScrollReveal delay={600}>
            <div className="text-center bg-navy-900 text-white rounded-2xl p-10">
              <h2 className="text-2xl font-bold mb-3">
                비만클리닉 상담 예약
              </h2>
              <p className="text-navy-300 mb-6">
                건강한 체중 관리, 지금 시작하세요. 전문의가 1:1 맞춤 상담을
                제공합니다.
              </p>
              <p className="text-sky-400 text-2xl font-bold">
                ☎ 02-6798-8880
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
