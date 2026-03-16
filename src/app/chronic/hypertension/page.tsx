"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function HypertensionPage() {
  return (
    <>
      <PageHeader
        title="고혈압"
        subtitle="체계적인 혈압 관리로 합병증을 예방합니다"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 고혈압이란 */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                고혈압이란?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                고혈압은 혈관 내 혈액의 압력이 지속적으로 높은 상태를 말합니다.
                수축기 혈압 140mmHg 이상 또는 이완기 혈압 90mmHg 이상인 경우
                고혈압으로 진단합니다. 우리나라 성인 약 30%가 고혈압을 앓고 있으며,
                &apos;침묵의 살인자&apos;라 불릴 만큼 특별한 증상 없이 진행되어
                심각한 합병증을 유발할 수 있습니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 원인 */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                고혈압의 원인
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                고혈압은 원인에 따라 본태성(일차성) 고혈압과 이차성 고혈압으로
                나뉩니다. 전체 고혈압 환자의 약 90~95%는 본태성 고혈압으로,
                명확한 원인 없이 여러 요인이 복합적으로 작용하여 발생합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">
                    유전적 요인
                  </h3>
                  <p className="text-gray-600 text-sm">
                    가족력이 있는 경우 고혈압 발생 위험이 2배 이상 증가합니다.
                  </p>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">
                    생활습관 요인
                  </h3>
                  <p className="text-gray-600 text-sm">
                    과도한 나트륨 섭취, 비만, 운동 부족, 흡연, 과음, 스트레스 등이
                    주요 원인입니다.
                  </p>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">
                    연령 및 성별
                  </h3>
                  <p className="text-gray-600 text-sm">
                    나이가 들수록 혈관 탄력이 감소하여 혈압이 상승하며, 남성은 여성보다
                    일찍 발병하는 경향이 있습니다.
                  </p>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">
                    이차성 원인
                  </h3>
                  <p className="text-gray-600 text-sm">
                    신장 질환, 부신 종양, 갑상선 질환, 수면무호흡증 등 특정 질환이
                    원인이 되기도 합니다.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 증상 */}
          <ScrollReveal delay={200}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                주요 증상
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                고혈압은 대부분 자각 증상이 없어 정기 검진을 통해 발견되는 경우가
                많습니다. 그러나 혈압이 크게 상승하면 다음과 같은 증상이 나타날 수
                있습니다.
              </p>
              <div className="bg-navy-50 rounded-2xl p-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">두통 (특히 뒷머리 부분의 아침 두통)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">어지러움, 이명</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">가슴 두근거림, 호흡곤란</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">코피, 시력 변화</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">피로감, 집중력 저하</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* 합병증 */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                고혈압 합병증
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                고혈압을 장기간 방치하면 혈관과 주요 장기에 심각한 손상을 초래할 수
                있습니다. 조기 발견과 지속적인 관리가 중요합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-navy-50 rounded-2xl p-6 text-center">
                  <div className="text-sky-500 text-3xl mb-3">🧠</div>
                  <h3 className="font-semibold text-navy-900 mb-2">뇌혈관 질환</h3>
                  <p className="text-gray-600 text-sm">
                    뇌졸중(뇌출혈, 뇌경색), 혈관성 치매
                  </p>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6 text-center">
                  <div className="text-sky-500 text-3xl mb-3">❤️</div>
                  <h3 className="font-semibold text-navy-900 mb-2">심장 질환</h3>
                  <p className="text-gray-600 text-sm">
                    심근경색, 심부전, 협심증, 심비대
                  </p>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6 text-center">
                  <div className="text-sky-500 text-3xl mb-3">🫘</div>
                  <h3 className="font-semibold text-navy-900 mb-2">신장 질환</h3>
                  <p className="text-gray-600 text-sm">
                    만성 신부전, 신경화증, 단백뇨
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 진단 기준 */}
          <ScrollReveal delay={400}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                혈압 진단 기준
              </h2>
              <div className="bg-navy-50 rounded-2xl p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-navy-200">
                        <th className="text-left py-3 text-navy-900 font-semibold">분류</th>
                        <th className="text-center py-3 text-navy-900 font-semibold">수축기 혈압 (mmHg)</th>
                        <th className="text-center py-3 text-navy-900 font-semibold">이완기 혈압 (mmHg)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-navy-100">
                        <td className="py-3">정상</td>
                        <td className="text-center py-3">&lt; 120</td>
                        <td className="text-center py-3">&lt; 80</td>
                      </tr>
                      <tr className="border-b border-navy-100">
                        <td className="py-3">주의 혈압</td>
                        <td className="text-center py-3">120 ~ 129</td>
                        <td className="text-center py-3">&lt; 80</td>
                      </tr>
                      <tr className="border-b border-navy-100">
                        <td className="py-3">고혈압 전단계</td>
                        <td className="text-center py-3">130 ~ 139</td>
                        <td className="text-center py-3">80 ~ 89</td>
                      </tr>
                      <tr className="border-b border-navy-100">
                        <td className="py-3 font-medium text-navy-900">고혈압 1기</td>
                        <td className="text-center py-3">140 ~ 159</td>
                        <td className="text-center py-3">90 ~ 99</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-navy-900">고혈압 2기</td>
                        <td className="text-center py-3">≥ 160</td>
                        <td className="text-center py-3">≥ 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 치료 방법 */}
          <ScrollReveal delay={500}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                치료 방법
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                고혈압 치료는 생활습관 개선과 약물 치료를 병행하여 목표 혈압을
                유지하는 것이 핵심입니다. 김정재탑내과의원에서는 환자 개개인의 위험
                인자와 동반 질환을 종합적으로 고려하여 맞춤형 치료 계획을
                수립합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    생활습관 개선
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      저염식 식이 (하루 나트륨 2,000mg 이하)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      적정 체중 유지 (BMI 25 미만)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      규칙적인 유산소 운동 (주 5회, 30분 이상)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      금연 및 절주
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      스트레스 관리
                    </li>
                  </ul>
                </div>
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    약물 치료
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      ACE 억제제 / ARB (안지오텐신 수용체 차단제)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      칼슘 채널 차단제
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      이뇨제
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      베타 차단제
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      환자 상태에 따른 복합 제제 처방
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 관리 팁 */}
          <ScrollReveal delay={600}>
            <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                고혈압 관리 수칙
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span>매일 같은 시간에 가정에서 혈압을 측정하고 기록하세요.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span>처방된 약은 임의로 중단하지 마세요.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span>정기적으로 병원을 방문하여 혈압 및 합병증 검사를 받으세요.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span>채소, 과일, 통곡물 위주의 균형 잡힌 식단을 유지하세요.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
