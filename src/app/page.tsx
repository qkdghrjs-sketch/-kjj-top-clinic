"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HeroCarousel from "@/components/HeroCarousel";
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
                desc: "체계적이고 정밀한 검진 시스템을 통해 질병 조기발견 및 치료",
                image:
                  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/cc88a9bbcf570.jpeg",
                href: "/medical-info",
              },
              {
                title: "내시경클리닉",
                desc: "최신 장비로 위·대장내시경 정확하고 편안하게",
                image:
                  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/747e8bf1cb3a3.jpeg",
                href: "/medical-info",
              },
              {
                title: "만성질환클리닉",
                desc: "고혈압·당뇨·고지혈증 환자 개인별 체계적인 관리",
                image:
                  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/7400da604ad1c.jpeg",
                href: "/medical-info",
              },
              {
                title: "특수클리닉",
                desc: "건강하고 더 나은 삶을 위한 비만·수액·탈모 클리닉",
                image:
                  "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/db7cda7066f1d.jpeg",
                href: "/medical-info",
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
                      <p className="text-white text-sm leading-relaxed font-medium mb-3">
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
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/5fa93cc54b985.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/70 to-navy-900/90" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="text-sky-300/70 text-xs md:text-sm tracking-[0.25em] uppercase mb-4 font-medium">
              KIMTOP INTERNAL MEDICINE CLINIC
            </p>
            <p className="text-gray-300 text-base md:text-lg mb-3">
              초정밀 내시경 장비를 통한 안전한 검진 시행
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-14">
              전문{" "}
              <span className="text-sky-400">내시경</span>
              센터
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                {
                  label: "소화기내시경\n세부전문의",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l1.5 1.5L14 9" />
                    </svg>
                  ),
                },
                {
                  label: "대학병원급\n의료시설 구축",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m4-10h1m4 0h1m-5 4h1m4 0h1M9 7h1m4 0h1" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4" />
                    </svg>
                  ),
                },
                {
                  label: "검사 당일\n용종절제 가능",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  label: "멸균 소독\n안전 검사",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  label: "매주 일요일\n검진",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  label: "1회용\n기구 사용",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 11.625h4.5m-4.5 2.25h4.5m2.25 0l1.5 1.5 3-3M3.375 3h4.5" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl py-6 px-3 hover:bg-sky-500/30 hover:border-sky-400/40 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  <div className="w-14 h-14 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center mx-auto mb-4 text-sky-400 group-hover:bg-sky-400 group-hover:text-white group-hover:border-sky-400 transition-all duration-300">
                    {item.icon}
                  </div>
                  <p className="text-white text-sm font-medium leading-snug whitespace-pre-line">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

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
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/64d10a5e4bfdc.jpeg",
                desc: "내시경 검사 직후 효소 세정액이나 멸균증류수를 묻힌 거즈로 내시경 표면의 이물을 제거합니다. 내시경 선단을 효소 세정액에 담그고 세정액을 흡입하고 공기를 불어넣는 작업을 반복하여 겸자공에 남아있는 오염물질을 제거합니다.",
              },
              {
                num: "02",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/650558a3c5b73.jpeg",
                desc: "분리 가능한 부품들은 모두 제거하고 새는 곳이 있는지 확인하며, 세척액을 이용하여 내시경을 세척합니다. 또한 흡인 채널과 겸자공, 시경과 분리된 부품들은 모두 솔을 이용하여 세척하며, 깨끗한 물을 이용해 남아있는 세척액을 모든 부위에서 완전히 씻어냅니다.",
              },
              {
                num: "03",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/c8661c07a2f02.jpeg",
                desc: "세정액(FDA 승인제품)에 내시경과 부속 기구들을 완전히 담그고, 겸자공에도 소독액을 주입합니다. 제조사 권장 기준으로 소독액의 조건과 시간을 맞춰 일관된 소독과정을 거칩니다.",
              },
              {
                num: "04",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/747e8bf1cb3a3.jpeg",
                desc: "장비에 남아있는 소독액은 피부와 점막에 상해를 줄 수 있기 때문에 필터를 통해 여과된 깨끗한 물을 이용하여 내시경과 채널을 충분히 씻어냅니다.",
              },
              {
                num: "05",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/7400da604ad1c.jpeg",
                desc: "압축된 공기와 70~90%의 에틸알코올을 각 채널에 관통시켜 남은 물기를 제거합니다. 세균은 습기가 있는 부분에서 증식이 가능하기 때문에 내시경을 완전히 건조시켜 감염을 예방할 수 있습니다.",
              },
              {
                num: "06",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/db7cda7066f1d.jpeg",
                desc: "소독된 내시경이 재오염되는 것을 방지하도록 내시경은 환기가 잘되는 전용장에 수직으로 세워 걸어 바닥이 닿지 않는 곳에 보관합니다.",
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
                    <p className="text-gray-600 text-sm leading-relaxed mt-3">
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
      <section className="py-20 md:py-28 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "인력",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/5fa93cc54b985.jpeg",
                desc: "소화기내시경 세부 전문의, 위대장내시경 인증 전문의 선종발견율 49%",
              },
              {
                num: "02",
                title: "시설 및 장비",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/650558a3c5b73.jpeg",
                desc: "대학병원급 의료기구 보유 및 편의시설 완비",
              },
              {
                num: "03",
                title: "과정",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/c8661c07a2f02.jpeg",
                desc: "검사 전, 진행 중, 검사 후 전 과정 상세 설명 제공",
              },
              {
                num: "04",
                title: "성과지표",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/747e8bf1cb3a3.jpeg",
                desc: "내시경 결과 보고서 필수 항목 기록 및 철저한 장청소 교육 실시",
              },
              {
                num: "05",
                title: "소독 및 감염관리",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/7400da604ad1c.jpeg",
                desc: "오픈세척실 운영 및 체계적 소독 시스템 구축",
              },
              {
                num: "06",
                title: "진정(수면)내시경",
                image: "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/db7cda7066f1d.jpeg",
                desc: "의료진 전원 진정내시경 관련 교육 이수 완료",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 80}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group">
                  <div
                    className="h-44 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-sky-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {item.num}
                      </div>
                      <h3 className="text-white font-bold text-base">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 프리미엄 의료장비 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-sky-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                PREMIUM MEDICAL DEVICE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900">
                프리미엄 장비를 통한 효과적인 치료
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-0">
            {/* 내시경 장비 */}
            <ScrollReveal>
              <div className="md:pr-10 md:border-r border-gray-200">
                <div className="rounded-2xl overflow-hidden mb-6 shadow-md h-56">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/64d10a5e4bfdc.jpeg')",
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  올림푸스 내시경 CV-290
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "내시경 검사를 위한 최적화 FICE프로세스 장착",
                    "진일보된 이미지 기술로 깨끗한 이미지 제공",
                    "뛰어난 사용성과 안전성을 갖는 인터페이스",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-sky-500 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* 초음파 장비 */}
            <ScrollReveal delay={150}>
              <div className="md:pl-10">
                <div className="rounded-2xl overflow-hidden mb-6 shadow-md h-56">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/650558a3c5b73.jpeg')",
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  최상급 초음파 LOGIQ P9
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "최신 소프트웨어 장착으로 더 정밀한 진단 가능",
                    "빠른 형상화를 통해 질환의 정확한 위치 파악",
                    "뛰어난 사양이 탑재된 복부 전용 초음파",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-sky-500 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
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

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-sky-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-400 rounded-full blur-3xl"></div>
        </div>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              건강이 걱정되시나요?
            </h2>
            <p className="text-navy-300 mb-8 text-lg">
              전문의와 상담하고 정확한 진단을 받아보세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:02-6798-8880"
                className="bg-gold-400 text-navy-900 font-bold px-8 py-3.5 rounded-lg hover:bg-gold-500 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
              >
                전화 예약하기
              </a>
              <Link
                href="/medical-info"
                className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                진료시간 확인
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>


    </>
  );
}
