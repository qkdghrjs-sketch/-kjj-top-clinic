"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function SedationEndoscopyPage() {
  return (
    <>
      <PageHeader
        title="수면내시경"
        subtitle="편안하고 고통 없는 수면 내시경 검사"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 수면내시경이란 */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                수면내시경이란?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                수면내시경은 진정제(수면유도제)를 정맥주사로 투여하여 가벼운
                수면 상태에서 내시경 검사를 시행하는 방법입니다. 환자분은 검사
                과정에서 통증이나 불편감을 거의 느끼지 못하며, 검사가 끝난 후
                자연스럽게 깨어나게 됩니다. 검사에 대한 공포나 거부감이 있는
                분들도 편안하게 검사를 받으실 수 있어, 현재 대부분의 환자분들이
                수면내시경을 선택하고 계십니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 수면 vs 일반 비교 */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                수면내시경 vs 일반내시경
              </h2>
              <div className="overflow-hidden rounded-2xl border border-gray-100">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy-900 text-white">
                      <th className="p-4 text-left font-semibold">구분</th>
                      <th className="p-4 text-left font-semibold">
                        수면내시경
                      </th>
                      <th className="p-4 text-left font-semibold">
                        일반내시경
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        label: "통증/불편감",
                        sedation: "거의 없음",
                        regular: "구역감, 불편감 있음",
                      },
                      {
                        label: "검사 중 의식",
                        sedation: "가벼운 수면 상태",
                        regular: "의식 유지",
                      },
                      {
                        label: "검사 기억",
                        sedation: "대부분 기억 못함",
                        regular: "검사 과정 기억",
                      },
                      {
                        label: "검사 정밀도",
                        sedation: "환자 협조로 정밀 관찰 용이",
                        regular: "구역 반사로 관찰 제한 가능",
                      },
                      {
                        label: "회복 시간",
                        sedation: "30분~1시간 회복 필요",
                        regular: "즉시 일상 복귀 가능",
                      },
                      {
                        label: "당일 운전",
                        sedation: "불가 (보호자 동반 필요)",
                        regular: "가능",
                      },
                    ].map((row, i) => (
                      <tr
                        key={row.label}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="p-4 font-semibold text-navy-900">
                          {row.label}
                        </td>
                        <td className="p-4 text-gray-600">{row.sedation}</td>
                        <td className="p-4 text-gray-600">{row.regular}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* 진정 과정 */}
          <ScrollReveal delay={200}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                수면내시경 진행 과정
              </h2>
              <div className="grid sm:grid-cols-4 gap-4">
                {[
                  {
                    step: "01",
                    title: "사전 상담",
                    desc: "기저질환, 알레르기, 복용 약물 등을 확인하여 수면 진정의 안전성을 평가합니다.",
                  },
                  {
                    step: "02",
                    title: "진정제 투여",
                    desc: "정맥주사를 통해 진정제를 투여합니다. 1~2분 내 가벼운 수면 상태에 진입합니다.",
                  },
                  {
                    step: "03",
                    title: "내시경 검사",
                    desc: "수면 상태에서 편안하게 검사를 시행합니다. 필요 시 조직 검사나 용종 절제도 진행합니다.",
                  },
                  {
                    step: "04",
                    title: "회복 및 귀가",
                    desc: "회복실에서 30분~1시간 안정 후 의식이 회복되면 결과 상담 후 귀가합니다.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="text-center p-5 bg-gray-50 rounded-2xl"
                  >
                    <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-base font-bold text-navy-900 mb-2">
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

          {/* 안전 모니터링 */}
          <ScrollReveal delay={300}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                안전 모니터링 시스템
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                김정재탑내과의원은 수면내시경의 안전성을 최우선으로 생각합니다.
                검사 전 과정에서 첨단 모니터링 장비를 통해 환자분의 상태를
                실시간으로 확인하며, 숙련된 의료진이 만일의 상황에 즉각
                대응합니다.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "산소포화도 모니터링",
                    desc: "맥박산소측정기(Pulse Oximeter)로 혈중 산소 농도를 실시간 감시합니다.",
                  },
                  {
                    title: "심전도 모니터링",
                    desc: "심박수와 심장 리듬을 지속적으로 관찰하여 이상 징후를 조기에 감지합니다.",
                  },
                  {
                    title: "혈압 모니터링",
                    desc: "자동 혈압계를 통해 검사 중 혈압 변화를 주기적으로 확인합니다.",
                  },
                  {
                    title: "응급 대응 체계",
                    desc: "응급 약물 및 기도 확보 장비를 항시 구비하고, 숙련된 의료진이 대기합니다.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 border border-gray-100 rounded-xl"
                  >
                    <h4 className="font-semibold text-navy-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 회복 및 퇴원 안내 */}
          <ScrollReveal delay={350}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                회복 및 퇴원 안내
              </h2>
              <div className="space-y-3">
                {[
                  "검사 후 회복실에서 30분~1시간 정도 안정을 취합니다.",
                  "의식이 충분히 회복된 후 담당 의사가 검사 결과를 설명합니다.",
                  "검사 당일은 운전, 기계 조작, 중요한 의사결정을 피합니다.",
                  "보호자 동반 하에 귀가하시며, 대중교통 이용을 권장합니다.",
                  "검사 후 1~2시간 경과 후 가벼운 식사부터 시작합니다.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
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

          {/* FAQ 섹션 */}
          <ScrollReveal delay={400}>
            <div className="bg-navy-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                자주 묻는 질문
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "수면내시경은 완전히 잠드는 건가요?",
                    a: "완전한 수면(전신마취)이 아닌 가벼운 진정 상태입니다. 의식이 완전히 소실되지 않고 얕은 수면 상태를 유지하여, 호흡과 기본 반사는 정상적으로 유지됩니다. 검사 후에는 대부분 검사 과정을 기억하지 못합니다.",
                  },
                  {
                    q: "수면내시경이 위험하지는 않나요?",
                    a: "수면내시경은 매우 안전한 검사입니다. 사용되는 진정제(미다졸람, 프로포폴 등)는 작용 시간이 짧고, 검사 중 산소포화도, 심전도, 혈압을 실시간으로 모니터링하므로 안전합니다. 다만 심각한 심폐질환이 있는 경우 사전에 담당 의사와 충분히 상담합니다.",
                  },
                  {
                    q: "수면에서 깨어나지 못하면 어떡하나요?",
                    a: "진정제의 효과는 일시적이며, 검사 종료 후 자연스럽게 깨어납니다. 만약 각성이 지연될 경우 진정제의 효과를 즉시 되돌리는 길항제(플루마제닐)를 투여할 수 있어 안심하셔도 됩니다.",
                  },
                  {
                    q: "수면내시경 후 언제부터 정상 활동이 가능한가요?",
                    a: "검사 당일은 진정제의 잔여 효과로 판단력과 반사 능력이 저하될 수 있으므로 운전, 기계 조작, 중요한 계약 등은 피하셔야 합니다. 다음 날부터는 정상적인 일상 활동이 가능합니다.",
                  },
                  {
                    q: "어르신이나 기저질환자도 수면내시경이 가능한가요?",
                    a: "고령이시거나 심장, 폐, 간 질환 등 기저질환이 있는 경우에도 사전 평가를 통해 진정제 용량을 개별 조절하여 안전하게 시행할 수 있습니다. 검사 전 상담 시 기저질환과 복용 약물을 정확히 알려주시면 최적의 방법으로 진행합니다.",
                  },
                ].map((faq) => (
                  <div
                    key={faq.q}
                    className="border-b border-navy-100 pb-5 last:border-b-0 last:pb-0"
                  >
                    <h4 className="font-semibold text-navy-900 mb-2">
                      Q. {faq.q}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </p>
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
