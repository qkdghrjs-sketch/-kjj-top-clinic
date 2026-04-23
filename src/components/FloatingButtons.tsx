"use client";

import { useState, useCallback } from "react";
import { handleReservation } from "@/utils/reservation";

type TooltipId = "blog" | "phone" | "kakao" | null;

const BLOG_URL = "https://blog.naver.com/dr_gastroboom";
const KAKAO_URL = "https://pf.kakao.com/_GdEZX";

function isMobile() {
  return window.innerWidth < 640;
}

export default function FloatingButtons() {
  const [activeTooltip, setActiveTooltip] = useState<TooltipId>(null);

  const handleBlogClick = useCallback(() => {
    if (isMobile()) {
      window.open(BLOG_URL, "_blank", "noopener,noreferrer");
    } else {
      setActiveTooltip((prev) => (prev === "blog" ? null : "blog"));
    }
  }, []);

  const handleKakaoClick = useCallback(() => {
    if (isMobile()) {
      window.open(KAKAO_URL, "_blank", "noopener,noreferrer");
    } else {
      setActiveTooltip((prev) => (prev === "kakao" ? null : "kakao"));
    }
  }, []);

  return (
    <div className="fixed bottom-[316px] right-3 sm:bottom-[324px] sm:right-6 z-50 flex flex-col gap-2 sm:gap-3">
      {/* 블로그 */}
      <div className="relative">
        {activeTooltip === "blog" && (
          <Tooltip
            text="네이버 블로그로 이동합니다"
            href={BLOG_URL}
            external
            onClose={() => setActiveTooltip(null)}
          />
        )}
        <button
          onClick={handleBlogClick}
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
          style={{ backgroundColor: "#03C75A" }}
          aria-label="블로그 바로가기"
        >
          <span className="text-white font-extrabold text-2xl leading-none">N</span>
        </button>
      </div>

      {/* 전화예약 */}
      <div className="relative">
        <button
          onClick={handleReservation}
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
          aria-label="전화예약"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      </div>

      {/* 카카오톡 */}
      <div className="relative">
        {activeTooltip === "kakao" && (
          <Tooltip
            text="카카오톡 채널로 이동합니다"
            href={KAKAO_URL}
            external
            onClose={() => setActiveTooltip(null)}
          />
        )}
        <button
          onClick={handleKakaoClick}
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
          style={{ backgroundColor: "#FEE500" }}
          aria-label="카카오톡 상담"
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#191919">
            <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.72 1.8 5.108 4.508 6.453-.198.74-.716 2.68-.82 3.094-.13.518.19.51.399.371.164-.109 2.61-1.772 3.672-2.492.72.1 1.465.153 2.241.153 5.523 0 10-3.463 10-7.579C22 6.463 17.523 3 12 3z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Tooltip({
  text,
  href,
  external,
  onClose,
}: {
  text: string;
  href: string;
  external?: boolean;
  onClose: () => void;
}) {
  return (
    <div className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 animate-fade-in hidden sm:block">
      <div className="relative bg-white rounded-xl shadow-xl px-4 py-3 whitespace-nowrap flex items-center gap-3">
        <span className="text-navy-900 text-sm font-medium">{text}</span>
        <div className="flex items-center gap-1.5">
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="bg-sky-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-sky-600 transition-colors"
            onClick={onClose}
          >
            확인
          </a>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="닫기"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 shadow-sm" />
      </div>
    </div>
  );
}
