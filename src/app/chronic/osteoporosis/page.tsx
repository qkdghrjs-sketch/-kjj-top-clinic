"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";

export default function OsteoporosisPage() {
  return (
    <>
      <PageHeader
        title="골다공증"
        subtitle="뼈 건강을 지키는 조기 진단과 예방 치료"
      />
      <WhyKimtop
        box="골다공증, 왜 김정재탑내과일까?+"
        overlay="골다공증 전문 클리닉"
        description="골다공증은 조기 발견과 꾸준한 관리가 중요합니다."
        features={["전문의 직접 진료", "골밀도 검사", "개인별 맞춤 관리", "낙상 예방 관리"]}
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">3명 중 1명</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">50세 이상 여성</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">2~3배</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">골절 위험 감소(치료 시)</p>
            </div>
            <CountUp end={54} suffix="세" label="골밀도 검사 권장" />
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
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop"
                  alt="골다공증 관리"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                  골다공증이란?
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                  {"골다공증은 뼈가 약해져 작은 충격에도 골절되는 질환입니다.\n조기 발견과 꾸준한 치료가 중요합니다.\n폐경 후 여성과 고령 남성에서 주로 발생합니다."}
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
                골다공증 골절 위험
              </h2>
              <p className="text-gray-500">
                골다공증으로 인해 발생할 수 있는 골절 유형입니다
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "척추 압박골절",
                desc: "허리가 점점 구부러지고 키가 줄어듭니다.\n심한 경우 1~2cm 이상 줄어들 수 있습니다.",
              },
              {
                title: "고관절 골절",
                desc: "낙상 시 엉덩이 골절로 장기 입원, 사망위험이 증가합니다.\n고령자에서 특히 위험합니다.",
              },
              {
                title: "손목 골절",
                desc: "넘어질 때 손목을 짚으면서 골절이 잘 발생합니다.\n가벼운 충격에도 골절이 일어납니다.",
              },
              {
                title: "늑골 골절",
                desc: "기침이나 재채기로도 갈비뼈가 부러질 수 있습니다.\n골다공증이 심한 경우 나타납니다.",
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

      {/* Prevention Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                예방 및 치료
              </h2>
              <p className="text-gray-500">
                골다공증 예방과 치료를 위한 관리 방법
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {["칼슘 섭취", "비타민D", "체중 부하 운동", "낙상 예방", "약물치료"].map(
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
                골다공증 관리 시 주의사항
              </h2>
              <div className="space-y-4">
                {[
                  "폐경 후 여성은 매년 골밀도 검사 권장",
                  "칼슘은 음식으로 섭취 우선",
                  "햇빛 노출로 비타민D 합성",
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
                골다공증에 대해 환자분들이 자주 묻는 질문입니다
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ
              items={[
                { q: "골다공증은 증상이 없나요?", a: "골절이 생기기 전까지 증상이 없어 정기 검사가 중요합니다." },
                { q: "골밀도 검사는 어디서 받나요?", a: "54세, 60세, 66세 여성은 국가검진에서 무료로 받을 수 있습니다." },
                { q: "우유를 마시면 골다공증을 예방할 수 있나요?", a: "칼슘 보충에 도움이 되나 비타민D와 운동도 함께 필요합니다." },
                { q: "골다공증 약은 어떻게 복용하나요?", a: "주 1회 또는 월 1회 복용하며 복용 방법을 정확히 지켜야 합니다." },
                { q: "남성도 골다공증이 생기나요?", a: "네, 70세 이상 남성에서 발생률이 높아집니다." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
