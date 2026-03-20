"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

const faqs = [
  {
    q: "내시경 검사 전 금식은 얼마나 해야 하나요?",
    a: "위내시경은 검사 전날 저녁 9시 이후부터 금식하셔야 합니다. 대장내시경의 경우 검사 2~3일 전부터 씨가 있는 과일, 김치 등 섬유질이 많은 음식을 피하시고, 전날 장정결제를 복용하셔야 합니다. 물은 검사 2시간 전까지 소량 드실 수 있습니다.",
  },
  {
    q: "수면내시경 후 바로 운전할 수 있나요?",
    a: "수면내시경 후에는 진정제의 영향이 남아 있으므로 당일 운전은 절대 삼가셔야 합니다. 검사 후 최소 30분~1시간 회복 시간이 필요하며, 보호자와 함께 오시거나 대중교통을 이용해 주시기 바랍니다. 당일 중요한 업무나 계약 등도 피하시는 것이 좋습니다.",
  },
  {
    q: "국가건강검진은 어떻게 받을 수 있나요?",
    a: "국민건강보험공단에서 대상자에게 검진표를 발송합니다. 짝수 해 출생자는 짝수 해에, 홀수 해 출생자는 홀수 해에 검진 대상이 됩니다. 검진표를 지참하시고 신분증과 함께 방문하시면 무료로 검진받으실 수 있습니다. 사전 예약을 권장드립니다.",
  },
  {
    q: "채용검진 결과는 얼마나 걸리나요?",
    a: "일반 채용검진의 경우 검사 당일 또는 익일 결과 확인이 가능합니다. 다만 일부 혈액검사 항목은 외부 위탁 검사로 2~3일 소요될 수 있습니다. 급하신 경우 접수 시 말씀해 주시면 빠른 처리를 도와드리겠습니다.",
  },
  {
    q: "고혈압·당뇨약은 평생 먹어야 하나요?",
    a: "만성질환 약물은 혈압이나 혈당을 안정적으로 유지하기 위해 꾸준히 복용하는 것이 원칙입니다. 다만 생활습관 개선(식이조절, 운동, 체중 관리)을 통해 약물 용량을 줄이거나, 경우에 따라 중단할 수 있는 경우도 있습니다. 반드시 담당 의사와 상의 후 조절하셔야 합니다.",
  },
  {
    q: "비만클리닉은 어떤 프로그램으로 진행되나요?",
    a: "초진 시 체성분 분석, 혈액검사, 기초 건강 평가를 진행합니다. 결과를 바탕으로 식이상담, 운동처방, 필요 시 약물치료를 병행하는 맞춤형 프로그램을 설계합니다. 정기적인 경과 관찰을 통해 건강하게 체중을 관리할 수 있도록 도와드립니다.",
  },
  {
    q: "수액 치료는 얼마나 자주 받을 수 있나요?",
    a: "수액 치료의 종류와 환자 상태에 따라 다릅니다. 피로회복 수액은 주 1~2회, 면역 수액은 주 1회 정도가 일반적입니다. 과도한 수액 치료는 오히려 건강에 해로울 수 있으므로, 진료 상담을 통해 적절한 주기를 정하는 것이 좋습니다.",
  },
  {
    q: "진료 예약은 어떻게 하나요?",
    a: "전화 예약(02-6798-8880) 또는 직접 내원하여 접수하실 수 있습니다. 내시경 검사나 건강검진의 경우 사전 예약을 권장드리며, 일반 진료는 예약 없이도 내원 순서대로 진료받으실 수 있습니다.",
  },
  {
    q: "주차는 가능한가요?",
    a: "건물 내 지하 주차장을 이용하실 수 있으며, 진료 환자분께는 주차 할인을 제공해 드립니다. 접수 시 주차권을 요청해 주시기 바랍니다. 주차 공간이 제한적이므로 가능하면 대중교통 이용을 권장드립니다.",
  },
  {
    q: "토요일·공휴일에도 진료하나요?",
    a: "토요일은 오전 진료를 운영하고 있습니다 (09:00~13:00). 일요일 및 공휴일은 휴진입니다. 정확한 진료 시간은 '진료시간 및 오시는길' 페이지에서 확인하시거나, 전화로 문의해 주시기 바랍니다.",
  },
];

export default function QnAPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <PageHeader
        title="자주 묻는 질문"
        subtitle="환자분들이 가장 많이 궁금해하시는 질문을 모았습니다."
      />

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="border border-gray-100 rounded-xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-navy-50/50 transition-colors"
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold shrink-0">
                        Q
                      </span>
                      <span className="text-navy-900 font-medium text-sm md:text-base">
                        {faq.q}
                      </span>
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 shrink-0 ml-4 transition-transform duration-200 ${
                        openIdx === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openIdx === i && (
                    <div className="px-6 pb-5 animate-slide-down">
                      <div className="flex gap-3 pt-3 border-t border-gray-100">
                        <span className="w-7 h-7 rounded-full bg-navy-100 text-navy-600 flex items-center justify-center text-xs font-bold shrink-0">
                          A
                        </span>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
