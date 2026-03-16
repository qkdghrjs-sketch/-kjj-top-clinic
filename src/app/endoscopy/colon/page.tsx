"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function ColonEndoscopyPage() {
  return (
    <>
      <PageHeader
        title="대장내시경"
        subtitle="대장 질환의 조기 발견과 예방을 위한 정밀 검사"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 대장내시경이란 */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                대장내시경이란?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                대장내시경은 항문을 통해 내시경을 삽입하여 직장에서 맹장까지 대장
                전체의 내부를 직접 관찰하는 검사입니다. 대장 점막의 이상 유무를
                정밀하게 확인할 수 있으며, 용종이 발견될 경우 검사 중 바로
                절제하여 대장암을 예방할 수 있습니다. 국가암검진 프로그램에서
                만 50세 이상 성인에게 정기적으로 권고하는 필수 검사입니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 정기 검진의 중요성 */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                정기 검진이 중요한 이유
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                대장암은 한국인에게 발생률이 높은 암 중 하나이지만, 조기에
                발견하면 완치율이 매우 높습니다. 대부분의 대장암은 용종에서
                시작되며, 용종이 암으로 진행되기까지 평균 5~10년이 걸립니다.
                정기적인 대장내시경 검사를 통해 용종 단계에서 제거하면 대장암을
                효과적으로 예방할 수 있습니다.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "만 50세 이상은 5년마다 정기 검사 권장",
                  "가족력이 있는 경우 40세부터 검사 권장",
                  "용종 제거 이력이 있으면 1~3년 후 추적 검사",
                  "염증성 장질환 환자는 주기적 감시 검사 필요",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3">
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
                    <span className="text-gray-600 text-sm">{item}</span>
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
                    title: "장정결 준비",
                    desc: "검사 전날부터 지정된 장정결제를 복용하여 대장 내부를 깨끗이 비웁니다. 깨끗한 장정결이 정확한 검사의 핵심입니다.",
                  },
                  {
                    step: "02",
                    title: "내시경 검사",
                    desc: "항문을 통해 내시경을 삽입하여 대장 전체를 관찰합니다. 용종이 발견되면 즉시 절제합니다. 검사 시간은 약 15~30분입니다.",
                  },
                  {
                    step: "03",
                    title: "결과 상담",
                    desc: "회복 후 검사 결과를 바로 설명드립니다. 조직 검사를 시행한 경우 약 1주일 후 결과를 확인합니다.",
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
                대장내시경으로 진단 가능한 질환
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "대장 용종",
                    desc: "선종성 용종은 대장암의 전단계로, 발견 즉시 제거하여 암 발생을 예방합니다.",
                  },
                  {
                    name: "대장암 (조기/진행성)",
                    desc: "조기 대장암은 내시경 절제만으로 완치가 가능하며, 생존율이 90% 이상입니다.",
                  },
                  {
                    name: "염증성 장질환",
                    desc: "크론병, 궤양성 대장염 등 만성 염증성 장질환을 진단하고 경과를 관찰합니다.",
                  },
                  {
                    name: "대장 게실",
                    desc: "대장벽이 주머니처럼 돌출된 게실을 확인하고, 게실염 위험을 평가합니다.",
                  },
                  {
                    name: "치질 / 치루",
                    desc: "항문 주위 질환의 정도와 범위를 정확히 파악합니다.",
                  },
                  {
                    name: "장결핵",
                    desc: "결핵균에 의한 장 감염을 감별 진단합니다.",
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

          {/* 검사 전 준비 가이드 */}
          <ScrollReveal delay={400}>
            <div className="bg-navy-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                검사 전 준비 가이드
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "검사 3일 전",
                    desc: "씨앗류(참외, 포도, 키위, 토마토 등), 잡곡밥, 김, 미역 등 섬유질이 많은 음식을 피합니다. 흰쌀밥, 두부, 계란 등 소화가 잘 되는 음식을 드세요.",
                  },
                  {
                    title: "검사 전날",
                    desc: "아침, 점심은 죽 또는 미음으로 가볍게 식사합니다. 저녁 6시 이후부터 금식하며, 처방된 장정결제 1차분을 복용합니다.",
                  },
                  {
                    title: "검사 당일 새벽",
                    desc: "장정결제 2차분을 지정된 시간에 복용합니다. 대변이 맑은 물처럼 나올 때까지 충분히 배출합니다.",
                  },
                  {
                    title: "복용 약물",
                    desc: "아스피린, 항응고제 등 혈액응고 관련 약물은 검사 5~7일 전부터 중단합니다(담당 의사 상의 필수). 당뇨약, 인슐린은 검사 당일 중단합니다.",
                  },
                  {
                    title: "기타 안내",
                    desc: "수면내시경 시 보호자 동반이 필요하며, 당일 운전은 불가합니다. 검사 후 1~2시간 안정 후 귀가하시며, 당일 무거운 음식은 피해주세요.",
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
