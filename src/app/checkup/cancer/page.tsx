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

export default function CancerScreeningPage() {
  return (
    <>
      <PageHeader
        title="5대암검진"
        subtitle="국가암검진으로 암을 조기에 발견하고 예방합니다"
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
                { text: "5대암 조기발견\n전문 검진", icon: <svg className="w-12 h-12 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /><circle cx="12" cy="9" r="2" /></svg> },
                { text: "진단에서 치료까지\n원스톱 서비스", icon: <svg className="w-12 h-12 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 0v2m0-2h2m-2 0h-2" /></svg> },
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

      {/* 섹션 3 - 대한민국 사망원인 1위 암 배너 + 5대암 */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0b2348 0%, #132f5e 50%, #0a1f3d 100%)" }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-400 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-600 rounded-full blur-[80px]" />
        </div>

        {/* 상단 배너 */}
        <div className="relative z-10 pt-20 pb-12">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                대한민국 사망원인 1위, <span className="text-sky-400">암</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                김정재탑내과의 정밀하고 안전한 5대암검진을 통해 암을 예방할 수 있습니다.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* 파란색 박스 */}
        <div className="relative z-10 pb-8">
          <div className="max-w-5xl mx-auto px-4">
            <ScrollReveal delay={100}>
              <div className="bg-sky-600 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-1">국가암검진</h3>
                <p className="text-sky-100 text-sm mb-4">암 예방 및 조기발견을 위한 필수검진!</p>
                <p className="text-white/90 text-sm leading-relaxed max-w-3xl mx-auto">
                  국민건강보험공단에서 시행하는 국가암검진(5대암검진)은 발병률이 높고 조기진단으로 치료할 수 있는,{" "}
                  <span className="text-sky-200 font-semibold">위암</span>,{" "}
                  <span className="text-sky-200 font-semibold">대장암</span>,{" "}
                  <span className="text-sky-200 font-semibold">간암</span>,{" "}
                  <span className="text-sky-200 font-semibold">유방암</span>,{" "}
                  <span className="text-sky-200 font-semibold">자궁경부암</span>에 대한 검사로 구성되어 있습니다.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 5대암 카드 */}
        <div className="relative z-10 pb-20">
          <div className="max-w-5xl mx-auto px-4">
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {[
                  {
                    name: "위암",
                    color: "text-red-400",
                    target: "40세 이상 / 2년",
                    item: "위내시경 검사",
                    note: null,
                    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.2 0-4 1.8-4 4v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-2.2-1.8-4-4-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M10 8V6c0-1.1.9-2 2-2s2 .9 2 2v2" /></svg>,
                  },
                  {
                    name: "대장암",
                    color: "text-orange-400",
                    target: "50세 이상 / 1년",
                    item: "분변잠혈검사",
                    note: "*양성 판정자는 2단계 대장내시경 검사 실시",
                    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  },
                  {
                    name: "간암",
                    color: "text-green-400",
                    target: "40세 이상(고위험군) / 6개월",
                    item: "간초음파검사, 혈청알파태아단백검사",
                    note: null,
                    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                  },
                  {
                    name: "유방암",
                    color: "text-pink-400",
                    target: "40세 이상 여성 / 2년",
                    item: "유방촬영 검사",
                    note: null,
                    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  },
                  {
                    name: "자궁경부암",
                    color: "text-purple-400",
                    target: "20세 이상 여성 / 2년",
                    item: "자궁경부세포 검사",
                    note: null,
                    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
                  },
                ].map((cancer, i) => (
                  <ScrollReveal key={cancer.name} delay={i * 80}>
                    <div className="bg-white/[0.07] backdrop-blur-md border border-white/[0.12] rounded-2xl p-6 hover:bg-white/[0.12] hover:-translate-y-1 transition-all duration-300">
                      <div className={`mb-3 ${cancer.color}`}>{cancer.icon}</div>
                      <h4 className={`text-xl font-bold mb-2 ${cancer.color}`}>{cancer.name}</h4>
                      <p className="text-sky-300/70 text-xs mb-1">대상 및 주기</p>
                      <p className="text-white text-sm font-medium mb-2">{cancer.target}</p>
                      <p className="text-sky-300/70 text-xs mb-1">항목</p>
                      <p className="text-white/80 text-sm">{cancer.item}</p>
                      {cancer.note && <p className="text-sky-300/50 text-xs mt-2">{cancer.note}</p>}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 섹션 4 - 암검진 진행 순서 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900">암검진 진행 순서</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  num: "01",
                  title: "암검진 대상자 확인",
                  desc: "암검진표에 [대상]으로 표기된 검사항목은 본인부담 없이 검진을 받을 수 있습니다.",
                  icon: <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                },
                {
                  num: "02",
                  title: "검진기관 확인",
                  desc: "검진표 안내문 뒷면의 해당 검진기관을 확인하세요.",
                  icon: <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m4-10h1m4 0h1m-5 4h1m4 0h1M9 7h1m4 0h1" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4" /></svg>,
                },
                {
                  num: "03",
                  title: "검진기관 방문 검진",
                  desc: "암검진표와 신분증을 지참하고 검진기관을 방문하여 암검진을 받습니다.",
                  icon: <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
                },
                {
                  num: "04",
                  title: "암검진 결과 통보",
                  desc: "검진기관에서 15일 이내에 검진 받은 분의 주소지로 발송해드립니다.",
                  icon: <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
                },
              ].map((step, i) => (
                <div key={step.num} className="relative">
                  <ScrollReveal delay={i * 100}>
                    <div className="border-2 border-navy-200 rounded-2xl p-6 h-full hover:border-sky-400 hover:-translate-y-1 transition-all duration-300">
                      <span className="text-3xl font-black text-sky-500 block mb-3">{step.num}</span>
                      <h4 className="text-navy-900 font-bold text-base mb-2">{step.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.desc}</p>
                      <div className="flex justify-center">{step.icon}</div>
                    </div>
                  </ScrollReveal>
                  {i < 3 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 섹션 5 - 일반건강검진 + 성연령별 검사항목 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">일반건강검진</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sky-600 font-bold text-base mb-2">일반건강검진 (공통질환)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">· 문진, 흉부방사선검사, 혈액검사, 소변검사 등 공통항목 검진</p>
                  </div>
                  <div>
                    <h3 className="text-sky-600 font-bold text-base mb-2">1차 건강검진 대상자</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">지역세대주, 직장가입자, 20세 이상 세대원과 피부양자, 20~64세 의료급여수급권자</p>
                    <p className="text-gray-600 text-sm leading-relaxed">· 2년마다 1회 검진, 비사무직은 매년 실시</p>
                  </div>
                  <div>
                    <h3 className="text-sky-600 font-bold text-base mb-2">2차 건강검진 대상자 (1차 검진 결과에 따라 해당)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">· 고혈압, 당뇨병, 폐결핵, 우울증 또는 조기정신증, C형 간염 질환 의심자로 판정시 확인 검사 실시</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

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
