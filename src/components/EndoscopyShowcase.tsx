"use client";

import { useEffect, useRef, useState } from "react";

const features = [
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
    label: "매월 1, 3번째 주\n일요일 예약검진",
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
];

const TYPING_TEXT = "KIMTOP INTERNAL MEDICINE CLINIC";

export default function EndoscopyShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-28 md:py-36 overflow-hidden"
    >
      {/* Ken Burns background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat endoscopy-ken-burns"
        style={{
          backgroundImage:
            "url('https://cdn.imweb.me/upload/S20260108b9005a7eb2710/5fa93cc54b985.jpeg')",
        }}
      />

      {/* Asymmetric gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900/70" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="endoscopy-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Clinic name */}
        <p className="text-sky-300/70 text-xs md:text-sm tracking-[0.3em] uppercase mb-5 font-medium">
          {TYPING_TEXT}
        </p>

        {/* Subtitle */}
        <p className="text-gray-300 text-base md:text-lg mb-4">
          초정밀 내시경 장비를 통한 안전한 검진 시행
        </p>

        {/* Main title with neon glow */}
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-8 md:mb-16">
          전문{" "}
          <span className="endoscopy-neon-text">내시경</span>
          센터
        </h2>

        {/* Feature cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((item, i) => (
            <div
              key={item.label}
              className={`group relative rounded-2xl py-7 px-3 cursor-default transition-all duration-500 ease-out
                bg-white/[0.07] backdrop-blur-md border border-white/[0.12]
                hover:-translate-y-2 hover:bg-white/[0.14] hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                transitionDelay: isVisible ? `${i * 0.15}s` : "0s",
              }}
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-sky-500/15 border border-sky-400/25 flex items-center justify-center mx-auto mb-4 text-sky-400 group-hover:bg-sky-400 group-hover:text-white group-hover:border-sky-400 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-500">
                <div className="transition-transform duration-500 group-hover:rotate-[360deg]">
                  {item.icon}
                </div>
              </div>

              <p className="text-white text-sm font-medium leading-snug whitespace-pre-line">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
