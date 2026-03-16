"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

const conditions = [
  {
    name: "알레르기 비염",
    description:
      "먼지, 꽃가루, 동물 털 등 특정 알레르겐에 대한 면역 과민 반응으로 코 점막에 염증이 발생하는 질환입니다. 계절성과 통년성으로 나뉘며, 만성화되면 부비동염, 중이염, 수면 장애 등 합병증을 유발할 수 있습니다. 원인 알레르겐을 파악하고 회피하는 것이 치료의 첫걸음입니다.",
    symptoms: [
      "연속적인 재채기",
      "맑은 콧물, 코막힘",
      "코 및 눈 주위 가려움",
      "후비루(목 뒤로 넘어가는 콧물)",
    ],
  },
  {
    name: "두드러기",
    description:
      "피부에 갑작스럽게 붉고 부풀어 오른 팽진(발진)이 나타나는 알레르기 반응입니다. 음식, 약물, 감염, 스트레스, 물리적 자극 등 다양한 원인에 의해 발생하며, 6주 이상 지속되면 만성 두드러기로 분류됩니다. 심한 경우 혈관부종이나 아나필락시스로 진행할 수 있어 주의가 필요합니다.",
    symptoms: [
      "피부 발적 및 팽진(부풀어 오름)",
      "심한 가려움증",
      "팽진의 위치가 수시로 변함",
      "입술, 눈꺼풀 부종(혈관부종)",
    ],
  },
  {
    name: "아토피 피부염",
    description:
      "유전적 소인과 환경적 요인이 복합적으로 작용하여 발생하는 만성 재발성 피부 질환입니다. 피부 장벽 기능의 이상으로 수분 손실이 증가하고 외부 자극에 취약해지며, 심한 가려움증과 건조함이 특징입니다. 적절한 보습 관리와 악화 요인 회피가 치료의 기본이 됩니다.",
    symptoms: [
      "심한 가려움증(특히 야간)",
      "피부 건조, 거칠어짐",
      "붉은 발진, 진물, 딱지",
      "피부 주름이 깊어지고 두꺼워짐",
    ],
  },
  {
    name: "식품 알레르기",
    description:
      "특정 음식물의 단백질에 대해 면역 시스템이 과민하게 반응하여 발생하는 질환입니다. 우유, 달걀, 밀, 땅콩, 갑각류 등이 흔한 원인 식품이며, 경미한 피부 반응부터 호흡곤란, 아나필락시스까지 다양한 증상이 나타날 수 있습니다. 정확한 원인 식품 파악과 철저한 회피가 가장 중요한 관리 방법입니다.",
    symptoms: [
      "섭취 후 피부 발진, 두드러기",
      "입술, 혀, 인후 부종",
      "복통, 구토, 설사",
      "심한 경우 호흡곤란, 혈압 저하",
    ],
  },
  {
    name: "알레르기 검사",
    description:
      "알레르기 질환의 원인이 되는 특정 알레르겐을 규명하기 위한 검사입니다. 혈액검사(특이 IgE 항체 검사)를 통해 수십 가지 알레르겐에 대한 감작 여부를 한 번에 확인할 수 있으며, 검사 결과를 바탕으로 맞춤형 회피 전략과 치료 계획을 수립합니다.",
    symptoms: [
      "원인 불명의 반복적 알레르기 증상",
      "특정 음식 섭취 후 이상 반응",
      "계절에 따른 비염, 결막염 증상",
      "알레르기 가족력이 있는 경우",
    ],
  },
];

export default function AllergyPage() {
  return (
    <>
      <PageHeader
        title="알레르기센터"
        subtitle="알레르기 질환의 정확한 원인 분석과 맞춤 치료를 제공합니다."
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
                김정재탑내과의원 알레르기센터는 알레르기 비염, 두드러기, 아토피
                피부염, 식품 알레르기 등 다양한 알레르기 질환을 전문적으로
                진료합니다. 혈액검사 기반의 정밀 알레르기 검사를 통해 원인
                알레르겐을 정확히 파악하고, 환자 개인별 맞춤 치료 및 생활 관리
                방법을 안내합니다. 재발 방지와 삶의 질 향상을 목표로 체계적인
                관리 프로그램을 운영하고 있습니다.
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
                알레르기 원인을 정확히 파악하기 위해 혈액 기반 정밀 검사를
                시행합니다. 검사 결과에 따라 맞춤형 회피 요법 및 치료 계획을
                수립합니다.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-semibold text-navy-900 mb-2">
                    MAST 알레르기 검사
                  </h4>
                  <p className="text-gray-500 text-sm">
                    소량의 혈액 채취만으로 음식, 흡입 항원 등 수십 가지
                    알레르겐에 대한 특이 IgE 항체를 동시에 측정합니다. 항히스타민제
                    복용 중에도 검사가 가능하며, 결과는 약 5~7일 후 확인할 수
                    있습니다.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-semibold text-navy-900 mb-2">
                    총 IgE 검사
                  </h4>
                  <p className="text-gray-500 text-sm">
                    혈중 총 면역글로불린 E(IgE) 수치를 측정하여 알레르기 체질
                    여부를 평가합니다. 아토피 피부염, 알레르기 비염, 천식 등의
                    진단 보조 자료로 활용되며, 치료 경과 모니터링에도 유용합니다.
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
