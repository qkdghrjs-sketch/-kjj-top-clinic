"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function StomachEndoscopyPage() {
  return (
    <>
      <PageHeader
        title="위내시경"
        subtitle="정확한 진단을 위한 정밀 위내시경 검사"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 위내시경이란 */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                위내시경이란?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                위내시경(상부위장관 내시경)은 입을 통해 가느다란 카메라가 장착된
                내시경을 삽입하여 식도, 위, 십이지장의 내부를 직접 관찰하는
                검사입니다. 육안으로 점막 상태를 확인할 수 있어 위염, 위궤양,
                위암 등 다양한 상부 소화기 질환을 조기에 발견하고 정확하게
                진단할 수 있습니다. 필요한 경우 조직 검사(생검)를 동시에
                시행하여 보다 정밀한 진단이 가능합니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 검사가 필요한 경우 */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                이런 증상이 있다면 검사가 필요합니다
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "속쓰림, 위산 역류가 자주 발생할 때",
                  "식후 상복부 통증이나 불쾌감이 반복될 때",
                  "원인 모를 소화불량이 2주 이상 지속될 때",
                  "구역, 구토 증상이 반복될 때",
                  "음식물을 삼키기 어려운 증상이 있을 때",
                  "체중이 급격히 감소할 때",
                  "흑색변(검은 대변)이 나올 때",
                  "만 40세 이상으로 2년 이내 검사 이력이 없을 때",
                ].map((symptom) => (
                  <div
                    key={symptom}
                    className="flex items-start gap-3 p-3 rounded-lg"
                  >
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-sky-600"
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
                    <span className="text-gray-600 text-sm">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 검사 과정 */}
          <ScrollReveal delay={200}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                검사 과정
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    step: "01",
                    title: "준비",
                    desc: "검사 전 목 부위에 국소마취 스프레이를 뿌려 불편감을 줄입니다. 수면내시경의 경우 정맥주사를 통해 진정제를 투여합니다.",
                  },
                  {
                    step: "02",
                    title: "검사",
                    desc: "내시경을 삽입하여 식도, 위, 십이지장 순서로 점막 상태를 꼼꼼히 관찰합니다. 이상 소견이 있으면 조직 검사를 시행합니다. 검사 시간은 약 5~10분입니다.",
                  },
                  {
                    step: "03",
                    title: "회복",
                    desc: "검사 후 회복실에서 충분히 휴식합니다. 수면내시경의 경우 30분~1시간 정도 안정을 취한 후 결과를 상담합니다.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="text-center p-6 bg-gray-50 rounded-2xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 진단 가능한 질환 */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                위내시경으로 진단 가능한 질환
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "위염 (급성/만성)",
                    desc: "위 점막의 염증 상태를 직접 확인하고 원인에 따른 치료 방향을 결정합니다.",
                  },
                  {
                    name: "위궤양 / 십이지장궤양",
                    desc: "점막이 깊이 파인 궤양을 발견하고 악성 여부를 감별합니다.",
                  },
                  {
                    name: "위암 (조기/진행성)",
                    desc: "조기 위암을 발견하면 내시경 치료만으로 완치가 가능합니다.",
                  },
                  {
                    name: "역류성 식도염",
                    desc: "위산 역류로 인한 식도 점막 손상 정도를 평가합니다.",
                  },
                  {
                    name: "식도암",
                    desc: "식도 점막의 이상 소견을 조기에 발견합니다.",
                  },
                  {
                    name: "헬리코박터 감염",
                    desc: "조직 검사를 통해 헬리코박터균 감염 여부를 확인합니다.",
                  },
                ].map((disease) => (
                  <div
                    key={disease.name}
                    className="p-4 border border-gray-100 rounded-xl"
                  >
                    <h4 className="font-semibold text-navy-900 mb-1">
                      {disease.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{disease.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 검사 전 준비사항 체크리스트 */}
          <ScrollReveal delay={400}>
            <div className="bg-navy-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                검사 전 준비사항 체크리스트
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "금식",
                    desc: "검사 전날 저녁 9시 이후부터 금식합니다. 물, 껌, 사탕 등도 섭취하지 마세요.",
                  },
                  {
                    title: "복용 중인 약",
                    desc: "혈압약은 검사 당일 아침 소량의 물과 함께 복용 가능합니다. 혈액응고 관련 약물(아스피린, 와파린 등)은 담당 의사와 상의 후 중단 여부를 결정하세요.",
                  },
                  {
                    title: "당뇨약 / 인슐린",
                    desc: "검사 당일 아침 당뇨약 복용 및 인슐린 주사는 중단합니다. 저혈당에 주의하세요.",
                  },
                  {
                    title: "수면내시경 시",
                    desc: "수면내시경을 받으시는 경우 검사 후 운전이 불가하므로 보호자 동반 또는 대중교통 이용을 권장합니다.",
                  },
                  {
                    title: "편한 복장",
                    desc: "검사 당일은 편안한 복장으로 내원해 주세요. 귀중품은 최소한으로 지참하시기 바랍니다.",
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
