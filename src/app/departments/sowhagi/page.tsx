"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

const conditions = [
  {
    name: "위염",
    description:
      "위 점막에 염증이 발생하는 질환으로, 급성과 만성으로 나뉩니다. 헬리코박터 파일로리균 감염, 과도한 음주, 진통제 남용 등이 주요 원인이며, 적절한 치료 없이 방치하면 위궤양이나 위암으로 진행될 수 있습니다.",
    symptoms: [
      "상복부 통증 및 불쾌감",
      "속쓰림, 소화불량",
      "오심 및 구토",
      "식후 복부 팽만감",
    ],
  },
  {
    name: "역류성식도염",
    description:
      "위산이 식도로 역류하여 식도 점막에 염증과 손상을 일으키는 질환입니다. 하부식도괄약근의 기능 저하가 주요 원인이며, 비만, 과식, 취침 전 식사 등의 생활 습관이 증상을 악화시킬 수 있습니다. 만성화되면 바렛식도 등 합병증 위험이 높아집니다.",
    symptoms: [
      "가슴 쓰림(흉골 뒤 작열감)",
      "신트림 및 위산 역류",
      "만성 기침, 쉰 목소리",
      "목 이물감, 삼킴 곤란",
    ],
  },
  {
    name: "과민성장증후군",
    description:
      "대장 내시경 등 검사에서 특별한 이상이 발견되지 않음에도 복통, 복부 팽만감, 배변 습관의 변화가 반복되는 기능성 위장 질환입니다. 스트레스, 불규칙한 식습관, 장내 세균 불균형 등이 복합적으로 작용하며, 삶의 질을 크게 저하시킬 수 있습니다.",
    symptoms: [
      "반복적인 복통 및 복부 경련",
      "설사 또는 변비(혹은 교대로 반복)",
      "복부 팽만감 및 가스",
      "배변 후 잔변감",
    ],
  },
  {
    name: "위내시경 검사",
    description:
      "내시경을 통해 식도, 위, 십이지장의 점막 상태를 직접 관찰하는 정밀 검사입니다. 수면 내시경을 통해 환자의 불편감을 최소화하면서도 정확한 진단이 가능하며, 조직 검사와 헬리코박터균 검사를 동시에 시행할 수 있습니다.",
    symptoms: [
      "만 40세 이상 정기 검진 대상",
      "지속적인 소화불량 또는 상복부 통증",
      "체중 감소, 식욕 저하",
      "위암 가족력이 있는 경우",
    ],
  },
  {
    name: "용종절제술",
    description:
      "대장내시경 검사 중 발견되는 용종(폴립)을 내시경을 통해 즉시 제거하는 시술입니다. 대장 용종은 대장암의 전구 병변으로, 조기 발견 및 절제를 통해 대장암 발생을 효과적으로 예방할 수 있습니다. 시술 후 조직 검사를 통해 악성 여부를 확인합니다.",
    symptoms: [
      "대장내시경 검사 중 용종 발견 시",
      "이전 용종 절제 이력이 있는 경우",
      "대장암 가족력",
      "혈변 또는 대변 잠혈 양성",
    ],
  },
];

export default function SowhagiPage() {
  return (
    <>
      <PageHeader
        title="소화기센터"
        subtitle="위장관 질환의 정확한 진단과 체계적인 치료를 제공합니다."
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Center overview */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                센터 소개
              </h2>
              <p className="text-gray-600 leading-relaxed">
                김정재탑내과의원 소화기센터는 위, 식도, 대장 등 소화기 전반에
                걸친 질환을 전문적으로 진료합니다. 최신 내시경 장비를 갖추고
                수면 내시경을 통한 편안한 검사 환경을 제공하며, 검사 당일 용종이
                발견될 경우 즉시 절제가 가능합니다. 풍부한 임상 경험을 바탕으로
                환자 개개인에게 최적화된 치료 계획을 수립하여 소화기 건강을
                지켜드립니다.
              </p>
            </div>
          </ScrollReveal>

          {/* Conditions */}
          <div className="space-y-10">
            {conditions.map((condition, index) => (
              <ScrollReveal key={condition.name} delay={index * 80}>
                <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block"></span>
                    {condition.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {condition.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900 mb-2">
                      주요 증상 및 적응증
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {condition.symptoms.map((symptom) => (
                        <li
                          key={symptom}
                          className="flex items-center gap-2 text-gray-500 text-sm"
                        >
                          <svg
                            className="w-4 h-4 text-sky-500 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Testing section */}
          <ScrollReveal delay={200}>
            <div className="mt-16 bg-navy-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                검사 안내
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                본원에서는 최신 고화질 내시경 장비를 사용하여 위내시경 및
                대장내시경 검사를 시행합니다. 수면 내시경을 통해 검사 중
                불편감을 최소화하며, 숙련된 전문의가 직접 검사를 진행합니다.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-semibold text-navy-900 mb-2">
                    위내시경
                  </h4>
                  <p className="text-gray-500 text-sm">
                    검사 전날 밤 10시 이후 금식이 필요합니다. 수면 내시경 시
                    당일 운전이 불가하므로 보호자 동반을 권장합니다. 검사 시간은
                    약 5~10분 소요됩니다.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-semibold text-navy-900 mb-2">
                    대장내시경
                  </h4>
                  <p className="text-gray-500 text-sm">
                    검사 3일 전부터 씨 있는 과일, 해조류 등을 피하고, 전날
                    장정결제를 복용합니다. 검사 시간은 약 15~30분이며, 용종
                    발견 시 즉시 절제가 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
