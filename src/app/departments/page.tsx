"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

const centers = [
  {
    name: "소화기센터",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 0-2.4.6-3 1.5C8.4 5.4 8 6.6 8 8c0 2 1 3.5 1 5s-.5 3-1 4c-.5 1 0 2.5 1.5 3s3-.5 3-2c0-1-.5-2-.5-3s1-3 1-5c0-1.4-.4-2.6-1-3.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8c0-1.4-.4-2.6-1-3.5M13 16c0 1.5 1.5 2.5 3 2s2-2 1.5-3c-.5-1-1-2-1-4" />
      </svg>
    ),
    items: [
      { name: "위염", desc: "급성·만성 위염의 정확한 진단과 치료" },
      { name: "역류성식도염", desc: "위산 역류로 인한 식도 염증 관리" },
      { name: "과민성장증후군", desc: "복통·설사·변비 등 기능성 장질환 치료" },
      { name: "위·대장내시경", desc: "수면 내시경을 통한 정밀 검사" },
      { name: "용종절제술", desc: "검사 당일 발견 즉시 절제 가능" },
    ],
  },
  {
    name: "순환기센터",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    items: [
      { name: "고혈압", desc: "혈압 관리 및 합병증 예방 치료" },
      { name: "부정맥", desc: "불규칙한 심장 박동 진단과 관리" },
      { name: "심부전", desc: "심장 기능 저하에 대한 체계적 치료" },
      { name: "협심증", desc: "흉통·심근허혈 진단 및 관리" },
      { name: "심전도 검사", desc: "심장 리듬 이상 정밀 검사" },
    ],
  },
  {
    name: "호흡기센터",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 0c-3 0-5 2.5-5 5.5S9 16 12 18c3-2 5-4.5 5-7.5S15 5 12 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14c-2 1-3 3-3 5h14c0-2-1-4-3-5" />
      </svg>
    ),
    items: [
      { name: "기관지염", desc: "급성·만성 기관지 염증 치료" },
      { name: "폐렴", desc: "세균·바이러스성 폐렴 진단과 치료" },
      { name: "천식", desc: "기도 과민반응 관리 및 예방" },
      { name: "COPD", desc: "만성폐쇄성폐질환 장기 관리" },
      { name: "흉부 X-ray", desc: "폐·기관지 이상 영상 검사" },
    ],
  },
  {
    name: "알레르기센터",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 4.5H6.5L5 14.5m14 0H5" />
      </svg>
    ),
    items: [
      { name: "알레르기 비염", desc: "코막힘·재채기·콧물 원인 치료" },
      { name: "두드러기", desc: "급·만성 두드러기 원인 분석 및 관리" },
      { name: "아토피", desc: "아토피 피부염 증상 완화 치료" },
      { name: "식품 알레르기", desc: "음식 관련 알레르기 반응 진단" },
      { name: "알레르기 검사", desc: "혈액검사 기반 알레르겐 분석" },
    ],
  },
  {
    name: "이비인후과",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    items: [
      { name: "급성 편도염", desc: "편도 부종·고열 등 급성 염증 치료" },
      { name: "중이염", desc: "귀 통증·청력 저하 진단 및 관리" },
      { name: "비염", desc: "만성 비염·비중격 관련 진료" },
      { name: "인후염", desc: "목 통증·삼킴 곤란 증상 치료" },
      { name: "어지럼증", desc: "이석증·전정 기능 이상 검사" },
    ],
  },
];

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        title="진료과목"
        subtitle="김정재탑내과의원의 전문 진료 센터를 소개합니다."
      />

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centers.map((center, i) => (
              <ScrollReveal key={center.name} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-navy-800 to-sky-700 p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform duration-300">
                      {center.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {center.name}
                    </h3>
                  </div>

                  {/* Items */}
                  <div className="p-5">
                    <ul className="space-y-3">
                      {center.items.map((item) => (
                        <li key={item.name} className="flex items-start gap-3">
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
                          <div>
                            <span className="text-navy-900 font-semibold text-sm">
                              {item.name}
                            </span>
                            <p className="text-gray-400 text-xs mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
