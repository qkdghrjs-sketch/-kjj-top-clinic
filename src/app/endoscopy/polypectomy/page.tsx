"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function PolypectomyPage() {
  return (
    <>
      <PageHeader
        title="용종절제술"
        subtitle="검사 중 발견된 용종을 당일 안전하게 제거합니다"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 용종이란 */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                용종이란 무엇인가요?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                용종(폴립)은 대장이나 위의 점막 표면에서 돌출되어 자라는 혹을
                말합니다. 대부분의 용종은 증상이 없어 내시경 검사를 통해서만
                발견됩니다. 용종은 크기, 모양, 조직학적 특성에 따라 다양한
                종류로 분류되며, 일부 용종(특히 선종성 용종)은 시간이 지남에
                따라 암으로 발전할 수 있어 조기 발견과 제거가 매우 중요합니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 용종 제거가 필요한 이유 */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                용종 제거가 필요한 이유
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                대장암의 약 80~90%는 선종성 용종에서 시작됩니다. 용종이 암으로
                진행되기까지 평균 5~10년이 소요되므로, 용종 단계에서 제거하면
                대장암 발생을 효과적으로 차단할 수 있습니다. 실제로 용종
                절제술을 통해 대장암 발생률을 약 76~90%까지 감소시킬 수 있다는
                연구 결과가 보고되어 있습니다.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "암 예방",
                    desc: "선종성 용종을 제거하여 대장암으로의 진행을 사전에 차단합니다.",
                  },
                  {
                    title: "당일 시술",
                    desc: "내시경 검사 중 발견 즉시 제거가 가능하여 별도의 시술 일정이 필요 없습니다.",
                  },
                  {
                    title: "간편한 절차",
                    desc: "대부분 통증 없이 시행되며, 시술 후 당일 귀가가 가능합니다.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 bg-gray-50 rounded-2xl text-center"
                  >
                    <h4 className="font-bold text-navy-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 시술 방법 */}
          <ScrollReveal delay={200}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                시술 방법
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                용종절제술은 내시경 검사 도중 시행되며, 용종의 크기와 모양에
                따라 적합한 절제 방법을 선택합니다. 시술은 통증 없이 진행되며,
                절제된 용종은 조직 검사를 통해 정확한 종류와 악성 여부를
                확인합니다.
              </p>
              <div className="space-y-4">
                {[
                  {
                    name: "겸자 절제술 (Cold Biopsy)",
                    desc: "5mm 이하의 작은 용종을 겸자로 잡아 제거하는 가장 간단한 방법입니다.",
                  },
                  {
                    name: "올가미 절제술 (Snare Polypectomy)",
                    desc: "올가미(와이어 루프)를 용종 기저부에 걸어 전기소작으로 절제합니다. 중간 크기의 용종에 주로 사용됩니다.",
                  },
                  {
                    name: "점막절제술 (EMR)",
                    desc: "용종 아래에 생리식염수를 주입하여 점막을 부풀린 후 절제합니다. 크기가 크거나 편평한 용종에 적합합니다.",
                  },
                  {
                    name: "점막하박리술 (ESD)",
                    desc: "2cm 이상의 큰 용종이나 조기암이 의심되는 병변을 점막하층을 따라 박리하여 일괄 절제합니다.",
                  },
                ].map((method) => (
                  <div
                    key={method.name}
                    className="p-4 border border-gray-100 rounded-xl"
                  >
                    <h4 className="font-semibold text-navy-900 mb-1">
                      {method.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{method.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 용종의 종류 */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                용종의 종류
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "선종성 용종 (Adenoma)",
                    desc: "암으로 진행할 가능성이 있는 용종으로, 반드시 제거가 필요합니다. 전체 용종의 약 70%를 차지합니다.",
                    risk: "높음",
                  },
                  {
                    name: "과증식성 용종 (Hyperplastic)",
                    desc: "대부분 양성이며 암으로 진행할 위험이 낮습니다. 크기가 작고 직장에 주로 발생합니다.",
                    risk: "낮음",
                  },
                  {
                    name: "톱니 모양 용종 (Sessile Serrated)",
                    desc: "편평한 형태로 발견이 어려우며, 일부는 암으로 진행할 수 있어 제거가 권장됩니다.",
                    risk: "중간",
                  },
                  {
                    name: "염증성 용종",
                    desc: "염증성 장질환에 동반되어 나타나는 용종으로, 자체적인 암 위험은 낮습니다.",
                    risk: "낮음",
                  },
                ].map((polyp) => (
                  <div
                    key={polyp.name}
                    className="p-5 bg-gray-50 rounded-2xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-navy-900">
                        {polyp.name}
                      </h4>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          polyp.risk === "높음"
                            ? "bg-red-100 text-red-700"
                            : polyp.risk === "중간"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        위험도 {polyp.risk}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{polyp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 시술 후 주의사항 안전 정보 박스 */}
          <ScrollReveal delay={400}>
            <div className="bg-navy-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                시술 후 주의사항
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "식이 관리",
                    desc: "시술 당일은 부드러운 죽이나 미음으로 식사하고, 2~3일간 자극적인 음식(맵고 짠 음식, 기름진 음식)을 피합니다. 이후 서서히 일반식으로 전환합니다.",
                  },
                  {
                    title: "금주",
                    desc: "시술 후 최소 1~2주간 금주합니다. 알코올은 출혈 위험을 높이고 점막 회복을 지연시킵니다.",
                  },
                  {
                    title: "활동 제한",
                    desc: "시술 후 1주일간 격렬한 운동, 무거운 물건 들기, 사우나, 장시간 목욕을 삼갑니다. 가벼운 일상 활동은 다음 날부터 가능합니다.",
                  },
                  {
                    title: "출혈 주의",
                    desc: "시술 후 소량의 혈변은 1~2일간 나올 수 있으며 대부분 자연히 멈춥니다. 선홍색 혈액이 다량 배출되거나 복통이 심한 경우 즉시 내원하세요.",
                  },
                  {
                    title: "추적 검사",
                    desc: "절제된 용종의 조직 검사 결과에 따라 1~3년 후 추적 대장내시경을 시행합니다. 정기적인 추적 관찰이 재발 방지에 매우 중요합니다.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded bg-sky-500 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
