"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";

export default function CardiopulmonaryPage() {
  return (
    <>
      <PageHeader
        title="심장 폐질환"
        subtitle="심장과 폐 건강을 함께 관리합니다"
      />
      <WhyKimtop
        box="심장 폐질환, 왜 김정재탑내과일까?+"
        overlay="심장·폐 전문 클리닉"
        description="심장과 폐 질환의 정밀 진단과 체계적인 관리를 제공합니다."
        features={["심전도 검사", "폐기능 검사", "전문의 직접 진료", "정기적 모니터링"]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/cc44d338606ae.jpeg"
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">심전도 검사</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">당일 판독</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">폐기능 검사</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">당일 판독</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">흉부 X-ray</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">당일 판독</p>
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
                  src="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/b573d276a5c84.jpeg"
                  alt="심장 폐질환 관리"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                  심장 폐질환이란?
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                  {"심장과 폐는 서로 밀접하게 연관되어 있습니다.\n심장 기능이 저하되면 폐에 물이 차는 폐부종이 발생합니다.\n폐 기능이 저하되면 심장에 부담을 주어 폐성심이 발생합니다."}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disease Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                주요 심폐질환
              </h2>
              <p className="text-gray-500">
                심장과 폐에 영향을 미치는 주요 질환입니다
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "심부전",
                desc: "심장 펌프 기능 저하로 호흡곤란, 부종이 발생합니다.\n일상적인 활동에서도 숨이 차고 피로감이 심합니다.",
              },
              {
                title: "폐고혈압",
                desc: "폐혈관 압력 상승으로 호흡곤란, 운동 능력 저하가 나타납니다.\n진행되면 심장에 큰 부담을 줍니다.",
              },
              {
                title: "허혈성 심질환",
                desc: "관상동맥 협착으로 가슴통증, 심근경색이 발생합니다.\n운동 시 흉통은 위험 신호입니다.",
              },
              {
                title: "COPD 심합병증",
                desc: "만성 폐질환으로 인한 심장 부담 증가입니다.\n금연이 가장 중요한 예방 방법입니다.",
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

      {/* Diagnosis Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                정밀 진단 검사
              </h2>
              <p className="text-gray-500">
                체계적인 검사로 심폐 질환을 정확히 진단합니다
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["심전도", "심장초음파", "폐기능 검사", "흉부 X-ray"].map(
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
                심폐질환 관리 시 주의사항
              </h2>
              <div className="space-y-4">
                {[
                  "갑작스러운 흉통은 즉시 응급실 방문",
                  "금연은 심폐 건강의 가장 중요한 요소",
                  "규칙적 유산소 운동 권장",
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
                심폐질환에 대해 환자분들이 자주 묻는 질문입니다
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ
              items={[
                { q: "갑자기 가슴이 아프면 어떻게 해야 하나요?", a: "즉시 응급실을 방문하거나 119에 연락하세요." },
                { q: "숨이 차는 증상이 있는데 심장 문제일까요?", a: "심장, 폐 양쪽 모두 원인일 수 있어 정밀 검사가 필요합니다." },
                { q: "심전도 검사로 모든 심장 질환을 알 수 있나요?", a: "심전도는 부정맥, 허혈에 유용하며 초음파와 함께 검사가 필요합니다." },
                { q: "계단을 오를 때만 숨이 차면 괜찮은가요?", a: "운동 시 호흡곤란은 심폐 기능 저하의 신호일 수 있습니다." },
                { q: "흡연자는 어떤 검사를 받아야 하나요?", a: "폐기능 검사, 흉부 X-ray, 심전도를 포함한 정기 검진을 권장합니다." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
