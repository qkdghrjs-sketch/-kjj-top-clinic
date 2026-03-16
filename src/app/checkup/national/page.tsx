"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

const ageItems = [
  { test: "이상지질혈증 검사", target: "남성 24세 이상, 여성 40세 이상", cycle: "4년마다" },
  { test: "B형간염 검사", target: "40세 (*보균자 또는 면역자 제외)", cycle: "" },
  { test: "C형간염 검사", target: "56세", cycle: "" },
  { test: "골밀도 검사", target: "54, 60, 66세 여성", cycle: "" },
  { test: "인지기능장애 검사", target: "66세 이상", cycle: "2년마다" },
  { test: "정신건강검사(우울증)", target: "20~34세 / 35~39세 / 40~79세", cycle: "연령별 상이" },
  { test: "정신건강검사(조기정신증)", target: "20~34세", cycle: "2년에 1회" },
  { test: "생활습관평가", target: "40, 50, 60, 70세", cycle: "" },
  { test: "노인신체기능검사", target: "66, 70, 80세", cycle: "" },
];

export default function NationalScreeningPage() {
  return (
    <>
      <PageHeader
        title="국가검진"
        subtitle="국민건강보험공단 건강검진 프로그램"
      />

      {/* 섹션 1 - 건강검진센터 소개 4개 카드 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-navy-900 mb-4">
                김정재탑내과 건강검진센터
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                김정재탑내과는 체계적이고 정밀한 건강검진 프로그램을 통해
                5대암 및 다양한 질병을 정확하게 조기에 진단하고, 안전하게 치료합니다.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  text: "국민건강보험공단\n검진 지정기관",
                  icon: (
                    <svg className="w-12 h-12 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m4-10h1m4 0h1m-5 4h1m4 0h1M9 7h1m4 0h1" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4" />
                    </svg>
                  ),
                },
                {
                  text: "첨단장비를 통한\n정확한 진단",
                  icon: (
                    <svg className="w-12 h-12 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      <circle cx="12" cy="9" r="2" />
                    </svg>
                  ),
                },
                {
                  text: "진단에서 치료까지\n원스톱 서비스",
                  icon: (
                    <svg className="w-12 h-12 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 0v2m0-2h2m-2 0h-2" />
                    </svg>
                  ),
                },
                {
                  text: "소화기내시경\n세부전문의 판독",
                  icon: (
                    <svg className="w-12 h-12 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l1.5 1.5L14 9" />
                    </svg>
                  ),
                },
              ].map((card) => (
                <div
                  key={card.text}
                  className="rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  <div className="bg-[#0b2348] px-4 py-5 text-center">
                    <p className="text-white font-bold text-sm leading-snug whitespace-pre-line">
                      {card.text}
                    </p>
                  </div>
                  <div className="bg-white px-4 py-6 flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 섹션 2 - WHY 김정재탑내과 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 italic">
                WHY KIMTOP
              </h2>
              <div className="bg-sky-500 text-white px-6 py-3 rounded-xl flex items-center gap-2">
                <span className="font-bold text-sm md:text-base">건강검진, 왜 김정재탑내과일까?</span>
                <span className="text-xl font-bold">+</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {[
              {
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/c8661c07a2f02.jpeg",
                title: "국민건강보험 지정 의료기관",
                titleColor: "text-navy-900",
                desc: "국민건강보험에서 지정한 건강검진 의료기관으로 병원 내에 건강검진센터를 운영하여 대상자에 한하여 무료로 일반검진과 국가5대암 검진을 통해 다양한 질병을 조기발견합니다",
                reverse: false,
              },
              {
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/5fa93cc54b985.jpeg",
                title: "대학병원 출신의 소화기내시경 세부 전문의",
                titleColor: "text-sky-600",
                desc: "가천대 길병원 소화기내과 임상교수 출신으로, 국가가 인증한 자격증을 갖춘 소화기내시경 세부 전문의가 내시경 검사에서 용종 제거까지 원스톱 의료서비스를 제공합니다",
                reverse: true,
              },
              {
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/650558a3c5b73.jpeg",
                title: "대학병원급 프리미엄 건강검진 장비 구축",
                titleColor: "text-navy-900",
                desc: "첨단 의료장비를 구축하여 정확하고 안전한 건강검진이 가능하며 5대암 및 다양한 질병을 조기에 발견 또는 예방할 수 있습니다",
                reverse: false,
              },
              {
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/747e8bf1cb3a3.jpeg",
                title: "개인별 맞춤형 건강검진 프로그램",
                titleColor: "text-sky-600",
                desc: "환자 맞춤형 건강검진 프로그램을 통한 세심하고 전문적인 검진 시행으로 건강을 위협하는 질환을 예방하고 치료합니다",
                reverse: true,
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div>
                  {i > 0 && <div className="h-px bg-sky-300 my-0" />}
                  <div className="grid md:grid-cols-2 gap-8 items-center py-10">
                    <div className={item.reverse ? "md:order-2" : "md:order-1"}>
                      <div
                        className="w-full h-64 md:h-72 bg-cover bg-center rounded-2xl shadow-md"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                    </div>
                    <div className={item.reverse ? "md:order-1" : "md:order-2"}>
                      <h3 className={`text-xl md:text-2xl font-bold mb-4 ${item.titleColor}`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 섹션 3 - 1차 검진항목 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900">1차 검진항목</h2>
              <div className="bg-sky-500 text-white px-5 py-2.5 rounded-xl flex items-center gap-2">
                <span className="font-bold text-sm">1차 검진항목</span>
                <span className="text-lg font-bold">+</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop", text: "진찰, 상담, 신장, 체중,\n허리둘레, 체질량지수,\n시력, 청력, 혈압측정" },
                { img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop", text: "총 콜레스테롤,\nHDL/LDL 콜레스테롤,\n트리글리세라이드" },
                { img: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400&h=300&fit=crop", text: "AST(SGOT),\nALT(SGPT),\n감마지티피" },
                { img: "https://images.unsplash.com/photo-1631549916768-4e9be593fe94?w=400&h=300&fit=crop", text: "공복혈당" },
                { img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop", text: "요단백, 혈청 크레아티닌,\n혈색소, 신사구체여과율" },
                { img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop", text: "흉부방사선 촬영" },
                { img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop", text: "구강검진" },
                { img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop", text: "KDSQ-P\n(치매선별검사:\n만 66세 이상 해당)" },
              ].map((card, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className="rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white">
                    <div
                      className="h-40 bg-cover bg-center"
                      style={{ backgroundImage: `url('${card.img}')` }}
                    />
                    <div className="p-4 text-center">
                      <p className="text-sky-600 font-bold text-xs leading-relaxed whitespace-pre-line">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 섹션 4 - 2차 검진항목 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900">2차 검진항목</h2>
              <div className="bg-sky-500 text-white px-5 py-2.5 rounded-xl flex items-center gap-2">
                <span className="font-bold text-sm">2차 검진항목</span>
                <span className="text-lg font-bold">+</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop", title: "고혈압", desc: "1차 검진결과 고혈압 질환의심자 (혈압측정)" },
                { img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop", title: "당뇨병", desc: "1차 검진결과 당뇨병 질환의심자 (공복혈당측정)" },
                { img: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400&h=300&fit=crop", title: "인지기능장애", desc: "1차 검진 수검자 중 인지기능장애 고위험군" },
                { img: "https://images.unsplash.com/photo-1631549916768-4e9be593fe94?w=400&h=300&fit=crop", title: "치매선별검사", desc: "만 70, 74세만 해당" },
              ].map((card, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
                    <div
                      className="h-40 bg-cover bg-center"
                      style={{ backgroundImage: `url('${card.img}')` }}
                    />
                    <div className="p-4 text-center">
                      <p className="text-sky-600 font-bold text-base mb-1">{card.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 섹션 5 - 일반건강검진 + 성연령별 검사항목 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* 왼쪽 - 일반건강검진 */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">일반건강검진</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sky-600 font-bold text-base mb-2">일반건강검진 (공통질환)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      · 문진, 흉부방사선검사, 혈액검사, 소변검사 등 공통항목 검진
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sky-600 font-bold text-base mb-2">1차 건강검진 대상자</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">
                      지역세대주, 직장가입자, 20세 이상 세대원과 피부양자, 20~64세 의료급여수급권자
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      · 2년마다 1회 검진, 비사무직은 매년 실시
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sky-600 font-bold text-base mb-2">2차 건강검진 대상자 (1차 검진 결과에 따라 해당)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      · 고혈압, 당뇨병, 폐결핵, 우울증 또는 조기정신증, C형 간염 질환 의심자로 판정시 확인 검사 실시
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 오른쪽 - 성·연령별 검사 항목 */}
            <ScrollReveal delay={200}>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">성·연령별 검사 항목</h2>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#1b3c76] text-white">
                        <th className="px-4 py-3 text-left text-sm font-semibold">검사 항목</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">대상시기</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">주기</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ageItems.map((item, i) => (
                        <tr key={item.test} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                          <td className="px-4 py-3 text-sm font-medium text-navy-900">{item.test}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{item.target}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{item.cycle || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
