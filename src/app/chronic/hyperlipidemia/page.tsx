"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function HyperlipidemiaPage() {
  return (
    <>
      <PageHeader
        title="고지혈증"
        subtitle="혈중 지질 관리로 심혈관 질환을 예방합니다"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 고지혈증이란 */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                고지혈증이란?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                고지혈증(이상지질혈증)은 혈액 속 콜레스테롤이나 중성지방 수치가
                비정상적으로 높은 상태를 말합니다. 혈중 지질이 과다하면 혈관 벽에
                축적되어 동맥경화를 유발하고, 이는 심근경색, 뇌졸중 등 치명적인
                심혈관 질환으로 이어질 수 있습니다. 대부분 증상이 없어 혈액검사를
                통해서만 발견할 수 있으므로 정기적인 건강검진이 필수적입니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 혈중 지질의 종류 */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                혈중 지질의 종류
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-3">
                    LDL 콜레스테롤
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    &apos;나쁜 콜레스테롤&apos;로 불리며, 수치가 높으면 혈관 벽에
                    침착되어 동맥경화를 촉진합니다.
                  </p>
                  <div className="text-sky-500 text-sm font-medium">
                    정상: 130mg/dL 미만
                  </div>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-3">
                    HDL 콜레스테롤
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    &apos;좋은 콜레스테롤&apos;로, 혈관에 쌓인 콜레스테롤을
                    간으로 운반하여 제거하는 역할을 합니다.
                  </p>
                  <div className="text-sky-500 text-sm font-medium">
                    정상: 60mg/dL 이상
                  </div>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-3">
                    중성지방 (TG)
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    체내 에너지원으로 사용되지만, 과다하면 동맥경화와 췌장염의
                    위험을 높입니다.
                  </p>
                  <div className="text-sky-500 text-sm font-medium">
                    정상: 150mg/dL 미만
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 원인 및 위험 인자 */}
          <ScrollReveal delay={200}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                원인 및 위험 인자
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    조절 가능한 요인
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      포화지방, 트랜스지방 과다 섭취
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      비만 (특히 복부 비만)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      운동 부족 및 좌식 생활
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      흡연 및 과음
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      과도한 탄수화물, 당분 섭취
                    </li>
                  </ul>
                </div>
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    조절 불가능한 요인
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      가족력 (유전적 소인)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      연령 증가 (남성 45세 이상, 여성 55세 이상)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      폐경 후 여성 (에스트로겐 감소)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      갑상선 기능 저하증, 당뇨병 등 동반 질환
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 진단 */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                진단 (혈액검사)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                고지혈증은 12시간 이상 공복 후 채혈하여 혈중 지질 수치를
                측정합니다. 20세 이상 성인은 4~6년마다, 위험 인자가 있는 경우 매년
                검사를 권장합니다.
              </p>
              <div className="bg-navy-50 rounded-2xl p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-navy-200">
                        <th className="text-left py-3 text-navy-900 font-semibold">검사 항목</th>
                        <th className="text-center py-3 text-navy-900 font-semibold">적정</th>
                        <th className="text-center py-3 text-navy-900 font-semibold">경계</th>
                        <th className="text-center py-3 text-navy-900 font-semibold">높음</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-navy-100">
                        <td className="py-3">총 콜레스테롤 (mg/dL)</td>
                        <td className="text-center py-3">&lt; 200</td>
                        <td className="text-center py-3">200 ~ 239</td>
                        <td className="text-center py-3 font-medium text-navy-900">≥ 240</td>
                      </tr>
                      <tr className="border-b border-navy-100">
                        <td className="py-3">LDL 콜레스테롤 (mg/dL)</td>
                        <td className="text-center py-3">&lt; 130</td>
                        <td className="text-center py-3">130 ~ 159</td>
                        <td className="text-center py-3 font-medium text-navy-900">≥ 160</td>
                      </tr>
                      <tr className="border-b border-navy-100">
                        <td className="py-3">HDL 콜레스테롤 (mg/dL)</td>
                        <td className="text-center py-3">≥ 60</td>
                        <td className="text-center py-3">40 ~ 59</td>
                        <td className="text-center py-3 font-medium text-navy-900">&lt; 40</td>
                      </tr>
                      <tr>
                        <td className="py-3">중성지방 (mg/dL)</td>
                        <td className="text-center py-3">&lt; 150</td>
                        <td className="text-center py-3">150 ~ 199</td>
                        <td className="text-center py-3 font-medium text-navy-900">≥ 200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 치료 */}
          <ScrollReveal delay={400}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                치료 방법
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                김정재탑내과의원에서는 환자의 심혈관 위험도를 종합적으로 평가하여
                단계별 치료를 진행합니다.
              </p>
              <div className="space-y-4">
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    식이 요법
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      포화지방 섭취를 총 열량의 7% 미만으로 제한
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      트랜스지방 섭취 금지 (가공식품, 튀긴 음식 제한)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      식이섬유 풍부한 채소, 과일, 통곡물 섭취 증가
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      오메가-3 지방산 (등푸른 생선, 견과류) 섭취 권장
                    </li>
                  </ul>
                </div>
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    운동 요법
                  </h3>
                  <p className="text-gray-600 text-sm">
                    주 5회 이상, 1회 30분 이상의 중등도 유산소 운동(빠르게 걷기,
                    자전거, 수영 등)을 통해 HDL 콜레스테롤을 높이고 중성지방을
                    감소시킬 수 있습니다. 근력 운동을 병행하면 효과가 더욱
                    향상됩니다.
                  </p>
                </div>
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    약물 치료
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      스타틴 계열: LDL 콜레스테롤 강력 감소 (1차 선택약)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      에제티미브: 콜레스테롤 흡수 억제제
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      피브레이트: 중성지방 감소에 효과적
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      PCSK9 억제제: 고위험군 환자를 위한 최신 치료제
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 관리 수칙 */}
          <ScrollReveal delay={500}>
            <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                고지혈증 관리 수칙
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span>연 1~2회 정기적인 혈액검사로 지질 수치를 확인하세요.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span>처방된 약물은 의사 상담 없이 임의로 중단하지 마세요.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span>적정 체중을 유지하고 복부 비만을 관리하세요.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span>금연은 HDL 콜레스테롤 개선에 큰 도움이 됩니다.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
