"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function DiabetesPage() {
  return (
    <>
      <PageHeader
        title="당뇨"
        subtitle="혈당 관리의 시작, 정확한 진단과 맞춤 치료"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 당뇨란 */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                당뇨병이란?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                당뇨병은 인슐린의 분비 또는 작용에 이상이 생겨 혈액 속 포도당(혈당)이
                비정상적으로 높아지는 대사 질환입니다. 장기간 높은 혈당이 유지되면
                전신의 혈관과 신경에 손상을 일으켜 다양한 합병증을 초래합니다.
                우리나라 30세 이상 성인의 약 16%가 당뇨병을 앓고 있으며, 당뇨
                전단계까지 포함하면 그 수는 더욱 증가합니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 제1형 vs 제2형 */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                당뇨병의 유형
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    제1형 당뇨병
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      자가면역 반응으로 췌장의 베타 세포가 파괴되어 인슐린 분비가
                      거의 불가능한 상태
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      주로 소아 및 청소년기에 발병
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      반드시 인슐린 주사 치료가 필요
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      전체 당뇨 환자의 약 5~10%
                    </li>
                  </ul>
                </div>
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    제2형 당뇨병
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      인슐린 저항성 증가 및 상대적 인슐린 분비 부족으로 발생
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      주로 40세 이후 발병하나, 최근 젊은 층에서도 증가 추세
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      비만, 운동 부족, 가족력 등이 주요 위험 인자
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      전체 당뇨 환자의 약 90~95%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 증상 */}
          <ScrollReveal delay={200}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                당뇨병의 주요 증상
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                당뇨병의 대표적인 증상은 &apos;3다(多) 증상&apos;으로 알려져
                있습니다. 그러나 제2형 당뇨병은 초기에 증상이 경미하거나 없을 수
                있어 정기 검진이 중요합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-navy-50 rounded-2xl p-6 text-center">
                  <div className="text-sky-500 text-2xl font-bold mb-2">다음(多飮)</div>
                  <p className="text-gray-600 text-sm">
                    갈증이 심해 물을 많이 마시게 됩니다.
                  </p>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6 text-center">
                  <div className="text-sky-500 text-2xl font-bold mb-2">다뇨(多尿)</div>
                  <p className="text-gray-600 text-sm">
                    소변량이 증가하고 소변 횟수가 잦아집니다.
                  </p>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6 text-center">
                  <div className="text-sky-500 text-2xl font-bold mb-2">다식(多食)</div>
                  <p className="text-gray-600 text-sm">
                    음식을 많이 먹어도 체중이 감소합니다.
                  </p>
                </div>
              </div>
              <div className="bg-navy-50 rounded-2xl p-8 mt-6">
                <h3 className="font-semibold text-navy-900 mb-3">기타 증상</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    만성 피로감 및 무기력
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    상처 회복 지연, 잦은 감염
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    손발 저림, 시력 변화
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    피부 가려움증
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* 합병증 */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                당뇨병 합병증
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                혈당 조절이 제대로 이루어지지 않으면 미세혈관과 대혈관에 손상이
                생겨 다양한 합병증이 발생합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">
                    미세혈관 합병증
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>· 당뇨 망막병증 (실명 위험)</li>
                    <li>· 당뇨 신증 (만성 신부전)</li>
                    <li>· 당뇨 신경병증 (손발 저림, 통증)</li>
                  </ul>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">
                    대혈관 합병증
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>· 관상동맥 질환 (심근경색, 협심증)</li>
                    <li>· 뇌혈관 질환 (뇌졸중)</li>
                    <li>· 말초혈관 질환 (당뇨발)</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 진단 기준 */}
          <ScrollReveal delay={400}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                진단 기준
              </h2>
              <div className="bg-navy-50 rounded-2xl p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-navy-200">
                        <th className="text-left py-3 text-navy-900 font-semibold">검사 항목</th>
                        <th className="text-center py-3 text-navy-900 font-semibold">정상</th>
                        <th className="text-center py-3 text-navy-900 font-semibold">당뇨 전단계</th>
                        <th className="text-center py-3 text-navy-900 font-semibold">당뇨병</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-navy-100">
                        <td className="py-3">공복 혈당 (mg/dL)</td>
                        <td className="text-center py-3">&lt; 100</td>
                        <td className="text-center py-3">100 ~ 125</td>
                        <td className="text-center py-3 font-medium text-navy-900">≥ 126</td>
                      </tr>
                      <tr className="border-b border-navy-100">
                        <td className="py-3">당화혈색소 HbA1c (%)</td>
                        <td className="text-center py-3">&lt; 5.7</td>
                        <td className="text-center py-3">5.7 ~ 6.4</td>
                        <td className="text-center py-3 font-medium text-navy-900">≥ 6.5</td>
                      </tr>
                      <tr>
                        <td className="py-3">경구당부하 2시간 혈당 (mg/dL)</td>
                        <td className="text-center py-3">&lt; 140</td>
                        <td className="text-center py-3">140 ~ 199</td>
                        <td className="text-center py-3 font-medium text-navy-900">≥ 200</td>
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
                김정재탑내과의원에서는 환자의 당뇨 유형, 혈당 수치, 동반 질환 등을
                종합적으로 평가하여 개인 맞춤형 치료 계획을 수립합니다.
              </p>
              <div className="space-y-4">
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">식이 요법</h3>
                  <p className="text-gray-600 text-sm">
                    균형 잡힌 식단 구성, 탄수화물 조절, 식이섬유 섭취 증가, 규칙적인
                    식사 시간 유지를 통해 혈당 변동을 최소화합니다.
                  </p>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">운동 요법</h3>
                  <p className="text-gray-600 text-sm">
                    주 150분 이상의 중등도 유산소 운동과 주 2~3회 근력 운동을
                    병행하여 인슐린 감수성을 개선합니다.
                  </p>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">약물 치료</h3>
                  <p className="text-gray-600 text-sm">
                    메트포르민, SGLT2 억제제, DPP-4 억제제, GLP-1 수용체 작용제 등
                    환자 상태에 적합한 약물을 선택하여 처방합니다. 필요 시 인슐린
                    치료를 시행합니다.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 생활 관리 */}
          <ScrollReveal delay={600}>
            <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                당뇨 생활 관리 수칙
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span>정기적으로 혈당을 측정하고 기록하세요.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span>당화혈색소(HbA1c)를 3개월마다 검사하세요.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span>발 관리에 신경 쓰고, 상처가 생기면 즉시 치료하세요.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span>연 1회 안저 검사, 신장 기능 검사를 받으세요.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
