"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

const conditions = [
  {
    name: "급성 편도염",
    description:
      "편도에 세균 또는 바이러스 감염으로 급성 염증이 발생하는 질환입니다. 특히 A군 연쇄상구균 감염에 의한 편도염은 류마티스열, 사구체신염 등 합병증을 유발할 수 있어 적절한 항생제 치료가 중요합니다. 연간 여러 차례 재발하는 경우 편도절제술을 고려할 수 있습니다.",
    symptoms: [
      "심한 인후통(목 통증)",
      "고열(38.5도 이상), 오한",
      "삼킴 곤란, 침 삼킬 때 통증",
      "편도 발적, 부종, 하얀 삼출물",
    ],
  },
  {
    name: "중이염",
    description:
      "중이(고막 안쪽 공간)에 세균 또는 바이러스 감염으로 염증이 발생하는 질환입니다. 소아에서 특히 흔하지만 성인에서도 발생하며, 감기 후 이관 기능 장애로 인해 유발되는 경우가 많습니다. 적절한 치료 없이 방치하면 만성 중이염이나 청력 저하로 이어질 수 있습니다.",
    symptoms: [
      "귀 통증(이통)",
      "청력 저하, 귀 먹먹함",
      "귀에서 분비물 흘러나옴",
      "발열, 전신 피로감",
    ],
  },
  {
    name: "비염",
    description:
      "코 점막의 만성 염증으로 인해 코막힘, 콧물, 재채기 등이 지속적으로 나타나는 질환입니다. 알레르기성 비염, 비알레르기성 비염, 혈관운동성 비염 등 다양한 유형이 있으며, 비중격만곡증이 동반된 경우 증상이 더욱 심해질 수 있습니다. 원인에 따른 정확한 분류와 맞춤 치료가 필요합니다.",
    symptoms: [
      "만성적인 코막힘(한쪽 또는 양쪽)",
      "지속적인 콧물(맑은 콧물 또는 누런 콧물)",
      "후비루, 목 뒤 이물감",
      "두통, 안면부 압박감",
    ],
  },
  {
    name: "인후염",
    description:
      "인두(목구멍)와 후두(성대 부위)에 염증이 발생하는 질환으로, 바이러스 감염이 가장 흔한 원인입니다. 과도한 음성 사용, 건조한 환경, 위산 역류 등도 원인이 될 수 있으며, 쉰 목소리가 2주 이상 지속되면 후두 질환에 대한 정밀 검사가 필요합니다.",
    symptoms: [
      "목 통증, 이물감",
      "쉰 목소리(애성)",
      "마른기침, 가래",
      "삼킴 시 통증, 발열",
    ],
  },
  {
    name: "어지럼증",
    description:
      "전정기관(내이)의 이상으로 발생하는 어지럼증은 이비인후과 영역에서 중요한 질환 중 하나입니다. 이석증(양성 돌발성 체위성 현훈)이 가장 흔한 원인이며, 메니에르병, 전정신경염 등도 원인이 됩니다. 정확한 원인 감별을 위해 체위 변환 검사, 안진 검사 등 전문적인 평가가 필요합니다.",
    symptoms: [
      "빙글빙글 도는 느낌(회전성 현훈)",
      "자세 변환 시 악화되는 어지럼",
      "오심, 구토 동반",
      "이명(귀울림), 청력 저하",
    ],
  },
];

export default function EntPage() {
  return (
    <>
      <PageHeader
        title="이비인후과"
        subtitle="귀, 코, 목 질환의 전문적인 진단과 치료를 제공합니다."
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
                김정재탑내과의원 이비인후과는 귀, 코, 목에 관련된 다양한 질환을
                전문적으로 진료합니다. 급성 편도염, 중이염, 비염 등 흔한
                이비인후과 질환부터 어지럼증, 이명 등 전정기관 관련 질환까지
                폭넓은 진료 영역을 갖추고 있습니다. 내시경 및 청력 검사 장비를
                활용한 정밀 진단을 바탕으로 환자 맞춤형 치료를 시행합니다.
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
                이비인후과 질환의 정확한 진단을 위해 내시경 검사, 청력 검사,
                전정기능 검사 등을 시행합니다. 비침습적 검사를 우선 시행하며,
                결과에 따라 추가 검사를 안내합니다.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-semibold text-navy-900 mb-2">
                    비인두 내시경
                  </h4>
                  <p className="text-gray-500 text-sm">
                    가느다란 내시경을 코를 통해 삽입하여 비강, 인두, 후두의
                    상태를 직접 관찰합니다. 비염, 부비동염, 인후두 질환의 진단에
                    활용되며, 국소 마취 후 약 3~5분 내에 시행됩니다.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-semibold text-navy-900 mb-2">
                    청력 검사 및 전정기능 검사
                  </h4>
                  <p className="text-gray-500 text-sm">
                    순음청력검사를 통해 주파수별 청력 역치를 측정하고,
                    어지럼증 환자에게는 체위 변환 검사(Dix-Hallpike 검사) 등을
                    시행하여 이석증 및 전정기관 이상 여부를 확인합니다.
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
