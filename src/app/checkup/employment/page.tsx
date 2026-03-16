"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function EmploymentCheckupPage() {
  return (
    <>
      <PageHeader
        title="채용검진"
        subtitle="빠르고 정확한 채용건강검진 서비스를 제공합니다"
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
                { text: "국민건강보험공단\n검진 지정기관", icon: <svg className="w-12 h-12 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m4-10h1m4 0h1m-5 4h1m4 0h1M9 7h1m4 0h1" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4" /></svg> },
                { text: "빠르고 정확한\n채용검진", icon: <svg className="w-12 h-12 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                { text: "당일 결과\n확인 가능", icon: <svg className="w-12 h-12 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                { text: "소화기내시경\n세부전문의 판독", icon: <svg className="w-12 h-12 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 11l1.5 1.5L14 9" /></svg> },
              ].map((card) => (
                <div key={card.text} className="rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default">
                  <div className="bg-[#0b2348] px-4 py-5 text-center">
                    <p className="text-white font-bold text-sm leading-snug whitespace-pre-line">{card.text}</p>
                  </div>
                  <div className="bg-white px-4 py-6 flex items-center justify-center">{card.icon}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 italic">WHY KIMTOP</h2>
              <div className="bg-sky-500 text-white px-6 py-3 rounded-xl flex items-center gap-2">
                <span className="font-bold text-sm md:text-base">건강검진, 왜 김정재탑내과일까?</span>
                <span className="text-xl font-bold">+</span>
              </div>
            </div>
          </ScrollReveal>
          <div className="space-y-0">
            {[
              { image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/c8661c07a2f02.jpeg", title: "국민건강보험 지정 의료기관", titleColor: "text-navy-900", desc: "국민건강보험에서 지정한 건강검진 의료기관으로 병원 내에 건강검진센터를 운영하여 대상자에 한하여 무료로 일반검진과 국가5대암 검진을 통해 다양한 질병을 조기발견합니다", reverse: false },
              { image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/5fa93cc54b985.jpeg", title: "대학병원 출신의 소화기내시경 세부 전문의", titleColor: "text-sky-600", desc: "가천대 길병원 소화기내과 임상교수 출신으로, 국가가 인증한 자격증을 갖춘 소화기내시경 세부 전문의가 내시경 검사에서 용종 제거까지 원스톱 의료서비스를 제공합니다", reverse: true },
              { image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/650558a3c5b73.jpeg", title: "대학병원급 프리미엄 건강검진 장비 구축", titleColor: "text-navy-900", desc: "첨단 의료장비를 구축하여 정확하고 안전한 건강검진이 가능하며 5대암 및 다양한 질병을 조기에 발견 또는 예방할 수 있습니다", reverse: false },
              { image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/747e8bf1cb3a3.jpeg", title: "개인별 맞춤형 건강검진 프로그램", titleColor: "text-sky-600", desc: "환자 맞춤형 건강검진 프로그램을 통한 세심하고 전문적인 검진 시행으로 건강을 위협하는 질환을 예방하고 치료합니다", reverse: true },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div>
                  {i > 0 && <div className="h-px bg-sky-300 my-0" />}
                  <div className="grid md:grid-cols-2 gap-8 items-center py-10">
                    <div className={item.reverse ? "md:order-2" : "md:order-1"}>
                      <div className="w-full h-64 md:h-72 bg-cover bg-center rounded-2xl shadow-md" style={{ backgroundImage: `url('${item.image}')` }} />
                    </div>
                    <div className={item.reverse ? "md:order-1" : "md:order-2"}>
                      <h3 className={`text-xl md:text-2xl font-bold mb-4 ${item.titleColor}`}>{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 섹션 3 - 채용건강검진 내용 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          {/* 파란색 상단 박스 */}
          <ScrollReveal>
            <div className="bg-[#1b3c76] text-center py-8 rounded-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">채용건강검진</h2>
              <p className="text-sky-200 text-base">합격을 위한 채용절차의 마지막 관문</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="text-xl md:text-2xl font-bold text-navy-900 text-center mb-10">
              입사시 요구되는 채용건강검진
            </h3>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* 왼쪽 */}
            <ScrollReveal delay={150}>
              <div className="space-y-8">
                {/* 검사 항목 및 소요시간 */}
                <div>
                  <h4 className="text-sky-600 font-bold text-base mb-3">검사 항목 및 소요시간</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>· <span className="font-semibold text-navy-900">검사항목</span> | 신체계측, 소변, 혈액, 흉부X선, 문진 + α</p>
                    <p>· <span className="font-semibold text-navy-900">소요시간</span> | 약 20-25분 소요(대기인원에 따라 상이)</p>
                  </div>
                </div>

                {/* 대상 및 실시규칙 */}
                <div>
                  <h4 className="text-sky-600 font-bold text-base mb-3">대상 및 실시규칙</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>· <span className="font-semibold text-navy-900">대&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;상</span> | 각 기업체에서 입사 시에 요구되는 신체검사서 발급 희망시</p>
                    <p>· <span className="font-semibold text-navy-900">관련법규</span> | 산업안전보건법 제43조에 의거하여 근로자의 수검 의무 규정</p>
                  </div>
                </div>

                <div className="h-px bg-gray-200" />

                {/* 주의사항 */}
                <div>
                  <h4 className="text-sky-600 font-bold text-base mb-3">채용검진 주의사항</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>· <span className="font-semibold text-navy-900">금&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;식</span> | 검진 당일은 공복 유지(물, 음료수 X)</p>
                    <p>· <span className="font-semibold text-navy-900">준 비 물</span> | 신분증(공무원 채용검진시, 반명함사진 1장 준비)</p>
                    <p>· <span className="font-semibold text-navy-900">전달사항</span> | 제출하실 기관의 채용검진 규정 전달</p>
                    <p>· <span className="font-semibold text-navy-900">확인사항</span> | 사내 별도 지정된 채용검진병원 확인필요</p>
                    <p>· <span className="font-semibold text-navy-900">합격기준</span> | 공무원(직무의 특수성)의 경우, 합격 판정기준이 기관마다 상이</p>
                    <p>· <span className="font-semibold text-navy-900">검사결과</span> | 결과에 이상소견이 있는 경우, 발급제한 및 정밀검사 필요</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 오른쪽 */}
            <ScrollReveal delay={250}>
              <div className="space-y-4">
                {[
                  { tag: "기초 신체계측", content: "신장, 체중, 청력, 시력, 색신, 혈압" },
                  { tag: "소변검사", content: "요PH, 요단백, 요잠혈, 요당" },
                  { tag: "혈액검사", content: "혈당, 고지혈증, 간, 빈혈, 성병" },
                  { tag: "흉부X선 검사", content: "폐질환, 결핵, 흉막염, 심장비대" },
                  { tag: "전문의 진찰", content: "과거병력, 증상, 건강상태 파악" },
                ].map((item) => (
                  <div key={item.tag} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block bg-sky-500 text-white text-xs font-bold px-4 py-2 rounded-full shrink-0 whitespace-nowrap">
                      {item.tag}
                    </span>
                    <p className="text-gray-700 text-sm pt-1">{item.content}</p>
                  </div>
                ))}

                {/* 합격 도장 */}
                <div className="flex justify-end mt-6 mr-4">
                  <div className="relative w-28 h-28">
                    <svg viewBox="0 0 120 120" className="w-full h-full">
                      <circle cx="60" cy="60" r="52" fill="none" stroke="#dc2626" strokeWidth="5" strokeDasharray="6 4" />
                      <circle cx="60" cy="60" r="44" fill="none" stroke="#dc2626" strokeWidth="2" />
                      <text x="60" y="56" textAnchor="middle" fill="#dc2626" fontSize="28" fontWeight="900" fontFamily="serif">합격</text>
                      <text x="60" y="78" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="600">PASSED</text>
                    </svg>
                    <div className="absolute inset-0 rotate-[-12deg]">
                      <svg viewBox="0 0 120 120" className="w-full h-full opacity-20">
                        <circle cx="60" cy="60" r="52" fill="#dc2626" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
