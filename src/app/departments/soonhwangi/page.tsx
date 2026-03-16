"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

const conditions = [
  {
    name: "고혈압",
    description:
      "혈압이 지속적으로 정상 범위(수축기 140mmHg / 이완기 90mmHg)를 초과하는 상태로, 심혈관 질환의 가장 중요한 위험 인자입니다. 대부분 뚜렷한 증상 없이 진행되어 '침묵의 살인자'로 불리며, 뇌졸중, 심근경색, 신부전 등 치명적인 합병증을 유발할 수 있습니다.",
    symptoms: [
      "두통 및 어지럼증",
      "뒷목 당김, 뻣뻣함",
      "코피, 안면 홍조",
      "가슴 두근거림",
    ],
  },
  {
    name: "부정맥",
    description:
      "심장의 전기 전도 시스템에 이상이 생겨 심장 박동이 너무 빠르거나, 느리거나, 불규칙해지는 질환입니다. 심방세동, 심실빈맥 등 다양한 유형이 있으며, 일부는 무증상으로 지나가지만 심한 경우 실신이나 심정지를 유발할 수 있어 정확한 진단과 관리가 필수적입니다.",
    symptoms: [
      "심장이 빨리 뛰는 느낌(심계항진)",
      "가슴 두근거림, 불규칙한 맥박",
      "어지럼증 또는 실신",
      "호흡곤란, 피로감",
    ],
  },
  {
    name: "심부전",
    description:
      "심장의 펌프 기능이 저하되어 신체 조직에 필요한 혈액을 충분히 공급하지 못하는 상태입니다. 고혈압, 관상동맥 질환, 심장 판막 질환 등이 원인이 될 수 있으며, 조기에 발견하여 적극적으로 관리하면 증상 개선과 생존율 향상이 가능합니다.",
    symptoms: [
      "운동 시 호흡곤란",
      "하지 부종(발·발목 붓기)",
      "야간 기침, 누우면 악화되는 호흡곤란",
      "피로감 및 운동 능력 저하",
    ],
  },
  {
    name: "협심증",
    description:
      "관상동맥이 좁아져 심장 근육으로의 혈류가 감소하면서 발생하는 흉통을 특징으로 하는 질환입니다. 운동이나 스트레스 시 증상이 나타나는 안정형 협심증과, 안정 시에도 발생하는 불안정형 협심증으로 나뉘며, 불안정형의 경우 심근경색으로 진행할 위험이 높습니다.",
    symptoms: [
      "가슴 중앙부 압박감, 조이는 느낌",
      "왼쪽 어깨·팔·턱으로 방사되는 통증",
      "운동 또는 스트레스 시 악화",
      "식은땀, 구역감 동반",
    ],
  },
  {
    name: "심전도 검사",
    description:
      "심장의 전기적 활동을 기록하여 부정맥, 심근허혈, 심장 비대 등 다양한 심장 질환을 진단하는 기본 검사입니다. 비침습적이고 통증이 없으며 짧은 시간 내에 시행할 수 있어 심장 건강 상태를 파악하는 1차 선별 검사로 널리 활용됩니다.",
    symptoms: [
      "가슴 통증이나 두근거림이 있는 경우",
      "어지럼증 또는 실신 경험",
      "고혈압, 당뇨 등 심혈관 위험 인자 보유 시",
      "건강검진 목적의 정기 검사",
    ],
  },
];

export default function SoonhwangiPage() {
  return (
    <>
      <PageHeader
        title="순환기센터"
        subtitle="심장과 혈관 건강을 위한 전문적인 진단과 치료를 제공합니다."
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
                김정재탑내과의원 순환기센터는 고혈압, 부정맥, 협심증, 심부전 등
                심혈관 질환을 전문적으로 진료합니다. 심전도, 24시간 활동
                혈압검사, 심장 초음파 등 다양한 검사 장비를 갖추고 있으며,
                심혈관 질환의 조기 발견과 체계적인 관리를 통해 심각한 합병증을
                예방하고 환자의 삶의 질을 향상시키는 데 최선을 다하고 있습니다.
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
                본원 순환기센터에서는 심장 및 혈관 질환의 정확한 진단을 위해
                다양한 검사를 시행합니다. 전문의 상담 후 환자 상태에 적합한
                검사를 선택하여 진행합니다.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-semibold text-navy-900 mb-2">
                    심전도(ECG) 검사
                  </h4>
                  <p className="text-gray-500 text-sm">
                    가슴과 사지에 전극을 부착하여 심장의 전기적 활동을 기록합니다.
                    부정맥, 심근허혈, 심장 비대 등을 진단할 수 있으며, 약 5분 내에
                    간편하게 시행됩니다.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-semibold text-navy-900 mb-2">
                    24시간 활동 혈압검사
                  </h4>
                  <p className="text-gray-500 text-sm">
                    24시간 동안 자동으로 혈압을 측정하는 휴대용 장비를 착용합니다.
                    백의 고혈압과 가면 고혈압을 감별하고, 하루 중 혈압 변동
                    패턴을 정밀하게 파악할 수 있습니다.
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
