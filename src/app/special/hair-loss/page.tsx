"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function HairLossPage() {
  return (
    <>
      <PageHeader
        title="탈모클리닉"
        subtitle="탈모의 원인을 분석하고 맞춤 치료를 제공합니다"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 탈모 개요 */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                탈모, 조기 치료가 중요합니다
              </h2>
              <p className="text-gray-600 leading-relaxed">
                탈모는 유전, 호르몬, 스트레스, 영양 결핍 등 다양한 원인에 의해
                발생합니다. 최근에는 20~30대 젊은 층에서도 탈모가 증가하고
                있으며, 초기에 적절한 치료를 시작하면 진행을 효과적으로 늦추거나
                회복할 수 있습니다. 김정재탑내과에서는 내과적 관점에서 탈모의
                근본 원인을 찾고 체계적으로 치료합니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 탈모 유형 */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                탈모의 유형
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    type: "남성형 탈모",
                    aka: "안드로겐성 탈모",
                    desc: "남성호르몬(DHT)의 영향으로 이마 헤어라인이 후퇴하고 정수리 부위가 얇아지는 가장 흔한 탈모 유형입니다. 유전적 요인이 크며, M자형 또는 O자형으로 진행됩니다.",
                    ratio: "전체 탈모의 약 70%",
                  },
                  {
                    type: "여성형 탈모",
                    aka: "여성형 안드로겐성 탈모",
                    desc: "가르마 부위를 중심으로 모발이 전체적으로 가늘어지고 숱이 줄어드는 형태입니다. 헤어라인은 유지되지만 두피가 비치는 것이 특징입니다.",
                    ratio: "여성 탈모의 약 40%",
                  },
                  {
                    type: "원형 탈모",
                    aka: "Alopecia Areata",
                    desc: "동전 크기의 원형으로 머리카락이 빠지는 자가면역 질환입니다. 스트레스, 면역 이상이 주된 원인이며, 갑자기 발생하는 것이 특징입니다.",
                    ratio: "인구의 약 1~2%",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-bold text-navy-900 mb-1">
                      {item.type}
                    </h3>
                    <p className="text-sky-500 text-sm font-medium mb-3">
                      {item.aka}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                      {item.ratio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 탈모 원인 */}
          <ScrollReveal delay={200}>
            <div className="bg-navy-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                탈모의 주요 원인
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    cause: "유전적 요인",
                    detail:
                      "가족력이 있는 경우 탈모 발생 확률이 높으며, 특히 남성형 탈모에서 유전의 영향이 큽니다.",
                  },
                  {
                    cause: "호르몬 변화",
                    detail:
                      "갑상선 질환, 남성호르몬 과다, 출산 후 호르몬 변화, 폐경 등이 탈모를 유발할 수 있습니다.",
                  },
                  {
                    cause: "스트레스",
                    detail:
                      "과도한 스트레스는 모발 성장 주기를 교란시켜 휴지기 탈모를 유발합니다.",
                  },
                  {
                    cause: "영양 결핍",
                    detail:
                      "철분, 아연, 비타민D, 단백질 등의 부족은 모발 성장에 직접적인 영향을 미칩니다.",
                  },
                  {
                    cause: "두피 질환",
                    detail:
                      "지루성 피부염, 두피 감염 등 두피 건강 문제가 탈모를 악화시킬 수 있습니다.",
                  },
                  {
                    cause: "약물 부작용",
                    detail:
                      "일부 약물(항암제, 항응고제, 갑상선약 등)이 탈모를 유발할 수 있습니다.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5">
                    <p className="font-semibold text-navy-900">{item.cause}</p>
                    <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 진단 방법 */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                정밀 진단 과정
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                정확한 원인 파악이 효과적인 치료의 첫걸음입니다. 체계적인 검사를
                통해 탈모의 원인과 진행 정도를 파악합니다.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "두피 정밀 검사",
                    desc: "고배율 두피 카메라를 이용하여 두피 상태, 모공 상태, 모발 굵기, 피지량 등을 정밀 분석합니다.",
                  },
                  {
                    title: "혈액 검사",
                    desc: "갑상선 기능(TSH, Free T4), 철분 수치(페리틴), 아연, 비타민D, 남성호르몬(테스토스테론, DHT) 등을 확인하여 내과적 원인을 파악합니다.",
                  },
                  {
                    title: "문진 및 병력 조사",
                    desc: "가족력, 복용 중인 약물, 생활습관, 스트레스 수준, 식이 패턴 등을 종합적으로 평가합니다.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 border border-gray-200 rounded-xl p-5"
                  >
                    <span className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {String(idx + 1).padStart(2, "0")}
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

          {/* 치료 방법 */}
          <ScrollReveal delay={400}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                치료 방법
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "약물치료",
                    items: [
                      "피나스테리드 (남성형 탈모)",
                      "미녹시딜 (두피 도포제)",
                      "두타스테리드",
                      "영양 보충제 (철분, 아연, 비오틴)",
                    ],
                    desc: "FDA 승인 약물을 중심으로 안전하고 효과적인 약물치료를 진행합니다.",
                  },
                  {
                    title: "메조테라피",
                    items: [
                      "모발 성장 인자 주입",
                      "비타민·미네랄 복합 주사",
                      "두피에 직접 약물 전달",
                      "2~4주 간격 시술",
                    ],
                    desc: "두피에 직접 영양 성분과 성장 인자를 주입하여 모낭을 활성화시키는 시술입니다.",
                  },
                  {
                    title: "PRP 치료",
                    items: [
                      "자가 혈액에서 성장인자 추출",
                      "모낭 재생 촉진",
                      "자연적인 치료법",
                      "3~4주 간격 시술",
                    ],
                    desc: "환자 본인의 혈액에서 추출한 혈소판 풍부 혈장을 두피에 주입하여 모발 재생을 촉진합니다.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-navy-50 rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-bold text-navy-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <ul className="space-y-2">
                      {item.items.map((li, liIdx) => (
                        <li
                          key={liIdx}
                          className="text-sm text-gray-700 flex items-start gap-2"
                        >
                          <span className="text-sky-500 mt-0.5">•</span>
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 생활 관리 팁 */}
          <ScrollReveal delay={500}>
            <div className="bg-navy-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                탈모 예방 및 관리 수칙
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "단백질, 철분, 아연이 풍부한 균형 잡힌 식사를 합니다.",
                  "두피를 청결하게 유지하고 자극이 적은 샴푸를 사용합니다.",
                  "과도한 음주와 흡연을 삼갑니다.",
                  "충분한 수면과 규칙적인 운동으로 스트레스를 관리합니다.",
                  "잦은 염색, 파마, 헤어 드라이기 고온 사용을 피합니다.",
                  "탈모 초기 증상이 보이면 빠르게 전문의를 찾습니다.",
                ].map((tip, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white rounded-xl p-4"
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <p className="text-gray-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 상담 안내 */}
          <ScrollReveal delay={600}>
            <div className="text-center bg-navy-900 text-white rounded-2xl p-10">
              <h2 className="text-2xl font-bold mb-3">
                탈모클리닉 상담 예약
              </h2>
              <p className="text-navy-300 mb-6">
                탈모는 빠른 치료가 핵심입니다. 전문의와 상담하고 맞춤 치료를
                시작하세요.
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
