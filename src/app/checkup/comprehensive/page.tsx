"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

const steps = [
  { num: "01", title: "예약", sub: "원무접수·수납", icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 3.993A1 1 0 013 3h18a1 1 0 011 .993v16.014a1 1 0 01-1 .993H3a1 1 0 01-1-.993V3.993zM9 3v18m6-13h2m-2 4h2" />
    </svg>
  )},
  { num: "02", title: "등록 및 상담", sub: "문진표 작성", icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  )},
  { num: "03", title: "혈압 및 신체계측", sub: "", icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )},
  { num: "04", title: "혈액검사 및 소변검사", sub: "", icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  )},
  { num: "05", title: "탈의", sub: "", icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  )},
  { num: "06", title: "X-RAY 촬영", sub: "", icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  )},
  { num: "07", title: "초음파 검사", sub: "대상자", icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  )},
  { num: "08", title: "위/대장 내시경 검사", sub: "", icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )},
  { num: "09", title: "상담/진료", sub: "", icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l1.5 1.5L14 9" />
    </svg>
  )},
];

interface PackageItem {
  name: string;
  price: string;
  details: { category: string; items: string }[];
}

const packages: PackageItem[] = [
  {
    name: "탑 혈액종합검진",
    price: "100,000원",
    details: [
      { category: "혈액검사", items: "일반혈액 / 혈액형 / 혈당 / 간기능 / 이상지질 및 심기능 / 신기능 / 통풍 / 전해질 / 갑상선 / 암표지자 / 면역 / 비타민D / 철 결핍질환" },
      { category: "소변검사", items: "요검사 10종" },
    ],
  },
  {
    name: "탑 BASIC (남성)",
    price: "300,000원",
    details: [
      { category: "신체계측", items: "신장 / 체중 / 혈압 / 시력 / 청력 / 색신 / 허리둘레 / 체성분 분석" },
      { category: "혈액검사", items: "일반혈액 / 혈액형 / 혈당 / 간기능 / 이상지질 및 심기능 / 신기능 / 통풍 / 전해질 / 갑상선 / 암표지자 / 면역 / 비타민D / 철 결핍질환" },
      { category: "소변검사", items: "요검사 10종" },
      { category: "기능검사", items: "심전도 / 폐기능" },
      { category: "영상검사", items: "흉부촬영 / 복부초음파" },
      { category: "소화기검사", items: "위내시경 (수면비 포함)" },
    ],
  },
  {
    name: "탑 BASIC (여성)",
    price: "300,000원",
    details: [
      { category: "신체계측", items: "신장 / 체중 / 혈압 / 시력 / 청력 / 색신 / 허리둘레 / 체성분 분석" },
      { category: "혈액검사", items: "일반혈액 / 혈액형 / 혈당 / 간기능 / 이상지질 및 심기능 / 신기능 / 통풍 / 전해질 / 갑상선 / 암표지자 / 면역 / 비타민D / 철 결핍질환" },
      { category: "소변검사", items: "요검사 10종" },
      { category: "기능검사", items: "심전도 / 폐기능" },
      { category: "영상검사", items: "흉부촬영 / 유방촬영 / 복부초음파" },
      { category: "소화기검사", items: "위내시경 (수면비 포함)" },
    ],
  },
  {
    name: "탑 프리미엄 (남성)",
    price: "400,000원",
    details: [
      { category: "신체계측", items: "신장 / 체중 / 혈압 / 시력 / 청력 / 색신 / 허리둘레 / 체성분 분석" },
      { category: "혈액검사", items: "일반혈액 / 혈액형 / 혈당 / 간기능 / 이상지질 및 심기능 / 신기능 / 통풍 / 전해질 / 갑상선 / 암표지자 / 면역 / 비타민D / 철 결핍질환" },
      { category: "소변검사", items: "요검사 10종" },
      { category: "기능검사", items: "심전도 / 폐기능" },
      { category: "영상검사", items: "흉부촬영 / 복부초음파" },
      { category: "소화기검사", items: "위내시경 / 대장내시경 (수면비 포함/조직별도추가)" },
    ],
  },
  {
    name: "탑 프리미엄 (여성)",
    price: "450,000원",
    details: [
      { category: "신체계측", items: "신장 / 체중 / 혈압 / 시력 / 청력 / 색신 / 허리둘레 / 체성분 분석" },
      { category: "혈액검사", items: "일반혈액 / 혈액형 / 혈당 / 간기능 / 이상지질 및 심기능 / 신기능 / 통풍 / 전해질 / 갑상선 / 암표지자 / 면역 / 비타민D / 철 결핍질환" },
      { category: "소변검사", items: "요검사 10종" },
      { category: "기능검사", items: "심전도 / 폐기능 / 골밀도" },
      { category: "영상검사", items: "흉부촬영 / 유방촬영 / 복부초음파 / 갑상선초음파" },
      { category: "소화기검사", items: "위내시경 / 대장내시경 (수면비 포함/조직별도추가)" },
    ],
  },
  {
    name: "탑 VIP (남성)",
    price: "550,000원",
    details: [
      { category: "신체계측", items: "신장 / 체중 / 혈압 / 시력 / 청력 / 색신 / 허리둘레 / 체성분 분석" },
      { category: "혈액검사", items: "일반혈액 / 혈액형 / 혈당 / 간기능 / 이상지질 및 심기능 / 신기능 / 통풍 / 전해질 / 갑상선 / 암표지자 / 면역 / 비타민D / 철 결핍질환" },
      { category: "소변검사", items: "요검사 10종" },
      { category: "기능검사", items: "심전도 / 폐기능 / 골밀도" },
      { category: "영상검사", items: "흉부촬영 / 복부초음파 / 경동맥초음파 / 갑상선초음파 / 전립선(경복부)초음파" },
      { category: "소화기검사", items: "위내시경 / 대장내시경 (수면비 포함/조직별도추가)" },
      { category: "CT 검사", items: "[선택 1] 뇌 / 폐 / 복부 / 경추 / 요추 / 심장" },
    ],
  },
  {
    name: "탑 VIP (여성)",
    price: "600,000원",
    details: [
      { category: "신체계측", items: "신장 / 체중 / 혈압 / 시력 / 청력 / 색신 / 허리둘레 / 체성분 분석" },
      { category: "혈액검사", items: "일반혈액 / 혈액형 / 혈당 / 간기능 / 이상지질 및 심기능 / 신기능 / 통풍 / 전해질 / 갑상선 / 암표지자 / 면역 / 비타민D / 철 결핍질환" },
      { category: "소변검사", items: "요검사 10종" },
      { category: "기능검사", items: "심전도 / 폐기능 / 골밀도" },
      { category: "영상검사", items: "흉부촬영 / 유방촬영 / 복부초음파 / 갑상선초음파 / 경동맥초음파 / 유방초음파" },
      { category: "소화기검사", items: "위내시경 / 대장내시경 (수면비 포함/조직별도추가)" },
      { category: "CT 검사", items: "[선택 1] 뇌 / 폐 / 복부 / 경추 / 요추 / 심장" },
    ],
  },
];

const addOnCT = [
  { name: "뇌 CT", disease: "뇌출혈, 뇌경색 등 뇌질환 관련", price: "150,000" },
  { name: "복부 CT", disease: "복부 내의 수많은 질환을 정확하게 진단", price: "150,000" },
  { name: "경추 CT", disease: "경추(목)디스크 등 이상유무", price: "150,000" },
  { name: "요추 CT", disease: "요추(허리)디스크 등 이상유무", price: "150,000" },
  { name: "폐 CT", disease: "폐암 및 기타 폐질환 관련", price: "150,000" },
  { name: "심장(관상동맥칼슘스캔) CT", disease: "관상동맥석회화지수 측정 및 평가", price: "200,000" },
  { name: "조영제 추가", disease: "조영제 추가 시", price: "100,000" },
];

const addOnUltra = [
  { name: "갑상선", disease: "갑상선암, 갑상선기능저하증, 기능항진증", price: "40,000" },
  { name: "경동맥", disease: "동맥경화, 심근경색, 뇌출혈 등", price: "40,000" },
  { name: "전립선", disease: "전립선비대증, 전립선암", price: "60,000" },
  { name: "유방", disease: "유방암, 유방질환, 낭종, 섬유선종 등", price: "60,000" },
  { name: "심장", disease: "부정맥, 심장질환, 정맥, 심장판막 등", price: "80,000" },
];

export default function ComprehensiveCheckupPage() {
  return (
    <>
      <PageHeader
        title="종합검진"
        subtitle="정밀 종합건강검진으로 건강을 체계적으로 관리합니다"
      />

      {/* 건강검진센터 소개 */}
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

      {/* WHY 김정재탑내과 */}
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
                  <div className={`grid md:grid-cols-2 gap-8 items-center py-10 ${item.reverse ? "direction-rtl" : ""}`}>
                    <div className={`${item.reverse ? "md:order-2" : "md:order-1"}`}>
                      <div
                        className="w-full h-64 md:h-72 bg-cover bg-center rounded-2xl shadow-md"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                    </div>
                    <div className={`${item.reverse ? "md:order-1" : "md:order-2"}`}>
                      <h3 className={`text-xl md:text-2xl font-bold mb-4 ${item.titleColor}`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 일반종합검진 대상자 */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#f3f4f6" }}>
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block border-2 border-navy-800 text-navy-900 font-bold text-lg md:text-xl px-8 py-3 rounded-full">
                일반종합검진 대상자
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 relative">
              {[
                { image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/cc88a9bbcf570.jpeg", text: "20세 이상 성인\n(정기적 검진)" },
                { image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/747e8bf1cb3a3.jpeg", text: "특정 부위의\n지속적인 통증" },
                { image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/7400da604ad1c.jpeg", text: "혈변, 검은변,\n가는변" },
                { image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/db7cda7066f1d.jpeg", text: "다뇨, 빈뇨 및\n갈증 증상" },
                { image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/cc88a9bbcf570.jpeg", text: "식욕부진과\n체중감소" },
                { image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/747e8bf1cb3a3.jpeg", text: "고혈압 및 당뇨\n만성질환자" },
                { image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/7400da604ad1c.jpeg", text: "심장 두근거림\n가슴 통증" },
                { image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/db7cda7066f1d.jpeg", text: "소화불량,\n변비, 설사" },
              ].map((card, i) => (
                <div key={i} className="flex flex-col items-center relative">
                  {/* 수평 연결선 (마지막 열 제외) */}
                  {(i % 4 !== 3) && (
                    <div className="hidden md:block absolute top-[60px] -right-3 w-6 h-px bg-navy-300 z-10" />
                  )}
                  {/* 수직 연결선 (첫 행만) */}
                  {i < 4 && (
                    <div className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-8 bg-navy-300 z-10" />
                  )}
                  <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white shadow-lg mb-3">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${card.image}')` }}
                    />
                  </div>
                  <div className="bg-[#0b2348] text-white text-center py-2.5 px-4 rounded-xl text-xs font-medium leading-snug whitespace-pre-line min-w-[130px]">
                    {card.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 섹션 2 - 일반종합검진 테이블 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-block bg-[#1b3c76] text-white px-8 py-4 rounded-2xl">
                <h2 className="text-2xl font-bold">일반종합검진</h2>
                <p className="text-sky-200 text-sm mt-1">정확하고 효율적인 1:1 맞춤형 건강검진</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#1b3c76] text-white">
                    <th className="px-5 py-4 text-left text-sm font-semibold w-[200px]">프로그램</th>
                    <th className="px-5 py-4 text-left text-sm font-semibold">세부항목</th>
                    <th className="px-5 py-4 text-right text-sm font-semibold w-[120px]">비용</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg, i) => (
                    <tr key={pkg.name} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      <td className="px-5 py-4 align-top">
                        <p className="font-bold text-navy-900 text-sm">{pkg.name}</p>
                      </td>
                      <td className="px-5 py-4 align-top">
                        <div className="space-y-1.5">
                          {pkg.details.map((d) => (
                            <p key={d.category} className="text-sm">
                              <span className="text-[#1b3c76] font-semibold">{d.category}:</span>{" "}
                              <span className="text-gray-600">{d.items}</span>
                            </p>
                          ))}
                        </div>
                      </td>
                      <td className="px-5 py-4 align-top text-right">
                        <p className="font-bold text-navy-900 text-sm whitespace-nowrap">{pkg.price}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 섹션 3 - 종합검진 추가항목 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-sky-600 text-white text-center py-4 rounded-t-2xl">
              <h2 className="text-xl md:text-2xl font-bold">종합검진 추가항목</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto rounded-b-2xl border border-t-0 border-gray-200 shadow-sm">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-[#1b3c76] text-white">
                    <th className="px-4 py-3 text-left text-xs font-semibold">구분</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold">검사항목</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold">관련질환</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold">비용</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold">탑BASIC·프리미엄</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold">탑VIP</th>
                  </tr>
                </thead>
                <tbody>
                  {/* MD-CT */}
                  {addOnCT.map((item, i) => (
                    <tr key={item.name} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      {i === 0 && (
                        <td className="px-4 py-3 text-sm font-bold text-navy-900 align-top" rowSpan={addOnCT.length}>
                          MD-CT
                        </td>
                      )}
                      <td className="px-4 py-3 text-sm text-navy-800">{item.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{item.disease}</td>
                      <td className="px-4 py-3 text-sm text-right font-semibold text-navy-900">{item.price}</td>
                      {i === 0 && (
                        <>
                          <td className="px-4 py-3 text-center align-middle" rowSpan={addOnCT.length}>
                            <span className="inline-block bg-sky-100 text-sky-700 font-bold text-sm px-3 py-1 rounded-full">30% 할인</span>
                          </td>
                          <td className="px-4 py-3 text-center align-middle" rowSpan={addOnCT.length}>
                            <span className="inline-block bg-gold-100 text-gold-600 font-bold text-sm px-3 py-1 rounded-full">50% 할인</span>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                  {/* 초음파 */}
                  {addOnUltra.map((item, i) => (
                    <tr key={item.name} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      {i === 0 && (
                        <td className="px-4 py-3 text-sm font-bold text-navy-900 align-top border-t-2 border-navy-200" rowSpan={addOnUltra.length}>
                          초음파
                        </td>
                      )}
                      <td className={`px-4 py-3 text-sm text-navy-800 ${i === 0 ? "border-t-2 border-navy-200" : ""}`}>{item.name}</td>
                      <td className={`px-4 py-3 text-sm text-gray-500 ${i === 0 ? "border-t-2 border-navy-200" : ""}`}>{item.disease}</td>
                      <td className={`px-4 py-3 text-sm text-right font-semibold text-navy-900 ${i === 0 ? "border-t-2 border-navy-200" : ""}`}>{item.price}</td>
                      {i === 0 && (
                        <>
                          <td className="px-4 py-3 text-center align-middle border-t-2 border-navy-200" rowSpan={addOnUltra.length}>
                            <span className="inline-block bg-sky-100 text-sky-700 font-bold text-sm px-3 py-1 rounded-full">30% 할인</span>
                          </td>
                          <td className="px-4 py-3 text-center align-middle border-t-2 border-navy-200" rowSpan={addOnUltra.length}>
                            <span className="inline-block bg-gold-100 text-gold-600 font-bold text-sm px-3 py-1 rounded-full">50% 할인</span>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 섹션 4 - 할인혜택 박스 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-[#1b3c76] rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">할인혜택</h2>
              </div>
              <div className="space-y-4">
                {[
                  "예방접종, 수액 : 종합검진 병행 시 20% 할인 혜택",
                  "기능검사 : 종합검진 병행 시 20% 할인 혜택",
                  "종합검진 탑 BASIC, 프리미엄 병행 시 초음파, CT 검사 30% 할인 혜택",
                  "종합검진 탑 VIP 병행 시 초음파, CT 검사 50% 할인 혜택",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-sky-300 font-bold text-sm shrink-0 mt-0.5">0{i + 1}.</span>
                    <p className="text-white/90 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 건강검진 순서 안내 - 프리미엄 */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #0b2348 0%, #132f5e 50%, #0a1f3d 100%)" }}>
        {/* 배경 장식 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-600 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-[length:32px_32px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sky-300/60 text-xs tracking-[0.3em] uppercase mb-3 font-medium">CHECKUP PROCESS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                김정재탑내과 건강검진 순서 안내
              </h2>
              <div className="w-16 h-0.5 bg-sky-400 mx-auto mt-5" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { num: "01", title: "예약", sub: "원무접수·수납" },
              { num: "02", title: "등록 및 상담", sub: "문진표 작성" },
              { num: "03", title: "혈압 및 신체계측", sub: null },
              { num: "04", title: "혈액검사 및 소변검사", sub: null },
              { num: "05", title: "탈의", sub: null },
              { num: "06", title: "X-RAY 촬영", sub: null },
              { num: "07", title: "초음파 검사", sub: "대상자" },
              { num: "08", title: "위/대장 내시경 검사", sub: null },
              { num: "09", title: "상담/진료", sub: null },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="group relative">
                  {/* 화살표 연결선 */}
                  {i < 8 && (i % 3 !== 2) && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 items-center">
                      <svg className="w-5 h-5 text-sky-400/50 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}

                  <div className="bg-white/[0.07] backdrop-blur-md border border-white/[0.12] rounded-2xl p-6 hover:bg-sky-500/20 hover:border-sky-400/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 cursor-default h-full">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl font-black text-sky-400 leading-none group-hover:text-white transition-colors duration-500 shrink-0">
                        {step.num}
                      </span>
                      <div className="pt-1">
                        <h3 className="text-white font-bold text-base leading-tight group-hover:text-white">
                          {step.title}
                        </h3>
                        {step.sub && (
                          <p className="text-sky-300/50 text-sm mt-1 group-hover:text-sky-200/70 transition-colors">
                            [{step.sub}]
                          </p>
                        )}
                      </div>
                    </div>
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
