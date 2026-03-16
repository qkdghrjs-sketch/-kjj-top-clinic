"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

const conditions = [
  {
    name: "기관지염",
    description:
      "기관지 점막에 염증이 생기는 질환으로, 급성 기관지염은 바이러스 감염에 의해 주로 발생하며, 만성 기관지염은 흡연이나 대기오염 등 지속적인 자극에 의해 유발됩니다. 기침이 3주 이상 지속되면 만성 기관지염을 의심할 수 있으며, 적절한 치료 없이 방치하면 폐 기능 저하로 이어질 수 있습니다.",
    symptoms: [
      "가래를 동반한 기침",
      "목 통증, 인후 불편감",
      "미열 또는 발열",
      "흉부 불편감, 숨쉴 때 쌕쌕거림",
    ],
  },
  {
    name: "폐렴",
    description:
      "폐 실질 조직에 세균, 바이러스, 진균 등의 감염으로 염증이 발생하는 질환입니다. 고열, 기침, 호흡곤란 등의 증상이 나타나며, 특히 면역력이 저하된 고령자나 만성 질환자에게 심각한 합병증을 유발할 수 있습니다. 조기 진단과 적절한 항생제 치료가 중요합니다.",
    symptoms: [
      "고열(38도 이상) 및 오한",
      "누런 가래를 동반한 기침",
      "호흡곤란, 빠른 호흡",
      "흉통(특히 숨을 깊이 들이쉴 때)",
    ],
  },
  {
    name: "천식",
    description:
      "기도의 만성 염증으로 인해 기도가 좁아지고, 과민하게 반응하여 반복적인 기침, 쌕쌕거림, 호흡곤란이 나타나는 질환입니다. 알레르겐, 운동, 찬 공기, 스트레스 등 다양한 요인에 의해 발작이 유발될 수 있으며, 적절한 약물 치료와 환경 관리를 통해 증상을 효과적으로 조절할 수 있습니다.",
    symptoms: [
      "반복적인 쌕쌕거림(천명음)",
      "야간이나 새벽에 악화되는 기침",
      "운동 시 호흡곤란",
      "가슴 답답함, 흉부 압박감",
    ],
  },
  {
    name: "COPD (만성폐쇄성폐질환)",
    description:
      "기도와 폐 실질의 만성적인 염증으로 기류 제한이 비가역적으로 진행되는 질환입니다. 장기간의 흡연이 가장 큰 원인이며, 직업적 분진 노출이나 대기오염도 위험 인자입니다. 완치는 어렵지만 금연, 약물 치료, 호흡 재활을 통해 증상 악화를 늦추고 삶의 질을 개선할 수 있습니다.",
    symptoms: [
      "만성적인 기침과 가래",
      "점차 악화되는 호흡곤란",
      "일상 활동 시 숨참",
      "체중 감소 및 전신 쇠약감",
    ],
  },
  {
    name: "흉부 X-ray 검사",
    description:
      "흉부 엑스레이는 폐, 심장, 기관지, 늑골 등 흉부 구조물의 이상을 확인하는 기본 영상 검사입니다. 폐렴, 결핵, 기흉, 흉수, 폐종양 등 다양한 호흡기 질환의 1차 진단에 활용되며, 비침습적이고 신속하게 결과를 확인할 수 있습니다.",
    symptoms: [
      "2주 이상 지속되는 기침",
      "객혈(피가 섞인 가래)",
      "원인 불명의 흉통",
      "건강검진 목적의 정기 촬영",
    ],
  },
];

export default function HoheupgiPage() {
  return (
    <>
      <PageHeader
        title="호흡기센터"
        subtitle="기관지와 폐 건강을 위한 정밀 진단과 맞춤 치료를 제공합니다."
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
                김정재탑내과의원 호흡기센터는 기관지염, 폐렴, 천식, COPD 등
                호흡기 전반의 질환을 전문적으로 진료합니다. 흉부 X-ray,
                폐기능검사 등 다양한 진단 장비를 갖추고 있으며, 급성 호흡기
                감염부터 만성 호흡기 질환의 장기 관리까지 환자 개개인의 상태에
                맞는 최적의 치료를 제공합니다. 미세먼지, 알레르기 등
                환경적 요인에 의한 호흡기 질환 예방에도 적극적으로 대응하고
                있습니다.
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
                호흡기 질환의 정확한 진단을 위해 다양한 영상 및 기능 검사를
                시행합니다. 검사 결과를 바탕으로 전문의가 맞춤 치료 계획을
                수립합니다.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-semibold text-navy-900 mb-2">
                    흉부 X-ray
                  </h4>
                  <p className="text-gray-500 text-sm">
                    폐와 기관지의 이상 유무를 확인하는 기본 영상 검사입니다.
                    촬영 시간은 약 1~2분으로 매우 짧으며, 특별한 준비 사항 없이
                    바로 시행할 수 있습니다. 폐렴, 결핵, 기흉 등의 진단에
                    활용됩니다.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-semibold text-navy-900 mb-2">
                    폐기능검사(PFT)
                  </h4>
                  <p className="text-gray-500 text-sm">
                    마우스피스를 물고 호흡하여 폐활량, 기류 속도 등을 측정하는
                    검사입니다. 천식, COPD 등 폐쇄성 폐질환의 진단 및 중증도
                    평가에 필수적이며, 약 15~20분 소요됩니다.
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
