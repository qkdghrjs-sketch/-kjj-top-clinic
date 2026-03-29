"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { handleReservation } from "@/utils/reservation";

type Feature = string | { title: string; sub: string };

interface WhyKimtopProps {
  box: string;
  overlay: string;
  description: string;
  bottomText?: string;
  features: Feature[];
  image?: string;
}

const featureIcons = [
  <svg key="0" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
];

const DEFAULT_IMAGE = "https://cdn.imweb.me/upload/S20260108b9005a7eb2710/41981d2e43917.jpeg";

export default function WhyKimtop({ box, overlay, description, bottomText, features, image }: WhyKimtopProps) {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      {/* Decorative blurs */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-sky-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gold-400 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[45%_55%] gap-8 md:gap-10 items-center">
          {/* Left - Clipped image (top on mobile) */}
          <ScrollReveal>
            <div className="relative">
              <div
                className="w-full h-[160px] sm:h-[200px] md:h-[240px] bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage:
                    `url('${image || DEFAULT_IMAGE}')`,
                  clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 95%)",
                }}
              />
              {/* Blue overlay */}
              <div
                className="absolute inset-0 bg-sky-500/20"
                style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 95%)" }}
              />
              {/* Gold line */}
              <div className="absolute bottom-0 left-0 w-3/4 h-[3px] bg-gradient-to-r from-gold-400 to-transparent" />
              {/* Overlay text */}
              <div className="absolute bottom-4 sm:bottom-6 left-0 bg-navy-900/85 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3">
                <p className="text-white font-semibold text-sm sm:text-base">{overlay}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal delay={150}>
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5">
                <span className="text-white text-xl sm:text-3xl md:text-4xl font-bold italic">
                  WHY KIMTOP
                </span>
                <span className="inline-block bg-sky-500 text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg whitespace-nowrap">
                  {box}
                </span>
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-3 whitespace-pre-line">
                {description}
              </p>

              <div className="w-20 h-[2px] bg-gradient-to-r from-gold-400 to-transparent mb-3" />

              <div className="grid grid-cols-2 gap-2 mb-4">
                {features.map((feature, i) => {
                  const title = typeof feature === "string" ? feature : feature.title;
                  const sub = typeof feature === "string" ? null : feature.sub;
                  return (
                    <div key={title} className="flex items-center gap-1.5 sm:gap-2 bg-white/[0.06] backdrop-blur-sm rounded-lg px-2 sm:px-3 py-2 border border-white/[0.08]">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0 text-sky-400 [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-4 sm:[&>svg]:h-4">
                        {featureIcons[i % featureIcons.length]}
                      </div>
                      <div className="min-w-0">
                        <span className="text-white font-medium text-xs sm:text-sm">{title}</span>
                        {sub && <p className="text-white/60 text-[10px] sm:text-xs truncate">{sub}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>

              {bottomText && (
                <p className="text-white/80 text-base leading-relaxed mb-6 whitespace-pre-line">
                  {bottomText}
                </p>
              )}

              <button
                onClick={handleReservation}
                className="inline-flex items-center gap-2 bg-gold-400 text-navy-900 font-bold px-6 py-3 rounded-lg hover:bg-gold-500 hover:-translate-y-0.5 transition-all duration-300 shadow-lg text-sm cursor-pointer"
              >
                지금 바로 예약하기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
