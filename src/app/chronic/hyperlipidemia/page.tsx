"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";

export default function HyperlipidemiaPage() {
  return (
    <>
      <PageHeader
        title="고지혈증"
        subtitle="혈중 지질 관리로 심혈관 질환을 예방합니다"
      />
      <WhyKimtop
        box="고지혈증, 왜 김정재탑내과일까?+"
        overlay="고지혈증 전문 클리닉"
        description="고지혈증은 꾸준한 관리가 치료입니다. 전문의와 함께 체계적으로 관리하세요."
        features={["전문의 직접 진료", "개인별 맞춤 관리", "정기적 모니터링", "합병증 예방 관리"]}
        image="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/cc44d338606ae.jpeg"
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">100 미만</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">LDL 콜레스테롤 목표</p>
            </div>
            <CountUp end={50} suffix="%" label="심근경색 위험 감소" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">6개월</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">혈액검사 주기</p>
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
                  src="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/b5e344e582a9c.jpeg"
                  alt="고지혈증 관리"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                  고지혈증이란?
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                  {"고지혈증은 증상이 없어도 혈관을 조용히 막습니다.\n심근경색·뇌졸중 예방을 위해 정기 관리가 필요합니다.\n혈액검사로만 발견이 가능합니다."}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cholesterol Type Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                콜레스테롤 종류
              </h2>
              <p className="text-gray-500">
                각 콜레스테롤의 역할과 목표 수치를 알아보세요
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "LDL 콜레스테롤",
                desc: "'나쁜' 콜레스테롤로 혈관벽에 쌓입니다.\n100 미만이 목표이며 높을수록 심혈관 위험이 증가합니다.",
              },
              {
                title: "HDL 콜레스테롤",
                desc: "'좋은' 콜레스테롤로 혈관을 청소합니다.\n60 이상이 이상적이며 운동으로 높일 수 있습니다.",
              },
              {
                title: "중성지방",
                desc: "150 미만이 정상이며 음주, 탄수화물 과다 섭취로 높아집니다.\n심혈관 질환의 독립적 위험인자입니다.",
              },
              {
                title: "총 콜레스테롤",
                desc: "200 미만이 정상이며 정기적인 혈액검사로 확인합니다.\n6개월마다 수치를 모니터링하세요.",
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

      {/* Treatment Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                치료 및 관리
              </h2>
              <p className="text-gray-500">
                고지혈증 치료를 위한 관리 방법
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["식이조절", "유산소 운동", "약물치료(스타틴)", "정기검사"].map(
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
                고지혈증 관리 시 주의사항
              </h2>
              <div className="space-y-4">
                {[
                  "LDL 콜레스테롤 100 이하 목표",
                  "6개월마다 혈액검사 권장",
                  "금주·금연 필수",
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
                고지혈증에 대해 환자분들이 자주 묻는 질문입니다
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ
              items={[
                { q: "콜레스테롤이 높으면 반드시 약을 먹어야 하나요?", a: "심혈관 위험도에 따라 다르며 전문의 판단이 필요합니다." },
                { q: "콜레스테롤에 좋은 음식은 무엇인가요?", a: "견과류, 등푸른 생선, 올리브오일, 식이섬유가 풍부한 채소가 도움됩니다." },
                { q: "스타틴 약물의 부작용은 없나요?", a: "근육통이 드물게 발생할 수 있으며 간 기능 모니터링이 필요합니다." },
                { q: "마른 사람도 고지혈증이 생길 수 있나요?", a: "네, 유전적 요인으로 마른 사람도 고지혈증이 생길 수 있습니다." },
                { q: "고지혈증 치료는 언제까지 해야 하나요?", a: "대부분 장기간 치료가 필요하며 임의 중단은 위험합니다." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
