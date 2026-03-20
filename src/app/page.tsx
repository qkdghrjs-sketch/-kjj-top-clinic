"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HeroCarousel from "@/components/HeroCarousel";
import EndoscopyShowcase from "@/components/EndoscopyShowcase";
import WhySection from "@/components/WhySection";
import GalleryBanner from "@/components/GalleryBanner";


export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* 슬로건 배너 */}
      <section className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white text-base md:text-lg leading-relaxed">
            환자를 우선하고, 확신있는 진료로 답하는{" "}
            <strong className="font-bold text-white">
              든든한 당신의 건강 주치의
            </strong>
          </p>
        </div>
      </section>

      {/* 4개 진료센터 카드 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "건강검진센터",
                desc: "체계적이고 정밀한 검진 시스템을 통해\n질병 조기발견 및 치료",
                image:
                  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/cc88a9bbcf570.jpeg",
                href: "/checkup/cancer",
              },
              {
                title: "내시경클리닉",
                desc: "최신 장비로 위·대장내시경\n정확하고 편안하게",
                image:
                  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/747e8bf1cb3a3.jpeg",
                href: "/endoscopy/gastroscopy",
              },
              {
                title: "만성질환클리닉",
                desc: "고혈압·당뇨·고지혈증 환자\n개인별 체계적인 관리",
                image:
                  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/7400da604ad1c.jpeg",
                href: "/chronic/hypertension",
              },
              {
                title: "특수클리닉",
                desc: "건강하고 더 나은 삶을 위한\n비만·수액·탈모 클리닉",
                image:
                  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/db7cda7066f1d.jpeg",
                href: "/special/obesity",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <div className="group relative rounded-2xl overflow-hidden h-72 cursor-default shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${card.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/30 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-between p-5">
                    <div>
                      <span className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {card.title}
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-sm leading-relaxed font-medium mb-3 whitespace-pre-line">
                        {card.desc}
                      </p>
                      <Link
                        href={card.href}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-white border border-white/50 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white hover:text-sky-600 transition-all duration-300"
                      >
                        더보기
                        <span className="text-xs">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 전문 내시경센터 배너 */}
      <EndoscopyShowcase />

      {/* 꼼꼼한 내시경소독 6STEP 과정 */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-2xl md:text-4xl font-bold text-navy-900">
                꼼꼼한{" "}
                <span className="text-sky-500">내시경소독</span>{" "}
                6STEP 과정
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/7d938a3dc70c3.jpeg",
                desc: "내시경 검사 직후 효소 세정액으로\n표면 이물을 제거합니다.\n세정액 흡입 후 오염물질을 제거합니다.",
              },
              {
                num: "02",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/747e8bf1cb3a3.jpeg",
                desc: "분리 가능한 부품을 모두 제거하고\n세척액으로 내시경을 세척합니다.\n깨끗한 물로 세척액을 완전히 씻어냅니다.",
              },
              {
                num: "03",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/9eb2264dd6ff8.jpeg",
                desc: "FDA 승인 세정액에 내시경을 완전히 담그고\n겸자공에 소독액을 주입합니다.\n제조사 기준으로 일관된 소독을 진행합니다.",
              },
              {
                num: "04",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/b3d80f102a407.jpeg",
                desc: "소독액은 피부에 상해를 줄 수 있어\n필터로 여과된 깨끗한 물로\n내시경과 채널을 충분히 씻어냅니다.",
              },
              {
                num: "05",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/650558a3c5b73.jpeg",
                desc: "압축 공기와 에틸알코올로\n남은 물기를 완전히 제거합니다.\n건조 후 감염을 예방합니다.",
              },
              {
                num: "06",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/5ae7ca4e313d6.jpeg",
                desc: "소독된 내시경이 재오염되지 않도록\n환기가 잘되는 전용장에 수직으로 세워\n바닥에 닿지 않게 보관합니다.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div
                    className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${step.image}')` }}
                  />
                  <div className="p-5 text-center">
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white font-bold text-sm flex items-center justify-center mx-auto -mt-10 relative z-10 border-4 border-white shadow-md">
                      {step.num}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mt-3 whitespace-pre-line">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 우수내시경실 인증 */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#0b2348" }}>
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold-400 rounded-full blur-[100px]"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "인력",
                desc: "소화기내시경 세부전문의, 선종발견율 49%",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l1.5 1.5L14 9" />
                  </svg>
                ),
              },
              {
                num: "02",
                title: "시설 및 장비",
                desc: "대학병원급 의료기구 보유 및 편의시설 완비",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m4-10h1m4 0h1m-5 4h1m4 0h1M9 7h1m4 0h1" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4" />
                  </svg>
                ),
              },
              {
                num: "03",
                title: "과정",
                desc: "검사 전·중·후 전 과정 상세 설명 제공",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4" />
                  </svg>
                ),
              },
              {
                num: "04",
                title: "성과지표",
                desc: "내시경 보고서 필수 항목 기록 및 장청소 교육 실시",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
              },
              {
                num: "05",
                title: "소독 및 감염관리",
                desc: "오픈세척실 운영 및 체계적 소독 시스템 구축",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                num: "06",
                title: "진정(수면)내시경",
                desc: "의료진 전원 진정내시경 교육 이수 완료",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 100}>
                <div className="group bg-white/[0.06] backdrop-blur-md border border-white/[0.1] rounded-2xl p-7 text-center cursor-default transition-all duration-400 hover:-translate-y-2 hover:border-sky-400/50 hover:bg-white/[0.12] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
                  {/* Icon */}
                  <div className="text-sky-400 group-hover:text-gold-400 transition-colors duration-400 flex justify-center mb-5">
                    {item.icon}
                  </div>

                  {/* Number badge */}
                  <div className="w-8 h-8 rounded-full bg-sky-500 text-white font-bold text-xs flex items-center justify-center mx-auto mb-4">
                    {item.num}
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 프리미엄 의료장비 */}
      <section className="relative w-screen overflow-hidden flex items-center" style={{ minHeight: "560px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/f3ebe47b9f4df.png')",
          }}
        />
        <div className="absolute inset-0 bg-navy-900/75" />

        <div className="relative z-10 w-full py-16 md:py-24 px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block bg-sky-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                PREMIUM MEDICAL DEVICE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                프리미엄 장비를 통한 효과적인 치료
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10 md:gap-24 max-w-6xl mx-auto">
            {/* 좌측 - 초음파 장비 */}
            <ScrollReveal>
              <div className="md:pr-12 md:border-r border-white/20 text-center md:text-right">
                <h3 className="text-xl font-bold text-white mb-5">
                  최상급 초음파 LOGIQ P9
                </h3>
                <ul className="space-y-3">
                  {[
                    "최신 소프트웨어 장착으로 더 정밀한 진단 가능",
                    "빠른 형상화를 통해 질환의 정확한 위치 파악",
                    "뛰어난 사양이 탑재된 복부 전용 초음파",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-white/80 text-sm md:justify-end"
                    >
                      <span className="text-sky-400 font-bold shrink-0 mt-px">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* 우측 - 내시경 장비 */}
            <ScrollReveal delay={150}>
              <div className="md:pl-12 text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-5">
                  올림푸스 내시경 CV-290
                </h3>
                <ul className="space-y-3">
                  {[
                    "내시경 검사를 위한 최적화 FICE프로세스 장착",
                    "진일보된 이미지 기술로 깨끗한 이미지 제공",
                    "뛰어난 사용성과 안전성을 갖는 인터페이스",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-white/80 text-sm"
                    >
                      <span className="text-sky-400 font-bold shrink-0 mt-px">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 병원 3가지 강점 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <ScrollReveal>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="w-14 h-14 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l1.5 1.5L14 9" />
                  </svg>
                </div>
                <div className="w-10 h-px bg-navy-200 mb-4"></div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">
                  소화기내시경 세부전문의
                </h3>
                <p className="text-gray-400 text-sm">숙련된 의료 서비스</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="w-14 h-14 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0 0V9m0 3h3m-3 0H9" />
                  </svg>
                </div>
                <div className="w-10 h-px bg-navy-200 mb-4"></div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">
                  검사 당일 용종절제 가능
                </h3>
                <p className="text-gray-400 text-sm">ONE-STOP 의료서비스</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="w-14 h-14 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.95l-.71-.71M4.05 4.05l-.71-.71" />
                    <circle cx="12" cy="12" r="4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 12h1v2h2v-2h1" />
                  </svg>
                </div>
                <div className="w-10 h-px bg-navy-200 mb-4"></div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">
                  멸균 소독 안전 검사 및
                </h3>
                <p className="text-gray-400 text-sm">
                  1회용 기구 사용의 안전 철칙
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHY 김정재탑내과 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <WhySection />
      </section>

      {/* 병원 둘러보기 */}
      <GalleryBanner />


    </>
  );
}
