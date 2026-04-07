"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PopupBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hiddenDate = localStorage.getItem("popup_hidden_date");
    const today = new Date().toISOString().split("T")[0];
    if (hiddenDate !== today) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  const handleHideToday = () => {
    const today = new Date().toISOString().split("T")[0];
    localStorage.setItem("popup_hidden_date", today);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed z-[9999]"
      style={{ top: 50, left: 50 }}
    >
      <div className="w-[400px] shadow-lg rounded-lg overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full">
          <Image
            src="https://cdn.imweb.me/upload/S20260108b9005a7eb2710/e1268e10989ac.png"
            alt="공지 팝업"
            width={400}
            height={0}
            className="w-full h-auto"
            sizes="400px"
            priority
          />
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between bg-white px-4 py-3 text-sm text-gray-700">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              onChange={handleHideToday}
              className="w-4 h-4 accent-gray-600"
            />
            오늘 하루 보지 않기
          </label>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
