"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function CardiopulmonaryPage() {
  return (
    <>
      <PageHeader
        title="심장 폐질환"
        subtitle="심장과 폐 건강을 함께 관리합니다"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 심장 폐질환 개요 */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                심장 폐질환이란?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                심장 폐질환(심폐질환)은 심장과 폐에 영향을 미치는 질환을 총칭하며,
                두 장기는 혈액 순환과 산소 공급이라는 기능적으로 밀접하게 연결되어
                있습니다. 심장 질환이 폐 기능에 영향을 주거나, 반대로 폐 질환이
                심장에 부담을 가중시키는 경우가 많아 통합적인 관리가 필요합니다.
                김정재탑내과의원에서는 심장과 폐 질환을 종합적으로 진단하고
                관리하여 환자의 삶의 질을 높이는 데 집중합니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 주요 질환 */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                주요 심폐질환
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    심장 질환
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <div>
                        <strong className="text-navy-900">심부전</strong>
                        <p className="mt-1">심장의 펌프 기능이 저하되어 전신에 충분한 혈액을 공급하지 못하는 상태. 호흡곤란, 부종, 피로감이 주요 증상입니다.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <div>
                        <strong className="text-navy-900">부정맥</strong>
                        <p className="mt-1">심장 박동이 불규칙하거나 비정상적으로 빠르거나 느린 상태. 심방세동이 가장 흔합니다.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <div>
                        <strong className="text-navy-900">판막 질환</strong>
                        <p className="mt-1">심장 판막의 협착이나 역류로 혈액 흐름에 이상이 생기는 질환입니다.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    폐 질환
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <div>
                        <strong className="text-navy-900">COPD (만성 폐쇄성 폐질환)</strong>
                        <p className="mt-1">기도의 만성 염증으로 기류가 제한되는 질환. 흡연이 주요 원인이며, 심장 질환과의 연관성이 높습니다.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <div>
                        <strong className="text-navy-900">폐고혈압</strong>
                        <p className="mt-1">폐동맥의 혈압이 비정상적으로 상승하여 우심실에 과부하가 걸리는 질환입니다.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <div>
                        <strong className="text-navy-900">폐색전증</strong>
                        <p className="mt-1">혈전이 폐동맥을 막아 발생하며, 급성 호흡곤란과 흉통이 특징입니다.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* COPD와 심장질환 연관성 */}
          <ScrollReveal delay={200}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                COPD와 심장질환의 연관성
              </h2>
              <div className="bg-navy-50 rounded-2xl p-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                  COPD 환자는 심혈관 질환 발생 위험이 일반인보다 2~3배 높습니다.
                  이는 만성 염증, 저산소증, 산화 스트레스 등이 심혈관계에 직접적인
                  영향을 미치기 때문입니다.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">·</span>
                    COPD로 인한 만성 저산소증이 폐고혈압과 우심실 부전을 유발
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">·</span>
                    전신 염증 반응이 동맥경화를 촉진하여 관상동맥 질환 위험 증가
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">·</span>
                    COPD 급성 악화 시 심부전, 부정맥 발생 위험이 크게 상승
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">·</span>
                    공통 위험 인자: 흡연, 고령, 전신 염증
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* 증상 */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                주요 증상
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                심폐질환의 증상은 심장과 폐의 기능 저하에 따라 다양하게 나타납니다.
                다음 증상이 지속되면 전문의 상담이 필요합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-3">호흡기 증상</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      활동 시 호흡곤란 (점진적으로 악화)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      만성 기침, 가래
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      야간 호흡곤란 (누우면 숨이 차는 증상)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      쌕쌕거림, 천명음
                    </li>
                  </ul>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-3">심혈관 증상</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      가슴 통증, 압박감
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      심장 두근거림, 불규칙한 맥박
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      하지 부종 (발목, 다리 붓기)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      만성 피로, 운동 능력 저하
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 진단 검사 */}
          <ScrollReveal delay={400}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                진단 검사
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                심폐질환의 정확한 진단을 위해 다양한 검사를 시행합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-navy-50 rounded-2xl p-6 text-center">
                  <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-sky-600 text-2xl font-bold">ECG</span>
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">심전도 검사</h3>
                  <p className="text-gray-600 text-sm">
                    심장의 전기적 활동을 기록하여 부정맥, 심근경색, 심비대 등을
                    진단합니다.
                  </p>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6 text-center">
                  <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-sky-600 text-2xl font-bold">Echo</span>
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">심초음파 검사</h3>
                  <p className="text-gray-600 text-sm">
                    초음파를 이용해 심장의 구조와 기능을 실시간으로 확인합니다.
                    판막 질환, 심부전 평가에 필수적입니다.
                  </p>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6 text-center">
                  <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-sky-600 text-2xl font-bold">PFT</span>
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">폐기능 검사</h3>
                  <p className="text-gray-600 text-sm">
                    폐활량과 기류 속도를 측정하여 COPD, 천식 등 폐질환의 중증도를
                    평가합니다.
                  </p>
                </div>
              </div>
              <div className="bg-navy-50 rounded-2xl p-6 mt-4">
                <h3 className="font-semibold text-navy-900 mb-3">기타 검사</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">·</span>
                    흉부 X선 촬영: 심장 크기, 폐 상태 전반적 확인
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">·</span>
                    혈액검사: BNP/NT-proBNP (심부전 표지자), 동맥혈 가스분석
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">·</span>
                    24시간 홀터 모니터링: 일상생활 중 심전도 변화 관찰
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">·</span>
                    운동 부하 검사: 운동 중 심폐 기능 평가
                  </li>
                </ul>
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
                심폐질환의 치료는 정확한 진단을 바탕으로 질환의 종류와 중증도에 따라
                개별화된 치료 계획을 수립합니다.
              </p>
              <div className="space-y-4">
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    약물 치료
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 text-sm">
                    <div>
                      <h4 className="font-medium text-navy-900 mb-2">심장 질환</h4>
                      <ul className="space-y-1">
                        <li>· ACE 억제제, ARB (심부전 치료)</li>
                        <li>· 베타 차단제 (맥박 조절)</li>
                        <li>· 이뇨제 (부종 관리)</li>
                        <li>· 항부정맥 약물</li>
                        <li>· 항응고제 (혈전 예방)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-900 mb-2">폐 질환</h4>
                      <ul className="space-y-1">
                        <li>· 기관지 확장제 (흡입제)</li>
                        <li>· 흡입 스테로이드</li>
                        <li>· 산소 치료 (저산소증 시)</li>
                        <li>· 폐고혈압 치료제</li>
                        <li>· 항생제 (감염 시)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    생활습관 관리
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      금연 (COPD 및 심혈관 질환의 가장 중요한 관리 수칙)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      염분 제한 식이 (심부전 환자 수분 관리)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      전문의 지도하에 심폐 재활 운동 실시
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">·</span>
                      독감 및 폐렴 예방접종 필수
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 관리 수칙 */}
          <ScrollReveal delay={600}>
            <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                심폐질환 관리 수칙
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span>호흡곤란, 흉통 등 증상 변화가 있으면 즉시 내원하세요.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span>처방된 약물을 규칙적으로 복용하고 임의로 중단하지 마세요.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span>매일 체중을 측정하여 급격한 체중 증가(부종) 여부를 확인하세요.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span>정기적으로 심전도, 심초음파, 폐기능 검사를 받으세요.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
