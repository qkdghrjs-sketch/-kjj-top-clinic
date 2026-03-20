"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import FAQ from "@/components/FAQ";

export default function IVTherapyPage() {
  return (
    <>
      <PageHeader
        title="수액클리닉"
        subtitle="피로 회복과 면역력 증진을 위한 맞춤 수액 치료"
      />
      <WhyKimtop
        box="수액클리닉, 왜 김정재탑내과일까?+"
        overlay="수액 전문 클리닉"
        description="목적에 맞는 다양한 수액 치료로 건강하고 활기찬 생활을 지원합니다."
        features={["전문의 직접 처방", "다양한 수액 종류", "안전한 시술", "빠른 효과"]}
      />

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">다양한 종류</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">맞춤형 수액</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">30~60분</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">투여 시간</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">전문의</p>
              <p className="text-sky-300 text-xs sm:text-sm font-medium">직접 처방</p>
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
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop"
                  alt="수액클리닉 소개"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                  수액클리닉 소개
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                  {"피로 회복부터 면역 강화까지 목적에 맞는 맞춤형 수액 치료를 제공합니다.\n경구 복용보다 흡수율이 100%로 빠른 효과를 기대할 수 있습니다.\n전문의가 개인 건강 상태를 파악 후 처방합니다."}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* IV Type Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                수액 종류
              </h2>
              <p className="text-gray-500">
                증상과 목적에 맞는 맞춤 수액을 처방합니다
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "피로회복 수액",
                desc: "비타민B군, 아미노산, 마그네슘을 공급하여 피로와 무기력증을 회복시킵니다.\n과로, 만성 피로에 효과적입니다.",
              },
              {
                title: "면역 강화 수액",
                desc: "고용량 비타민C(10~20g)를 투여하여 면역력을 높이고 항산화 효과를 냅니다.\n감기 예방과 회복에 도움됩니다.",
              },
              {
                title: "마늘 수액",
                desc: "알리신 성분으로 피로 회복, 혈액순환 개선, 활력 증진에 효과적입니다.\n체력 저하와 무기력감에 추천합니다.",
              },
              {
                title: "백옥 수액",
                desc: "글루타치온을 투여하여 미백 효과와 강력한 항산화 작용을 합니다.\n피부 톤 개선과 노화 방지에 효과적입니다.",
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

      {/* Process Steps */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                치료 과정
              </h2>
              <p className="text-gray-500">
                간편하고 안전한 4단계 과정
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "상담" },
              { step: "02", title: "전문의 처방" },
              { step: "03", title: "수액 투여(30~60분)" },
              { step: "04", title: "귀가" },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="relative bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <span className="text-5xl font-black text-sky-500/20">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-navy-900 mt-2">
                    {item.title}
                  </h3>
                  {idx < 3 && (
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
                수액클리닉에 대해 환자분들이 자주 묻는 질문입니다
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ
              items={[
                { q: "수액치료는 얼마나 자주 받아야 효과가 있나요?", a: "목적에 따라 다르며 주 1~2회 또는 월 1~2회를 권장합니다." },
                { q: "수액치료 후 바로 일상생활이 가능한가요?", a: "네, 투여 후 바로 일상생활이 가능합니다." },
                { q: "고용량 비타민C 수액은 안전한가요?", a: "신장 기능이 정상인 분에게는 안전하며, 신장질환자는 사전 상담이 필요합니다." },
                { q: "마늘 수액을 맞으면 냄새가 나나요?", a: "투여 중 마늘 냄새가 날 수 있으나 시간이 지나면 사라집니다." },
                { q: "수액치료와 영양제 복용 중 어떤 게 더 효과적인가요?", a: "수액은 100% 흡수되어 즉각적인 효과를 기대할 수 있습니다." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
