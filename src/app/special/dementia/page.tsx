"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";

export default function DementiaPage() {
  return (
    <>
      <PageHeader
        title="치매클리닉"
        subtitle="조기 발견과 체계적 관리로 치매를 예방합니다"
      />
      <WhyKimtop
        box="치매클리닉, 왜 김정재탑내과일까?+"
        overlay="치매 조기검진 클리닉"
        description="치매 조기검진과 예방 관리로 건강한 노후를 지원합니다."
        features={["MMSE 검사", "조기 발견", "전문의 직접 진료", "예방 관리 프로그램"]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/0ace4666c2ab8.jpeg"
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">10명 중 1명</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">65세 이상 치매</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">조기발견</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">진행 지연 가능</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">66세 이상</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">무료 치매검진</p>
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
                  src="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/6be165f9af0aa.jpeg"
                  alt="치매클리닉 소개"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                  치매클리닉 소개
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                  {"치매는 조기 발견이 가장 중요합니다.\n정기적인 인지기능 검사로 치매를 예방하고 관리하세요.\n알츠하이머병(70%), 혈관성 치매(20%), 기타 원인에 의한 치매로 분류됩니다."}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Symptom Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                치매 조기 증상
              </h2>
              <p className="text-gray-500">
                다음 증상이 나타나면 전문의 상담을 권장합니다
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "기억력 저하",
                desc: "최근 일을 자꾸 잊으며 약속이나 물건 둔 곳을 기억하지 못합니다.\n같은 질문을 반복하는 것이 초기 증상입니다.",
              },
              {
                title: "언어 장애",
                desc: "단어가 잘 떠오르지 않고 대화 중 엉뚱한 말을 하게 됩니다.\n글을 읽거나 쓰는 데 어려움이 생깁니다.",
              },
              {
                title: "방향 감각 상실",
                desc: "익숙한 장소에서 길을 잃거나 시간 감각이 흐려집니다.\n외출 시 귀가하는 길을 찾지 못할 수 있습니다.",
              },
              {
                title: "판단력 저하",
                desc: "일상적인 결정이 어려워지고 금전 관리에 실수가 잦아집니다.\n위험한 상황을 인지하지 못할 수 있습니다.",
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

      {/* Diagnosis Steps */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                검사 방법
              </h2>
              <p className="text-gray-500">
                체계적인 검사로 정확한 진단을 제공합니다
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "MMSE 인지기능 검사" },
              { step: "02", title: "혈액 검사" },
              { step: "03", title: "신경인지 검사" },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="relative bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <span className="text-5xl font-black text-sky-500/20">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-navy-900 mt-2">
                    {item.title}
                  </h3>
                  {idx < 2 && (
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
                치매클리닉에 대해 환자분들이 자주 묻는 질문입니다
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ
              items={[
                { q: "치매와 건망증은 어떻게 다른가요?", a: "건망증은 힌트를 주면 기억나지만, 치매는 사건 자체를 기억하지 못합니다." },
                { q: "치매 조기검진은 어디서 받나요?", a: "만 66세 이상은 보건소에서 2년마다 무료로 받을 수 있습니다." },
                { q: "치매 예방에 효과적인 활동은?", a: "규칙적 운동, 독서, 사회활동, 퍼즐 등이 뇌 활성화에 도움됩니다." },
                { q: "가족이 치매 의심 증상을 보이면?", a: "가능한 빨리 전문의 진료를 받아 정확한 평가를 받으세요." },
                { q: "치매 치료약이 있나요?", a: "완치약은 없지만 진행을 늦추는 약물이 있으며 조기 투약이 중요합니다." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
