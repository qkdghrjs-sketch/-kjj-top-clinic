"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function OsteoporosisPage() {
  return (
    <>
      <PageHeader
        title="골다공증"
        subtitle="뼈 건강을 지키는 조기 진단과 예방 치료"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 골다공증이란 */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                골다공증이란?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                골다공증은 뼈의 밀도와 질이 저하되어 뼈가 약해지고 골절 위험이
                크게 증가하는 전신 골격 질환입니다. 뼈에 작은 구멍이 많이 생겨
                스펀지처럼 변하며, 가벼운 충격에도 쉽게 골절이 발생할 수 있습니다.
                특히 척추, 고관절, 손목 부위에서 골절이 자주 발생하며, 고관절 골절의
                경우 심각한 합병증과 사망률 증가로 이어질 수 있어 조기 진단과
                예방이 매우 중요합니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 위험 인자 */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                위험 인자
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    주요 위험 인자
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      폐경 후 여성 (에스트로겐 급격히 감소)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      고령 (65세 이상 남녀 모두)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      골다공증 가족력
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      저체중 (BMI 18.5 미만)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      이전 골절 병력
                    </li>
                  </ul>
                </div>
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    생활습관 및 기타 요인
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      칼슘, 비타민 D 부족
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      흡연 및 과음
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      운동 부족, 장기간 부동 상태
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      장기 스테로이드 복용
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      갑상선 기능 항진증, 류마티스 관절염 등 동반 질환
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
                골다공증의 증상
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                골다공증은 &apos;소리 없는 질환&apos;으로 불립니다. 골절이 발생하기
                전까지는 대부분 자각 증상이 없으며, 다음과 같은 변화가 나타날 수
                있습니다.
              </p>
              <div className="bg-navy-50 rounded-2xl p-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">키가 줄어듦 (척추 압박 골절로 인한 신장 감소)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">등이 굽어짐 (척추 후만증)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">만성 허리 통증, 등 통증</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">가벼운 충격에도 골절 발생 (넘어지거나 기침 시)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">치아 탈락, 잇몸 질환의 악화</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* 진단 */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                진단 - 골밀도 검사 (DEXA)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                골다공증의 표준 진단법은 이중에너지 X선 흡수계측법(DEXA)을 이용한
                골밀도 검사입니다. 요추와 대퇴골 부위의 골밀도를 측정하여 T-점수로
                평가합니다.
              </p>
              <div className="bg-navy-50 rounded-2xl p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-navy-200">
                        <th className="text-left py-3 text-navy-900 font-semibold">분류</th>
                        <th className="text-center py-3 text-navy-900 font-semibold">T-점수</th>
                        <th className="text-left py-3 text-navy-900 font-semibold">설명</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-navy-100">
                        <td className="py-3">정상</td>
                        <td className="text-center py-3">-1.0 이상</td>
                        <td className="py-3">건강한 젊은 성인의 평균 범위</td>
                      </tr>
                      <tr className="border-b border-navy-100">
                        <td className="py-3">골감소증</td>
                        <td className="text-center py-3">-1.0 ~ -2.5</td>
                        <td className="py-3">골밀도가 감소하기 시작한 단계</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-navy-900">골다공증</td>
                        <td className="text-center py-3 font-medium text-navy-900">-2.5 이하</td>
                        <td className="py-3">골절 위험이 높은 상태로 치료 필요</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-xs mt-4">
                  * 65세 이상 여성, 70세 이상 남성, 또는 위험 인자가 있는 경우 정기적
                  골밀도 검사를 권장합니다.
                </p>
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
                김정재탑내과의원에서는 골밀도 검사 결과와 골절 위험도를 종합적으로
                평가하여 환자별 맞춤 치료를 제공합니다.
              </p>
              <div className="space-y-4">
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">약물 치료</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>· 비스포스포네이트 (알렌드로네이트, 졸레드론산 등): 뼈 파괴 억제</li>
                    <li>· 데노수맙: 6개월마다 피하 주사, 뼈 흡수 억제</li>
                    <li>· 부갑상선 호르몬 제제 (테리파라타이드): 뼈 형성 촉진</li>
                    <li>· 선택적 에스트로겐 수용체 조절제 (SERM): 폐경 후 여성</li>
                  </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-navy-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-navy-900 mb-2">
                      칼슘 보충
                    </h3>
                    <p className="text-gray-600 text-sm">
                      하루 권장량: 800~1,000mg. 유제품, 뼈째 먹는 생선, 두부,
                      녹색 채소 등을 통해 섭취하고, 부족 시 보충제를 복용합니다.
                    </p>
                  </div>
                  <div className="bg-navy-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-navy-900 mb-2">
                      비타민 D 보충
                    </h3>
                    <p className="text-gray-600 text-sm">
                      하루 권장량: 800~1,000IU. 칼슘 흡수를 돕고 근력 유지에
                      필수적입니다. 혈중 비타민 D 수치를 확인 후 적정 용량을
                      결정합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 운동 권장 */}
          <ScrollReveal delay={500}>
            <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                뼈 건강을 위한 운동 권장 사항
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">체중 부하 운동</h3>
                  <p className="text-sm">
                    걷기, 조깅, 계단 오르기, 등산 등 뼈에 적절한 자극을 주는 운동을
                    주 5회 이상 실시합니다.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">근력 강화 운동</h3>
                  <p className="text-sm">
                    아령, 탄력밴드 운동 등을 주 2~3회 실시하여 근력을 유지하고
                    골밀도 감소를 예방합니다.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">균형 감각 운동</h3>
                  <p className="text-sm">
                    태극권, 요가, 한 발 서기 등 균형 감각을 향상시켜 낙상 위험을
                    줄이는 운동을 병행합니다.
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
