"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function IVTherapyPage() {
  return (
    <>
      <PageHeader
        title="수액클리닉"
        subtitle="피로 회복과 면역력 증진을 위한 맞춤 수액 치료"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 수액치료 소개 */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                수액치료란?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                수액치료는 정맥을 통해 수분, 비타민, 미네랄, 아미노산 등 필요한
                영양소를 직접 체내에 공급하는 치료법입니다. 경구 복용 대비
                흡수율이 높아 빠르고 효과적인 영양 공급이 가능하며, 피로 회복,
                면역력 증진, 컨디션 개선에 도움을 줍니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 수액 종류 */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                맞춤 수액 프로그램
              </h2>
              <div className="space-y-6">
                {[
                  {
                    name: "피로회복 수액",
                    desc: "만성 피로, 체력 저하 시 에너지 회복을 도와주는 수액입니다. 비타민B군, 아미노산, 타우린 등이 포함되어 세포의 에너지 대사를 활성화합니다.",
                    recommended:
                      "만성 피로를 느끼는 직장인, 과로 후 체력 회복이 필요한 분, 수험생",
                    duration: "약 40~60분",
                    color: "border-l-sky-500",
                  },
                  {
                    name: "면역증진 수액",
                    desc: "고용량 비타민C와 셀레늄, 아연 등 면역 관련 영양소를 공급하여 면역 기능을 강화합니다. 환절기 감기 예방 및 면역력이 저하된 분에게 추천합니다.",
                    recommended:
                      "감기에 자주 걸리는 분, 환절기 면역력 강화가 필요한 분, 수술 후 회복기",
                    duration: "약 40~60분",
                    color: "border-l-green-500",
                  },
                  {
                    name: "비타민 수액 (백옥주사/신데렐라주사)",
                    desc: "글루타치온, 비타민C 등 항산화 성분을 공급하여 피부 톤 개선과 항산화 효과를 제공합니다. 피부 건강과 전반적인 컨디션 향상에 도움을 줍니다.",
                    recommended:
                      "피부 톤 개선을 원하는 분, 항산화 관리가 필요한 분, 피부 건강이 걱정되는 분",
                    duration: "약 30~40분",
                    color: "border-l-purple-500",
                  },
                  {
                    name: "감기 수액",
                    desc: "감기 초기 증상 완화를 위한 수액으로, 수분 보충과 함께 비타민C, 해열·소염 성분을 공급합니다. 빠른 감기 회복을 도와줍니다.",
                    recommended:
                      "감기 초기 증상(오한, 인후통, 발열)이 있는 분, 감기 회복이 더딘 분",
                    duration: "약 30~50분",
                    color: "border-l-orange-500",
                  },
                  {
                    name: "숙취해소 수액",
                    desc: "음주 후 탈수 해소, 간 해독을 돕는 수액입니다. 수분, 전해질, 간 보호 성분(글루타치온, 아미노산)을 공급하여 숙취 증상을 빠르게 완화합니다.",
                    recommended:
                      "심한 숙취로 고생하는 분, 잦은 음주로 간 건강이 걱정되는 분, 빠른 회복이 필요한 분",
                    duration: "약 30~60분",
                    color: "border-l-amber-500",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-navy-50 rounded-2xl p-8 border-l-4 ${item.color}`}
                  >
                    <h3 className="text-xl font-bold text-navy-900 mb-3">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 bg-white rounded-xl p-4">
                        <p className="text-xs font-semibold text-sky-500 mb-1">
                          추천 대상
                        </p>
                        <p className="text-gray-700 text-sm">
                          {item.recommended}
                        </p>
                      </div>
                      <div className="sm:w-32 bg-white rounded-xl p-4 text-center">
                        <p className="text-xs font-semibold text-sky-500 mb-1">
                          소요 시간
                        </p>
                        <p className="text-gray-700 text-sm font-medium">
                          {item.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 시술 과정 */}
          <ScrollReveal delay={200}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                수액 치료 과정
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "상담 및 건강 상태 확인",
                    desc: "현재 건강 상태, 증상, 복용 약물 등을 파악하여 적합한 수액을 선정합니다.",
                  },
                  {
                    step: "02",
                    title: "맞춤 수액 조제",
                    desc: "환자의 상태에 따라 최적의 영양 성분을 조합하여 수액을 준비합니다.",
                  },
                  {
                    step: "03",
                    title: "수액 투여",
                    desc: "편안한 리클라이너에서 30~60분간 수액을 투여합니다. 투여 중 활력 징후를 모니터링합니다.",
                  },
                  {
                    step: "04",
                    title: "경과 관찰 및 귀가",
                    desc: "수액 투여 후 이상 반응 여부를 확인하고, 주의사항을 안내한 후 귀가합니다.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 border border-gray-200 rounded-xl p-5"
                  >
                    <span className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-bold text-navy-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 안내 사항 */}
          <ScrollReveal delay={300}>
            <div className="bg-navy-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                수액 치료 안내사항
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "수액 치료 전 공복이 아닌 가벼운 식사를 권장합니다.",
                  "알레르기 병력이 있는 경우 반드시 사전에 알려주세요.",
                  "수액 치료 후 충분한 수분 섭취를 권장합니다.",
                  "정기적인 수액 치료 시 더 좋은 효과를 기대할 수 있습니다.",
                  "임산부, 신장 질환자는 사전 상담이 필요합니다.",
                  "치료 당일 과도한 운동은 피해주세요.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white rounded-xl p-4"
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      !
                    </span>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 상담 안내 */}
          <ScrollReveal delay={400}>
            <div className="text-center bg-navy-900 text-white rounded-2xl p-10">
              <h2 className="text-2xl font-bold mb-3">
                수액클리닉 상담 예약
              </h2>
              <p className="text-navy-300 mb-6">
                증상과 목적에 맞는 맞춤 수액 치료를 받아보세요. 당일 시술도
                가능합니다.
              </p>
              <p className="text-sky-400 text-2xl font-bold">
                ☎ 02-6798-8880
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
