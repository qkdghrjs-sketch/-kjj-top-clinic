"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import WhyKimtop from "@/components/WhyKimtop";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";

export default function HairLossPage() {
  return (
    <>
      <PageHeader
        title="탈모클리닉"
        subtitle="탈모의 원인을 분석하고 맞춤 치료를 제공합니다"
      />
      <WhyKimtop
        box="탈모클리닉, 왜 김정재탑내과일까?+"
        overlay="탈모 전문 클리닉"
        description="탈모 유형에 맞는 맞춤형 치료로 건강한 모발을 되찾으세요."
        features={["전문의 직접 진료", "탈모 유형 분석", "개인 맞춤 치료", "안전한 시술"]}
      />

      {/* Stats Banner */}
      <section className="py-16 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CountUp end={1000} suffix="만명" label="국내 탈모 인구" />
            <CountUp end={80} suffix="%+" label="조기치료 효과" />
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">6개월</p>
              <p className="text-sky-300 text-sm font-medium">최소 치료 기간</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1585747860019-8e8ef6399bc1?w=800&auto=format&fit=crop"
                  alt="탈모클리닉 소개"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">
                  탈모클리닉 소개
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                  {"탈모는 조기 치료가 가장 효과적입니다.\n전문의가 탈모 유형을 정확히 파악해 맞춤 치료를 제공합니다.\n하루 100개 이상 빠진다면 탈모를 의심해볼 수 있습니다."}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Type Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                탈모 유형
              </h2>
              <p className="text-gray-500">
                탈모 유형에 따라 치료 방법이 달라집니다
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "남성형 탈모",
                desc: "안드로겐 호르몬의 영향으로 M자형 또는 정수리부터 탈모가 시작됩니다.\n가장 흔한 탈모 유형으로 유전적 요인이 큽니다.",
              },
              {
                title: "여성형 탈모",
                desc: "전체적으로 모발 밀도가 감소하며 가르마 부위가 넓어집니다.\n호르몬 변화, 빈혈, 영양 부족이 원인일 수 있습니다.",
              },
              {
                title: "원형 탈모",
                desc: "자가면역반응으로 동전 모양의 국소 탈모가 발생합니다.\n스트레스가 주요 유발 인자입니다.",
              },
              {
                title: "휴지기 탈모",
                desc: "출산, 극심한 스트레스, 급격한 체중감량 후 일시적으로 발생합니다.\n원인 제거 후 자연 회복되는 경우가 많습니다.",
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                치료 방법
              </h2>
              <p className="text-gray-500">
                단계별 맞춤 치료를 진행합니다
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "먹는 약" },
              { step: "02", title: "바르는 약" },
              { step: "03", title: "탈모 주사" },
              { step: "04", title: "두피 관리" },
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                자주 묻는 질문
              </h2>
              <p className="text-gray-500">
                탈모클리닉에 대해 환자분들이 자주 묻는 질문입니다
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ
              items={[
                { q: "탈모 치료는 언제 시작할수록 좋나요?", a: "탈모는 조기 치료가 효과적이며 빠를수록 좋습니다." },
                { q: "탈모약을 중단하면 다시 빠지나요?", a: "약 중단 시 탈모가 재진행될 수 있어 꾸준한 복용이 필요합니다." },
                { q: "탈모 주사는 아프지 않나요?", a: "가는 바늘을 사용하여 불편함이 최소화됩니다." },
                { q: "여성도 피나스테리드를 복용할 수 있나요?", a: "가임기 여성은 복용 금지이며 여성형 탈모는 다른 약물을 사용합니다." },
                { q: "탈모에 좋은 음식은 무엇인가요?", a: "단백질, 철분, 아연, 비오틴이 풍부한 음식이 모발 건강에 도움됩니다." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
