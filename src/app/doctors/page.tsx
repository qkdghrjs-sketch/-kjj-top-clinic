"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

export default function DoctorsPage() {
  return (
    <>
      <PageHeader
        title="의료진 소개"
        subtitle="전문성과 따뜻함을 겸비한 의료진을 소개합니다."
      />

      {/* ===== 김정재 원장 ===== */}
      <section className="py-10 sm:py-16 lg:py-28 bg-white">
        <div className="max-w-[1180px] mx-auto px-5 lg:px-6">
          {/* Kicker */}
          <ScrollReveal>
            <div className="flex items-center gap-3.5 mb-9">
              <div className="w-14 h-0.5 bg-navy-900 opacity-90" />
              <span className="text-sm font-[850] tracking-[0.22em] text-navy-900 uppercase">
                DOCTOR PROFILE
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-9 lg:gap-14 items-start">
            {/* Left — Portrait */}
            <ScrollReveal>
              <aside className="lg:sticky lg:top-24 max-w-[480px] mx-auto lg:mx-0">
                <div className="border border-gray-100 bg-white rounded-2xl overflow-hidden shadow-[0_22px_70px_-42px_rgba(2,6,23,.45)]">
                  <div className="relative aspect-[4/5.3] overflow-hidden bg-gray-50 p-6">
                    <Image
                      src="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/560df20de82d6.jpeg"
                      alt="김정재 원장님 프로필"
                      fill
                      className="object-contain object-center"
                      sizes="(max-width:1024px) 420px, 360px"
                    />
                  </div>
                  <div className="px-5 py-4 border-t border-gray-50 bg-gradient-to-b from-white to-[#fbfcfe]">
                    <p className="text-[15px] font-extrabold text-gray-900 tracking-tight">
                      김정재 원장
                    </p>
                    <p className="text-sm text-gray-500 font-semibold mt-1.5 leading-relaxed">
                      내과 · 소화기 · 내시경 전문의
                    </p>
                  </div>
                </div>
              </aside>
            </ScrollReveal>

            {/* Right — Content */}
            <div>
              {/* Header */}
              <ScrollReveal>
                <header className="pb-6 border-b border-gray-900/10">
                  <h2 className="text-[26px] sm:text-[34px] lg:text-[42px] font-[950] tracking-tight text-gray-900 leading-tight flex flex-wrap items-baseline gap-2.5 lg:gap-3.5">
                    김정재
                    <span className="text-lg font-extrabold text-navy-800 tracking-tight opacity-95">
                      내과 · 소화기 · 내시경 전문의
                    </span>
                  </h2>
                  <p className="mt-3 text-[15px] text-gray-500 font-semibold leading-relaxed">
                    가천대 길병원 소화기내과 임상교수 역임
                  </p>

                  <div className="flex flex-wrap gap-2.5 mt-4">
                    {[
                      "위·대장내시경 세부 전문",
                      "심장초음파 / 복부초음파",
                      "중환자 진료 경험",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-2 border border-gray-100 rounded-full bg-white text-sm text-gray-500 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </header>
              </ScrollReveal>

              {/* Statement */}
              <ScrollReveal delay={100}>
                <div className="mt-7 bg-[#f6f8fb] border border-gray-100 rounded-2xl px-6 lg:px-7 py-6">
                  <h3 className="text-lg font-black text-gray-900 tracking-tight mb-2.5">
                    진료 철학
                  </h3>
                  <p className="text-[15.5px] leading-[1.85] text-gray-800 font-semibold">
                    경제적으로 어려운 시기,
                    <br />
                    <strong className="text-navy-800 font-black">
                      건강이라는 가장 중요한 자산
                    </strong>
                    을
                    <br />
                    정직하게 지켜드리는 든든한 지역 주치의가 되겠습니다.
                  </p>
                  <p className="text-[15.5px] leading-[1.85] text-gray-800 font-semibold mt-3">
                    대학병원 임상교수로서
                    <br />
                    다양한 케이스를 진단하며 쌓은 경험을 바탕으로,
                    <br />
                    <strong className="text-navy-800 font-black">
                      꼭 필요한 검사와 치료
                    </strong>
                    만을 제안하겠습니다.
                    <br />
                    과잉 진료에 대한 불안함 없이,
                    <br />
                    가족을 대하는 마음으로 곁을 지키겠습니다.
                  </p>
                </div>
              </ScrollReveal>

              {/* Blocks */}
              <div className="mt-7 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-4">
                <ScrollReveal delay={150}>
                  <div className="border border-gray-100 rounded-2xl bg-white p-5 lg:p-6 h-full">
                    <h4 className="flex items-center gap-2.5 text-base font-black text-gray-900 tracking-tight mb-4">
                      <span className="w-2.5 h-2.5 rounded-sm bg-navy-900 opacity-90" />
                      주요 약력 및 자격
                    </h4>
                    <ul className="space-y-2.5">
                      {[
                        { bold: "가천대 길병원", text: " 소화기내과 임상교수 역임" },
                        { bold: "내과 전문의", text: " 자격 취득" },
                        { bold: "소화기 내과 전문의", text: " 자격 취득" },
                        { bold: "위·대장 세부 내시경 전문의", text: " 자격 취득" },
                        { bold: "심장초음파 / 복부초음파", text: " 인증의" },
                        { bold: "", text: "전) 코로나 19 중환자실 전담의" },
                        { bold: "", text: "전) 심장 · 호흡기 · 응급 중환자실 전담의" },
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="relative pl-3.5 text-base leading-relaxed text-gray-800 font-semibold"
                        >
                          <span className="absolute left-0 top-[0.62em] w-1.5 h-1.5 rounded-sm bg-navy-900/85" />
                          {item.bold && (
                            <strong className="font-black text-gray-900">
                              {item.bold}
                            </strong>
                          )}
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="border border-gray-100 rounded-2xl bg-white p-5 lg:p-6 h-full">
                    <h4 className="flex items-center gap-2.5 text-base font-black text-gray-900 tracking-tight mb-4">
                      <span className="w-2.5 h-2.5 rounded-sm bg-navy-900 opacity-90" />
                      전문 학회 활동
                    </h4>
                    <ul className="space-y-2.5">
                      {[
                        "대한내과학회 정회원",
                        "대한간학회 정회원",
                        "대한심초음파학회 정회원",
                        "대한소화기내시경학회 정회원",
                        "대한소화기협회 정회원",
                        "대한내분비학회 정회원",
                        "대한고혈압학회 정회원",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="relative pl-3.5 text-base leading-relaxed text-gray-800 font-semibold"
                        >
                          <span className="absolute left-0 top-[0.62em] w-1.5 h-1.5 rounded-sm bg-navy-900/85" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
