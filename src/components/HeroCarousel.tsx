"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { handleReservation } from "@/utils/reservation";

interface SlideData {
  image: string;
  badgeEn: string;
  badgeKo: string;
  titleParts: { text: string; highlight?: boolean }[];
  titleLine2?: { text: string; highlight?: boolean }[];
  subtitle: string;
  tagLabel: string;
  tags: string[];
  buttonText: string;
  buttonHref: string;
}

const slides: SlideData[] = [
  {
    image:
      "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/64d10a5e4bfdc.jpeg",
    badgeEn: "MAIN SERVICES",
    badgeKo: "진료안내",
    titleParts: [
      { text: "건강검진 " },
      { text: "위·대장내시경", highlight: true },
    ],
    subtitle: "검진부터 내시경, 만성질환 관리까지 한 동선에서 연결합니다.",
    tagLabel: "진료과목",
    tags: [
      "건강검진",
      "위·대장내시경",
      "고지혈증",
      "갑상선",
      "이비인후과",
      "비만",
      "심장",
      "폐",
    ],
    buttonText: "내시경클리닉 보기 →",
    buttonHref: "/endoscopy/stomach",
  },
  {
    image:
      "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/dbe9f8335e327.jpeg",
    badgeEn: "CHECKUP & ENDOSCOPY",
    badgeKo: "검사 중심",
    titleParts: [
      { text: "정확한 검사, " },
      { text: "쉬운 결과", highlight: true },
    ],
    subtitle:
      "건강검진 · 위·대장내시경을 중심으로 진단의 기준을 세웁니다.",
    tagLabel: "핵심 진료",
    tags: ["건강검진", "위내시경", "대장내시경", "심장", "폐"],
    buttonText: "검진센터 보기 →",
    buttonHref: "/checkup/cancer",
  },
  {
    image:
      "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/8da82dc9958a8.jpeg",
    badgeEn: "CHRONIC DISEASE",
    badgeKo: "만성질환",
    titleParts: [
      { text: "만성질환, " },
      { text: "꾸준한 관리", highlight: true },
      { text: "가 답입니다" },
    ],
    subtitle:
      "만성질환은 한 번의 치료보다 지속적인 관리가 중요합니다.",
    tagLabel: "만성질환",
    tags: ["고혈압", "당뇨", "고지혈증", "골다공증", "심장 폐질환"],
    buttonText: "만성질환클리닉 보기 →",
    buttonHref: "/chronic/hypertension",
  },
];

function TitleLine({
  parts,
}: {
  parts: { text: string; highlight?: boolean }[];
}) {
  return (
    <>
      {parts.map((p, i) =>
        p.highlight ? (
          <span key={i} className="text-sky-400" style={{ fontSize: 'inherit' }}>
            {p.text}
          </span>
        ) : (
          <span key={i} className="text-white" style={{ fontSize: 'inherit' }}>
            {p.text}
          </span>
        )
      )}
    </>
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[70vh] md:h-[88vh] overflow-hidden">
      {/* Slides background */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1)" : "scale(1.05)",
            zIndex: i === current ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${s.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-navy-900/30" />
        </div>
      ))}

      {/* Dot pattern */}
      <div className="absolute inset-0 z-[2] opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-[3] h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center max-w-3xl lg:max-w-5xl mx-auto">
            {/* Badge */}
            <div
              key={`badge-${current}`}
              className="animate-fade-in-up mb-4 md:mb-6"
            >
              <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 sm:px-5 sm:py-2">
                <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-xs sm:text-sm md:text-lg text-white/80 font-medium tracking-wider uppercase">
                  {slide.badgeEn}
                </span>
                <span className="w-px h-3.5 md:h-5 bg-white/30" />
                <span className="text-xs sm:text-sm md:text-lg text-sky-300 font-medium">
                  {slide.badgeKo}
                </span>
              </div>
            </div>

            {/* Title */}
            <div key={`title-${current}`} className="animate-fade-in-up">
              <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3 md:mb-5">
                <TitleLine parts={slide.titleParts} />
                {slide.titleLine2 && (
                  <>
                    <br />
                    <TitleLine parts={slide.titleLine2} />
                  </>
                )}
              </h1>
            </div>

            {/* Subtitle */}
            <div
              key={`sub-${current}`}
              className="animate-fade-in-up animation-delay-200"
            >
              <p className="text-sm sm:text-lg md:text-2xl text-gray-300/90 mb-4 md:mb-6 leading-relaxed">
                {slide.subtitle}
              </p>
            </div>

            {/* Tags */}
            <div
              key={`tags-${current}`}
              className="animate-fade-in-up animation-delay-400"
            >
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-2.5 mb-6 md:mb-8">
                <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full bg-sky-500/20 text-sky-300 text-xs sm:text-sm md:text-base font-semibold border border-sky-400/30">
                  {slide.tagLabel}
                </span>
                {slide.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full bg-white/8 backdrop-blur-sm text-white/70 text-xs sm:text-sm md:text-base border border-white/10 hover:bg-sky-500/20 hover:text-sky-300 hover:border-sky-400/30 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div
              key={`btn-${current}`}
              className="animate-fade-in-up animation-delay-600"
            >
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                <Link
                  href={slide.buttonHref}
                  className="group border-2 border-white/40 text-white font-semibold px-5 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base md:text-lg whitespace-nowrap"
                >
                  {slide.buttonText}
                </Link>
                <button
                  onClick={handleReservation}
                  className="bg-sky-500 text-white font-semibold px-5 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-lg hover:bg-sky-400 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/30 text-sm sm:text-base md:text-lg cursor-pointer whitespace-nowrap"
                >
                  전화 예약: 02-2698-8880
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-[4] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        aria-label="이전 슬라이드"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-[4] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        aria-label="다음 슬라이드"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[4] flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`relative transition-all duration-300 ${
              i === current ? "w-10" : "w-3 hover:scale-125"
            } h-3 rounded-full`}
            aria-label={`슬라이드 ${i + 1}`}
          >
            <div
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-sky-400 shadow-lg shadow-sky-400/30"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
            {i === current && (
              <div
                className="absolute inset-0 rounded-full bg-white/30 origin-left"
                style={{ animation: "progressBar 4s linear infinite" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[3]" />

      <style jsx>{`
        @keyframes progressBar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
